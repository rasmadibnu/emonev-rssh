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
      <q-page class="tw-pt-36">
        <q-tab-panels v-model="tab" animated class="tw-bg-gray-50">
          <q-tab-panel name="Dashboard1">
            <div
              class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8 tw-min-h-screen"
            >
              <q-card flat>
                <q-card-section class="text-primary tw-text-xl">
                  Anggaran ATM Terhadap Bidang Kesehatan
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
            </div>
          </q-tab-panel>

          <q-tab-panel name="Dashboard2">
            <div class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8">
              <q-card flat class="tw-mb-20">
                <q-card-section
                  class="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center"
                >
                  <div class="text-primary tw-text-xl">
                    Anggaran ATM Provinsi
                  </div>
                  <q-select
                    :options="list_province"
                    label="Provinsi"
                    v-model="province"
                    map-options
                    emit-value
                    use-input
                    @filter="filterProvince"
                    @update:model-value="updateProvince"
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
                <q-card-section class="q-pt-none">
                  <q-table
                    flat
                    :rows="province_table"
                    hide-pagination
                    :columns="province_table_column"
                    table-header-class="bg-secondary text-white"
                    separator="vertical"
                  >
                  </q-table>
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Dashboard3">
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
                    ref="chartPartnership"
                  ></apex>
                </q-card-section>
              </q-card>
              <div
                class="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center"
              >
                <div class="text-primary tw-text-xl">Per Provinsi</div>
                <q-select
                  :options="list_province"
                  label="Provinsi"
                  v-model="province_kemitraan"
                  map-options
                  emit-value
                  use-input
                  @filter="filterProvince"
                  @update:model-value="updateProvinceKemirtraan"
                />
              </div>
              <q-card flat>
                <q-card-section class="text-primary tw-text-xl">
                  Persentase capaian kemitraan untuk ATM
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex
                    type="bar"
                    height="250"
                    :options="chartOptionsPerProvince"
                    :series="seriesPerProvince"
                    ref="chartPartnershipPerProvince"
                  ></apex>
                </q-card-section>
                <q-card-section class="text-primary tw-text-xl">
                  Jumlah Desa yang mendapatkan ATM
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex
                    type="bar"
                    height="350"
                    :options="chartOptionVillageCount"
                    :series="seriesVillageCount"
                    ref="chartVillageCount"
                  ></apex>
                </q-card-section>
                <q-card-section class="text-primary tw-text-xl">
                  Dana Desa
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex
                    type="bar"
                    height="350"
                    :options="chartOptionVillageFund"
                    :series="seriesVillageFund"
                    ref="chartVillageFund"
                  ></apex>
                </q-card-section>
                <q-card-section class="text-primary tw-text-xl">
                  Dana CSR
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex
                    type="bar"
                    height="350"
                    :options="chartOptionCSR"
                    :series="seriesCSR"
                    ref="chartCSR"
                  ></apex>
                </q-card-section>
                <q-card-section class="text-primary tw-text-xl">
                  Dana SKPDN
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex
                    type="bar"
                    height="350"
                    :options="chartOptionSKPDN"
                    :series="seriesSKPDN"
                    ref="chartSKPDN"
                  ></apex>
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Dashboard4">
            <div class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8">
              <q-card
                flat
                class="tw-mt-4 md:tw-grid tw-grid-cols-12 tw-p-4 tw-gap-4"
              >
                <div
                  class="tw-col-span-12 tw-flex tw-justify-between tw-items-center"
                >
                  <div class="tw-text-xl tw-font-semibold">Anggaran</div>
                  <div></div>
                </div>
                <q-table
                  flat
                  class="tw-col-span-8"
                  :columns="columns_penginputan"
                  :rows="progress_penginputan"
                >
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
                          {{
                            parseFloat(props.row.Progress * 100).toFixed(0) +
                            "%"
                          }}
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
                                props.row.JumlahInput +
                                '/' +
                                props.row.Regencies.length
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
                    :options="chart_penginputan"
                    :series="series_penginputan"
                    ref="radialAnggaran"
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
                          <vx-icon
                            iconName="Bookmark"
                            class="text-white"
                            :size="'24'"
                          />
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
              <q-card
                flat
                class="tw-mt-4 md:tw-grid tw-grid-cols-12 tw-p-4 tw-gap-4"
              >
                <div
                  class="tw-col-span-12 tw-flex tw-justify-between tw-items-center"
                >
                  <div class="tw-text-xl tw-font-semibold">Kemitraan</div>
                  <div></div>
                </div>
                <q-table
                  flat
                  class="tw-col-span-8"
                  :columns="columns_planning"
                  :rows="progress_planning"
                >
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
                      <q-td>
                        <div class="tw-flex tw-items-center">
                          <div
                            style="font-size: 0.8em"
                            class="tw-mt-1 tw-mr-2 text-primary"
                          >
                            {{
                              parseFloat(props.row.ProgressRKPD * 100).toFixed(
                                0
                              ) + "%"
                            }}
                          </div>
                          <q-linear-progress
                            rounded
                            stripe
                            size="25px"
                            :value="props.row.ProgressRKPD"
                            color="accent"
                            class="q-mt-sm"
                          >
                            <div class="absolute-full flex flex-center">
                              <q-badge
                                color="white"
                                text-color="accent"
                                :label="
                                  props.row.JumlahInputRKPD +
                                  '/' +
                                  props.row.Regencies.length
                                "
                              />
                            </div>
                          </q-linear-progress>
                        </div>
                      </q-td>
                      <q-td>
                        <div class="tw-flex tw-items-center">
                          <div
                            style="font-size: 0.8em"
                            class="tw-mt-1 tw-mr-2 text-primary"
                          >
                            {{
                              parseFloat(props.row.ProgressRenja * 100).toFixed(
                                0
                              ) + "%"
                            }}
                          </div>
                          <q-linear-progress
                            rounded
                            stripe
                            size="25px"
                            :value="props.row.ProgressRenja"
                            color="accent"
                            class="q-mt-sm"
                          >
                            <div class="absolute-full flex flex-center">
                              <q-badge
                                color="white"
                                text-color="accent"
                                :label="
                                  props.row.JumlahInputRenja +
                                  '/' +
                                  props.row.Regencies.length
                                "
                              />
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
                  <apex-chart
                    type="radialBar"
                    :options="chart_planning"
                    :series="series_planning"
                    ref="radialPlanning"
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
                          <vx-icon
                            iconName="Bookmark"
                            class="text-white"
                            :size="'24'"
                          />
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
              <q-card
                flat
                class="tw-mt-4 md:tw-grid tw-grid-cols-12 tw-p-4 tw-gap-4"
              >
                <div
                  class="tw-col-span-12 tw-flex tw-justify-between tw-items-center"
                >
                  <div class="tw-text-xl tw-font-semibold">
                    Dokumen Perencanaan
                  </div>
                  <div></div>
                </div>
                <q-table
                  flat
                  class="tw-col-span-8"
                  :columns="columns_planning"
                  :rows="progress_planning"
                >
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
                      <q-td>
                        <div class="tw-flex tw-items-center">
                          <div
                            style="font-size: 0.8em"
                            class="tw-mt-1 tw-mr-2 text-primary"
                          >
                            {{
                              parseFloat(props.row.ProgressRKPD * 100).toFixed(
                                0
                              ) + "%"
                            }}
                          </div>
                          <q-linear-progress
                            rounded
                            stripe
                            size="25px"
                            :value="props.row.ProgressRKPD"
                            color="accent"
                            class="q-mt-sm"
                          >
                            <div class="absolute-full flex flex-center">
                              <q-badge
                                color="white"
                                text-color="accent"
                                :label="
                                  props.row.JumlahInputRKPD +
                                  '/' +
                                  props.row.Regencies.length
                                "
                              />
                            </div>
                          </q-linear-progress>
                        </div>
                      </q-td>
                      <q-td>
                        <div class="tw-flex tw-items-center">
                          <div
                            style="font-size: 0.8em"
                            class="tw-mt-1 tw-mr-2 text-primary"
                          >
                            {{
                              parseFloat(props.row.ProgressRenja * 100).toFixed(
                                0
                              ) + "%"
                            }}
                          </div>
                          <q-linear-progress
                            rounded
                            stripe
                            size="25px"
                            :value="props.row.ProgressRenja"
                            color="accent"
                            class="q-mt-sm"
                          >
                            <div class="absolute-full flex flex-center">
                              <q-badge
                                color="white"
                                text-color="accent"
                                :label="
                                  props.row.JumlahInputRenja +
                                  '/' +
                                  props.row.Regencies.length
                                "
                              />
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
                  <apex-chart
                    type="radialBar"
                    :options="chart_planning"
                    :series="series_planning"
                    ref="radialPlanning"
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
                          <vx-icon
                            iconName="Bookmark"
                            class="text-white"
                            :size="'24'"
                          />
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
                  @update:model-value="onUpdateYear"
                />
              </div>
              <q-btn
                color="secondary"
                :label="authStore.token ? 'Dashboard' : 'Masuk'"
                :to="{ name: authStore.token ? 'beranda' : 'login' }"
                unelevated
                no-caps
              />
            </div>
            <q-tabs
              v-model="tab"
              align="justify"
              no-caps
              class="text-white"
              active-class="text-bold"
              @update:model-value="onChangeTab"
            >
              <q-tab name="Dashboard1" label="Rekapitulasi Anggaran ATM" />
              <q-tab name="Dashboard2" label="Rekapitulasi Per Provinsi" />
              <q-tab name="Dashboard3" label="Rekapitulasi Kemitraan" />
              <q-tab name="Dashboard4" label="Absensi" />
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

