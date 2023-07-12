<template>
  <q-page class="tw-p-8 tw-space-y-4">
    <div class="tw-text-3xl">Laporan</div>
    <q-card flat>
      <q-card-section class="text-primary tw-font-bold">
        Informasi
      </q-card-section>
      <q-card-section>
        <div class="tw-flex tw-items-center tw-space-x-2">
          Tahun Anggaran <span> :</span>
          <q-select dense :options="['2023', '2022', '2021']" v-model="tahun" />
        </div>
        <div class="tw-flex tw-items-center tw-space-x-2">
          Provinsi <span> :</span>
          <q-select
            dense
            :options="['Banten', 'Jakarta', 'Riau']"
            v-model="provinsi"
          />
        </div>
      </q-card-section>
    </q-card>
    <q-card flat>
      <q-card-section class="text-primary tw-font-bold">
        Rekapitulasi Belanja ATM
      </q-card-section>
      <q-card-section> </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      tahun: ref("2023"),
      provinsi: ref("Banten"),
    };
  },
});
</script>
