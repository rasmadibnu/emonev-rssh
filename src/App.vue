<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { useAuthStore } from "./stores/auth";

export default defineComponent({
  name: "App",
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
    };
  },
  mounted() {
    if (this.authStore.token != null) {
      this.authStore.getUser();
    }
  },
});
</script>
