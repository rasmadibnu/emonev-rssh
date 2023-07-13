<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Penginputan</div>
    <q-card flat>
      <q-card-section class="text-primary tw-font-bold">
        Anggaran APBD Kab/Kota
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-markup-table flat separator="none">
          <tbody>
            <template v-for="(inp, index) in input" v-bind:key="inp">
              <tr class="q-tr--no-hover">
                <td :class="inp.class">{{ inp.code }}</td>
                <td :class="inp.class">{{ inp.label }}</td>
                <td class="md:tw-block tw-hidden">
                  <q-select
                    dense
                    filled
                    v-if="inp.type == 'select'"
                    v-model="inp.value"
                    :label="inp.placeholder"
                    :options="inp.options"
                  ></q-select>
                  <q-input
                    v-else-if="inp.type == 'text'"
                    dense
                    filled
                    mask="###.###.###.###.###.###.###.###.###.###"
                    reverse-fill-mask
                    unmasked-value
                    prefix="Rp"
                    v-model="inp.value"
                  />
                </td>
              </tr>
              <tr class="tw-table-row md:tw-hidden">
                <td colspan="100%">
                  <q-select
                    dense
                    filled
                    v-if="inp.type == 'select'"
                    v-model="inp.value"
                    :label="inp.placeholder"
                    :options="inp.options"
                  ></q-select>
                  <q-input
                    v-else-if="inp.type == 'text'"
                    dense
                    filled
                    mask="###.###.###.###.###.###.###.###.###.###"
                    reverse-fill-mask
                    unmasked-value
                    prefix="Rp"
                    v-model="inp.value"
                  />
                </td>
              </tr>
              <tr class="q-tr--no-hover" v-if="index == 1">
                <td colspan="100%">
                  <q-separator class="tw-w-full" />
                </td>
              </tr>
            </template>
          </tbody>
        </q-markup-table>
        <div class="tw-flex tw-justify-center tw-mt-4">
          <q-btn color="primary" unelevated label="Simpan" no-caps />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const input = [
      {
        code: "-",
        label: "Plih Tahun Anggaran",
        class: "",
        placeholder: "Pilih Tahun",
        value: null,
        options: ["2023", "2022", "2021", "2020", "2019"],
        type: "select",
      },
      {
        code: "-",
        label: "Pilih Kabupaten Kota",
        class: "",
        placeholder: "Pilih Kabupaten Kota",
        value: null,
        options: ["Tangerang", "Bekasi", "Depok", "Bogor", "Cirebon"],
        type: "select",
      },
      {
        code: "0.00",
        label: "Total Belanja APBD Kab/Kota ",
        class: "tw-font-bold",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "0.00.00.2.00.00.01",
        label: "Total Belanja ATM pada Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "0.00.00.2.00.00.0A",
        label: "Belanja Aids pada Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "0.00.00.2.00.00.0T",
        label: "Belanja Tuberkulosis pada Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "0.00.00.2.00.00.0M",
        label: "Belanja Malaria pada Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.00",
        label: "Total Belanja Melalui SKPD & UPTD Kesehatan APBD Kab/Kota",
        class: "tw-font-bold",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.00.00.2.00.00.01",
        label: "Total Belanja ATM pada OPD Kesehatan Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.00.00.2.00.00.0A",
        label: "Belanja Aids pada OPD Kesehatan Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.00.00.2.00.00.0M",
        label: "Belanja Malaria pada OPD Kesehatan Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02",
        label: "Total Belanja ATM Pada Masing-masing Program",
        class: "tw-font-bold",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.01",
        label: "Program Penunjang Urusan Pemda Kab/Kota",
        class: "tw-font-bold",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.01.00.00.00.01",
        label:
          "Total Belanja ATM pada OPD Kesehatan Kabupaten/Kota, Pada Program ini",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.01.00.00.00.0A",
        label: "Belanja Aids pada OPD Kesehatan Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.01.00.00.00.0T",
        label: "Belanja Tuberkulosis pada OPD Kesehatan Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.01.00.00.00.0M",
        label: "Belanja Malaria pada OPD Kesehatan Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.02",
        label: "Program Pemenuhan UKP & UKM",
        class: "tw-font-bold",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.02.00.00.00.01",
        label:
          "Total Belanja ATM pada OPD Kesehatan KAB/KOTA, Pada Program ini",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.02.00.00.00.0A",
        label: "Belanja Aids pada OPD Kesehatan Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.02.00.00.00.0T",
        label: "Belanja Tuberkulosis pada OPD Kesehatan Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.02.00.00.00.0M",
        label: "Belanja Malaria pada OPD Kesehatan Kab/Kota",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.03",
        label: "Program Peningkatan Kapasitas Sumber Data manusia Kesehatan",
        class: "tw-font-bold",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.04",
        label: "Program Sediaan Farmasi, Alat Kesehatan dan Makanan Minuman",
        class: "tw-font-bold",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.05",
        label: "Program Pemberdayaan Masyarakat bidang Kesehatan",
        class: "tw-font-bold",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.05.00.00.00.01",
        label:
          "Total Belanja ATM pada OPD Kesehatan KABUPATEN/KOTA , Pada Program ini",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.05.00.00.00.0A",
        label: "Belanja Aids pada OPD Kesehatan KAB/KOTA",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.05.00.00.00.0T",
        label: "Belanja Tuberkulosis pada OPD Kesehatan KAB/KOTA",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
      {
        code: "1.02.05.00.00.00.0M",
        label: "Belanja Malaria pada OPD Kesehatan KAB/KOTA",
        class: "",
        placeholder: "",
        value: null,
        options: [],
        type: "text",
      },
    ];
    return {
      input: ref(input),
    };
  },
});
</script>
