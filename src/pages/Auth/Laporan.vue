<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Laporan</div>
    <q-card flat>
      <q-card-section class="q-py-none">
        <q-table
          :rows="recap"
          :loading="loading"
          flat
          title="Rekapitulasi Belanja ATM"
        >
          <template #top-right>
            <div class="tw-flex tw-gap-2">
              <div class="tw-mt-0.5">
                <q-btn outline no-caps color="primary">
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
          </template>
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
import moment from "moment";
import VxIcon from "src/components/VxIcon.vue";
import { defineComponent, ref } from "vue";
import * as XLSX from "xlsx";
export default defineComponent({
  components: { VxIcon },
  setup() {
    return {
      loading: ref(false),

      year: ref(null),
      list_year: ref([]),

      recap: ref([]),
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
          console.log(res.data.data);
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
      const headerData = [
        // Header Row 1
        [
          { t: "s", v: "Provinsi", rowspan: 2 },
          { t: "s", v: "Kabupaten / Kota", rowspan: 2 },
          {
            t: "s",
            v: "UPTD Dinas Kesehatan TA 2022 (15 Sub Kegiatan)",
            colspan: 4,
            class: "text-center",
          },
          { t: "s", v: "Total ATM", rowspan: 2 },
          {
            t: "s",
            v: "Sumber Lain (CSR, Dana Desa, SKPD Non Dinkes)",
            colspan: 4,
            class: "text-center",
          },
          { t: "s", v: "Grand Total", rowspan: 2 },
          { t: "s", v: "Total APBD Dinas Kesehatan", rowspan: 2 },
          { t: "s", v: "Total APBD Kota/Kabupaten", rowspan: 2 },
          { t: "s", v: "Total APBD Bidang Kesehatan", rowspan: 2 },
          {
            t: "s",
            v: "Persentase Anggaran ATM terhadap Bidang Kesehatan (%)",
            colspan: 3,
            class: "text-center",
          },
          {
            t: "s",
            v: "Persentase Total ATM terhadap Bid.Kesehatan (%)",
            rowspan: 2,
          },
          {
            t: "s",
            v: "Persentase Bid.Kesehatan Terhadap APBD (%)",
            rowspan: 2,
          },
        ],
        // Header Row 2
        [
          { t: "s", v: "AIDS" },
          { t: "s", v: "TBC" },
          { t: "s", v: "MALARIA" },
          { t: "s", v: "Total ATM" },
          { t: "s", v: "AIDS" },
          { t: "s", v: "TBC" },
          { t: "s", v: "MALARIA" },
          { t: "s", v: "Total ATM" },
          { t: "s", v: "AIDS" },
          { t: "s", v: "TBC" },
          { t: "s", v: "MALARIA" },
        ],
      ];

      const worksheet = XLSX.utils.aoa_to_sheet(headerData);

      // Create a workbook and add the worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      // Export the workbook to Excel file
      XLSX.writeFile(workbook, "data.xlsx");
    },
  },
});
</script>
