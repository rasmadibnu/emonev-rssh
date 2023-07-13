<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Laporan</div>
    <q-card flat class="tw-mb-6">
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
      <q-card-section>
        <q-markup-table dense flat bordered separator="cell">
          <thead>
            <tr class="text-center">
              <td rowspan="2">No</td>
              <td rowspan="2">Provinsi</td>
              <td rowspan="2">Kabupaten / Kota</td>
              <td colspan="4" class="text-center">
                UPTD Dinas Kesehatan TA 2022 (15 Sub Kegiatan)
              </td>
              <td rowspan="2">Total ATM Provinsi</td>
              <td colspan="4" class="text-center">
                Sumber Lain (CSR, Dana Desa, SKPD Non Dinkes)
              </td>
            </tr>
            <tr class="text-center">
              <td>AIDS</td>
              <td>TBC</td>
              <td>MALARIA</td>
              <td>Total ATM</td>
              <td>AIDS</td>
              <td>TBC</td>
              <td>MALARIA</td>
              <td>Total ATM</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="index in 15" v-bind:key="index">
              <td>{{ index }}</td>
              <td>Bali</td>
              <td>Denpasar</td>
              <td>Rp 1.200.000.000</td>
              <td>Rp 1.200.000.000</td>
              <td>Rp 1.200.000.000</td>
              <td>Rp 1.200.000.000</td>
              <td>Rp 1.200.000.000</td>
              <td>Rp 1.200.000.000</td>
              <td>Rp 1.200.000.000</td>
              <td>Rp 1.200.000.000</td>
              <td>Rp 1.200.000.000</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
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
