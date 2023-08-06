import { useAuthStore } from "src/stores/auth";

const requireAuth = (to, from, next) => {
  var token =
    localStorage.getItem("token") == null
      ? null
      : JSON.parse(atob(localStorage.getItem("token").split(".")[1]));
  if (token === null) {
    next("/login");
  }
  const auth = useAuthStore();
  // if (auth.checkMenu(to.name)) {
  //   next();
  // } else {
  //   next("/not-found");
  // }
  next();
};

const routes = [
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter: requireAuth,
    children: [
      {
        path: "beranda",
        component: () => import("pages/Auth/Beranda.vue"),
        name: "beranda",
      },

      {
        path: "profile",
        component: () => import("pages/Auth/Profile.vue"),
        name: "profile",
      },

      // Penginputan
      {
        path: "penginputan",
        component: () => import("pages/Auth/Penginputan/Index.vue"),
        name: "penginputan-index",
      },
      {
        path: "penginputan/create",
        component: () => import("pages/Auth/Penginputan/Create.vue"),
        name: "penginputan-create",
      },
      {
        path: "penginputan/:id/edit",
        component: () => import("pages/Auth/Penginputan/Edit.vue"),
        name: "penginputan-edit",
      },

      {
        path: "laporan",
        component: () => import("src/pages/Auth/Laporan.vue"),
        name: "laporan",
      },

      // Adminsitrator

      {
        path: "users",
        component: () => import("pages/Auth/Administrator/Users.vue"),
        name: "users",
      },
      {
        path: "roles",
        component: () => import("pages/Auth/Administrator/Roles.vue"),
        name: "roles",
      },
      {
        path: "permissions",
        component: () => import("pages/Auth/Administrator/Permissions.vue"),
        name: "permissions",
      },
      {
        path: "group",
        component: () => import("pages/Auth/Administrator/Group.vue"),
        name: "group",
      },
      {
        path: "menu",
        component: () => import("pages/Auth/Administrator/Menu.vue"),
        name: "menu",
      },
      {
        path: "provinsi",
        component: () => import("pages/Auth/Administrator/Provinsi.vue"),
        name: "provinsi",
      },
      {
        path: "regency-cities",
        component: () => import("pages/Auth/Administrator/Regencies.vue"),
        name: "regencies",
      },
    ],
  },

  {
    path: "/",
    name: "dashboard",
    component: () => import("pages/Index.vue"),
  },

  {
    path: "/login",
    name: "login",
    component: () => import("pages/Login.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
