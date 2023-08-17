<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Beranda</div>
    <div class="tw-grid md:tw-grid-cols-3 tw-gap-4">
      <q-card v-for="item in count" :key="item" flat class="tw-rounded-lg">
        <q-card-section class="tw-group tw-flex tw-justify-between">
          <q-avatar
            size="50px"
            :style="{ backgroundColor: item.Color }"
            class="tw-transition-all tw-duration-300 tw-transform group-hover:tw-rotate-12"
          >
            <vx-icon
              :iconName="item.Icon"
              class="text-white tw-transform tw-transition-transform tw-duration-500 tw-ease-in-out"
              :size="'24'"
            />
          </q-avatar>
          <div class="tw-text-right">
            <p class="tw-text-2xl tw-font-semibold">{{ item.Value }}</p>
            <p>{{ item.Name }}</p>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <q-card flat class="tw-mt-4 md:tw-grid tw-grid-cols-12 tw-p-4 tw-gap-4">
      <div class="tw-col-span-12 tw-flex tw-justify-between tw-items-center">
        <div class="tw-text-xl tw-font-semibold">Progress Penginputan</div>
        <q-select
          v-model="year"
          :options="list_year"
          dense
          label="Tahun"
          class="tw-w-44"
          map-options
          emit-value
        />
      </div>
      <q-table flat class="tw-col-span-8" :columns="columns" :rows="progress">
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td>
              {{ props.row.Name }}
            </q-td>
            <td>
              <q-badge
                label="Completed"
                v-if="props.row.Status == 'Completed'"
                color="positive"
              />
              <q-badge
                label="Belum Input"
                v-else-if="props.row.Status == 'Belum Input'"
                color="negative"
              />
              <q-badge
                label="Progress"
                v-else-if="props.row.Status == 'Progress'"
                color="secondary"
              />
            </td>
            <q-td class="tw-flex tw-items-center">
              <div
                style="font-size: 0.8em"
                class="tw-mt-1 tw-mr-2 text-primary"
              >
                {{ parseFloat(props.row.Progress * 100).toFixed(0) + "%" }}
              </div>
              <q-linear-progress
                rounded
                stripe
                size="25px"
                :value="props.row.Progress"
                color="accent"
                class="q-mt-sm"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    color="white"
                    text-color="accent"
                    :label="
                      props.row.JumlahInput + '/' + props.row.Regencies.length
                    "
                  />
                </div>
              </q-linear-progress>
            </q-td>
            <!-- <q-td>
              {{ moment(props.row.UpdatedAt).format("YYYY-MM-DD hh:mm:ss") }}
            </q-td> -->
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
              <div class="tw-text-lg tw-font-semibold">
                {{
                  this.progress.filter((e) => e.Status == "Completed").length
                }}
              </div>
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
              <div class="tw-text-lg tw-font-semibold">
                {{ this.progress.filter((e) => e.Status == "Progress").length }}
              </div>
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
              <div class="tw-text-lg tw-font-semibold">
                {{
                  this.progress.filter((e) => e.Status == "Belum Input").length
                }}
              </div>
              <div>Belum Input</div>
            </div>
          </q-item>
        </q-list>
      </div>
    </q-card>
    <!-- <q-card id="chart" flat class="tw-mt-4">
      <q-card-section>
        <apex-chart
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apex-chart>
      </q-card-section>
    </q-card> -->
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
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
      // {
      //   name: "Last Update",
      //   align: "left",
      //   label: "Last Update",
      //   field: "Last Update",
      //   sortable: true,
      // },
    ];

    return {
      moment,
      columns,
      year: ref(null),

      list_year: ref([]),
      progress: ref([]),
      count: ref([]),
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

      series2: ref([0]),
      chartOptions2: ref({
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
        labels: ["- / -"],
      }),
    };
  },
  mounted() {
    this.getYear();
    this.getDashboard();
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
          this.getProgess(this.year);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProgess(val) {
      const findYear = this.list_year.find((year) => year.value == val);
      return this.$api
        .get("/forms/" + findYear.label + "/progress")
        .then((res) => {
          this.progress = res.data.data.map((e) => {
            var jumlah_input = e.Regencies.filter(
              (r) => r.IsInput == true
            ).length;
            var status = "";
            if (jumlah_input == 0) {
              status = "Belum Input";
            } else if (jumlah_input < e.Regencies.length) {
              status = "Progress";
            } else if (jumlah_input >= e.Regencies.length) {
              status = "Completed";
            }
            return {
              ...e,
              Status: status,
              Progress: jumlah_input / e.Regencies.length,
              JumlahInput: jumlah_input,
            };
          });

          var jumlah_completed = this.progress.filter(
            (e) => e.Status == "Completed"
          ).length;
          this.series2[0] = parseFloat(
            jumlah_completed / this.progress.length
          ).toFixed(0);

          this.chartOptions2.labels[0] = [
            jumlah_completed + " / " + this.progress.length,
          ];
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getDashboard() {
      return this.$api.get("/result/summary").then((res) => {
        this.count = res.data.data;
      });
    },
  },
});
</script>
