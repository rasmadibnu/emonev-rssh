<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Beranda</div>
    <q-card flat>
      <q-card-section class="text-primary tw-font-bold">
        Informasi</q-card-section
      >
      <q-card-section class="q-pt-none">
        Selamat Datang, {{ user?.Name }}!
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["user"],
  name: "IndexPage",
});
</script>
