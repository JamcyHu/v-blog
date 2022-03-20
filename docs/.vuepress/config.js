module.exports = {
  title: 'Coder-Monkey',
  description: '~从前端到全栈开发~和码路工人一起学~',
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar')
  },
  head: [
    ['link', {rel: 'icon', href: '/img/icon.png'}],
    ['link', {rel: 'stylesheet', href: '/css/style.css'}],
  ]
}

