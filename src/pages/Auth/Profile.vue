<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Pengaturan Akun</div>
    <q-card flat>
      <q-card-section class="text-primary tw-font-bold">
        Informasi Personal</q-card-section
      >
      <q-card-section
        class="q-pt-none tw-grid md:tw-grid-cols-4 tw-grid-cols-1 tw-items-center md:tw-gap-8 tw-gap-2"
      >
        <div>Nama Lengkap</div>
        <q-input filled dense />
        <div>Provinsi</div>
        <q-input filled dense />
        <div>Alamat E-Mail</div>
        <q-input filled dense />
        <div>Password</div>
        <q-input filled dense />
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          class="tw-my-4"
          unelevated
          color="primary"
          label="Simpan"
          no-caps
          padding="sm xl"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>
