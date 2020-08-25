module.exports = {
    title: 'PotatoUI',
    base: '/potato-ui/',
    description: 'another lightweight ui toolkit for Vue.js 2.X',
    port: 8083, 
    themeConfig: {
      nav: [
        { text: '主页', link: '/' },
        { text: '组件', link: '/component/guide/intro' },
        { text: '主题', link: '/theme/' },
        // { text: 'External', link: 'https://google.com' },
      ],
      sidebar: {
        '/component/': [
          {
            title: '开发指南',
            collapsable: false,
            children: [
              'guide/intro',
              'guide/guide'
            ]
          },
          {
            title: '基础组件',
            collapsable: false,
            children: [
              'basic/button',
            ]
          },
        ]
      }
    }
  }