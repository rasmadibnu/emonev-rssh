<template>
  <div class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8 tw-min-h-screen">
    <q-card flat>
      <q-card-section class="text-primary tw-text-xl tw-flex tw-justify-between tw-justify-items-center">
        Persentase Anggaran ATM Terhadap Bidang Kesehatan
        <q-spinner v-if="loading" color="primary" size="md" />
      </q-card-section>

      <q-card-section class="q-pt-none tw-overflow-x-scroll tw-w-auto">
        <apex type="bar" height="1000" :options="chartOptionPrecentage" :series="seriesPrecentage"
          ref="chartPrecentage"></apex>
      </q-card-section>
    </q-card>
    <q-card flat>
      <q-card-section class="text-primary tw-text-xl tw-flex tw-justify-between tw-justify-items-center">
        Rekapitulasi Anggaran ATM
        <q-spinner v-if="loading" color="primary" size="md" />
      </q-card-section>
      <q-card-section class="q-pt-none tw-overflow-x-scroll tw-w-auto">
        <apex type="bar" height="1000" class="tw-w-full" :options="chartOptionAmount" :series="seriesAmount"
          ref="chartAmount"></apex>
      </q-card-section>
    </q-card>
    <q-card flat>
      <q-card-section class="text-primary tw-text-xl tw-flex tw-justify-between tw-justify-items-center">
        Rekapitulasi Anggaran 5 KKN
        <q-spinner v-if="loading" color="primary" size="md" />
      </q-card-section>
      <q-card-section class="q-pt-none tw-overflow-x-scroll tw-w-auto">
        <apex type="bar" class="tw-w-full" :options="chartOptionKKN" :series="seriesKKN" ref="chartKKN">
        </apex>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
import { useDashbaordStore } from "src/stores/dashboard";
import { api } from "boot/axios"
import Apex from "vue3-apexcharts";
import ApexCharts from "apexcharts";
import { suffixRupiah, rupiah } from "src/helper/utils";

const dsStore = useDashbaordStore()

