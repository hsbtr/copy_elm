const components = require.context("../views", true, /\.vue$/);
const pages = {};

components
  .keys()
  .map(value => components(value))
  .filter(value => value.default)
  .forEach(value => {
    pages[value.default.name] = value.default;
  });
console.log(pages);

export default pages;
