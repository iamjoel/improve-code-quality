const sidebar = [
  {
    text: '概览',
    link: '/',
    items: [
      {
        text: '概览',
        link: '/',
      }
    ]
  },
  {
    text: '度量',
    items: [
      {
        text: '关于度量',
        link: '/measure/',
      }
    ]
  }
]
export default {
  title: '提升代码质量',
  description: '提升代码质量的一些方法',
  base: '/improve-code-quality/dist', // 部署站点的基础路径
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/iamjoel/improve-code-quality' }
    ],
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Joel Jin'
    }
  }
}