<template>
  <table class="tw-hidden" id="table2">
    <thead>
      <tr class="text-center">
        <td rowspan="2" style="vertical-align: middle; text-align: center">
          Provinsi
        </td>
        <td rowspan="2">Kabupaten / Kota</td>
        <td colspan="4" class="text-center">
          UPTD Dinas Kesehatan TA 2022 (15 Sub Kegiatan)
        </td>
        <td rowspan="2">Total ATM</td>
        <td colspan="4" class="text-center">
          Sumber Lain (CSR, Dana Desa, SKPD Non Dinkes)
        </td>
        <td rowspan="2">Grand Total</td>
        <td rowspan="2">Total APBD Dinas Kesehatan</td>
        <td rowspan="2">Total APBD Kota/Kabupaten</td>
        <td rowspan="2">Total APBD Bidang Kesehatan</td>
        <td colspan="3" class="text-center">
          Persentase Anggaran ATM terhadap Bidang Kesehatan (%)
        </td>
        <td rowspan="2">Persentase Total ATM terhadap Bid.Kesehatan (%)</td>
        <td rowspan="2">Persentase Bid.Kesehatan Terhadap APBD (%)</td>
      </tr>
      <tr class="text-center">
        <td>AIDS</td>
        <td>TBC</td>
        <td>MALARIA</td>
        <td>Total ATM</td>
        <td>AIDS</td>
        <td>TBC</td>
        <td>MALARIA</td>
        <td>Total ATM</td>
        <td>AIDS</td>
        <td>TBC</td>
        <td>MALARIA</td>
      </tr>
    </thead>
    <tbody>
      {{
        recap
      }}
      <tr v-for="(data, index) in this.recap" v-bind:key="index">
        {{
          data
        }}
        <td>
          {{ data.Province }}
        </td>
        <td>
          {{ data.RegencyCity }}
        </td>
        <td>
          {{ data.RegencyCity }}
        </td>
        <td>
          {{ rupiah(data.ByUPTD.AIDS) }}
        </td>
        <td>
          {{ rupiah(data.ByUPTD.TBC) }}
        </td>
        <td>
          {{ rupiah(data.ByUPTD.Malaria) }}
        </td>
        <td>
          {{ rupiah(data.ByUPTD.TotalATM) }}
        </td>
        <td>
          {{ rupiah(data.ByOther.AIDS) }}
        </td>
        <td>
          {{ rupiah(data.ByOther.TBC) }}
        </td>
        <td>
          {{ rupiah(data.ByOther.Malaria) }}
        </td>

        <td>
          {{ rupiah(data.ByOther.TotalATM) }}
        </td>
        <td>
          {{ rupiah(data.GrandTotal) }}
        </td>
        <td>
          {{ rupiah(data.APBD_ByDinkes) }}
        </td>
        <td>
          {{ rupiah(data.APBD_RegencyCity) }}
        </td>
        <td>
          {{ rupiah(data.APBD_ByBidkes) }}
        </td>
        <td class="text-center">
          {{ parseFloat(data.PercentageATM.AIDS).toFixed(2) }}%
        </td>
        <td class="text-center">
          {{ parseFloat(data.PercentageATM.TBC).toFixed(2) }}%
        </td>
        <td class="text-center">
          {{ parseFloat(data.PercentageATM.Malaria).toFixed(2) }}%
        </td>
        <td class="text-center">
          {{ parseFloat(data.PercentageATM_ByBidkes).toFixed(2) }}%
        </td>
        <td class="text-center">
          {{ parseFloat(data.PercentageAPBD_ByBidkes).toFixed(2) }}%
        </td>
      </tr>
    </tbody>
  </table>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Laporan</div>
    <q-card flat>
      <q-card-section>
        <div class="tw-text-xl tw-mb-4">Rekapitulasi Belanja ATM</div>
        <div class="tw-flex tw-justify-between tw-items-center tw-w-full">
          <q-input
            dense
            placeholder="Cari..."
            class="tw-w-64"
            v-model="search"
            filled
          >
            <template #prepend>
              <vx-icon iconName="SearchStatus" :size="20" />
            </template>
          </q-input>
          <div class="tw-flex tw-gap-2">
            <div class="tw-mt-0.5">
              <q-btn outline no-caps color="primary" @click="exportExcel">
                <div class="tw-flex">
                  <vx-icon iconName="Export" class="tw-mr-2" :size="20" />
                  <div class="tw-line-clamp-1">Export Excel</div>
                </div>
              </q-btn>
            </div>
            <q-select
              dense
              filled
              v-model="year"
              label="Pilih Tahun"
              :options="list_year"
              @update:model-value="getRecap"
              map-options
              emit-value
              class="tw-w-36"
            />
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-py-none">
        <q-table
          :rows="recap"
          :loading="loading"
          flat
          :pagination="{ rowsPerPage: 10 }"
          :filter="search"
        >
          <template v-slot:header>
            <tr class="text-center">
              <td rowspan="2">Provinsi</td>
              <td rowspan="2">Kabupaten / Kota</td>
              <td colspan="4" class="text-center">
                UPTD Dinas Kesehatan TA 2022 (15 Sub Kegiatan)
              </td>
              <td rowspan="2">Total ATM</td>
              <td colspan="4" class="text-center">
                Sumber Lain (CSR, Dana Desa, SKPD Non Dinkes)
              </td>
              <td rowspan="2">Grand Total</td>
              <td rowspan="2">Total APBD Dinas Kesehatan</td>
              <td rowspan="2">Total APBD Kota/Kabupaten</td>
              <td rowspan="2">Total APBD Bidang Kesehatan</td>
              <td colspan="3" class="text-center">
                Persentase Anggaran ATM terhadap Bidang Kesehatan (%)
              </td>
              <td rowspan="2">
                Persentase Total ATM terhadap Bid.Kesehatan (%)
              </td>
              <td rowspan="2">Persentase Bid.Kesehatan Terhadap APBD (%)</td>
            </tr>
            <tr class="text-center">
              <td>AIDS</td>
              <td>TBC</td>
              <td>MALARIA</td>
              <td>Total ATM</td>
              <td>AIDS</td>
              <td>TBC</td>
              <td>MALARIA</td>
              <td>Total ATM</td>
              <td>AIDS</td>
              <td>TBC</td>
              <td>MALARIA</td>
            </tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props" @click="onRowClick(props.row)">
              <q-td>
                {{ props.row.Province }}
              </q-td>
              <q-td>
                {{ props.row.RegencyCity }}
              </q-td>
              <q-td>
                {{ props.row.RegencyCity }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.ByUPTD.AIDS) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.ByUPTD.TBC) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.ByUPTD.Malaria) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.ByUPTD.TotalATM) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.ByOther.AIDS) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.ByOther.TBC) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.ByOther.Malaria) }}
              </q-td>

              <q-td>
                {{ rupiah(props.row.ByOther.TotalATM) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.GrandTotal) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.APBD_ByDinkes) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.APBD_RegencyCity) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.APBD_ByBidkes) }}
              </q-td>
              <q-td class="text-center">
                {{ parseFloat(props.row.PercentageATM.AIDS).toFixed(2) }}%
              </q-td>
              <q-td class="text-center">
                {{ parseFloat(props.row.PercentageATM.TBC).toFixed(2) }}%
              </q-td>
              <q-td class="text-center">
                {{ parseFloat(props.row.PercentageATM.Malaria).toFixed(2) }}%
              </q-td>
              <q-td class="text-center">
                {{ parseFloat(props.row.PercentageATM_ByBidkes).toFixed(2) }}%
              </q-td>
              <q-td class="text-center">
                {{ parseFloat(props.row.PercentageAPBD_ByBidkes).toFixed(2) }}%
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import VxIcon from "src/components/VxIcon.vue";
import { defineComponent, ref } from "vue";
import * as XLSX from "xlsx";
export default defineComponent({
  props: ["user"],
  components: { VxIcon },
  setup() {
    return {
      loading: ref(false),

      year: ref(null),
      list_year: ref([]),

      recap: ref([]),

      search: ref(""),
    };
  },
  mounted() {
    this.getYear().then((res) => {
      let nowYear = new Date().getFullYear();
      this.year = this.list_year.find((e) => e.label == nowYear).value;
      this.getRecap(this.year);
    });
  },
  methods: {
    getYear() {
      this.loading = true;
      return this.$api
        .get(`/forms?Limit=-&Filters={"Type": "budget"}&Sort=year asc`)
        .then((res) => {
          this.list_year = res.data.data.Rows.map((year) => {
            return { label: year.Year, value: year.ID };
          });
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getRecap(value) {
      let year = this.list_year.find((e) => e.value == value).label;

      return this.$api
        .get("/forms/" + year + "/recap")
        .then((res) => {
          this.recap = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    rupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },

    exportExcel() {
      let year = this.list_year.find((e) => e.value == this.year).label;

      const table = document.getElementById("table2");
      const workbook = XLSX.utils.table_to_book(table, { sheet: "Sheet 1" });
      XLSX.writeFile(workbook, `Export Laporan ${year}.xlsx`);
    },
  },
});
</script>
