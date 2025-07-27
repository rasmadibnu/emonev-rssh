<template>
  <table class="tw-hidden" id="table2">
    <thead>
      <tr class="text-center">
        <td rowspan="3">Provinsi</td>
        <td rowspan="3">Kabupaten / Kota</td>
        <td colspan="8" class="text-center !tw-border-x !tw-border-t">
          UPTD Dinas Kesehatan TA
          {{list_year.find((e) => e.value == year_selected)?.label}} (18
          Sub Kegiatan)
        </td>
        <td colspan="12" class="text-center !tw-border-x !tw-border-t">
          5 Nomenklatur PP ATM (11,12,40,41,42)
        </td>
        <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">Total ATM diluar 5KKN</td>
        <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">Total APBD Dinas Kesehatan</td>
        <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">Total APBD Kota/Kabupaten</td>
        <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">Total APBD Bidang Kesehatan</td>
        <td colspan="6" class="text-center !tw-border-x !tw-border-t">
          Persentase Anggaran ATM terhadap Bidang Kesehatan (%)
        </td>
        <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">
          Persentase Total ATM terhadap Bid.Kesehatan (%)
        </td>
        <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">Persentase Bid.Kesehatan
          Terhadap APBD (%)</td>
      </tr>
      <tr class="text-center">
        <td colspan="2" class="!tw-border-x !tw-border-t">AIDS</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">TBC</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">MALARIA</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">Total ATM</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">KKN 11</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">KKN 12</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">KKN 40</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">KKN 41</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">KKN 42</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">Total 5 KKN</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">AIDS</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">TBC</td>
        <td colspan="2" class="!tw-border-x !tw-border-t">MALARIA</td>
      </tr>
      <tr class="text-center">
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
        <td class="!tw-border-l">Anggaran</td>
        <td class="!tw-border-r">Realisasi</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in this.recap" v-bind:key="index">
        <td>
          {{ data.Budget.Province }}
        </td>
        <td>
          {{ data.Budget.RegencyCity }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.ByUPTD.AIDS }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.ByUPTD.AIDS }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.ByUPTD.TBC }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.ByUPTD.TBC }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.ByUPTD.Malaria }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.ByUPTD.Malaria }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.ByUPTD.TotalATM }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.ByUPTD.TotalATM }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.ByKKN?.Detail?.KKN_11 }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.ByKKN?.Detail?.KKN_11 }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.ByKKN?.Detail?.KKN_12 }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.ByKKN?.Detail?.KKN_12 }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.ByKKN?.Detail?.KKN_40 }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.ByKKN?.Detail?.KKN_40 }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.ByKKN?.Detail?.KKN_41 }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.ByKKN?.Detail?.KKN_41 }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.ByKKN?.Detail?.KKN_42 }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.ByKKN?.Detail?.KKN_42 }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.ByKKN.TotalATM }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.ByKKN.TotalATM }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.DiffATMAtKKN }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.DiffATMAtKKN }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.APBD_ByDinkes }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.APBD_ByDinkes }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.APBD_RegencyCity }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.APBD_RegencyCity }}
        </td>
        <td class="!tw-border-l">
          {{ data.Budget.APBD_ByBidkes }}
        </td>
        <td class="!tw-border-r">
          {{ data.Realization.APBD_ByBidkes }}
        </td>
        <td class="text-center !tw-border-l">
          {{ parseFloat(data.Budget.PercentageATM.AIDS).toFixed(2) }}%
        </td>
        <td class="text-center !tw-border-r">
          {{ parseFloat(data.Realization.PercentageATM.AIDS).toFixed(2) }}%
        </td>
        <td class="text-center !tw-border-l">
          {{ parseFloat(data.Budget.PercentageATM.TBC).toFixed(2) }}%
        </td>
        <td class="text-center !tw-border-r">
          {{ parseFloat(data.Realization.PercentageATM.TBC).toFixed(2) }}%
        </td>
        <td class="text-center !tw-border-l">
          {{ parseFloat(data.Budget.PercentageATM.Malaria).toFixed(2) }}%
        </td>
        <td class="text-center !tw-border-r">
          {{ parseFloat(data.Realization.PercentageATM.Malaria).toFixed(2) }}%
        </td>
        <td class="text-center !tw-border-l">
          {{ parseFloat(data.Budget.PercentageATM_ByBidkes).toFixed(2) }}%
        </td>
        <td class="text-center !tw-border-r">
          {{ parseFloat(data.Realization.PercentageATM_ByBidkes).toFixed(2) }}%
        </td>
        <td class="text-center !tw-border-l">
          {{ parseFloat(data.Budget.PercentageAPBD_ByBidkes).toFixed(2) }}%
        </td>
        <td class="text-center !tw-border-r">
          {{ parseFloat(data.Realization.PercentageAPBD_ByBidkes).toFixed(2) }}%
        </td>
      </tr>
    </tbody>
  </table>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Laporan Realisasi</div>
    <q-card flat>
      <q-card-section>
        <div class="tw-text-xl tw-mb-4">Rekapitulasi Realisasi Belanja ATM</div>
        <div class="tw-flex tw-justify-between tw-items-center tw-w-full">
          <q-input dense placeholder="Cari..." class="tw-w-64" v-model="search" filled>
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
            <q-select dense filled v-model="year_selected" label="Pilih Tahun" :options="list_year"
              @update:model-value="getRecap" map-options emit-value class="tw-w-36" />
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-py-none">
        <q-table :rows="recap" :loading="loading" flat :pagination="{ rowsPerPage: 10 }" :filter="search">
          <template v-slot:header>
            <tr class="text-center">
              <td rowspan="3">Provinsi</td>
              <td rowspan="3">Kabupaten / Kota</td>
              <td colspan="8" class="text-center !tw-border-x !tw-border-t">
                UPTD Dinas Kesehatan TA
                {{list_year.find((e) => e.value == year_selected)?.label}} (18
                Sub Kegiatan)
              </td>
              <td colspan="12" class="text-center !tw-border-x !tw-border-t">
                5 Nomenklatur PP ATM (11,12,40,41,42)
              </td>
              <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">Total ATM diluar 5KKN</td>
              <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">Total APBD Dinas Kesehatan</td>
              <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">Total APBD Kota/Kabupaten</td>
              <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">Total APBD Bidang Kesehatan</td>
              <td colspan="6" class="text-center !tw-border-x !tw-border-t">
                Persentase Anggaran ATM terhadap Bidang Kesehatan (%)
              </td>
              <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">
                Persentase Total ATM terhadap Bid.Kesehatan (%)
              </td>
              <td rowspan="2" colspan="2" class="text-center !tw-border-x !tw-border-t">Persentase Bid.Kesehatan
                Terhadap APBD (%)</td>
            </tr>
            <tr class="text-center">
              <td colspan="2" class="!tw-border-x !tw-border-t">AIDS</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">TBC</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">MALARIA</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">Total ATM</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">KKN 11</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">KKN 12</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">KKN 40</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">KKN 41</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">KKN 42</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">Total 5 KKN</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">AIDS</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">TBC</td>
              <td colspan="2" class="!tw-border-x !tw-border-t">MALARIA</td>
            </tr>
            <tr class="text-center">
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
              <td class="!tw-border-l">Anggaran</td>
              <td class="!tw-border-r">Realisasi</td>
            </tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td>
                {{ props.row.Budget.Province }}
              </q-td>
              <q-td>
                {{ props.row.Budget.RegencyCity }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.ByUPTD.AIDS) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.ByUPTD.AIDS) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.ByUPTD.TBC) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.ByUPTD.TBC) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.ByUPTD.Malaria) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.ByUPTD.Malaria) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.ByUPTD.TotalATM) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.ByUPTD.TotalATM) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.ByKKN?.Detail?.KKN_11) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.ByKKN?.Detail?.KKN_11) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.ByKKN?.Detail?.KKN_12) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.ByKKN?.Detail?.KKN_12) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.ByKKN?.Detail?.KKN_40) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.ByKKN?.Detail?.KKN_40) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.ByKKN?.Detail?.KKN_41) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.ByKKN?.Detail?.KKN_41) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.ByKKN?.Detail?.KKN_42) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.ByKKN?.Detail?.KKN_42) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.ByKKN.TotalATM) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.ByKKN.TotalATM) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.DiffATMAtKKN) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.DiffATMAtKKN) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.APBD_ByDinkes) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.APBD_ByDinkes) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.APBD_RegencyCity) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.APBD_RegencyCity) }}
              </q-td>
              <q-td class="!tw-border-l">
                {{ rupiah(props.row.Budget.APBD_ByBidkes) }}
              </q-td>
              <q-td class="!tw-border-r">
                {{ rupiah(props.row.Realization.APBD_ByBidkes) }}
              </q-td>
              <q-td class="text-center !tw-border-l">
                {{ parseFloat(props.row.Budget.PercentageATM.AIDS).toFixed(2) }}%
              </q-td>
              <q-td class="text-center !tw-border-r">
                {{ parseFloat(props.row.Realization.PercentageATM.AIDS).toFixed(2) }}%
              </q-td>
              <q-td class="text-center !tw-border-l">
                {{ parseFloat(props.row.Budget.PercentageATM.TBC).toFixed(2) }}%
              </q-td>
              <q-td class="text-center !tw-border-r">
                {{ parseFloat(props.row.Realization.PercentageATM.TBC).toFixed(2) }}%
              </q-td>
              <q-td class="text-center !tw-border-l">
                {{ parseFloat(props.row.Budget.PercentageATM.Malaria).toFixed(2) }}%
              </q-td>
              <q-td class="text-center !tw-border-r">
                {{ parseFloat(props.row.Realization.PercentageATM.Malaria).toFixed(2) }}%
              </q-td>
              <q-td class="text-center !tw-border-l">
                {{ parseFloat(props.row.Budget.PercentageATM_ByBidkes).toFixed(2) }}%
              </q-td>
              <q-td class="text-center !tw-border-r">
                {{ parseFloat(props.row.Realization.PercentageATM_ByBidkes).toFixed(2) }}%
              </q-td>
              <q-td class="text-center !tw-border-l">
                {{ parseFloat(props.row.Budget.PercentageAPBD_ByBidkes).toFixed(2) }}%
              </q-td>
              <q-td class="text-center !tw-border-r">
                {{ parseFloat(props.row.Realization.PercentageAPBD_ByBidkes).toFixed(2) }}%
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import { storeToRefs } from "pinia";
import VxIcon from "src/components/VxIcon.vue";
import { useAuthStore } from "src/stores/auth";
import { defineComponent, ref } from "vue";
import * as XLSX from "xlsx";

export default defineComponent({
  props: ["user"],
  components: { VxIcon },
  setup() {
    const auth = useAuthStore();
    const { year_selected } = storeToRefs(auth);
    return {
      year_selected,
      loading: ref(false),

      list_year: ref([]),

      recap: ref([]),

      search: ref(""),
    };
  },
  mounted() {
    this.getYear().then((res) => {
      if (!this.year_selected) {
        let nowYear = new Date().getFullYear();
        this.year_selected = this.list_year.find(
          (e) => e.label == nowYear
        ).value;
      }
      this.getRecap(this.year_selected);
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
        .get("/forms/" + year + "/recap-realizations")
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
      let year = this.list_year.find(
        (e) => e.value == this.year_selected
      ).label;

      const table = document.getElementById("table2");
      const workbook = XLSX.utils.table_to_book(table, { sheet: "Sheet 1" });
      XLSX.writeFile(workbook, `Export Laporan ${year}.xlsx`);
    },
  },
});
</script>
