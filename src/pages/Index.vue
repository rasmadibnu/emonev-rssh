<template>
  <q-layout v-scroll="onScroll" view="hHh lpR fFf">
    <q-header reveal v-model="isReveal" class="bg-white text-primary">
      <q-toolbar>
        <div
          class="tw-font-bold tw-py-3 text-center tw-flex tw-justify-center tw-flex-col tw-w-full"
        >
          <div class="tw-text-4xl">
            <span class="text-secondary">e</span>Monev
          </div>
          <div class="tw-uppercase tw-text-xs md:tw-text-lg text-center">
            Sistem Informasi ADINKES<br />
            Monitoring Evaluasi Capaian RSSH - ATM
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="tw-bg-gray-50">
      <q-page class="tw-pt-28">
        <div class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8">
          <q-card flat>
            <q-card-section class="text-primary tw-text-xl">
              Persentase capaian kemitraan untuk ATM
            </q-card-section>
            <q-card-section class="q-pt-none">
              <apex
                type="bar"
                height="250"
                :options="chartOptions"
                :series="series"
              ></apex>
            </q-card-section>
          </q-card>
          <!-- <q-card flat>
            <q-card-section class="text-primary tw-text-xl">
              Rekapitulasi Anggaran ATM {{ tahun }}
            </q-card-section>
            <q-card-section class="q-pt-none">
              <apex
                type="bar"
                height="350"
                :options="chartOptions2"
                :series="series2"
              ></apex>
            </q-card-section>
          </q-card> -->
          <q-card flat>
            <q-card-section class="text-primary tw-text-xl">
              Persentase Anggaran ATM Terhadap Bidang Kesehatan
            </q-card-section>
            <q-card-section class="q-pt-none">
              <apex
                type="bar"
                height="350"
                :options="chartOptionsPercentage"
                :series="seriesPercentage"
                ref="chartPercentage"
              ></apex>
            </q-card-section>
          </q-card>
          <q-card flat>
            <q-card-section class="tw-flex tw-justify-between tw-items-center">
              <div class="text-primary tw-text-xl">
                Persentase Anggaran ATM Terhadap Bidang Kesehatan Provinsi
              </div>
              <q-select
                :options="list_province"
                label="Provinsi"
                v-model="province"
                map-options
                emit-value
                use-input
                @filter="filterProvince"
                @update:model-value="findProvince"
              />
            </q-card-section>
            <q-card-section class="q-pt-none">
              <apex
                type="bar"
                height="350"
                :options="chartOptionsProvince"
                :series="seriesProvince"
                ref="chartProvince"
              ></apex>
            </q-card-section>
          </q-card>
          <footer class="text-center tw-py-10">
            {{ new Date().getFullYear() }} © Copyright All Right Reserved
          </footer>
        </div>

        <q-page-sticky class="tw-z-50" expand position="top">
          <div class="bg-primary tw-w-full">
            <div
              class="tw-flex tw-justify-between text-white tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-py-3"
            >
              <div class="tw-flex tw-items-center tw-gap-4">
                <span class="tw-text-gray-400">Tahun Terpilih</span> /
                <q-select
                  class="my-select"
                  :options="list_year"
                  v-model="year"
                  borderless
                  dense
                  map-options
                  emit-value
                />
              </div>
              <q-btn
                color="secondary"
                :label="authStore.token ? 'Dashabord' : 'Masuk'"
                :to="{ name: authStore.token ? 'beranda' : 'login' }"
                unelevated
                no-caps
              />
            </div>
            <q-tabs v-model="tab" align="justify" no-caps class="text-white">
              <q-tab name="Dashboard1" label="Dashboard 1" />
              <q-tab name="Dashboard2" label="Dashboard 2" />

              <q-tab name="Dashboard3" label="Dashboard 3" />

              <q-tab name="Dashboard4" label="Dashboard 4" />
            </q-tabs>
          </div>
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<style lang="scss" scoped>
.my-select :deep(.q-field__native) {
  color: white;
}
.my-select :deep(.q-icon) {
  color: white;
}
</style>
<script>
import { useAuthStore } from "src/stores/auth";
import { defineComponent, ref } from "vue";
import Apex from "vue3-apexcharts";

