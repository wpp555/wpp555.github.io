const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  base: "/docs/",
  title: '一叶知秋',
  description: '一叶知秋的文档, vuepress 文档',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '上次更新',
    // repo: 'shanyuhai123/documents',
    repo: 'wpp555/ceshi',
    editLinks: false,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    nav: navConf,
    algolia: {
      appId: 'M698VCXCJN',
      apiKey: '8b552055fb68ffc808bfbd3f98a1dbe2',
      indexName: 'shanyuhai_documents',
      algoliaOptions: {
        hitsPerPage: 10,
        facetFilters: ""
      }
    }
  },
}