const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "woche",
        component: () => import("pages/WeekView.vue"),
      },
      {
        path: "/monat",
        name: "monat",
        component: () => import("pages/MonatView.vue"),
      },
      {
        path: "/tag",
        name: "tag",
        component: () => import("pages/TagView.vue"),
      },
      {
        path: "/agenda",
        name: "agenda",
        component: () => import("pages/AgendaView.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
