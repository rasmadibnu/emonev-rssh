<template>
  <div class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8">
    <q-card flat>
      <q-card-section class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-justify-between tw-items-center">
        Persentase anggaran kemitraan untuk ATM
        <q-spinner v-if="loading" color="primary" size="md" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <apex type="bar" height="250" :options="chartAllOptions" :series="seriesAll" ref="chartPartnership"></apex>
      </q-card-section>
    </q-card>
    <div class="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center">
      <div class="text-primary tw-text-xl">Per Provinsi</div>
      <q-select :options="provinces" label="Provinsi" v-model="dsStore.province_id" map-options emit-value use-input
        @filter="filterProvince" />
    </div>
    <q-card flat>
      <q-card-section class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-justify-between tw-items-center">
        Persentase anggaran kemitraan untuk ATM
        <q-spinner v-if="loading2" color="primary" size="md" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <apex type="bar" height="250" :options="chartOptionsPerProvince" :series="seriesPerProvince"
          ref="chartPartnershipPerProvince"></apex>
      </q-card-section>
      <q-card-section class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-justify-between tw-items-center">
        Jumlah Desa yang mendapatkan ATM
        <q-spinner v-if="loading3" color="primary" size="md" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <apex type="bar" height="350" :options="chartOptionVillageCount" :series="seriesVillageCount"
          ref="chartVillageCount"></apex>
      </q-card-section>
      <q-card-section class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-justify-between tw-items-center">
        Dana Desa
        <q-spinner v-if="loading3" color="primary" size="md" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <apex type="bar" height="350" :options="chartOptionVillageFund" :series="seriesVillageFund"
          ref="chartVillageFund"></apex>
      </q-card-section>
      <q-card-section class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-justify-between tw-items-center">
        Dana CSR
        <q-spinner v-if="loading3" color="primary" size="md" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <apex type="bar" height="350" :options="chartOptionCSR" :series="seriesCSR" ref="chartCSR"></apex>
      </q-card-section>
      <q-card-section class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-justify-between tw-items-center">
        Dana LSM
        <q-spinner v-if="loading3" color="primary" size="md" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <apex type="bar" height="350" :options="chartOptionLSM" :series="seriesLSM" ref="chartLSM"></apex>
      </q-card-section>
      <q-card-section class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-justify-between tw-items-center">
        Dana SKPDN
        <q-spinner v-if="loading3" color="primary" size="md" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <apex type="bar" :options="chartOptionSKPDN" :series="seriesSKPDN" ref="chartSKPDN">
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

const seriesAll = ref([
  {
    name: "Persentase",
    data: [],
  },
  {
    name: "Jumlah",
    hidden: true,
    data: [],
  },
  {
    name: "Anggaran",
    hidden: true,
    data: [],
  },
])
const chartAllOptions = ref({
  chart: {
    type: "bar",
    height: 350,
    id: "chartPartnership",
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
    formatter: function (value, opts) {
      return rupiah(
        opts.globals.collapsedSeries.length >= 2
          ? opts.globals.collapsedSeries[1].data[opts.dataPointIndex]
          : 0
      );
    },
    offsetX: 30,
    style: {
      fontSize: "10px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#7a4790"],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#7a4790",
      opacity: 1,
    },
  },
  tooltip: {
    enabled: true,
    followCursor: true,
    shared: true,
    intersect: false,
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `
            <div class="tw-p-4">
              <div>
                Presentase: ${parseFloat(
        series[seriesIndex][dataPointIndex]
      ).toFixed(0)}%
              </div>
              <div>
                Jumlah: ${w.globals.collapsedSeries[0]?.data[dataPointIndex]}
              </div>
              <div>
                Anggaran: ${rupiah(
        w.globals.collapsedSeries[1]?.data[dataPointIndex]
      )}
              </div>
             </div>
             `;
    },
  },
  colors: ["#709600", "#7a4790", "#3082c8"],
  plotOptions: {
    bar: {
      // borderRadius: 4,
      barHeight: "60%",
      horizontal: true,
    },
  },
  fill: {
    opacity: 1,
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return `${parseFloat(value).toFixed(0)}%`;
      },
    },
    categories: [],
  },
})

