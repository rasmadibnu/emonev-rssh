<template>
  <q-page class="tw-p-6">
    <div class="tw-flex tw-items-center tw-mb-4">
      <q-btn
        flat
        dense
        class="tw-mr-3"
        @click="LeftMenu = !LeftMenu"
        v-if="!$q.platform.is.mobile"
      >
        <vx-icon :iconName="LeftMenu ? 'HambergerMenu' : 'Menu'" :size="24" />
      </q-btn>
      <q-btn v-else flat dense class="tw-mr-3">
        <vx-icon :iconName="'HambergerMenu'" :size="24" />
        <q-menu>
          <q-list>
            <essential-link
              class="tw-px-4"
              v-for="menu in menus"
              v-bind="menu"
              v-bind:key="menu"
            />
          </q-list>
        </q-menu>
      </q-btn>
      <div class="tw-text-3xl">Administrator</div>
    </div>
    <div class="tw-flex tw-gap-4">
      <Transition name="slide-fade">
        <q-card class="tw-w-[20%]" flat v-if="LeftMenu">
          <q-list>
            <essential-link
              class="tw-px-4"
              v-for="menu in menus"
              v-bind="menu"
              v-bind:key="menu"
            />
          </q-list>
        </q-card>
      </Transition>
      <q-card :class="LeftMenu ? 'tw-w-[80%]' : 'tw-w-[100%]'" flat>
        <q-card-section>
          <router-view :user="user" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "src/components/EssentialLink.vue";
import VxIcon from "src/components/VxIcon.vue";
export default defineComponent({
  props: ["user"],
  components: {
    EssentialLink,
    VxIcon,
  },
  setup() {
    const menus = [
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

    return {
      LeftMenu: ref(true),
      menus,
    };
  },
  beforeCreate() {
    if (this.$q.platform.is.mobile) {
      this.LeftMenu = false;
    }
  },
});
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
}
</style>
