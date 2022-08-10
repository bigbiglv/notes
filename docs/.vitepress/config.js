  export default {
  title:'BBK',
  lastUpdated: true, //最近更新時間
  themeConfig: {
    lastUpdatedText: '更新时间', // 最近更新時間文字
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
      text: 'vue3', 
      collapsible: true,
      collapsed: true,
      items: [
        { text: '组合式api和选项式api', link: '/vue3/组合式api和选项式api' },
        { text: '组件传参', link: '/vue3/组件传参' },
        { text: 'ref和reactive原理', link: '/vue3/ref和reactive原理' },
        { text: '计算属性', link: '/vue3/计算属性' },
        { text: '生命周期', link: '/vue3/生命周期' },
        { text: '数据监听', link: '/vue3/数据监听' },
        { text: '自定义hooks', link: '/vue3/自定义hooks' },
        { text: '自定义ref', link: '/vue3/自定义ref' },
        { text: '响应式数据处理', link: '/vue3/响应式数据处理' },
        { text: '提取响应式对象属性', link: '/vue3/提取响应式对象属性' },
        { text: '组件异步引入', link: '/vue3/组件异步引入' },
        { text: '列表过渡动画', link: '/vue3/列表过渡动画' },
        { text: 'teleport', link: '/vue3/teleport' },
        { text: 'vue-router@4', link: '/vue3/vue-router@4' },
        { text: '与vue2比较', link: '/vue3/与vue2比较' },
        { text: '问题合集', link: '/vue3/问题合集' },
      ]
    },
    {
      text: 'typescript',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '基础配置', link: '/typescript/基础配置' },
        { text: '类型别名type', link: '/typescript/类型别名type' },
        { text: '联合类型', link: '/typescript/联合类型' },
        { text: '类型推断', link: '/typescript/类型推断' },
        { text: '接口inteface', link: '/typescript/接口inteface' },
        { text: '声明类型', link: '/typescript/声明类型' },
        { text: 'class', link: '/typescript/class' },
        { text: 'tsconfigJson', link: '/typescript/tsconfigJson' },
      ]
    },
    {
      text: 'pinia',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '安装', link: '/pinia/安装' },
        { text: 'state', link: '/pinia/state' },
        { text: 'actions', link: '/pinia/actions' },
        { text: 'getter', link: '/pinia/getter' },
        { text: '修改、重置和监听', link: '/pinia/修改、重置和监听' },
        { text: '数据响应式', link: '/pinia/数据响应式' },
      ]
    },
    {
      text: 'svelte',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '基本语法', link: '/svelte/基本语法' },
        { text: '组件传参', link: '/svelte/组件传参' },
        { text: '数据响应式', link: '/svelte/数据响应式' },
        { text: '双向绑定', link: '/svelte/双向绑定' },
        { text: '计算属性', link: '/svelte/计算属性' },
        { text: '数据监听', link: '/svelte/数据监听' },
        { text: '富文本', link: '/svelte/富文本' },
      ]
    },
    {
      text: 'git',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '版本号', link: '/git/版本号' },
        { text: '版本回退', link: '/git/版本回退' },
        { text: '故障分支', link: '/git/故障分支' },
        { text: '合并分支', link: '/git/合并分支' },
        { text: 'stash', link: '/git/stash' },
      ]
    },
    {
      text: 'npm',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '安装和卸载', link: '/npm/安装和卸载' },
        { text: '发布和删除', link: '/npm/发布和删除' },
        { text: 'pageageJson', link: '/npm/packageJson' },
      ]
    },
    {
      text:'markdown',
      collapsible: true,
      collapsed: true,
      items:[
        { text: '基本语法', link: '/markdown/基本语法' }, 
      ]
    }
  ]
}