const seriesPerProvince = ref([
  {
    name: "Persentase",
    data: [],
  },
  {
    name: "Jumlah",
    hidden: true,
    data: [],
  },
  {
    name: "Anggaran",
    hidden: true,
    data: [],
  },
])
const chartOptionsPerProvince = ref({
  chart: {
    type: "bar",
    height: 350,
    id: "chartPartnershipPerProvince",
  },
  legend: {
    show: false,
  },
  tooltip: {
    enabled: true,
    followCursor: true,
    shared: true,
    intersect: false,
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      // const seriesName = w.globals.seriesNames[seriesIndex];
      console.log();
      return `
            <div class="tw-p-4">
              <div>
                Presentase: ${parseFloat(
        series[seriesIndex][dataPointIndex]
      ).toFixed(0)}%
              </div>
              <div>
                Jumlah: ${w.globals.collapsedSeries[0].data[dataPointIndex]}
              </div>
              <div>
                Anggaran: ${rupiah(
        w.globals.collapsedSeries[1].data[dataPointIndex]
      )}
              </div>
             </div>
             `;
    },
  },
  colors: ["#709600", "#7a4790", "#3082c8"],
  plotOptions: {
    bar: {
      // borderRadius: 4,
      barHeight: "60%",
      horizontal: true,
    },
  },
  fill: {
    opacity: 1,
  },
  dataLabels: {
    enabled: true,
    formatter: function (value, opts) {
      return rupiah(
        opts.globals.collapsedSeries.length >= 2
          ? opts.globals.collapsedSeries[1].data[opts.dataPointIndex]
          : 0
      );
    },
    offsetX: 30,
    style: {
      fontSize: "10px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#7a4790"],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#7a4790",
      opacity: 1,
    },
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return `${parseFloat(value).toFixed(0)}%`;
      },
    },
    categories: [],
  },
})

const seriesVillageCount = ref([
  {
    name: "Jumlah",
    data: [],
  },
])
const chartOptionVillageCount = ref({
  chart: {
    type: "bar",
    height: 350,
    id: "chartVillageCount",
  },
  colors: ["#7a4790"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    formatter: function (value) {
      return `${parseFloat(value).toFixed(0)}`;
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#7a4790"],
    },
  },

  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return `${parseFloat(value).toFixed(0)}`;
      },
    },
  },
  xaxis: {
    categories: [],
  },
  fill: {
    opacity: 1,
  },
})

const seriesVillageFund = ref([
  {
    name: "Dana",
    data: [],
  },
])
const chartOptionVillageFund = ref({
  chart: {
    type: "bar",
    height: 350,
    id: "chartVillageFund",
  },
  colors: ["#7a4790"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    formatter: function (value) {
      return rupiah(value);
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#7a4790"],
    },
  },

  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return suffixRupiah(value);
      },
    },
  },
  xaxis: {
    categories: [],
  },
  fill: {
    opacity: 1,
  },
})

const seriesCSR = ref([
  {
    name: "Dana",
    data: [],
  },
])
const chartOptionCSR = ref({
  chart: {
    type: "bar",
    height: 350,
    id: "chartCSR",
  },
  colors: ["#7a4790"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    formatter: function (value) {
      return rupiah(value);
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#7a4790"],
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return suffixRupiah(value);
      },
    },
  },
  xaxis: {
    categories: [],
  },
  fill: {
    opacity: 1,
  },
})

const seriesLSM = ref([
  {
    name: "Dana",
    data: [],
  },
])
const chartOptionLSM = ref({
  chart: {
    type: "bar",
    height: 350,
    id: "chartLSM",
  },
  colors: ["#7a4790"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    formatter: function (value) {
      return rupiah(value);
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#7a4790"],
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return suffixRupiah(value);
      },
    },
  },
  xaxis: {
    categories: [],
  },
  fill: {
    opacity: 1,
  },
})