export default defineComponent({
  components: { Apex },
  setup() {
    const authStore = useAuthStore();
    const provinsi = [
      {
        nama: "Aceh",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Bali",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Bangka Belitung",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Banten",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Bengkulu",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Gorontalo",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Jambi",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Jawa Barat",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Jawa Tengah",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Jawa Timur",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Kalimantan Barat",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Kalimantan Selatan",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Kalimantan Tengah",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Kalimantan Timur",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Kalimantan Utara",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Kepulauan Riau",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Lampung",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Maluku",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Maluku Utara",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Nusa Tenggara Barat",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Nusa Tenggara Timur",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Papua",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Papua Barat",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Riau",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Sulawesi Barat",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Sulawesi Selatan",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Sulawesi Tengah",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Sulawesi Tenggara",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Sulawesi Utara",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Sumatera Barat",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Sumatera Selatan",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Sumatera Utara",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
      {
        nama: "Yogyakarta",
        budget: getRandomBudget(),
        average: getRandomAverage(),
      },
    ];

    function getRandomBudget() {
      return Math.floor(Math.random() * 9000000000) + 1000000000;
    }

    function getRandomAverage() {
      const min = 0.1;
      const max = 4.0;
      const randomValue = Math.random() * (max - min) + min;
      const roundedValue = randomValue.toFixed(2);
      return parseFloat(roundedValue);
    }

    const sortedByHighestBudget = structuredClone(provinsi).sort(
      (a, b) => b.budget - a.budget
    );
    const sortedByHighestAvg = structuredClone(provinsi).sort(
      (a, b) => b.average - a.average
    );

    const kabupatenKotaBali = [
      {
        nama: "Kabupaten Badung",
        budget: {
          aids: getRandomAverage(),
          tbc: getRandomAverage(),
          malaria: getRandomAverage(),
        },
      },
      {
        nama: "Kabupaten Bangli",
        budget: {
          aids: getRandomAverage(),
          tbc: getRandomAverage(),
          malaria: getRandomAverage(),
        },
      },
      {
        nama: "Kabupaten Buleleng",
        budget: {
          aids: getRandomAverage(),
          tbc: getRandomAverage(),
          malaria: getRandomAverage(),
        },
      },
      {
        nama: "Kabupaten Gianyar",
        budget: {
          aids: getRandomAverage(),
          tbc: getRandomAverage(),
          malaria: getRandomAverage(),
        },
      },
      {
        nama: "Kabupaten Jembrana",
        budget: {
          aids: getRandomAverage(),
          tbc: getRandomAverage(),
          malaria: getRandomAverage(),
        },
      },
      {
        nama: "Kabupaten Karangasem",
        budget: {
          aids: getRandomAverage(),
          tbc: getRandomAverage(),
          malaria: getRandomAverage(),
        },
      },
      {
        nama: "Kabupaten Klungkung",
        budget: {
          aids: getRandomAverage(),
          tbc: getRandomAverage(),
          malaria: getRandomAverage(),
        },
      },
      {
        nama: "Kabupaten Tabanan",
        budget: {
          aids: getRandomAverage(),
          tbc: getRandomAverage(),
          malaria: getRandomAverage(),
        },
      },
      {
        nama: "Kota Denpasar",
        budget: {
          aids: getRandomAverage(),
          tbc: getRandomAverage(),
          malaria: getRandomAverage(),
        },
      },
    ];

    return {
      authStore,
      isReveal: ref(true),
      series: [
        {
          data: [0, 14.3, 41.9, 25.7, 40],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        colors: ["#FF6E31"],
        plotOptions: {
          bar: {
            // borderRadius: 4,
            barHeight: "60%",
            horizontal: true,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "transparent",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0,
            opacityTo: 1,
            stops: [0, 70, 100],
            colorStops: [],
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "BLT",
            "SKPD Non Dinkes",
            "CSR",
            "Dana Desa",
            "SK (Forum Kemitraan)",
          ],
        },
      },
      series2: [
        {
          data: sortedByHighestBudget.map((e) => e.budget),
        },
      ],
      chartOptions2: {
        yaxis: {
          labels: {
            formatter: function (value) {
              return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
          },
        },
        chart: {
          type: "bar",
          height: 350,
        },
        colors: ["#243763"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: sortedByHighestBudget.map((e) => e.nama),
        },
        fill: {
          opacity: 1,
        },
      },
      seriesPercentage: [
        {
          name: "Presentase",
          data: [],
        },
      ],
      chartOptionsPercentage: {
        chart: {
          type: "bar",
          height: 350,
        },
        colors: ["#243763"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          formatter: function (value) {
            return `${parseFloat(value).toFixed(2)}%`;
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
              return `${parseFloat(value).toFixed(2)}%`;
            },
          },
        },
        xaxis: {
          categories: [],
        },
        fill: {
          opacity: 1,
        },
      },
      seriesProvince: ref([
        {
          name: "AIDS",
          data: [],
        },
        {
          name: "TBC",
          data: [],
        },
        {
          name: "MALARIA",
          data: [],
        },
      ]),
      chartOptionsProvince: ref({
        chart: {
          type: "bar",
          height: 350,
        },
        colors: ["#243763", "#FF6E31", "#9384D1"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          formatter: function (value) {
            return `${parseFloat(value).toFixed(2)}%`;
          },
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return `${parseFloat(value).toFixed(2)}%`;
            },
          },
        },
        xaxis: {
          categories: [],
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
      }),
      year: ref(null),

      list_year: ref([]),
      options_province: ref([]),
      list_province: ref([]),
      province: ref(null),
      tab: ref("Dashboard1"),
    };
  },
  mounted() {
    this.getYear();
  },
  methods: {
    getYear() {
      this.$api
        .get("/forms?Limit=-")
        .then((res) => {
          this.list_year = res.data.data.Rows.map((year) => {
            return { label: year.Year, value: year.ID };
          });
          return this.list_year;
        })
        .then((res) => {
          const nowYear = new Date().getFullYear();
          const findYear = res.find((year) => year.label == nowYear);
          if (findYear) {
            this.year = findYear.value;
          } else {
            this.year = res[0].value;
          }
          this.getPrecentage(this.year);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onScroll(position) {
      if (position > 100) {
        this.isReveal = false;
      } else {
        this.isReveal = true;
      }
    },

    getPrecentage(val) {
      const findYear = this.list_year.find((year) => year.value == val);
      this.$api
        .get("/result/" + findYear.label + "/percentage")
        .then((res) => {
          this.seriesPercentage[0].data = res.data.data.map(
            (e) => e.percentage
          );
          this.chartOptionsPercentage.xaxis.categories = res.data.data.map(
            (e) => e.name
          );

          this.options_province = res.data.data.map((e) => {
            return { label: e.name, value: e.id };
          });
          this.list_province = this.options_province;
          return res;
        })
        .then((res) => {
          this.$refs.chartPercentage.refresh();
          this.province = this.list_province[0].value;
          this.findProvince(this.list_province[0].value);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    filterProvince(val, update) {
      if (val === "") {
        update(() => {
          this.list_province = this.options_province;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.list_province = this.options_province.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },

    findProvince(val) {
      const findYear = this.list_year.find((year) => year.value == this.year);
      return this.$api
        .get("/result/" + findYear.label + "/percentage/" + val)
        .then((res) => {
          this.chartOptionsProvince.xaxis.categories = res.data.data.map(
            (province) => province.name
          );
          this.seriesProvince[0].data = res.data.data.map(
            (province) => province.percentage.aids
          );
          this.seriesProvince[1].data = res.data.data.map(
            (province) => province.percentage.malaria
          );
          this.seriesProvince[2].data = res.data.data.map(
            (province) => province.percentage.tbc
          );

          return res;
        })
        .then((res) => {
          this.$refs.chartProvince.refresh();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
