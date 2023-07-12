const routes = [
  {
    path: "/beranda",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/beranda",
        component: () => import("pages/Auth/Beranda.vue"),
        name: "beranda",
      },
      {
        path: "/penginputan",
        component: () => import("pages/Auth/Penginputan.vue"),
        name: "penginputan",
      },
      {
        path: "/laporan",
        component: () => import("pages/Auth/Laporan.vue"),
        name: "laporan",
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
