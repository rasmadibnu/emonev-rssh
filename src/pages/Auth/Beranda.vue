<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Beranda</div>
    <div class="tw-grid md:tw-grid-cols-3 tw-gap-4">
      <q-card flat class="tw-rounded-lg">
        <q-card-section class="tw-group tw-flex tw-justify-between">
          <q-avatar
            color="primary"
            size="50px"
            class="tw-transition-all tw-duration-300 tw-transform group-hover:tw-rotate-12"
          >
            <vx-icon
              iconName="Profile2User"
              class="text-white tw-transform tw-transition-transform tw-duration-500 tw-ease-in-out"
              :size="'24'"
            />
          </q-avatar>
          <div class="tw-text-right">
            <p class="tw-text-2xl tw-font-semibold">1,257</p>
            <p>Pengguna</p>
          </div>
        </q-card-section>
      </q-card>
      <q-card flat class="tw-rounded-lg">
        <q-card-section class="tw-group tw-flex tw-justify-between">
          <q-avatar
            color="secondary"
            size="50px"
            class="tw-transition-all tw-duration-300 tw-transform group-hover:tw-rotate-12"
          >
            <vx-icon
              iconName="Map"
              class="text-white tw-transform tw-transition-transform tw-duration-500 tw-ease-in-out"
              :size="'24'"
            />
          </q-avatar>
          <div class="tw-text-right">
            <p class="tw-text-2xl tw-font-semibold">34</p>
            <p>Provinsi</p>
          </div>
        </q-card-section>
      </q-card>
      <q-card flat class="tw-rounded-lg">
        <q-card-section class="tw-group tw-flex tw-justify-between">
          <q-avatar
            color="accent"
            size="50px"
            class="tw-transition-all tw-duration-300 tw-transform group-hover:tw-rotate-12"
          >
            <vx-icon
              iconName="Map1"
              class="text-white tw-transform tw-transition-transform tw-duration-500 tw-ease-in-out"
              :size="'24'"
            />
          </q-avatar>
          <div class="tw-text-right">
            <p class="tw-text-2xl tw-font-semibold">515</p>
            <p>Kabupaten Kota</p>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <q-card flat class="tw-mt-4 tw-grid tw-grid-cols-12 tw-p-4 tw-gap-4">
      <div class="tw-col-span-12 tw-flex tw-justify-between tw-items-center">
        <div class="tw-text-xl tw-font-semibold">Progress Penginputan</div>
        <q-select
          v-model="year"
          :options="['2023']"
          label="Tahun"
          class="tw-w-44"
        />
      </div>
      <q-table flat class="tw-col-span-8" :columns="columns" :rows="province">
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td>
              {{ props.row.nama }}
            </q-td>
            <td>
              <q-badge
                label="Completed"
                v-if="props.row.progress == props.row.jumlahKabupatenKota"
                color="positive"
              />
              <q-badge
                label="Belum Input"
                v-else-if="props.row.progress == 0"
                color="negative"
              />
              <q-badge
                label="Progress"
                v-else-if="props.row.progress < props.row.jumlahKabupatenKota"
                color="secondary"
              />
            </td>
            <q-td class="tw-flex tw-items-center">
              <div
                style="font-size: 0.8em"
                class="tw-mt-1 tw-mr-2 text-primary"
              >
                {{
                  parseFloat(
                    (props.row.progress / props.row.jumlahKabupatenKota) * 100
                  ).toFixed(0) + "%"
                }}
              </div>
              <q-linear-progress
                rounded
                stripe
                size="25px"
                :value="props.row.progress / props.row.jumlahKabupatenKota"
                color="accent"
                class="q-mt-sm"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    color="white"
                    text-color="accent"
                    :label="
                      props.row.progress + '/' + props.row.jumlahKabupatenKota
                    "
                  />
                </div>
              </q-linear-progress>
            </q-td>
            <q-td>
              {{ moment(props.row.lastUpdate).format("YYYY-MM-DD hh:mm:ss") }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <div class="tw-col-span-4 tw-w-full">
        <apex-chart
          type="radialBar"
          :options="chartOptions2"
          :series="series2"
        ></apex-chart>
        <q-separator />
        <q-list>
          <q-item class="tw-flex tw-justify-between tw-items-center">
            <q-item-section avatar>
              <q-avatar color="positive" size="50px">
                <vx-icon
                  iconName="TickCircle"
                  class="text-white"
                  :size="'24'"
                />
              </q-avatar>
            </q-item-section>

            <div side class="tw-text-right">
              <div class="tw-text-lg tw-font-semibold">20</div>
              <div>Completed</div>
            </div>
          </q-item>
          <q-item class="tw-flex tw-justify-between tw-items-center">
            <q-item-section avatar>
              <q-avatar color="secondary" size="50px">
                <vx-icon iconName="Bookmark" class="text-white" :size="'24'" />
              </q-avatar>
            </q-item-section>

            <div side class="tw-text-right">
              <div class="tw-text-lg tw-font-semibold">12</div>
              <div>Progress</div>
            </div>
          </q-item>
          <q-item class="tw-flex tw-justify-between tw-items-center">
            <q-item-section avatar>
              <q-avatar color="negative" size="50px">
                <vx-icon
                  iconName="ClipboardClose"
                  class="text-white"
                  :size="'24'"
                />
              </q-avatar>
            </q-item-section>

            <div side class="tw-text-right">
              <div class="tw-text-lg tw-font-semibold">12</div>
              <div>Belum Input</div>
            </div>
          </q-item>
        </q-list>
      </div>
    </q-card>
    <q-card id="chart" flat class="tw-mt-4">
      <q-card-section>
        <apex-chart
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apex-chart>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import VxIcon from "src/components/VxIcon.vue";
import ApexChart from "vue3-apexcharts";
import moment from "moment";

export default defineComponent({
  props: ["user"],
  components: { VxIcon, ApexChart },
  setup() {
    const columns = [
      {
        name: "Provinsi",
        label: "Provinsi",
        align: "left",
        field: (row) => row.name,
        sortable: true,
      },
      {
        name: "Status",
        align: "left",
        label: "Status",
        field: "Status",
        sortable: true,
      },
      {
        name: "Progress",
        align: "left",
        label: "Progress",
        field: "Progress",
        sortable: true,
      },
      {
        name: "Last Update",
        align: "left",
        label: "Last Update",
        field: "Last Update",
        sortable: true,
      },
    ];

    const province = [
      {
        nama: "Aceh",
        progress: getRandomNumber(23),
        jumlahKabupatenKota: 23,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Sumatera Utara",
        progress: getRandomNumber(33),
        jumlahKabupatenKota: 33,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Sumatera Barat",
        progress: getRandomNumber(12),
        jumlahKabupatenKota: 12,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Riau",
        progress: getRandomNumber(10),
        jumlahKabupatenKota: 10,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Jambi",
        progress: getRandomNumber(9),
        jumlahKabupatenKota: 9,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Sumatera Selatan",
        progress: getRandomNumber(16),
        jumlahKabupatenKota: 16,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Bengkulu",
        progress: getRandomNumber(9),
        jumlahKabupatenKota: 9,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Lampung",
        progress: getRandomNumber(15),
        jumlahKabupatenKota: 15,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Kepulauan Bangka Belitung",
        progress: getRandomNumber(6),
        jumlahKabupatenKota: 6,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Kepulauan Riau",
        progress: getRandomNumber(5),
        jumlahKabupatenKota: 5,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "DKI Jakarta",
        progress: getRandomNumber(6),
        jumlahKabupatenKota: 6,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Jawa Barat",
        progress: getRandomNumber(27),
        jumlahKabupatenKota: 27,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Jawa Tengah",
        progress: getRandomNumber(35),
        jumlahKabupatenKota: 35,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "D.I. Yogyakarta",
        progress: getRandomNumber(4),
        jumlahKabupatenKota: 4,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Jawa Timur",
        progress: getRandomNumber(38),
        jumlahKabupatenKota: 38,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Banten",
        progress: getRandomNumber(4),
        jumlahKabupatenKota: 4,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Bali",
        progress: getRandomNumber(9),
        jumlahKabupatenKota: 9,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Nusa Tenggara Barat",
        progress: getRandomNumber(8),
        jumlahKabupatenKota: 8,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Nusa Tenggara Timur",
        progress: getRandomNumber(21),
        jumlahKabupatenKota: 21,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Kalimantan Barat",
        progress: getRandomNumber(14),
        jumlahKabupatenKota: 14,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Kalimantan Tengah",
        progress: getRandomNumber(13),
        jumlahKabupatenKota: 13,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Kalimantan Selatan",
        progress: getRandomNumber(11),
        jumlahKabupatenKota: 11,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Kalimantan Timur",
        progress: getRandomNumber(10),
        jumlahKabupatenKota: 10,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Kalimantan Utara",
        progress: getRandomNumber(4),
        jumlahKabupatenKota: 4,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Sulawesi Utara",
        progress: getRandomNumber(11),
        jumlahKabupatenKota: 11,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Sulawesi Tengah",
        progress: getRandomNumber(9),
        jumlahKabupatenKota: 9,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Sulawesi Selatan",
        progress: getRandomNumber(21),
        jumlahKabupatenKota: 21,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Sulawesi Tenggara",
        progress: getRandomNumber(8),
        jumlahKabupatenKota: 8,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Gorontalo",
        progress: getRandomNumber(5),
        jumlahKabupatenKota: 5,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Sulawesi Barat",
        progress: getRandomNumber(6),
        jumlahKabupatenKota: 6,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Maluku",
        progress: getRandomNumber(9),
        jumlahKabupatenKota: 9,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Maluku Utara",
        progress: getRandomNumber(8),
        jumlahKabupatenKota: 8,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Papua Barat",
        progress: getRandomNumber(12),
        jumlahKabupatenKota: 12,
        lastUpdate: getRandomTime(),
      },
      {
        nama: "Papua",
        progress: getRandomNumber(29),
        jumlahKabupatenKota: 29,
        lastUpdate: getRandomTime(),
      },
    ];

    function getRandomNumber(max) {
      return Math.floor(Math.random() * (max + 1));
    }

    function getRandomTime() {
      const currentDate = new Date();
      const randomHour = Math.floor(Math.random() * 24); // Angka acak antara 0 hingga 23
      const randomMinute = Math.floor(Math.random() * 60); // Angka acak antara 0 hingga 59
      const randomSecond = Math.floor(Math.random() * 60); // Angka acak antara 0 hingga 59

      // Set waktu acak ke tanggal saat ini
      currentDate.setHours(randomHour, randomMinute, randomSecond, 0);

      return currentDate;
    }

    return {
      moment,
      columns,
      province,
      year: "2023",
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chartOptions: {
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
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },

      series2: [getRandomNumber(100)],
      chartOptions2: {
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
            },
            dataLabels: {
              name: {
                offsetY: 40,
                show: true,
              },
              value: {
                offsetY: -2,
                fontSize: "22px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },

        colors: ["#243763"],
        labels: ["22 / 34"],
      },
    };
  },
});
</script>
