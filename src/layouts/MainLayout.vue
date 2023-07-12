<template>
  <q-layout view="lHh Lpr lFf" class="tw-font-['Sen']">
    <q-header reveal>
      <q-toolbar class="tw-py-4">
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
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <q-list>
        <router-link to="/">
          <q-item-label header class="tw-px-8">
            <div class="tw-text-2xl tw-font-bold">
              <span class="text-secondary">e</span>Monev
            </div>
          </q-item-label>
        </router-link>

        <q-separator class="tw-mb-6" />

        <EssentialLink
          class="tw-px-8 tw-text-gray-400"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="tw-bg-gray-50">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

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
    link: "https://forum.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
