<template>
  <q-layout view="hHh lpR fFf" class="tw-font-['Sen']">
    <q-header reveal class="bg-white text-primary">
      <q-toolbar>
        <div
          class="tw-font-bold tw-py-3 text-center tw-flex tw-justify-center tw-flex-col tw-w-full"
        >
          <div class="tw-text-2xl">
            <span class="text-secondary">e</span>Monev
          </div>
          <div class="tw-uppercase tw-text-md text-center">
            Electronic Monitoring Evaluasi dan Sinkronisasi Capaian Program<br />
            Pengendalian Penyakit RPJMN
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="tw-bg-gray-50">
      <q-page class="tw-pt-24">
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
          <q-card flat>
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
          </q-card>
          <q-card flat>
            <q-card-section class="text-primary tw-text-xl">
              Persentase Anggaran ATM Terhadap Bidang Kesehatan
            </q-card-section>
            <q-card-section class="q-pt-none">
              <apex
                type="bar"
                height="350"
                :options="chartOptions3"
                :series="series3"
              ></apex>
            </q-card-section>
          </q-card>
          <q-card flat>
            <q-card-section class="text-primary tw-text-xl">
              Persentase Anggaran ATM Terhadap Bidang Kesehatan provinsi Bali
            </q-card-section>
            <q-card-section class="q-pt-none">
              <apex
                type="bar"
                height="350"
                :options="chartOptions4"
                :series="series4"
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
                  :options="['Tahun 2023', 'Tahun 2022']"
                  v-model="tahun"
                  borderless
                  dense
                />
              </div>
              <q-btn
                color="secondary"
                label="Masuk"
                :to="{ name: 'login' }"
                unelevated
                no-caps
              />
            </div>
          </div>
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<style>
.my-select .q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__input,
.q-field__append > .q-icon {
  color: white;
}
</style>
<script>
import { defineComponent, ref } from "vue";
import Apex from "vue3-apexcharts";

export default defineComponent({
  components: { Apex },
  setup() {
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
      series3: [
        {
          data: sortedByHighestAvg.map((e) => e.average),
        },
      ],
      chartOptions3: {
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
          categories: sortedByHighestAvg.map((e) => e.nama),
        },
        fill: {
          opacity: 1,
        },
      },
      series4: [
        {
          name: "AIDS",
          data: kabupatenKotaBali.map((e) => e.budget.aids),
        },
        {
          name: "TBC",
          data: kabupatenKotaBali.map((e) => e.budget.tbc),
        },
        {
          name: "MALARIA",
          data: kabupatenKotaBali.map((e) => e.budget.malaria),
        },
      ],
      chartOptions4: {
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
          enabled: false,
        },
        xaxis: {
          categories: kabupatenKotaBali.map((e) => e.nama),
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
      },
      tahun: ref("Tahun 2023"),
    };
  },
});
</script>