const seriesSKPDN = ref([])
const chartOptionSKPDN = ref({
  chart: {
    type: "bar",
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
    id: "chartSKPDN",
  },
  dataLabels: {
    formatter: function (value) {
      return rupiah(value);
    },
    offsetX: 30,
    style: {
      fontSize: "10px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#7a4790"],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#7a4790",
      opacity: 1,
    },
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return isNaN(value) ? value : suffixRupiah(value);
      },
    },
  },
  colors: [
    "#233D4D",
    "#FE7F2D",
    "#FCCA46",
    "#A1C181",
    "#619B8A",
    "#333333",
    "#4C6085",
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "100%",
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  yaxis: {
    categories: [],
  },
  legend: {
    position: "right",
    offsetY: 40,
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

const provinces = ref([])
const loading = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)


watch(() => dsStore.provinces, (val) => {
  provinces.value = []
  provinces.value = val
})


onMounted(() => {
  provinces.value = []
  provinces.value = dsStore.provinces
  findPartnership(dsStore.year.label)
  findPartnershipPerProvince(dsStore.year.label)
  getPartnershipDetail(dsStore.year.label)

})

watch(() => dsStore.province_id, () => {
  findPartnershipPerProvince(dsStore.year.label)
  getPartnershipDetail(dsStore.year.label)
})

watch(() => dsStore.year, () => {
  findPartnership(dsStore.year.label)
  findPartnershipPerProvince(dsStore.year.label)
  getPartnershipDetail(dsStore.year.label)
})

const findPartnership = async (val) => {
  loading.value = true
  await api
    .get("/forms/" + val + "/partnership")
    .then((res) => {
      const data = res.data.data;
      const categories = data.map((item) => item.Name);
      const percentageSeries = data.map((item) => item.Percentage);
      const qtySeries = data.map((item) => item.Qty);
      const budgetSeries = data.map((item) => item.Budget);
      seriesAll.value[0].data = percentageSeries;
      seriesAll.value[1].data = qtySeries;
      seriesAll.value[2].data = budgetSeries;
      ApexCharts.getChartByID("chartPartnership").updateOptions({
        xaxis: {
          labels: {
            formatter: function (value) {
              return `${parseFloat(value).toFixed(0)}%`;
            },
          },
          categories: categories,
        },
      });

      ApexCharts.getChartByID("chartPartnership").updateSeries(seriesAll.value, true);
      ApexCharts.getChartByID("chartPartnership").hideSeries("Jumlah");
      ApexCharts.getChartByID("chartPartnership").hideSeries("Anggaran");
      loading.value = false
    })
    .catch((err) => {
      console.log(err);
    });
}

const findPartnershipPerProvince = async (val) => {
  loading2.value = true
  await api
    .get(
      "/forms/" +
      val +
      "/partnership?province_id=" +
      dsStore.province_id
    )
    .then((res) => {
      const data = res.data.data;
      const categories = data.map((item) => item.Name);
      const percentageSeries = data.map((item) => item.Percentage);
      const qtySeries = data.map((item) => item.Qty);
      const budgetSeries = data.map((item) => item.Budget);
      seriesPerProvince.value[0].data = percentageSeries;
      seriesPerProvince.value[1].data = qtySeries;
      seriesPerProvince.value[2].data = budgetSeries;
      ApexCharts.getChartByID("chartPartnershipPerProvince").updateOptions({
        xaxis: {
          labels: {
            formatter: function (value) {
              return `${parseFloat(value).toFixed(0)}%`;
            },
          },
          categories: categories,
        },
      });
      ApexCharts.getChartByID("chartPartnershipPerProvince").updateSeries(seriesPerProvince.value, true);

      ApexCharts.getChartByID("chartPartnershipPerProvince").hideSeries(
        "Jumlah"
      );
      ApexCharts.getChartByID("chartPartnershipPerProvince").hideSeries(
        "Anggaran"
      );
      loading2.value = false

    })
    .catch((err) => {
      console.log(err);
    });
}

const getPartnershipDetail = async (val) => {
  loading3.value = true
  await api
    .get(
      "/forms/" +
      val +
      "/partnership/detail?province_id=" +
      dsStore.province_id
    )
    .then((res) => {
      var data = res.data.data;
      var legends = data.map((e) => e.Regency);

      seriesVillageCount.value[0].data = data.map((e) => e.VillageCount);
      seriesVillageFund.value[0].data = data.map((e) => e.VillageFunds);
      seriesCSR.value[0].data = data.map((e) => e.CSR);
      seriesLSM.value[0].data = data.map((e) => e.LSM);

      const outputData = [];

      for (const skpdData of data) {
        const skpd = skpdData["SKPD"];
        for (const key in skpd) {
          const index = outputData.findIndex((item) => item.name === key);
          if (index === -1) {
            outputData.push({ name: key, data: [skpd[key]] });
          } else {
            outputData[index].data.push(skpd[key]);
          }
        }
      }

      seriesSKPDN.value = outputData;
      // ApexCharts.getChartByID("chartSKPDN").updateSeries(seriesSKPDN.value, true);

      ApexCharts.getChartByID("chartVillageCount").updateOptions({
        xaxis: { categories: legends },
      });
      ApexCharts.getChartByID("chartVillageFund").updateOptions({
        xaxis: { categories: legends },
      });
      ApexCharts.getChartByID("chartCSR").updateOptions({
        xaxis: { categories: legends },
      });
      ApexCharts.getChartByID("chartLSM").updateOptions({
        xaxis: { categories: legends },
      });

      const barHeight = 300; // Tinggi setiap bar dalam piksel
      const chartHeight = data.length * barHeight;


      ApexCharts.getChartByID("chartSKPDN").updateOptions({
        xaxis: { categories: legends },
        chart: {
          height: chartHeight,
        },
      });

      loading3.value = false
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
