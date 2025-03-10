import config from '@fluentui/scripts/config';
import fs from 'fs-extra';
import path from 'path';

import {
  addResolutionPathsForProjectPackages,
  packProjectPackages,
  performBrowserTest,
  prepareTempDirs,
  log,
  shEcho,
} from '@fluentui/scripts/projects-test';

export async function rollup() {
  const logger = log('test:projects:rollup');

  const scaffoldPath = config.paths.withRootAt(path.resolve(__dirname, '../assets/rollup'));
  const tempPaths = prepareTempDirs('project-rollup-');
  logger(`✔️ Temporary directories created under ${tempPaths.root}`);

  logger('STEP 1. Add dependencies to test project');

  const rollupVersion = '2.7.3';
  const dependencies = [
    `rollup@${rollupVersion}`,
    'rollup-plugin-replace',
    'rollup-plugin-commonjs',
    'rollup-plugin-node-resolve',
    'rollup-plugin-json',
    'react@17',
    'react-dom@17',
  ].join(' ');

  await shEcho(`yarn add ${dependencies}`, tempPaths.testApp);
  logger(`✔️ Dependencies were installed`);

  logger('STEP 2. Add Fluent UI dependency to test project');

  const packedPackages = await packProjectPackages(logger, config.paths.base(), ['@fluentui/react-northstar']);
  await addResolutionPathsForProjectPackages(tempPaths.testApp);

  await shEcho(`yarn add ${packedPackages['@fluentui/react-northstar']}`, tempPaths.testApp);
  logger(`✔️ Fluent UI packages were added to dependencies`);

  logger('STEP 3. Copy scaffold files to test project');
  fs.copyFileSync(scaffoldPath('app.js'), path.resolve(tempPaths.testApp, 'app.js'));
  fs.copyFileSync(scaffoldPath('rollup.config.js'), path.resolve(tempPaths.testApp, 'rollup.config.js'));
  fs.copyFileSync(scaffoldPath('index.html'), path.resolve(tempPaths.testApp, 'index.html'));
  logger(`✔️ Source and bundler's config were created`);

  logger('STEP 4. Build test project');
  await shEcho(`yarn rollup -c`, tempPaths.testApp);
  logger(`✔️ Example project was successfully built: ${tempPaths.testApp}`);

  logger('STEP 5. Load the test app in the browser');
  await performBrowserTest(tempPaths.testApp);
  logger(`✔️ Browser test was passed`);
}
