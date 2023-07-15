<template>
  <q-layout view="lHh Lpr lFf">
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
          v-if="!$q.platform.is.mobile"
          @click="$q.fullscreen.toggle()"
        >
          <q-avatar size="sm">
            <q-icon
              :name="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
            />
          </q-avatar>
        </q-btn>
        <q-btn dense flat>
          <q-avatar size="sm">
            <q-img src="~assets/profile.svg" />
          </q-avatar>
          <q-menu class="tw-shadow-none tw-border tw-rounded-lg">
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-img src="~assets/profile.svg" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>Richard Petersen</q-item-label>
                  <q-item-label caption lines="2"
                    >richard@simadinkes.org</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple :to="{ name: 'profile' }">
                <q-item-section avatar>
                  <VxIcon
                    iconName="ProfileCircle"
                    class="tw-text-gray-500"
                    :size="22"
                  />
                </q-item-section>

                <q-item-section>Pengaturan Akun</q-item-section>
              </q-item>
              <q-item clickable v-ripple :to="{ name: 'users' }">
                <q-item-section avatar>
                  <VxIcon
                    iconName="Setting2"
                    class="tw-text-gray-500"
                    :size="22"
                  />
                </q-item-section>

                <q-item-section>Administrator</q-item-section>
              </q-item>
              <q-separator />
              <q-item
                clickable
                v-ripple
                @click="confirm_logout = true"
                class="text-negative"
              >
                <q-item-section avatar>
                  <VxIcon iconName="Logout" :size="22" />
                </q-item-section>

                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
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

        <!-- <q-item
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
        </q-item> -->
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
  // {
  //   title: "Management",
  //   icon: "Setting4",
  //   link: "#",
  //   childs: [
  //     {
  //       title: "Pengguna",
  //       icon: "Profile2User",
  //       link: "#",
  //     },
  //     {
  //       title: "Group",
  //       icon: "Category2",
  //       link: "#",
  //     },
  //     {
  //       title: "Role",
  //       icon: "UserOctagon",
  //       link: "#",
  //     },
  //     {
  //       title: "Provinsi",
  //       icon: "Map",
  //       link: "#",
  //     },
  //     {
  //       title: "Kabupaten / Kota",
  //       icon: "Map1",
  //       link: "#",
  //     },
  //   ],
  // },
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
