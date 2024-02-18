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

        <q-toolbar-title> Monitoring & Evaluation System </q-toolbar-title>

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
              <q-item clickable v-ripple :to="{ name: 'profile' }">
                <q-item-section avatar>
                  <q-img src="~assets/profile.svg" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ authStore.user.Name }}</q-item-label>
                  <q-item-label caption lines="2">{{
                    authStore.user.Email
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <!-- <q-item clickable v-ripple :to="{ name: 'profile' }">
                <q-item-section avatar>
                  <VxIcon
                    iconName="ProfileCircle"
                    class="tw-text-gray-500"
                    :size="22"
                  />
                </q-item-section>

                <q-item-section>Pengaturan Akun</q-item-section>
              </q-item> -->
              <!-- <q-item clickable v-ripple :to="{ name: 'users' }">
                <q-item-section avatar>
                  <VxIcon
                    iconName="Setting2"
                    class="tw-text-gray-500"
                    :size="22"
                  />
                </q-item-section>

                <q-item-section>Administrator</q-item-section>
              </q-item> -->
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

      <q-separator class="tw-mb-3" />

      <div class="tw-flex tw-items-center tw-gap-4 tw-px-4" v-if="loading">
        <q-spinner color="primary" size="2em" />
        <p>Loading menu...</p>
      </div>
      <q-list v-else>
        <template v-if="!is_administrator">
          <EssentialLink
            class="tw-px-8 tw-text-gray-400"
            v-for="link in authStore.menus.filter((e) => e.Code == 'transaksi')"
            :key="link.ID"
            v-bind="link"
          />
          <q-item
            clickable
            class="tw-px-8 tw-text-gray-400"
            @click="toggleAdministrator"
            v-if="
              authStore.menus.filter((e) => e.Code == 'administrator').length >
              0
            "
          >
            <q-item-section avatar>
              <vx-icon iconName="Setting2" :size="24" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Administrator</q-item-label>
            </q-item-section>
          </q-item>
        </template>
        <template v-else>
          <q-item
            clickable
            class="tw-px-2 text-primary"
            @click="toggleAdministrator"
          >
            <q-item-section avatar>
              <vx-icon iconName="ArrowLeft2" :size="24" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Administrator</q-item-label>
            </q-item-section>
          </q-item>

          <essential-link
            class="tw-px-8 tw-text-gray-400"
            v-for="menu in authStore.menus.filter(
              (e) => e.Code == 'administrator'
            )[0].Childs"
            v-bind="menu"
            v-bind:key="menu"
          />
        </template>

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
      <router-view :user="authStore.user" />
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
          <q-btn flat label="Ya" color="negative" no-caps @click="logout" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import VxIcon from "src/components/VxIcon.vue";
import { useAuthStore } from "src/stores/auth";

const menu_administrator = [
  {
    Name: "Pengguna",
    Icon: "Profile2User",
    Url: "users",
  },
  {
    Name: "Group",
    Icon: "Category2",
    Url: "group",
  },
  {
    Name: "Roles",
    Icon: "UserOctagon",
    Url: "roles",
  },
  {
    Name: "Permissions",
    Icon: "GridLock",
    Url: "permissions",
  },
  {
    Name: "Menu",
    Icon: "HambergerMenu",
    Url: "menu",
  },
  {
    Name: "Provinsi",
    Icon: "Map",
    Url: "provinsi",
  },
  {
    Name: "Kabupaten / Kota",
    Icon: "Map1",
    Url: "regencies",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    VxIcon,
  },

  setup() {
    const authStore = useAuthStore();
    const leftDrawerOpen = ref(false);

    return {
      authStore,
      leftDrawerOpen,
      confirm_logout: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      is_administrator: ref(false),

      loading: ref(false),
    };
  },
  mounted() {
    this.is_administrator =
      localStorage.getItem("is_open") == "true" ? true : false;
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.authStore.token = null;
      this.$router.push({ name: "login" });
    },

    toggleAdministrator() {
      this.is_administrator = !this.is_administrator;
      localStorage.setItem("is_open", this.is_administrator);
    },
  },
});
</script>