const seriesPrecentage = ref([
  {
    name: "Presentase",
    data: [],
  },
])
const chartOptionPrecentage = ref({
  chart: {
    type: "bar",
    id: "chartPrecentage",
    toolbar: {
      show: true,
      tools: {
        download: '<img src="export.png" width="20">',
        selection: true,
        zoom: '<img src="search.png" width="20">',
        zoomin: '<img src="zoomin.png" width="20">',
        zoomout: '<img src="zoomout.png" width="20">',
        pan: true,
        reset: '<img src="reset.png" width="20">',
      },
    },
  },
  responsive: [
    {
      breakpoint: 480, // defines breakpoint for mobile devices
      options: {
        // set chart options for mobile devices
        chart: {
          width: "1000", // make chart width 100% on mobile
        },
      },
    },
    {
      breakpoint: 600, // defines breakpoint for mobile devices
      options: {
        // set chart options for mobile devices
        chart: {
          width: "700", // make chart width 100% on mobile
        },
      },
    },
  ],
  colors: ["#243763"],
  plotOptions: {
    bar: {
      horizontal: true,
      endingShape: "rounded",
      barHeight: "100%",
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (value) {
      return `${parseFloat(value).toFixed(2)}%`;
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
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  yaxis: {
    tickPlacement: "on",
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return `${parseFloat(value).toFixed(2)}%`;
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    enabled: true,
    shared: true,
    intersect: false,
    y: {
      formatter: function (value) {
        return suffixRupiah(value);
      },
    },
  },
})

const seriesAmount = ref([
  {
    name: "Anggaran",
    data: [],
  },
])

const chartOptionAmount = ref({
  chart: {
    type: "bar",
    id: "chartAmount",
    toolbar: {
      show: true,
      tools: {
        download: '<img src="export.png" width="20">',
        selection: true,
        zoom: '<img src="search.png" width="20">',
        zoomin: '<img src="zoomin.png" width="20">',
        zoomout: '<img src="zoomout.png" width="20">',
        pan: true,
        reset: '<img src="reset.png" width="20">',
      },
    },
  },
  responsive: [
    {
      breakpoint: 480, // defines breakpoint for mobile devices
      options: {
        // set chart options for mobile devices
        chart: {
          width: "1000", // make chart width 100% on mobile
        },
      },
    },
    {
      breakpoint: 600, // defines breakpoint for mobile devices
      options: {
        // set chart options for mobile devices
        chart: {
          width: "700", // make chart width 100% on mobile
        },
      },
    },
  ],
  colors: ["#243763"],
  plotOptions: {
    bar: {
      horizontal: true,
      endingShape: "rounded",
      barHeight: "100%",
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (value) {
      return rupiah(value);
    },
    offsetX: 30,
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
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  yaxis: {
    tickPlacement: "on",
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return suffixRupiah(value);
      },
    },
  },
  fill: {
    opacity: 1,
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

const seriesKKN = ref([
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

const chartOptionKKN = ref({
  chart: {
    type: "bar",
    id: "chartKKN",
    toolbar: {
      show: true,
      tools: {
        download: '<img src="export.png" width="20">',
        selection: true,
        zoom: '<img src="search.png" width="20">',
        zoomin: '<img src="zoomin.png" width="20">',
        zoomout: '<img src="zoomout.png" width="20">',
        pan: true,
        reset: '<img src="reset.png" width="20">',
      },
    },
  },
  responsive: [
    {
      breakpoint: 480, // defines breakpoint for mobile devices
      options: {
        // set chart options for mobile devices
        chart: {
          width: "1000", // make chart width 100% on mobile
        },
      },
    },
    {
      breakpoint: 600, // defines breakpoint for mobile devices
      options: {
        // set chart options for mobile devices
        chart: {
          width: "700", // make chart width 100% on mobile
        },
      },
    },
  ],
  colors: ["#243763", "#FF6E31", "#9384D1"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "90%", // Atur ukuran bar, semakin kecil jarak antar bar semakin besar
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (value) {
      return rupiah(value);
    },
    offsetX: 30,
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
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  yaxis: {
    tickPlacement: "on",
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return suffixRupiah(value);
      },
    },
  },
  fill: {
    opacity: 1,
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


watch(() => dsStore.year, () => {
  getBudget(dsStore.year.label)
})

onMounted(() => {
  if (dsStore.year) {
    getBudget(dsStore.year.label)
  }
})

const loading = ref(false)
const getBudget = async (val) => {
  loading.value = true
  await api
    .get("/result/" + val + "/percentage")
    .then((res) => {
      const data = res.data.data;
      // Sort data by budget for seriesAmount
      const sortedByBudget = [...data].sort((a, b) => b.budget - a.budget);
      seriesAmount.value[0].data = sortedByBudget.map((e) => e.budget);

      // Sort data by percentage for seriesPrecentage
      const sortedByPercentage = [...data].sort(
        (a, b) => b.percentage - a.percentage
      );
      seriesPrecentage.value[0].data = sortedByPercentage.map(
        (e) => e.percentage
      );

      // Sort data by sum of kkn fields for seriesKKN
      const sortedByKKN = [...data].sort(
        (a, b) =>
          (b.kkn_detail?.aids || 0) +
          (b.kkn_detail?.tbc || 0) +
          (b.kkn_detail?.malaria || 0) -
          ((a.kkn_detail?.aids || 0) +
            (a.kkn_detail?.tbc || 0) +
            (a.kkn_detail?.malaria || 0))
      );

      seriesKKN.value[0].data = sortedByKKN.map(
        (e) => e.kkn_detail?.aids
      );
      seriesKKN.value[1].data = sortedByKKN.map(
        (e) => e.kkn_detail?.tbc
      );
      seriesKKN.value[2].data = sortedByKKN.map(
        (e) => e.kkn_detail?.malaria
      );

      // Extract categories for each sorted data set
      const categoriesBudget = sortedByBudget.map((e) => e.name);
      const categoriesPercentage = sortedByPercentage.map((e) => e.name);
      const categoriesKKN = sortedByKKN.map((e) => e.name);

      // Update chart options with sorted categories
      ApexCharts.getChartByID("chartAmount").updateOptions({
        xaxis: { categories: categoriesBudget },
      });
      ApexCharts.getChartByID("chartPrecentage").updateOptions({
        xaxis: { categories: categoriesPercentage },
      });

      // Hitung tinggi chart secara dinamis
      const barHeight = 120; // Tinggi setiap bar dalam piksel
      const chartHeight = categoriesKKN.length * barHeight;

      ApexCharts.getChartByID("chartKKN").updateOptions({
        xaxis: { categories: categoriesKKN },
        chart: {
          height: chartHeight,
        },
      });
      loading.value = false;

      return res;
    })
    .catch((err) => {
      loading.value = false;
    });
}
</script>
