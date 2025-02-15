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
            <div class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8 tw-min-h-screen">
              <q-card flat>
                <q-card-section class="text-primary tw-text-xl tw-flex tw-justify-between tw-justify-items-center">
                  Persentase Anggaran ATM Terhadap Bidang Kesehatan
                  <q-spinner v-if="loading_1" color="primary" size="md" />
                </q-card-section>

                <q-card-section class="q-pt-none tw-overflow-x-scroll tw-w-auto">
                  <apex type="bar" height="1000" :options="chartOptionsPrecentage" :series="seriesPrecentage"
                    ref="chartPrecentage"></apex>
                </q-card-section>
              </q-card>
              <q-card flat>
                <q-card-section class="text-primary tw-text-xl tw-flex tw-justify-between tw-justify-items-center">
                  Rekapitulasi Anggaran ATM
                  <q-spinner v-if="loading_1" color="primary" size="md" />
                </q-card-section>
                <q-card-section class="q-pt-none tw-overflow-x-scroll tw-w-auto">
                  <apex type="bar" height="1000" class="tw-w-full" :options="chartOptionsAmount" :series="seriesAmount"
                    ref="chartAmount"></apex>
                </q-card-section>
              </q-card>
              <q-card flat>
                <q-card-section class="text-primary tw-text-xl tw-flex tw-justify-between tw-justify-items-center">
                  Rekapitulasi Anggaran 5 KKN
                  <q-spinner v-if="loading_1" color="primary" size="md" />
                </q-card-section>
                <q-card-section class="q-pt-none tw-overflow-x-scroll tw-w-auto">
                  <apex type="bar" class="tw-w-full" :options="chartOptionsAmountKKN" :series="seriesAmountKKN"
                    ref="chartAmountKKN"></apex>
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="Dashboard2">
            <div class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8">
              <q-card flat class="tw-mb-10">
                <q-card-section class="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center">
                  <div class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-items-center">
                    Anggaran ATM Provinsi
                    <q-spinner v-if="loading_2" color="primary" size="md" />
                  </div>
                  <q-select :options="list_province" label="Provinsi" v-model="province" map-options emit-value
                    use-input :loading="loading_2" @filter="filterProvince" @update:model-value="updateProvince" />
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <apex type="bar" :options="chartOptionsProvinceUPTD" :series="seriesProvinceUPTD"
                    ref="chartProvinceUPTD"></apex>

                </q-card-section>
                <q-card-section class="q-pt-none">
                  <q-table flat :rows="province_table" hide-pagination :columns="province_table_column"
                    table-header-class="bg-secondary text-white" separator="vertical" :loading="loading_2">
                  </q-table>
                </q-card-section>
              </q-card>
              <q-card flat class="tw-mb-10">
                <q-card-section>
                  <div class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-items-center">
                    Anggaran ATM 5 KKN
                    <q-spinner v-if="loading_2" color="primary" size="md" />
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex type="bar" :options="chartOptionsProvinceKKN" :series="seriesProvinceKKN"
                    ref="chartProvinceKKN">
                  </apex>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <q-table flat :rows="province_table_kkn" hide-pagination :columns="province_table_column"
                    table-header-class="bg-secondary text-white" separator="vertical" :loading="loading_2">
                  </q-table>
                </q-card-section>
              </q-card>
              <q-card flat class="tw-mb-20">
                <q-card-section>
                  <div class="text-primary tw-text-xl tw-flex tw-gap-x-2 tw-items-center">
                    Anggaran Dinas Kesehatan & Kemitraan
                    <q-spinner v-if="loading_2" color="primary" size="md" />
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex type="bar" :options="chartOptionsProvince" :series="seriesProvince" ref="chartProvince"></apex>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <q-table flat :rows="province_table_total" hide-pagination :columns="province_table_column"
                    table-header-class="bg-secondary text-white" separator="vertical" :loading="loading_2">
                  </q-table>
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Dashboard3">
            <div class="tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8">
              <q-card flat>
                <q-card-section class="text-primary tw-text-xl">
                  Persentase anggaran kemitraan untuk ATM
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex type="bar" height="250" :options="chartOptions" :series="series" ref="chartPartnership"></apex>
                </q-card-section>
              </q-card>
              <div class="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center">
                <div class="text-primary tw-text-xl">Per Provinsi</div>
                <q-select :options="list_province" label="Provinsi" v-model="province_kemitraan" map-options emit-value
                  use-input @filter="filterProvince" @update:model-value="updateProvinceKemirtraan" />
              </div>
              <q-card flat>
                <q-card-section class="text-primary tw-text-xl">
                  Persentase anggaran kemitraan untuk ATM
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex type="bar" height="250" :options="chartOptionsPerProvince" :series="seriesPerProvince"
                    ref="chartPartnershipPerProvince"></apex>
                </q-card-section>
                <q-card-section class="text-primary tw-text-xl">
                  Jumlah Desa yang mendapatkan ATM
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex type="bar" height="350" :options="chartOptionVillageCount" :series="seriesVillageCount"
                    ref="chartVillageCount"></apex>
                </q-card-section>
                <q-card-section class="text-primary tw-text-xl">
                  Dana Desa
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex type="bar" height="350" :options="chartOptionVillageFund" :series="seriesVillageFund"
                    ref="chartVillageFund"></apex>
                </q-card-section>
                <q-card-section class="text-primary tw-text-xl">
                  Dana CSR
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex type="bar" height="350" :options="chartOptionCSR" :series="seriesCSR" ref="chartCSR"></apex>
                </q-card-section>
                <q-card-section class="text-primary tw-text-xl">
                  Dana SKPDN
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <apex type="bar" height="350" :options="chartOptionSKPDN" :series="seriesSKPDN" ref="chartSKPDN">
                  </apex>
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Dashboard4">
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
                <q-select class="my-select" :options="list_year" v-model="authStore.year_selected" borderless dense
                  map-options emit-value @update:model-value="onUpdateYear" />
              </div>
              <q-btn color="secondary" :label="authStore.token ? 'Dashboard' : 'Masuk'"
                :to="{ name: authStore.token ? 'beranda' : 'login' }" unelevated no-caps />
            </div>
            <q-tabs v-model="tab" align="justify" no-caps class="text-white" active-class="text-bold"
              @update:model-value="onUpdateYear">
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
import VxIcon from "src/components/VxIcon.vue";

