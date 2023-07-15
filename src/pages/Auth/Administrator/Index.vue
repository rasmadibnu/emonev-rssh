<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Administrator</div>
    <div class="tw-grid tw-grid-cols-4 tw-gap-4">
      <q-card class="tw-col-span-1" flat>
        <essential-link
          class="tw-px-4"
          v-for="menu in menus"
          v-bind="menu"
          v-bind:key="menu"
        />
      </q-card>
      <q-card class="tw-col-span-3" flat>
        <q-card-section>
          <router-view />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import EssentialLink from "src/components/EssentialLink.vue";
export default defineComponent({
  components: {
    EssentialLink,
  },
  setup() {
    const menus = [
      {
        title: "Pengguna",
        icon: "Profile2User",
        link: "users",
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
    ];
    return {
      menus,
    };
  },
});
</script>
