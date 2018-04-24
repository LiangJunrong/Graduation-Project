import Vue from 'vue'
import Router from 'vue-router'

//加载首页(1)
//import Index from '@/pages/Index'

//加载单页(2)
// import NotFound from '@/pages/others/NotFound'
// import About from '@/pages/others/About'

//加载华懒组织模块(7)
// import MyOrgIndex from '@/pages/organization/MyOrgIndex'
// import AddTopic from '@/pages/organization/AddTopic'
// import TopicComment from '@/pages/organization/TopicComment'
// import OrgIndex from '@/pages/organization/OrgIndex'
// import AddOrg from '@/pages/organization/AddOrg'
// import OrgDetail from '@/pages/organization/OrgDetail'
// import MemberList from '@/pages/organization/MemberList'

//加载用户模块(5)
// import UserIndex from '@/pages/user/UserIndex'
// import ChangeUserInfo from '@/pages/user/ChangeUserInfo'
// import ChangeUserPassword from '@/pages/user/ChangeUserPassword'
// import Login from '@/pages/user/Login'
// import Register from '@/pages/user/Register'

//加载二手市场(5)
// import MktIndex from '@/pages/market/MktIndex'
// import AddNewGoods from '@/pages/market/AddNewGoods'
// import MyCollection from '@/pages/market/MyCollection'
// import GoodDetail from '@/pages/market/GoodDetail'
// import MyGoods from '@/pages/market/MyGoods'

//加载联系人(3)
// import ContactsIndex from '@/pages/contacts/ContactsIndex'
// import ContactsContent from '@/pages/contacts/ContactsContent'
// import ContactsDetail from '@/pages/contacts/ContactsDetail'

Vue.use(Router)

const router = new Router({
  //将路由#修改成/
  mode: 'history',
  routes: [
    //加载首页路由
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/pages/Index'], resolve)
    },

    //加载单页路由
    {
      path: '*',
      name: 'NotFound',
      component: resolve => require(['@/pages/others/NotFound'], resolve)
    },
    {
      path: '/About',
      name: 'About',
      component: resolve => require(['@/pages/others/About'], resolve)
    },
    {
      path: '/ToDoList',
      name: 'ToDoList',
      component: resolve => require(['@/pages/others/ToDoList'], resolve)
    },

    //加载华懒组织模块路由
    {
      path: '/OrgIndex',
      name: 'OrgIndex',
      component: resolve => require(['@/pages/organization/OrgIndex'], resolve)
    },
    {
      path: '/AddOrg',
      name: 'AddOrg',
      component: resolve => require(['@/pages/organization/AddOrg'], resolve),
    },
    {
      path: '/OrgDetail',
      name: 'OrgDetail',
      component: resolve => require(['@/pages/organization/OrgDetail'], resolve),
    },
    {
      path: '/MemberList',
      name: 'MemberList',
      component: resolve => require(['@/pages/organization/MemberList'], resolve)
    },
    {
      path: '/MyOrgIndex',
      name: 'MyOrgIndex',
      component: resolve => require(['@/pages/organization/MyOrgIndex'], resolve)
    },
    {
      path: '/AddTopic',
      name: 'AddTopic',
      component: resolve => require(['@/pages/organization/AddTopic'], resolve)
    },
    {
      path: '/TopicComment',
      name: 'TopicComment',
      component: resolve => require(['@/pages/organization/TopicComment'], resolve)
    },

    //加载用户模块路由
    {
      path: '/UserIndex',
      name: 'UserIndex',
      component: resolve => require(['@/pages/user/UserIndex'], resolve)
    },
    {
      path: '/ChangeUserInfo',
      name: 'ChangeUserInfo',
      component: resolve => require(['@/pages/user/ChangeUserInfo'], resolve)
    },
    {
      path: '/ChangeUserPassword',
      name: 'ChangeUserPassword',
      component: resolve => require(['@/pages/user/ChangeUserPassword'], resolve)
    },
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['@/pages/user/Login'], resolve)
    },
    {
      path: '/Register',
      name: 'Register',
      component: resolve => require(['@/pages/user/Register'], resolve)
    },

    //加载二手市场模块路由
    {
      path: '/MktIndex',
      name: 'MktIndex',
      component: resolve => require(['@/pages/market/MktIndex'], resolve)
    },
    {
      path: '/AddNewGoods',
      name: 'AddNewGoods',
      component: resolve => require(['@/pages/market/AddNewGoods'], resolve)
    },
    {
      path: '/MyCollection',
      name: 'MyCollection',
      component: resolve => require(['@/pages/market/MyCollection'], resolve)
    },
    {
      path: '/GoodDetail',
      name: 'GoodDetail',
      component: resolve => require(['@/pages/market/GoodDetail'], resolve)
    },
    {
      path: '/MyGoods',
      name: 'MyGoods',
      component: resolve => require(['@/pages/market/MyGoods'], resolve)
    },

    //加载联系人模块路由
    {
      path: '/ContactsIndex',
      name: 'ContactsIndex',
      component: resolve => require(['@/pages/contacts/ContactsIndex'], resolve)
    },
    {
      path: '/ContactsContent',
      name: 'ContactsContent',
      component: resolve => require(['@/pages/contacts/ContactsContent'], resolve)
    },
    {
      path: '/ContactsDetail',
      name: 'ContactsDetail',
      component: resolve => require(['@/pages/contacts/ContactsDetail'], resolve)
    },

    //加载游戏模块路由
    {
      path: '/GameIndex',
      name: 'GameIndex',
      component: resolve => require(['@/pages/game/GameIndex'], resolve)
    },
    {
      path: '/GameMagicCube',
      name: 'GameMagicCube',
      component: resolve => require(['@/pages/game/GameMagicCube'], resolve)
    },
    {
      path: '/GameGoBang',
      name: 'GameGoBang',
      component: resolve => require(['@/pages/game/GameGoBang'], resolve)
    },

  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  //console.log('导航守卫(navigation-guards)');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  const nextRoute = ['MyOrgIndex', 'AddTopic', 'TopicComment', 'OrgIndex', 'AddOrg', 'OrgDetail', 'MemberList', 'UserIndex', 'ChangeUserInfo', 'ChangeUserPassword', 'MktIndex', 'AddNewGoods', 'MyCollection', 'GoodDetail', 'MyGoods', 'ContactsIndex', 'ContactsContent', 'ContactsDetail'];

  const userId = sessionStorage.getItem("userId"); // 是否登录：session短期存储
  // const userId = localStorage.getItem('userId'); // 是否登录：localstorage长期存储
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (!userId) {
    if (nextRoute.indexOf(to.name) >= 0) {
      router.push({
        name: 'Login'
      })
      return false;
    }
  }
  // 已登录状态；当路由到login时，跳转至Index 
  if (userId) {
    if (to.name === 'Login') {
      router.push({
        name: 'Index'
      });
      return false;
    }
  }
  next();
});

export default router;
