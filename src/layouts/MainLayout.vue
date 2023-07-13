<template>
  <q-layout view="lHh Lpr lFf" class="tw-font-['Sen']">
    <q-header reveal>
      <q-toolbar class="tw-py-2.5">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Electronic Monitoring & Evaluation System
        </q-toolbar-title>

        <q-btn
          dense
          flat
          color="white"
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <router-link to="/">
        <div class="tw-px-8 tw-py-2">
          <div class="tw-text-3xl tw-font-bold text-primary">
            <span class="text-secondary">e</span>Monev
          </div>
        </div>
      </router-link>

      <q-list>
        <q-separator class="tw-mb-3" />

        <EssentialLink
          class="tw-px-8 tw-text-gray-400"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-item
          clickable
          @click="confirm_logout = true"
          class="tw-px-8 text-negative"
        >
          <q-item-section avatar>
            <vx-icon iconName="Logout" :size="24" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="tw-bg-gray-50">
      <router-view />
    </q-page-container>
    <q-dialog v-model="confirm_logout">
      <q-card style="width: 400px">
        <q-card-section>
          <div class="text-h6 tw-flex text-negative tw-items-center">
            <VxIcon iconName="Logout" class="tw-mr-2" :size="22" />
            Logout
          </div>
        </q-card-section>

        <q-card-section class="q-py-none">
          <div class="tw-mb-3">Anda yakin ingin keluar dari aplikasi ini?</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Tidak" no-caps v-close-popup />
          <q-btn
            flat
            label="Ya"
            color="negative"
            no-caps
            :to="{ name: 'login' }"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import VxIcon from "src/components/VxIcon.vue";

const linksList = [
  {
    title: "Beranda",
    icon: "Activity",
    link: "beranda",
  },
  {
    title: "Penginputan",
    icon: "Additem",
    link: "penginputan",
  },
  {
    title: "Laporan",
    icon: "Chart",
    link: "laporan",
  },
  {
    title: "Cetak Laporan",
    icon: "Printer",
    link: "#",
  },
  {
    title: "Management",
    icon: "Setting4",
    link: "#",
    childs: [
      {
        title: "Pengguna",
        icon: "Profile2User",
        link: "#",
      },
      {
        title: "Group",
        icon: "Category2",
        link: "#",
      },
      {
        title: "Role",
        icon: "UserOctagon",
        link: "#",
      },
      {
        title: "Provinsi",
        icon: "Map",
        link: "#",
      },
      {
        title: "Kabupaten / Kota",
        icon: "Map1",
        link: "#",
      },
    ],
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    VxIcon,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      confirm_logout: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
