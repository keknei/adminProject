const route = [
  {
    path: "/",
    name: "layout",
    alias: "/index",
    redirect: "/home",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "首页父级",
      hidden: false, // 在左侧菜单中是否隐藏,true隐藏，false不隐藏
      icon: "House",
      alwaysShow: false // 菜单是否总是显示根菜单，若false则当只有一个子路由时隐藏根菜单，显示子级
    },
    children: [
      {
        path: "/home",
        component: () => import("@/views/base/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled"
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/base/login/index.vue"),
    meta: {
      title: "登录",
      hidden: true, // 在左侧菜单中是否隐藏,true隐藏，false不隐藏
      icon: "Promotion"
    }
  },
  {
    path: "/screen",
    component: () => import("@/views/async/screen/index.vue"),
    name: "Screen",
    meta: {
      title: "数据大屏",
      hidden: false, // 在左侧菜单中是否隐藏,true隐藏，false不隐藏
      icon: "Platform"
    }
  },
  {
    path: "/acl",
    component: () => import("@/layout/index.vue"),
    name: "Acl",
    redirect: "/acl/user",
    meta: {
      title: "权限管理",
      hidden: false, // 在左侧菜单中是否隐藏,true隐藏，false不隐藏
      icon: "Lock"
    },
    children: [
      {
        path: "/acl/user",
        name: "User",
        component: () => import("@/views/async/acl/user/index.vue"),
        meta: {
          title: "用户管理",
          hidden: false,
          icon: "User"
        }
      },
      {
        path: "/acl/role",
        name: "Role",
        component: () => import("@/views/async/acl/role/index.vue"),
        meta: {
          title: "角色管理",
          hidden: false,
          icon: "UserFilled"
        }
      },
      {
        path: "/acl/permission",
        name: "Permission",
        component: () => import("@/views/async/acl/permission/index.vue"),
        meta: {
          title: "菜单管理",
          hidden: false,
          icon: "Monitor"
        }
      }
    ]
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("@/layout/index.vue"),
    redirect: "/product/trademark",
    meta: {
      title: "商品管理",
      icon: "Goods",
      hidden: false
    },
    children: [
      {
        path: "/product/trademark",
        name: "Trademark",
        component: () => import("@/views/async/product/trademark/index.vue"),
        meta: {
          title: "品牌管理",
          icon: "ShoppingCartFull",
          hidden: false
        }
      },
      {
        path: "/product/attr",
        name: "Attr",
        component: () => import("@/views/async/product/attr/index.vue"),
        meta: {
          title: "属性管理",
          icon: "ChromeFilled",
          hidden: false
        }
      },
      {
        path: "/product/spu",
        name: "Spu",
        component: () => import("@/views/async/product/spu/index.vue"),
        meta: {
          title: "SPU管理",
          icon: "Calendar",
          hidden: false
        }
      },
      {
        path: "/product/sku",
        name: "Sku",
        component: () => import("@/views/async/product/sku/index.vue"),
        meta: {
          title: "SKU管理",
          icon: "Orange",
          hidden: false
        }
      }
    ]
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404/index.vue"),
    meta: {
      title: "404",
      hidden: true, // 在左侧菜单中是否隐藏,true隐藏，false不隐藏
      icon: "DocumentDelete"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "任意路由",
      hidden: true, // 在左侧菜单中是否隐藏,true隐藏，false不隐藏
      icon: "DataLine"
    }
  }
]
export default route
