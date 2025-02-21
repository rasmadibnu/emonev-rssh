<template>
  <div class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8">
    <q-card flat class="tw-mb-10">
      <q-card-section class="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center">
        <div class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-items-center">
          Anggaran ATM Provinsi
          <q-spinner v-if="loading" color="primary" size="md" />
        </div>
        <q-select :options="provinces" label="Provinsi" v-model="dsStore.province_id" map-options emit-value use-input
          :loading="loading" @filter="filterProvince" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <apex type="bar" :options="chartOptionsProvinceUPTD" :series="seriesProvinceUPTD" ref="chartProvinceUPTD">
        </apex>

      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-table flat :rows="province_table" hide-pagination :columns="province_table_column"
          table-header-class="bg-secondary text-white" separator="vertical" :loading="loading">
        </q-table>
      </q-card-section>
    </q-card>
    <q-card flat class="tw-mb-10">
      <q-card-section>
        <div class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-items-center">
          Anggaran ATM 5 KKN
          <q-spinner v-if="loading" color="primary" size="md" />
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <apex type="bar" :options="chartOptionsProvinceKKN" :series="seriesProvinceKKN" ref="chartProvinceKKN">
        </apex>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-table flat :rows="province_table_kkn" hide-pagination :columns="province_table_column"
          table-header-class="bg-secondary text-white" separator="vertical" :loading="loading">
        </q-table>
      </q-card-section>
    </q-card>
    <q-card flat class="tw-mb-20">
      <q-card-section>
        <div class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-items-center">
          Anggaran Dinas Kesehatan & Kemitraan
          <q-spinner v-if="loading" color="primary" size="md" />
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <apex type="bar" :options="chartOptionsProvince" :series="seriesProvince" ref="chartProvince"></apex>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-table flat :rows="province_table_total" hide-pagination :columns="province_table_column"
          table-header-class="bg-secondary text-white" separator="vertical" :loading="loading">
        </q-table>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue"
import Apex from "vue3-apexcharts";
import ApexCharts from "apexcharts";
import { suffixRupiah, rupiah } from "src/helper/utils";
import { useDashbaordStore } from "src/stores/dashboard";
import { api } from "boot/axios"

const dsStore = useDashbaordStore()

const province_table_column = [
  {
    name: "name",
    label: "",
    field: "name",
    align: "left",
    sortable: true,
  },
  {
    name: "bidkes",
    label: "Anggaran ATM Bidang Kesehatan",
    field: (row) => rupiah(row.total),
    sortable: true,
  },
];

const seriesProvinceUPTD = ref([
  {
    name: "AIDS",
    data: [],
  },
  {
    name: "TBC",
    data: [],
  },
  {
    name: "Malaria",
    data: [],
  },
])

const seriesProvinceKKN = ref([
  {
    name: "AIDS",
    data: [],
  },
  {
    name: "TBC",
    data: [],
  },
  {
    name: "Malaria",
    data: [],
  },
  // {
  //   name: "LAINNYA",
  //   data: [],
  // },
])
const seriesProvince = ref([
  {
    name: "Dinkes",
    data: [],
  },
  {
    name: "Kemitraan",
    data: [],
  },
  {
    name: "Total",
    data: [],
  },
  // {
  //   name: "LAINNYA",
  //   data: [],
  // },
])
const chartOptionsProvinceUPTD = ref({
  chart: {
    type: "bar",
    id: "chartProvinceUPTD",
  },
  colors: ["#243763", "#FF6E31", "#9384D1"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "90%",
    },
  },
  dataLabels: {
    formatter: function (value) {
      return rupiah(value);
    },
    style: {
      fontSize: "10px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#243763"],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#243763",
      opacity: 1,
    },
    offsetX: 30,
  },
  yaxis: {
    categories: [],
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return suffixRupiah(value);
      },
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    itemMargin: {
      vertical: 20,
    },
  },
  tooltip: {
    enabled: true,
    shared: true,
    intersect: false,
    y: {
      formatter: function (value) {
        return rupiah(value);
      },
    },
  },
})
const chartOptionsProvinceKKN = ref({
  chart: {
    type: "bar",
    id: "chartProvinceKKN",
  },
  colors: ["#243763", "#FF6E31", "#9384D1"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "90%",
    },
  },
  dataLabels: {
    formatter: function (value) {
      return rupiah(value);
    },
    style: {
      fontSize: "10px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#243763"],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#243763",
      opacity: 1,
    },
    offsetX: 30,
  },
  yaxis: {
    categories: [],
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return suffixRupiah(value);
      },
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    itemMargin: {
      vertical: 20,
    },
  },
  tooltip: {
    enabled: true,
    shared: true,
    intersect: false,
    y: {
      formatter: function (value) {
        return rupiah(value);
      },
    },
  },
})
const chartOptionsProvince = ref({
  chart: {
    type: "bar",
    id: "chartProvince",
  },
  colors: ["#243763", "#FF6E31", "#9384D1"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "90%",
    },
  },
  dataLabels: {
    formatter: function (value) {
      return rupiah(value);
    },
    style: {
      fontSize: "10px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#243763"],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#243763",
      opacity: 1,
    },
    offsetX: 30,
  },
  yaxis: {
    categories: [],
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return suffixRupiah(value);
      },
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    itemMargin: {
      vertical: 20,
    },
  },
  tooltip: {
    enabled: true,
    shared: true,
    intersect: false,
    y: {
      formatter: function (value) {
        return rupiah(value);
      },
    },
  },
})

