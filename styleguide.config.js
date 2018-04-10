const path = require('path');

const projectRootDir = path.join(__dirname, './');
const componentsDir = path.join(projectRootDir, './src/components');

module.exports = {
  title: 'TS Styleguide',
  sections: [
    {
      name: 'Buttons',
      components: path.join(componentsDir, './Buttons/**/[A-Z]*.{ts,tsx}')
    },
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    const dir = path.dirname(componentPath);
    return `import ${name} from '${dir}';`;
  },
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(componentsDir, './ComponentWrapper')
  },
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require(path.join(projectRootDir, './config/webpack.config.dev.js')),
  styleguideDir: path.join(projectRootDir, './build/')
}
