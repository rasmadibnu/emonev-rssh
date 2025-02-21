<template>
  <div class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8">
    <q-card flat class="tw-mb-10">
      <q-card-section class="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center">
        <div class="text-primary tw-text-xl tw-flex tw-justify-between tw-items-center">
          Anggaran ATM

        </div>
        <section class="tw-flex tw-gap-x-2 tw-items-center">
          <q-select dense class="tw-w-32" :options="dsStore.years"
            :rules="[val => val.label < dsStore.year.label || `Tahun tidak boleh lebih besar dari ${dsStore.year.label}`]"
            v-model="yearPast" @update:model-value="onChangeYear()" ref="yearPastInput" :loading="loading" />
          <div class="tw-pb-4 tw-text-xl">-</div>
          <q-select dense class="tw-w-32" :options="dsStore.years" v-model="dsStore.year" :loading="loading" hint="" />
        </section>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <apex type="bar" :options="chartOptionsBudget" :series="seriesBudget" ref="chartBudget">
        </apex>

      </q-card-section>

      <q-card-section class="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center">
        <div class="text-primary tw-text-xl tw-flex tw-justify-between tw-items-center">
          Partnership Contribution
          <q-spinner v-if="loading2" color="primary" size="md" />
        </div>

      </q-card-section>
      <q-card-section class="q-pt-none">
        <apex type="bar" :options="chartOptionsPartnership" :series="seriesPartnership" ref="chartPartnership">
        </apex>

      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-table flat :rows="tablePartnership" hide-pagination :columns="columnPartnership"
          table-header-class="bg-secondary text-white" separator="vertical" :loading="loading">
          <template #body-cell-year="props">
            <q-td :props="props">
              <div class="tw-flex tw-gap-x-2 tw-items-center">
                <div class="tw-h-4 tw-w-4" :style="{ backgroundColor: props.row.color }"></div>
                {{ props.row.name }}
              </div>
            </q-td>
          </template>
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

const columnBudget = [
  {
    name: "year",
    label: "",
    field: "name",
    align: "left",
    sortable: true,
  },
  {
    name: "aids",
    label: "AIDS",
    field: (row) => rupiah(row.budget.AIDS),
    sortable: true,
  },
  {
    name: "tbc",
    label: "TBC",
    field: (row) => rupiah(row.budget.TBC),
    sortable: true,
  },
  {
    name: "malaria",
    label: "Malaria",
    field: (row) => rupiah(row.budget.Malaria),
    sortable: true,
  },
  {
    name: "total",
    label: "Total ATM",
    field: (row) => rupiah(row.budget.TotalATM),
    sortable: true,
  },
];

const columnPartnership = [
  {
    name: "year",
    label: "",
    field: "name",
    align: "left",
    sortable: true,
  },
  {
    name: "village",
    label: "Dana Desa",
    field: (row) => rupiah(row.Village),
    sortable: true,
  },
  {
    name: "csr",
    label: "CSR",
    field: (row) => rupiah(row.CSR),
    sortable: true,
  },
  {
    name: "skpd",
    label: "SKPD Non Dinkes",
    field: (row) => rupiah(row.SKPD),
    sortable: true,
  },
  {
    name: "lsm",
    label: "LSM",
    field: (row) => rupiah(row.LSM),
    sortable: true,
  },
  {
    name: "total",
    label: "Total Dana Kemitraan",
    field: (row) => rupiah(row.total_partnership),
    sortable: true,
  },
];

const seriesBudget = ref([
])

const chartOptionsBudget = ref({
  chart: {
    type: "bar",
    height: 350,
    id: "chartBudget",
  },
  colors: ["#243763", "#FF6E31", "#9384D1"],
  plotOptions: {
    // bar: {
    //   horizontal: false,
    //   barHeight: "90%",
    // },
  },
  dataLabels: {
    enabled: false,

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
  },
  xaxis: {
    categories: ["AIDS", "TBC", "Malaria", "Total ATM"],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return isNaN(value) ? value : suffixRupiah(value);
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

const seriesPartnership = ref([
])

const chartOptionsPartnership = ref({
  chart: {
    type: "bar",
    height: 350,
    id: "chartPartnership",
  },
  colors: ["#243763", "#FF6E31", "#9384D1"],
  plotOptions: {
    // bar: {
    //   horizontal: false,
    //   barHeight: "90%",
    // },
  },
  dataLabels: {
    enabled: false,
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
  },
  xaxis: {
    categories: ["Dana Desa", "CSR", "SKPD Non Dinkes", "LSM", "Total Dana Kemitraan"],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return isNaN(value) ? value : suffixRupiah(value);
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

const loading = ref(false)
const loading2 = ref(false)

const tableBudget = ref([])
const tablePartnership = ref([])

const yearPast = ref(null)
const yearPastInput = ref(null)

const onChangeYear = () => {
  if (yearPast.value.label < dsStore.year.label)
    findBuget(dsStore.year.label)
  findPartnership(dsStore.year.label)
}

watch(() => dsStore.year, () => {
  yearPast.value = dsStore.yearPast
  onChangeYear()
})

onMounted(() => {
  yearPast.value = dsStore.yearPast
  onChangeYear()
})

const findBuget = async (year) => {
  loading.value = true;
  seriesBudget.value = []
  tableBudget.value = []
  await api
    .get("/result/" + yearPast.value.label + "-" + year + "/budget/year")
    .then((res) => {
      res.data.data.map((data, index) => {
        seriesBudget.value.push({
          name: data.name,
          data: [data.budget.AIDS, data.budget.TBC, data.budget.Malaria, data.budget.TotalATM]
        })
        tableBudget.value.push({ ...data, color: chartOptionsBudget.value.colors[index] })
      })

      ApexCharts.getChartByID("chartBudget").updateSeries(seriesBudget.value, true);

      loading.value = false;
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

const findPartnership = async (year) => {
  loading2.value = true;
  seriesPartnership.value = []
  tablePartnership.value = []
  await api
    .get("/result/" + yearPast.value.label + "-" + year + "/partnership/year")
    .then((res) => {
      res.data.data.map((data, index) => {
        seriesPartnership.value.push({
          name: data.name,
          data: [data.Village, data.CSR, data.SKPD, data.LSM, data.total_partnership]
        })
        tablePartnership.value.push({ ...data, color: chartOptionsBudget.value.colors[index] })
      })

      console.log(seriesPartnership.value)

      ApexCharts.getChartByID("chartPartnership").updateSeries(seriesPartnership.value, true);

      loading2.value = false;
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>