export default defineComponent({
  components: { Apex },
  setup() {
    const authStore = useAuthStore();

    function suffix(amount) {
      if (amount >= 1e12) {
        return (amount / 1e12).toFixed(2) + " T";
      } else if (amount >= 1e9) {
        return (amount / 1e9).toFixed(2) + " M";
      } else if (amount >= 1e6) {
        return (amount / 1e6).toFixed(2) + " jt";
      } else {
        return amount.toFixed(2);
      }
    }

    function rupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    }

    const province_table_column = [
      {
        name: "name",
        label: "",
        field: "Name",
        align: "left",
        sortable: true,
      },
      {
        name: "bidkes",
        label: "Anggaran ATM Bidang Kesehatan",
        field: (row) => rupiah(row.Bidkes),
        sortable: true,
      },
      {
        name: "other",
        label: "Anggaran ATM Sumber Lain",
        field: (row) => rupiah(row.Other),
        sortable: true,
      },
    ];

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
    return {
      authStore,
      province_table_column,
      isReveal: ref(true),
      columns_penginputan,
      columns_planning,
      progress_penginputan: ref([]),
      progress_planning: ref([]),
      count: ref([]),

      series_penginputan: ref([0]),
      chart_penginputan: ref({
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

      series_planning: ref([0]),
      chart_planning: ref({
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

      series: ref([
        {
          name: "Persentase",
          data: [],
        },
        {
          name: "Jumlah",
          data: [],
        },
        {
          name: "Anggaran",
          data: [],
        },
      ]),
      seriesPerProvince: ref([
        {
          name: "Persentase",
          data: [],
        },
        {
          name: "Jumlah",
          data: [],
        },
        {
          name: "Anggaran",
          data: [],
        },
      ]),
      chartOptions: ref({
        chart: {
          type: "bar",
          height: 350,
          id: "chartPartnership",
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
        colors: ["#FF6E31", "#243763", "#9384d1"],
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
          labels: {
            formatter: function (value) {
              return `${parseFloat(value).toFixed(0)}%`;
            },
          },
          categories: [],
        },
      }),
      chartOptionsPerProvince: ref({
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
        colors: ["#FF6E31", "#243763", "#9384d1"],
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
          labels: {
            formatter: function (value) {
              return `${parseFloat(value).toFixed(0)}%`;
            },
          },
          categories: [],
        },
      }),
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
            return suffix(value);
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
              return suffix(value);
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
      seriesVillageCount: [
        {
          name: "Jumlah",
          data: [],
        },
      ],
      chartOptionVillageCount: {
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
            return `${parseFloat(value).toFixed(0)}`;
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
      },
      seriesVillageFund: [
        {
          name: "Dana",
          data: [],
        },
      ],
      chartOptionVillageFund: {
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
            return suffix(value);
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
              return suffix(value);
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
      seriesCSR: [
        {
          name: "Dana",
          data: [],
        },
      ],
      chartOptionCSR: {
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
            return suffix(value);
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
              return suffix(value);
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
      seriesSKPDN: ref([]),
      chartOptionSKPDN: ref({
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          formatter: function (value) {
            return suffix(value);
          },
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return suffix(value);
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
            horizontal: false,
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
        xaxis: {
          categories: [],
        },
        legend: {
          position: "right",
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
      }),
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
      province_kemitraan: ref(null),
      tab: ref("Dashboard1"),
      province_table: ref([]),
    };
  },
  mounted() {
    this.getYear();
  },
  methods: {
    getYear() {
      this.$api
        .get('/forms?Limit=-&Filters={"Type": "budget"}&Sort=year asc')
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
        })
        .then(() => {
          this.onUpdateYear();
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

    getBudget(val) {
      const findYear = this.list_year.find((year) => year.value == val);
      this.$api
        .get("/result/" + findYear.label + "/percentage")
        .then((res) => {
          this.seriesPercentage[0].data = res.data.data.map((e) => e.budget);
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
          this.province_kemitraan = this.list_province[0].value;
          this.updateProvince(this.list_province[0].value);
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

    updateProvince(val) {
      this.findProvince(val);
      this.findProvinceTable(val);
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
            (province) => province.percentage.AIDS
          );
          this.seriesProvince[1].data = res.data.data.map(
            (province) => province.percentage.Malaria
          );
          this.seriesProvince[2].data = res.data.data.map(
            (province) => province.percentage.TBC
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

    findProvinceTable(val) {
      const findYear = this.list_year.find((year) => year.value == this.year);
      return this.$api
        .get("/result/" + findYear.label + "/detail/" + val)
        .then((res) => {
          this.province_table = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    findPartnership(val) {
      const findYear = this.list_year.find((year) => year.value == val);
      this.$api
        .get("/forms/" + findYear.label + "/partnership")
        .then((res) => {
          const data = res.data.data;
          const categories = data.map((item) => item.Name);
          const percentageSeries = data.map((item) => item.Percentage);
          const qtySeries = data.map((item) => item.Qty);
          const budgetSeries = data.map((item) => item.Budget);
          this.chartOptions.xaxis.categories = categories;
          this.series[0].data = percentageSeries;
          this.series[1].data = qtySeries;
          this.series[2].data = budgetSeries;
        })
        .then(() => {
          this.$refs.chartPartnership.refresh();
        })
        .then((res) => {
          ApexCharts.getChartByID("chartPartnership").toggleSeries("Jumlah");
          ApexCharts.getChartByID("chartPartnership").toggleSeries("Anggaran");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    findPartnershipPerProvince(val) {
      const findYear = this.list_year.find((year) => year.value == val);
      this.$api
        .get(
          "/forms/" +
            findYear.label +
            "/partnership?province_id=" +
            this.province_kemitraan
        )
        .then((res) => {
          const data = res.data.data;
          const categories = data.map((item) => item.Name);
          const percentageSeries = data.map((item) => item.Percentage);
          const qtySeries = data.map((item) => item.Qty);
          const budgetSeries = data.map((item) => item.Budget);
          this.chartOptionsPerProvince.xaxis.categories = categories;
          this.seriesPerProvince[0].data = percentageSeries;
          this.seriesPerProvince[1].data = qtySeries;
          this.seriesPerProvince[2].data = budgetSeries;
        })
        .then(() => {
          this.$refs.chartPartnershipPerProvince.refresh();
        })
        .then((res) => {
          ApexCharts.getChartByID("chartPartnershipPerProvince").toggleSeries(
            "Jumlah"
          );
          ApexCharts.getChartByID("chartPartnershipPerProvince").toggleSeries(
            "Anggaran"
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getPartnershipDetail(val) {
      const findYear = this.list_year.find((year) => year.value == val);
      this.$api
        .get(
          "/forms/" +
            findYear.label +
            "/partnership/detail?province_id=" +
            this.province_kemitraan
        )
        .then((res) => {
          var data = res.data.data;
          var legends = data.map((e) => e.Regency);

          this.seriesVillageCount[0].data = data.map((e) => e.VillageCount);
          this.seriesVillageFund[0].data = data.map((e) => e.VillageFunds);
          this.seriesCSR[0].data = data.map((e) => e.CSR);

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

          this.seriesSKPDN = outputData;

          this.chartOptionVillageCount.xaxis.categories = legends;
          this.chartOptionVillageFund.xaxis.categories = legends;
          this.chartOptionCSR.xaxis.categories = legends;
          this.chartOptionSKPDN.xaxis.categories = legends;
        })
        .then((res) => {
          this.$refs.chartVillageCount.refresh();
          this.$refs.chartVillageFund.refresh();
          this.$refs.chartCSR.refresh();
          this.$refs.chartSKPDN.refresh();
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
          this.series_penginputan[0] = parseFloat(
            jumlah_completed / this.progress_penginputan.length
          ).toFixed(0);

          this.chart_penginputan.labels[0] = [
            jumlah_completed + " / " + this.progress_penginputan.length,
          ];
          return res;
        })
        .then((res) => {
          this.$refs.radialAnggaran.refresh();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getPlanning(val) {
      const findYear = this.list_year.find((year) => year.value == val);
      return this.$api
        .get("/forms/" + findYear.label + "/planning/progress")
        .then((res) => {
          this.progress_planning = res.data.data.map((e) => {
            var jumlah_input_rkpd = e.Regencies.filter(
              (r) => r.Detail.RKPD == true
            ).length;

            var jumlah_input_renja = e.Regencies.filter(
              (r) => r.Detail.Renja == true
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
          this.series_penginputan[0] = parseFloat(
            jumlah_completed / this.progress_planning.length
          ).toFixed(0);

          this.chart_penginputan.labels[0] = [
            jumlah_completed + " / " + this.progress_planning.length,
          ];
        })
        .catch((err) => {
          console.log(err);
        });
    },

    onUpdateYear() {
      this.getBudget(this.year);
      this.findPartnership(this.year);
      this.findPartnershipPerProvince(this.year);
      this.getPartnershipDetail(this.year);
      this.getProgess(this.year);
      // this.getPlanning(this.year);
    },

    updateProvinceKemirtraan() {
      this.findPartnershipPerProvince(this.year);
      this.getPartnershipDetail(this.year);
    },

    onChangeTab() {
      if (this.tab == "Dashboard3") {
        this.findPartnership(this.year);
        this.findPartnershipPerProvince(this.year);
        this.getPartnershipDetail(this.year);
      } else if (this.tab == "Dashboard4") {
        this.getProgess(this.year);
        // this.getPlanning(this.year);
      }
    },
  },
});
</script>