const province_table = ref([])
const province_table_kkn = ref([])
const province_table_total = ref([])
const provinces = ref([])

const loading = ref(false)

watch(() => dsStore.provinces, (val) => {
  provinces.value = []
  provinces.value = val
})

onMounted(() => {
  provinces.value = []
  provinces.value = dsStore.provinces
  findProvince(dsStore.year.label)
})

watch(() => dsStore.province_id, () => {
  findProvince(dsStore.year.label)
})



watch(() => dsStore.year, () => {
  findProvince(dsStore.year.label)
})

const findProvince = async (year) => {
  loading.value = true;
  await api
    .get("/result/" + year + "/percentage/" + dsStore.province_id)
    .then((res) => {

      seriesProvince.value[0].data = res.data.data.map(
        (province) => province.dinkes.Budget
      );
      seriesProvince.value[1].data = res.data.data.map(
        (province) => province.partnership.Budget
      );
      seriesProvince.value[2].data = res.data.data.map(
        (province) => province.total.Budget
      );

      seriesProvinceUPTD.value[0].data = res.data.data.map(
        (province) => province.by_uptd.AIDS
      );
      seriesProvinceUPTD.value[1].data = res.data.data.map(
        (province) => province.by_uptd.TBC
      );
      seriesProvinceUPTD.value[2].data = res.data.data.map(
        (province) => province.by_uptd.Malaria
      );

      seriesProvinceKKN.value[0].data = res.data.data.map(
        (province) => province.by_kkn.AIDS
      );
      seriesProvinceKKN.value[1].data = res.data.data.map(
        (province) => province.by_kkn.TBC
      );
      seriesProvinceKKN.value[2].data = res.data.data.map(
        (province) => province.by_kkn.Malaria
      );

      province_table.value = []
      province_table_kkn.value = []
      province_table_total.value = []


      province_table.value = [
        { name: "AIDS", total: res.data.data.map((province) => province.by_uptd.AIDS).reduce((a, b) => a + b) },
        { name: "TBC", total: res.data.data.map((province) => province.by_uptd.TBC).reduce((a, b) => a + b) },
        { name: "Malaria", total: res.data.data.map((province) => province.by_uptd.Malaria).reduce((a, b) => a + b) },
        { name: "Total ATM", total: res.data.data.map((province) => province.by_uptd.TotalATM).reduce((a, b) => a + b) }
      ];
      province_table_kkn.value = [
        { name: "AIDS", total: res.data.data.map((province) => province.by_kkn.AIDS).reduce((a, b) => a + b) },
        { name: "TBC", total: res.data.data.map((province) => province.by_kkn.TBC).reduce((a, b) => a + b) },
        { name: "Malaria", total: res.data.data.map((province) => province.by_kkn.Malaria).reduce((a, b) => a + b) },
        { name: "Total ATM", total: res.data.data.map((province) => province.by_kkn.TotalATM).reduce((a, b) => a + b) }
      ];
      province_table_total.value = [
        { name: "Dinas Kesehatan", total: res.data.data.map((province) => province.dinkes.Budget).reduce((a, b) => a + b) },
        { name: "Kemitraan", total: res.data.data.map((province) => province.partnership.Budget).reduce((a, b) => a + b) },
        { name: "Total", total: res.data.data.map((province) => province.total.Budget).reduce((a, b) => a + b) }
      ];

      // Hitung tinggi chart secara dinamis
      const barHeight = 140; // Tinggi setiap bar dalam piksel
      const chartHeight = res.data.data.length * barHeight;

      ApexCharts.getChartByID("chartProvince").updateOptions({
        xaxis: {
          categories: res.data.data.map((province) => province.name),
        },
        chart: {
          height: chartHeight,
        },
      });

      ApexCharts.getChartByID("chartProvinceUPTD").updateOptions({
        xaxis: {
          categories: res.data.data.map((province) => province.name),
        },
        chart: {
          height: chartHeight,
        },
      });

      ApexCharts.getChartByID("chartProvinceKKN").updateOptions({
        xaxis: {
          categories: res.data.data.map((province) => province.name),
        },
        chart: {
          height: chartHeight,
        },
      });

      // this.seriesProvince[3].data = res.data.data.map(
      //   (province) => province.percentage.Other
      // );
      loading.value = false;
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

const filterProvince = (val, update) => {
  if (val === "") {
    update(() => {
      provinces.value = dsStore.provinces;
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    provinces.value = dsStore.provinces.filter(
      (v) => v.label.toLowerCase().indexOf(needle) > -1
    );
  });
}
</script>
