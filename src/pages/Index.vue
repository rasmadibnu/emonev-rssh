<template>
  <q-layout v-scroll="onScroll" view="hHh lpR fFf">
    <q-header reveal v-model="isReveal" class="bg-white text-primary">
      <q-toolbar>
        <div class="tw-font-bold tw-py-3 text-center tw-flex tw-justify-center tw-flex-col tw-w-full">
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
      <q-page class="tw-pt-36">
        <q-tab-panels v-model="tab" animated class="tw-bg-gray-50">
          <q-tab-panel name="Dashboard1">
            <index-dashboard />
          </q-tab-panel>
          <q-tab-panel name="Dashboard2">
            <province-dashboard />
          </q-tab-panel>
          <q-tab-panel name="Dashboard3">
            <partnership-dashboard />
          </q-tab-panel>
          <q-tab-panel name="Dashboard4">
            <trend-dashboard />
          </q-tab-panel>
          <q-tab-panel name="Dashboard5">
            <div class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8">
              <q-card flat class="tw-mt-4 md:tw-grid tw-grid-cols-12 tw-p-4 tw-gap-4">
                <div class="tw-col-span-12 tw-flex tw-justify-between tw-items-center">
                  <div class="tw-text-xl tw-font-semibold">Anggaran</div>
                  <div></div>
                </div>
                <q-table flat class="tw-col-span-8" :columns="columns_penginputan" :rows="progress_penginputan">
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td>
                        {{ props.row.Name }}
                      </q-td>
                      <td>
                        <q-badge label="Completed" v-if="props.row.Status == 'Completed'" color="positive" />
                        <q-badge label="Belum Input" v-else-if="props.row.Status == 'Belum Input'" color="negative" />
                        <q-badge label="Progress" v-else-if="props.row.Status == 'Progress'" color="secondary" />
                      </td>
                      <q-td class="tw-flex tw-items-center">
                        <div style="font-size: 0.8em" class="tw-mt-1 tw-mr-2 text-primary">
                          {{
                            parseFloat(props.row.Progress * 100).toFixed(0) +
                            "%"
                          }}
                        </div>
                        <q-linear-progress rounded stripe size="25px" :value="props.row.Progress" color="accent"
                          class="q-mt-sm">
                          <div class="absolute-full flex flex-center">
                            <q-badge color="white" text-color="accent" :label="props.row.JumlahInput +
                              '/' +
                              props.row.Regencies.length
                              " />
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
                  <apex type="radialBar" :options="chart_penginputan" :series="series_penginputan" ref="radialAnggaran">
                  </apex>
                  <q-separator />
                  <q-list>
                    <q-item class="tw-flex tw-justify-between tw-items-center">
                      <q-item-section avatar>
                        <q-avatar color="positive" size="50px">
                          <vx-icon iconName="TickCircle" class="text-white" :size="'24'" />
                        </q-avatar>
                      </q-item-section>

                      <div side class="tw-text-right">
                        <div class="tw-text-lg tw-font-semibold">
                          {{
                            this.progress_penginputan.filter(
                              (e) => e.Status == "Completed"
                            ).length
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
                          {{
                            this.progress_penginputan.filter(
                              (e) => e.Status == "Progress"
                            ).length
                          }}
                        </div>
                        <div>Progress</div>
                      </div>
                    </q-item>
                    <q-item class="tw-flex tw-justify-between tw-items-center">
                      <q-item-section avatar>
                        <q-avatar color="negative" size="50px">
                          <vx-icon iconName="ClipboardClose" class="text-white" :size="'24'" />
                        </q-avatar>
                      </q-item-section>

                      <div side class="tw-text-right">
                        <div class="tw-text-lg tw-font-semibold">
                          {{
                            this.progress_penginputan.filter(
                              (e) => e.Status == "Belum Input"
                            ).length
                          }}
                        </div>
                        <div>Belum Input</div>
                      </div>
                    </q-item>
                  </q-list>
                </div>
              </q-card>
              <q-card flat class="tw-mt-4 md:tw-grid tw-grid-cols-12 tw-p-4 tw-gap-4">
                <div class="tw-col-span-12 tw-flex tw-justify-between tw-items-center">
                  <div class="tw-text-xl tw-font-semibold">Kemitraan</div>
                  <div></div>
                </div>
                <q-table flat class="tw-col-span-8" :columns="columns_partnership" :rows="progress_partnership">
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td>
                        {{ props.row.Name }}
                      </q-td>
                      <td>
                        <q-badge label="Completed" v-if="props.row.Status == 'Completed'" color="positive" />
                        <q-badge label="Belum Input" v-else-if="props.row.Status == 'Belum Input'" color="negative" />
                        <q-badge label="Progress" v-else-if="props.row.Status == 'Progress'" color="secondary" />
                      </td>
                      <q-td>
                        <div class="tw-flex tw-items-center">
                          <div style="font-size: 0.8em" class="tw-mt-1 tw-mr-2 text-primary">
                            {{
                              parseFloat(props.row.ProgressSKPD * 100).toFixed(
                                0
                              ) + "%"
                            }}
                          </div>
                          <q-linear-progress rounded stripe size="25px" :value="props.row.ProgressSKPD" color="accent"
                            class="q-mt-sm">
                            <div class="absolute-full flex flex-center">
                              <q-badge color="white" text-color="accent" :label="props.row.JumlahInputSKPD +
                                '/' +
                                props.row.Regencies.length
                                " />
                            </div>
                          </q-linear-progress>
                        </div>
                      </q-td>
                      <q-td>
                        <div class="tw-flex tw-items-center">
                          <div style="font-size: 0.8em" class="tw-mt-1 tw-mr-2 text-primary">
                            {{
                              parseFloat(props.row.ProgressCSR * 100).toFixed(
                                0
                              ) + "%"
                            }}
                          </div>
                          <q-linear-progress rounded stripe size="25px" :value="props.row.ProgressCSR" color="accent"
                            class="q-mt-sm">
                            <div class="absolute-full flex flex-center">
                              <q-badge color="white" text-color="accent" :label="props.row.JumlahInputCSR +
                                '/' +
                                props.row.Regencies.length
                                " />
                            </div>
                          </q-linear-progress>
                        </div>
                      </q-td>
                      <q-td>
                        <div class="tw-flex tw-items-center">
                          <div style="font-size: 0.8em" class="tw-mt-1 tw-mr-2 text-primary">
                            {{
                              parseFloat(
                                props.row.ProgressVillage * 100
                              ).toFixed(0) + "%"
                            }}
                          </div>
                          <q-linear-progress rounded stripe size="25px" :value="props.row.ProgressVillage"
                            color="accent" class="q-mt-sm">
                            <div class="absolute-full flex flex-center">
                              <q-badge color="white" text-color="accent" :label="props.row.JumlahInputVillage +
                                '/' +
                                props.row.Regencies.length
                                " />
                            </div>
                          </q-linear-progress>
                        </div>
                      </q-td>
                      <q-td>
                        <div class="tw-flex tw-items-center">
                          <div style="font-size: 0.8em" class="tw-mt-1 tw-mr-2 text-primary">
                            {{
                              parseFloat(props.row.ProgressSK * 100).toFixed(
                                0
                              ) + "%"
                            }}
                          </div>
                          <q-linear-progress rounded stripe size="25px" :value="props.row.ProgressSK" color="accent"
                            class="q-mt-sm">
                            <div class="absolute-full flex flex-center">
                              <q-badge color="white" text-color="accent" :label="props.row.JumlahInputSK +
                                '/' +
                                props.row.Regencies.length
                                " />
                            </div>
                          </q-linear-progress>
                        </div>
                      </q-td>
                      <!-- <q-td>
              {{ moment(props.row.UpdatedAt).format("YYYY-MM-DD hh:mm:ss") }}
            </q-td> -->
                    </q-tr>
                  </template>
                </q-table>
                <div class="tw-col-span-4 tw-w-full">
                  <apex type="radialBar" :options="chart_parterhsip" :series="series_parterhsip"
                    ref="radialPartnership"></apex>
                  <q-separator />
                  <q-list>
                    <q-item class="tw-flex tw-justify-between tw-items-center">
                      <q-item-section avatar>
                        <q-avatar color="positive" size="50px">
                          <vx-icon iconName="TickCircle" class="text-white" :size="'24'" />
                        </q-avatar>
                      </q-item-section>

                      <div side class="tw-text-right">
                        <div class="tw-text-lg tw-font-semibold">
                          {{
                            this.progress_partnership.filter(
                              (e) => e.Status == "Completed"
                            ).length
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
                          {{
                            this.progress_partnership.filter(
                              (e) => e.Status == "Progress"
                            ).length
                          }}
                        </div>
                        <div>Progress</div>
                      </div>
                    </q-item>
                    <q-item class="tw-flex tw-justify-between tw-items-center">
                      <q-item-section avatar>
                        <q-avatar color="negative" size="50px">
                          <vx-icon iconName="ClipboardClose" class="text-white" :size="'24'" />
                        </q-avatar>
                      </q-item-section>

                      <div side class="tw-text-right">
                        <div class="tw-text-lg tw-font-semibold">
                          {{
                            this.progress_partnership.filter(
                              (e) => e.Status == "Belum Input"
                            ).length
                          }}
                        </div>
                        <div>Belum Input</div>
                      </div>
                    </q-item>
                  </q-list>
                </div>
              </q-card>
              <q-card flat class="tw-mt-4 md:tw-grid tw-grid-cols-12 tw-p-4 tw-gap-4">
                <div class="tw-col-span-12 tw-flex tw-justify-between tw-items-center">
                  <div class="tw-text-xl tw-font-semibold">
                    Dokumen Perencanaan
                  </div>
                  <div></div>
                </div>
                <q-table flat class="tw-col-span-8" :columns="columns_planning" :rows="progress_planning">
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td>
                        {{ props.row.Name }}
                      </q-td>
                      <td>
                        <q-badge label="Completed" v-if="props.row.Status == 'Completed'" color="positive" />
                        <q-badge label="Belum Input" v-else-if="props.row.Status == 'Belum Input'" color="negative" />
                        <q-badge label="Progress" v-else-if="props.row.Status == 'Progress'" color="secondary" />
                      </td>
                      <q-td>
                        <div class="tw-flex tw-items-center">
                          <div style="font-size: 0.8em" class="tw-mt-1 tw-mr-2 text-primary">
                            {{
                              parseFloat(props.row.ProgressRKPD * 100).toFixed(
                                0
                              ) + "%"
                            }}
                          </div>
                          <q-linear-progress rounded stripe size="25px" :value="props.row.ProgressRKPD" color="accent"
                            class="q-mt-sm">
                            <div class="absolute-full flex flex-center">
                              <q-badge color="white" text-color="accent" :label="props.row.JumlahInputRKPD +
                                '/' +
                                props.row.Regencies.length
                                " />
                            </div>
                          </q-linear-progress>
                        </div>
                      </q-td>
                      <q-td>
                        <div class="tw-flex tw-items-center">
                          <div style="font-size: 0.8em" class="tw-mt-1 tw-mr-2 text-primary">
                            {{
                              parseFloat(props.row.ProgressRenja * 100).toFixed(
                                0
                              ) + "%"
                            }}
                          </div>
                          <q-linear-progress rounded stripe size="25px" :value="props.row.ProgressRenja" color="accent"
                            class="q-mt-sm">
                            <div class="absolute-full flex flex-center">
                              <q-badge color="white" text-color="accent" :label="props.row.JumlahInputRenja +
                                '/' +
                                props.row.Regencies.length
                                " />
                            </div>
                          </q-linear-progress>
                        </div>
                      </q-td>
                      <!-- <q-td>
              {{ moment(props.row.UpdatedAt).format("YYYY-MM-DD hh:mm:ss") }}
            </q-td> -->
                    </q-tr>
                  </template>
                </q-table>
                <div class="tw-col-span-4 tw-w-full">
                  <apex type="radialBar" :options="chart_planning" :series="series_planning" ref="radialPlanning">
                  </apex>
                  <q-separator />
                  <q-list>
                    <q-item class="tw-flex tw-justify-between tw-items-center">
                      <q-item-section avatar>
                        <q-avatar color="positive" size="50px">
                          <vx-icon iconName="TickCircle" class="text-white" :size="'24'" />
                        </q-avatar>
                      </q-item-section>

                      <div side class="tw-text-right">
                        <div class="tw-text-lg tw-font-semibold">
                          {{
                            this.progress_planning.filter(
                              (e) => e.Status == "Completed"
                            ).length
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
                          {{
                            this.progress_planning.filter(
                              (e) => e.Status == "Progress"
                            ).length
                          }}
                        </div>
                        <div>Progress</div>
                      </div>
                    </q-item>
                    <q-item class="tw-flex tw-justify-between tw-items-center">
                      <q-item-section avatar>
                        <q-avatar color="negative" size="50px">
                          <vx-icon iconName="ClipboardClose" class="text-white" :size="'24'" />
                        </q-avatar>
                      </q-item-section>

                      <div side class="tw-text-right">
                        <div class="tw-text-lg tw-font-semibold">
                          {{
                            this.progress_planning.filter(
                              (e) => e.Status == "Belum Input"
                            ).length
                          }}
                        </div>
                        <div>Belum Input</div>
                      </div>
                    </q-item>
                  </q-list>
                </div>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>

        <q-page-sticky class="tw-z-50" expand position="top">
          <div class="bg-primary tw-w-full">
            <div class="tw-flex tw-justify-between text-white tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-py-3">
              <div class="tw-flex tw-items-center tw-gap-4">
                <span class="tw-text-gray-400">Tahun Terpilih</span> /
                <q-select class="my-select" :options="list_year" v-model="dsStore.year" borderless dense
                  @update:model-value="onUpdateYear" />
              </div>
              <q-btn color="secondary" :label="authStore.token ? 'Dashboard' : 'Masuk'"
                :to="{ name: authStore.token ? 'beranda' : 'login' }" unelevated no-caps />
            </div>
            <q-tabs v-model="tab" align="justify" no-caps class="text-white" active-class="text-bold"
              @update:model-value="onUpdateYear">
              <q-tab name="Dashboard1" label="Rekapitulasi Anggaran ATM" />
              <q-tab name="Dashboard2" label="Rekapitulasi Per Provinsi" />
              <q-tab name="Dashboard3" label="Rekapitulasi Kemitraan" />
              <q-tab name="Dashboard4" label="Trend Anggaran Nasional" />
              <q-tab name="Dashboard5" label="Absensi" />
            </q-tabs>
          </div>
        </q-page-sticky>
        <footer class="text-center tw-py-10">
          {{ new Date().getFullYear() }} © Copyright All Right Reserved
        </footer>
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
import ApexCharts from "apexcharts";
import VxIcon from "src/components/VxIcon.vue";
import IndexDashboard from "src/components/Dashboard/Index.vue";
import ProvinceDashboard from "src/components/Dashboard/Province.vue";
import PartnershipDashboard from "src/components/Dashboard/Partnership.vue";
import TrendDashboard from "src/components/Dashboard/Trend.vue";

import { useDashbaordStore } from "src/stores/dashboard";

export default defineComponent({
  components: { Apex, VxIcon, IndexDashboard, ProvinceDashboard, PartnershipDashboard, TrendDashboard },
  setup() {
    const authStore = useAuthStore();
    const dsStore = useDashbaordStore()

    const columns_penginputan = [
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

    const columns_planning = [
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
        name: "ProgressRKPD",
        align: "left",
        label: "Progress RKPD",
        field: "Progress",
        sortable: true,
      },
      {
        name: "ProgressRenja",
        align: "left",
        label: "Progress Renja Dinkes",
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

    const columns_partnership = [
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
        name: "ProgressSKPD",
        align: "left",
        label: "SKPD",
        field: "Progress",
        sortable: true,
      },
      {
        name: "ProgressCSR",
        align: "left",
        label: "CSR",
        field: "Progress",
        sortable: true,
      },
      {
        name: "ProgressDanaDesa",
        align: "left",
        label: "Dana Desa",
        field: "Progress",
        sortable: true,
      },
      {
        name: "ProgressSK",
        align: "left",
        label: "SK",
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
      authStore,
      dsStore,


      indexRef: ref(null),

      isReveal: ref(true),
      columns_penginputan,
      columns_planning,
      columns_partnership,
      progress_penginputan: ref([]),
      progress_planning: ref([]),
      progress_partnership: ref([]),
      count: ref([]),


      series_penginputan: ref([0]),
      chart_penginputan: ref({
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
          id: "radialAnggaran",
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

      series_planning: ref([0]),
      chart_planning: ref({
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
          id: "radialPlanning",
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

      series_parterhsip: ref([0]),
      chart_parterhsip: ref({
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
          id: "radialPartnership",
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

      year: ref(null),

      list_year: ref([]),
      options_province: ref([]),
      province_kemitraan: ref(null),
      tab: ref("Dashboard1"),


    };
  },
  mounted() {
    this.getYear();
    this.getProvince();
  },
  methods: {
    getYear() {
      this.$api
        .get('/forms?Limit=-&Filters={"Type": "budget"}&Sort=year asc')
        .then((res) => {
          this.list_year = res.data.data.Rows.map((year) => {
            return { label: year.Year, value: year.ID };
          });

          this.dsStore.years = this.list_year
          return this.list_year;
        })
        .then((res) => {
          if (!this.authStore.year_selected) {
            const nowYear = new Date().getFullYear();
            const findYear = res.find((year) => year.label == nowYear);
            if (findYear) {
              this.dsStore.year = findYear
              this.authStore.year_selected = findYear.value;
            } else {
              this.dsStore.year = res[0]
              this.authStore.year_selected = res[0].value;
            }
          }
        })
        .then(() => {
          this.onUpdateYear();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getProvince() {
      this.$api
        .get("/groups/locus")
        .then((res) => {
          this.dsStore.provinces = res.data.data.map((e) => {
            return { label: e.name, value: e.id };
          });
          this.dsStore.province_id = this.dsStore.provinces[0].value;
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


    getProgess(val) {
      const findYear = this.list_year.find((year) => year.value == val);
      return this.$api
        .get("/forms/" + findYear.label + "/progress")
        .then((res) => {
          this.progress_penginputan = res.data.data.map((e) => {
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

          var jumlah_completed = this.progress_penginputan.filter(
            (e) => e.Status == "Completed"
          ).length;

          this.series_penginputan[0] = parseInt(
            parseFloat(
              (jumlah_completed / this.progress_penginputan.length) * 100
            ).toFixed(0)
          );

          ApexCharts.getChartByID("radialAnggaran").updateOptions({
            labels: [
              jumlah_completed + " / " + this.progress_penginputan.length,
            ],
          });
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getPlanning(val) {
      const findYear = this.list_year.find((year) => year.value == val);
      return this.$api
        .get("/forms/" + findYear.label + "/progress/planning")
        .then((res) => {
          this.progress_planning = res.data.data.map((e) => {
            var jumlah_input_rkpd = e.Regencies.filter(
              (r) => r.RKPD == true
            ).length;

            var jumlah_input_renja = e.Regencies.filter(
              (r) => r.Renja == true
            ).length;
            var status = "";
            if (jumlah_input_rkpd == 0 && jumlah_input_renja == 0) {
              status = "Belum Input";
            } else if (
              jumlah_input_rkpd < e.Regencies.length ||
              jumlah_input_renja < e.Regencies.length
            ) {
              status = "Progress";
            } else if (
              jumlah_input_rkpd >= e.Regencies.length &&
              jumlah_input_renja >= e.Regencies.length
            ) {
              status = "Completed";
            }
            return {
              ...e,
              Status: status,
              ProgressRKPD: jumlah_input_rkpd / e.Regencies.length,
              JumlahInputRKPD: jumlah_input_rkpd,
              ProgressRenja: jumlah_input_renja / e.Regencies.length,
              JumlahInputRenja: jumlah_input_renja,
            };
          });

          var jumlah_completed = this.progress_planning.filter(
            (e) => e.Status == "Completed"
          ).length;
          this.series_planning[0] = parseInt(
            parseFloat(
              (jumlah_completed / this.progress_planning.length) * 100
            ).toFixed(0)
          );

          ApexCharts.getChartByID("radialPlanning").updateOptions({
            labels: [jumlah_completed + " / " + this.progress_planning.length],
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getPartnerhsip(val) {
      const findYear = this.list_year.find((year) => year.value == val);
      return this.$api
        .get("/forms/" + findYear.label + "/progress/partnership")
        .then((res) => {
          this.progress_partnership = res.data.data.map((e) => {
            var jumlah_input_skpd = e.Regencies.filter(
              (r) => r.SKPD == true
            ).length;

            var jumlah_input_csr = e.Regencies.filter(
              (r) => r.CSR == true
            ).length;

            var jumlah_input_village = e.Regencies.filter(
              (r) => r.Village == true
            ).length;

            var jumlah_input_sk = e.Regencies.filter(
              (r) => r.SK == true
            ).length;

            var status = "";
            if (
              jumlah_input_skpd == 0 &&
              jumlah_input_csr == 0 &&
              jumlah_input_village == 0 &&
              jumlah_input_sk == 0
            ) {
              status = "Belum Input";
            } else if (
              jumlah_input_skpd < e.Regencies.length ||
              jumlah_input_csr < e.Regencies.length ||
              jumlah_input_village < e.Regencies.length ||
              jumlah_input_sk < e.Regencies.length
            ) {
              status = "Progress";
            } else if (
              jumlah_input_skpd >= e.Regencies.length &&
              jumlah_input_csr >= e.Regencies.length &&
              jumlah_input_village >= e.Regencies.length &&
              jumlah_input_sk >= e.Regencies.length
            ) {
              status = "Completed";
            }
            return {
              ...e,
              Status: status,
              ProgressSKPD: jumlah_input_skpd / e.Regencies.length,
              JumlahInputSKPD: jumlah_input_skpd,
              ProgressCSR: jumlah_input_csr / e.Regencies.length,
              JumlahInputCSR: jumlah_input_csr,
              ProgressVillage: jumlah_input_village / e.Regencies.length,
              JumlahInputVillage: jumlah_input_village,
              ProgressSK: jumlah_input_sk / e.Regencies.length,
              JumlahInputSK: jumlah_input_sk,
            };
          });

          var jumlah_completed = this.progress_partnership.filter(
            (e) => e.Status == "Completed"
          ).length;
          this.series_parterhsip[0] = parseInt(
            parseFloat(
              (jumlah_completed / this.progress_partnership.length) * 100
            ).toFixed(0)
          );

          ApexCharts.getChartByID("radialPartnership").updateOptions({
            labels: [jumlah_completed + " / " + this.progress_planning.length],
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    onUpdateYear() {

      const findYear = this.list_year.find((year) => { return year.value == this.dsStore.year.value })

      this.authStore.year_selected = findYear.value

      if (this.tab == "Dashboard5") {
        this.getProgess(this.authStore.year_selected);
        this.getPlanning(this.authStore.year_selected);
        this.getPartnerhsip(this.authStore.year_selected);
      }
    },

  },
});
</script>
