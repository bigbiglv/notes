export default {
  title:'BBK',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bigbiglv' }
    ],
    sidebar: getSidebar(),
    nav: getNav()
  }
}

function getNav(){
  return [
    { text: 'vue3', link: '/vue3' },
    { text: 'git', link: '/git' },
    { text: 'markdown', link: '/markdown/基本语法' }
  ]
}

function getSidebar() {
  return [
    {
      text:'markdown',
      collapsible: true,
      items:[
        { text: '基本语法', link: '/markdown/基本语法' },
      ]
    },
    {
      text: 'vue3',
      collapsible: true,
      items: [
        { text: '计算属性', link: '/vue3/计算属性' },
        { text: '列表过渡动画', link: '/vue3/列表过渡动画' },
        { text: '生命周期', link: '/vue3/生命周期' },
        { text: '数据监听', link: '/vue3/数据监听' },
        { text: '提取响应式数据属性', link: '/vue3/提取响应式数据属性' },
        { text: '问题合集', link: '/vue3/问题合集' },
        { text: '响应式数据处理', link: '/vue3/响应式数据处理' },
        { text: '与vue2比较', link: '/vue3/与vue2比较' },
        { text: '自定义hooks', link: '/vue3/自定义hooks' },
        { text: '自定义ref', link: '/vue3/自定义ref' },
        { text: '组合式api和选项式api', link: '/vue3/组合式api和选项式api' },
        { text: '组件传参', link: '/vue3/组件传参' },
        { text: '组件异步引入', link: '/vue3/组件异步引入' },
        { text: 'ref和reactive原理', link: '/vue3/ref和reactive原理' },
        { text: 'teleport', link: '/vue3/teleport' },
        { text: 'vue-router@4', link: '/vue3/vue-router@4' },
      ]
    },
    {
      text: 'git',
      collapsible: true,
      items: [
        { text: '版本号', link: '/vue3/版本号' },
        { text: '版本回退', link: '/vue3/版本回退' },
        { text: '故障分支', link: '/vue3/故障分支' },
        { text: '合并分支', link: '/vue3/合并分支' },
        { text: 'stash', link: '/vue3/stash' },
      ]
    }
  ]
}