export default defineComponent({
  components: { Apex, VxIcon },
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
      province_table_column,
      isReveal: ref(true),
      columns_penginputan,
      columns_planning,
      columns_partnership,
      progress_penginputan: ref([]),
      progress_planning: ref([]),
      progress_partnership: ref([]),
      count: ref([]),

      // Loading
      loading_1: ref(false),
      loading_2: ref(false),
      loading_3: ref(false),

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
          labels: {
            formatter: function (value) {
              return `${parseFloat(value).toFixed(0)}%`;
            },
          },
          categories: [],
        },
      }),
      seriesAmount: [
        {
          name: "Anggaran",
          data: [],
        },
      ],
      chartOptionsAmount: {
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
              return suffix(value);
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
      },
      seriesPrecentage: [
        {
          name: "Presentase",
          data: [],
        },
      ],
      chartOptionsPrecentage: {
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
              return suffix(value);
            },
          },
        },
      },
      seriesAmountKKN: [
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
        //   name: "Realisasi",
        //   data: [],
        // },
      ],
      chartOptionsAmountKKN: {
        chart: {
          type: "bar",
          id: "chartAmountKKN",
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
              return suffix(value);
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
          id: "chartVillageCount",
        },
        colors: ["#243763"],
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
            colors: ["#243763"],
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
          id: "chartVillageFund",
        },
        colors: ["#243763"],
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
            colors: ["#243763"],
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
          id: "chartCSR",
        },
        colors: ["#243763"],
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
            colors: ["#243763"],
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
          id: "chartSKPDN",
        },
        dataLabels: {
          formatter: function (value) {
            return rupiah(value);
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
      seriesProvinceUPTD: ref([
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
      ]),
      seriesProvinceKKN: ref([
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
      ]),
      seriesProvince: ref([
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
      ]),
      chartOptionsProvinceUPTD: ref({
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
              return suffix(value);
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
      }),
      chartOptionsProvinceKKN: ref({
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
              return suffix(value);
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
      }),
      chartOptionsProvince: ref({
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
              return suffix(value);
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
      }),

      year: ref(null),

      list_year: ref([]),
      options_province: ref([]),
      list_province: ref([]),
      province: ref(null),
      province_kemitraan: ref(null),
      tab: ref("Dashboard1"),
      province_table: ref([]),
      province_table_kkn: ref([]),
      province_table_total: ref([]),

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
          return this.list_year;
        })
        .then((res) => {
          if (!this.authStore.year_selected) {
            const nowYear = new Date().getFullYear();
            const findYear = res.find((year) => year.label == nowYear);
            if (findYear) {
              this.authStore.year_selected = findYear.value;
            } else {
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
          this.options_province = res.data.data.map((e) => {
            return { label: e.name, value: e.id };
          });
          this.list_province = this.options_province;
          this.province = this.list_province[0].value;
          this.province_kemitraan = this.list_province[0].value;
          this.updateProvince(this.list_province[0].value);
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
      this.loading_1 = true;
      const findYear = this.list_year.find((year) => year.value == val);
      this.$api
        .get("/result/" + findYear.label + "/percentage")
        .then((res) => {
          const data = res.data.data;
          // Sort data by budget for seriesAmount
          const sortedByBudget = [...data].sort((a, b) => b.budget - a.budget);
          this.seriesAmount[0].data = sortedByBudget.map((e) => e.budget);

          // Sort data by percentage for seriesPrecentage
          const sortedByPercentage = [...data].sort(
            (a, b) => b.percentage - a.percentage
          );
          this.seriesPrecentage[0].data = sortedByPercentage.map(
            (e) => e.percentage
          );

          // Sort data by sum of kkn fields for seriesAmountKKN
          const sortedByKKN = [...data].sort(
            (a, b) =>
              (b.kkn_detail?.aids || 0) +
              (b.kkn_detail?.tbc || 0) +
              (b.kkn_detail?.malaria || 0) -
              ((a.kkn_detail?.aids || 0) +
                (a.kkn_detail?.tbc || 0) +
                (a.kkn_detail?.malaria || 0))
          );

          this.seriesAmountKKN[0].data = sortedByKKN.map(
            (e) => e.kkn_detail?.aids
          );
          this.seriesAmountKKN[1].data = sortedByKKN.map(
            (e) => e.kkn_detail?.tbc
          );
          this.seriesAmountKKN[2].data = sortedByKKN.map(
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

          ApexCharts.getChartByID("chartAmountKKN").updateOptions({
            xaxis: { categories: categoriesKKN },
            chart: {
              height: chartHeight,
            },
          });
          this.loading_1 = false;

          return res;
        })
        .then((res) => { })
        .catch((err) => {
          this.loading_1 = false;
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
      // this.findProvinceTable(val);
    },

    findProvince(val) {
      this.loading_2 = true;
      const findYear = this.list_year.find(
        (year) => year.value == this.authStore.year_selected
      );
      return this.$api
        .get("/result/" + findYear.label + "/percentage/" + val)
        .then((res) => {

          this.seriesProvince[0].data = res.data.data.map(
            (province) => province.dinkes.Budget
          );
          this.seriesProvince[1].data = res.data.data.map(
            (province) => province.partnership.Budget
          );
          this.seriesProvince[2].data = res.data.data.map(
            (province) => province.total.Budget
          );

          this.seriesProvinceUPTD[0].data = res.data.data.map(
            (province) => province.by_uptd.AIDS
          );
          this.seriesProvinceUPTD[1].data = res.data.data.map(
            (province) => province.by_uptd.TBC
          );
          this.seriesProvinceUPTD[2].data = res.data.data.map(
            (province) => province.by_uptd.Malaria
          );

          this.seriesProvinceKKN[0].data = res.data.data.map(
            (province) => province.by_kkn.AIDS
          );
          this.seriesProvinceKKN[1].data = res.data.data.map(
            (province) => province.by_kkn.TBC
          );
          this.seriesProvinceKKN[2].data = res.data.data.map(
            (province) => province.by_kkn.Malaria
          );

          this.province_table = []
          this.province_table_kkn = []
          this.province_table_total = []


          this.province_table = [
            { name: "AIDS", total: res.data.data.map((province) => province.by_uptd.AIDS).reduce((a, b) => a + b) },
            { name: "TBC", total: res.data.data.map((province) => province.by_uptd.TBC).reduce((a, b) => a + b) },
            { name: "Malaria", total: res.data.data.map((province) => province.by_uptd.Malaria).reduce((a, b) => a + b) },
            { name: "Total ATM", total: res.data.data.map((province) => province.by_uptd.TotalATM).reduce((a, b) => a + b) }
          ];
          this.province_table_kkn = [
            { name: "AIDS", total: res.data.data.map((province) => province.by_kkn.AIDS).reduce((a, b) => a + b) },
            { name: "TBC", total: res.data.data.map((province) => province.by_kkn.TBC).reduce((a, b) => a + b) },
            { name: "Malaria", total: res.data.data.map((province) => province.by_kkn.Malaria).reduce((a, b) => a + b) },
            { name: "Total ATM", total: res.data.data.map((province) => province.by_kkn.TotalATM).reduce((a, b) => a + b) }
          ];
          this.province_table_total = [
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
          this.loading_2 = false;
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    findProvinceTable(val) {
      this.loading_3 = true;
      const findYear = this.list_year.find(
        (year) => year.value == this.authStore.year_selected
      );
      return this.$api
        .get("/result/" + findYear.label + "/detail/" + val)
        .then((res) => {
          this.province_table = res.data.data;
          this.loading_3 = false;
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
          this.series[0].data = percentageSeries;
          this.series[1].data = qtySeries;
          this.series[2].data = budgetSeries;
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
          this.seriesPerProvince[0].data = percentageSeries;
          this.seriesPerProvince[1].data = qtySeries;
          this.seriesPerProvince[2].data = budgetSeries;
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

          ApexCharts.getChartByID("chartVillageCount").updateOptions({
            xaxis: { categories: legends },
          });
          ApexCharts.getChartByID("chartVillageFund").updateOptions({
            xaxis: { categories: legends },
          });
          ApexCharts.getChartByID("chartCSR").updateOptions({
            xaxis: { categories: legends },
          });
          ApexCharts.getChartByID("chartSKPDN").updateOptions({
            xaxis: { categories: legends },
          });
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
      if (this.tab == "Dashboard1") {
        this.getBudget(this.authStore.year_selected);
      } else if (this.tab == "Dashboard2") {
        this.findProvince(this.province);
        // this.findProvinceTable(this.province);
      } else if (this.tab == "Dashboard3") {
        this.findPartnership(this.authStore.year_selected);
        this.findPartnershipPerProvince(this.authStore.year_selected);
        this.getPartnershipDetail(this.authStore.year_selected);
      } else if (this.tab == "Dashboard4") {
        this.getProgess(this.authStore.year_selected);
        this.getPlanning(this.authStore.year_selected);
        this.getPartnerhsip(this.authStore.year_selected);
      }
      this.findProvince(this.province);
      // this.findProvinceTable(this.province);
    },

    updateProvinceKemirtraan() {
      this.findPartnershipPerProvince(this.authStore.year_selected);
      this.getPartnershipDetail(this.authStore.year_selected);
    },
  },
});
</script>
