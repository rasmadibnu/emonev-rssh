<template>
  <table class="tw-hidden" id="table2">
    <thead>
      <tr class="text-center">
        <td rowspan="3">Provinsi</td>
        <td rowspan="3">Kabupaten / Kota</td>
        <td colspan="3" rowspan="2" class="text-center">Dana Desa</td>
        <td
          colspan="3"
          rowspan="2"
          class="text-center"
          style="border-right: 1px solid black"
        >
          Dana CSR
        </td>
        <td colspan="21">SKPD Non Dinkes</td>
      </tr>
      <tr>
        <td colspan="3" class="text-center">Dinas Sosial</td>
        <td colspan="3" class="text-center">Dinas PU</td>
        <td colspan="3" class="text-center">Dinas Pendidikan</td>
        <td colspan="3" class="text-center">Dinas Tenaga Kerja</td>
        <td colspan="3" class="text-center">Dinas Pemdes</td>
        <td colspan="3" class="text-center">Dinas Lainnya</td>
      </tr>
      <tr class="text-center">
        <td>Anggaran</td>
        <td>Realisasi</td>
        <td>Persentase</td>
        <td>Anggaran</td>
        <td>Realisasi</td>
        <td style="border-right: 1px solid black">Persentase</td>

        <td>Anggaran</td>
        <td>Realisasi</td>
        <td>Persentase</td>
        <td>Anggaran</td>
        <td>Realisasi</td>
        <td>Persentase</td>
        <td>Anggaran</td>
        <td>Realisasi</td>
        <td>Persentase</td>
        <td>Anggaran</td>
        <td>Realisasi</td>
        <td>Persentase</td>
        <td>Anggaran</td>
        <td>Realisasi</td>
        <td>Persentase</td>
        <td>Anggaran</td>
        <td>Realisasi</td>
        <td>Persentase</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in this.recap" v-bind:key="index">
        <q-td>
          {{ data.Province }}
        </q-td>
        <q-td>
          {{ data.RegencyCity }}
        </q-td>
        <q-td>
          {{ rupiah(data.Village.Budget) }}
        </q-td>
        <q-td>
          {{ rupiah(data.Village.Realization) }}
        </q-td>
        <q-td> {{ parseFloat(data.Village.Precentage).toFixed(2) }}% </q-td>
        <q-td>
          {{ rupiah(data.CSR.Budget) }}
        </q-td>
        <q-td>
          {{ rupiah(data.CSR.Realization) }}
        </q-td>
        <q-td style="border-right: 1px solid black">
          {{ parseFloat(data.CSR.Precentage).toFixed(2) }}%
        </q-td>
        <q-td>
          {{ rupiah(data.SocialDepartment.Budget) }}
        </q-td>
        <q-td>
          {{ rupiah(data.SocialDepartment.Realization) }}
        </q-td>
        <q-td>
          {{ parseFloat(data.SocialDepartment.Precentage).toFixed(2) }}%
        </q-td>
        <q-td>
          {{ rupiah(data.PUDepartment.Budget) }}
        </q-td>
        <q-td>
          {{ rupiah(data.PUDepartment.Realization) }}
        </q-td>
        <q-td>
          {{ parseFloat(data.PUDepartment.Precentage).toFixed(2) }}%
        </q-td>
        <q-td>
          {{ rupiah(data.EduDepartment.Budget) }}
        </q-td>
        <q-td>
          {{ rupiah(data.EduDepartment.Realization) }}
        </q-td>
        <q-td>
          {{ parseFloat(data.EduDepartment.Precentage).toFixed(2) }}%
        </q-td>
        <q-td>
          {{ rupiah(data.NakerDepartment.Budget) }}
        </q-td>
        <q-td>
          {{ rupiah(data.NakerDepartment.Realization) }}
        </q-td>
        <q-td>
          {{ parseFloat(data.NakerDepartment.Precentage).toFixed(2) }}%
        </q-td>
        <q-td>
          {{ rupiah(data.PemdesDepartment.Budget) }}
        </q-td>
        <q-td>
          {{ rupiah(data.PemdesDepartment.Realization) }}
        </q-td>
        <q-td>
          {{ parseFloat(data.PemdesDepartment.Precentage).toFixed(2) }}%
        </q-td>
        <q-td>
          {{ rupiah(data.OtherDepartment.Budget) }}
        </q-td>
        <q-td>
          {{ rupiah(data.OtherDepartment.Realization) }}
        </q-td>
        <q-td>
          {{ parseFloat(data.OtherDepartment.Precentage).toFixed(2) }}%
        </q-td>
      </tr>
    </tbody>
  </table>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Laporan Kemitraan</div>
    <q-card flat>
      <q-card-section>
        <div class="tw-text-xl tw-mb-4">Rekapitulasi Kemitraan</div>
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
              v-model="year_selected"
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
              <td rowspan="3">Provinsi</td>
              <td rowspan="3">Kabupaten / Kota</td>
              <td colspan="3" rowspan="2" class="text-center">Dana Desa</td>
              <td
                colspan="3"
                rowspan="2"
                class="text-center"
                style="border-right: 1px solid black"
              >
                Dana CSR
              </td>
              <td colspan="21">SKPD Non Dinkes</td>
            </tr>
            <tr>
              <td colspan="3" class="text-center">Dinas Sosial</td>
              <td colspan="3" class="text-center">Dinas PU</td>
              <td colspan="3" class="text-center">Dinas Pendidikan</td>
              <td colspan="3" class="text-center">Dinas Tenaga Kerja</td>
              <td colspan="3" class="text-center">Dinas Pemdes</td>
              <td colspan="3" class="text-center">Dinas Lainnya</td>
            </tr>
            <tr class="text-center">
              <td>Anggaran</td>
              <td>Realisasi</td>
              <td>Persentase</td>
              <td>Anggaran</td>
              <td>Realisasi</td>
              <td style="border-right: 1px solid black">Persentase</td>

              <td>Anggaran</td>
              <td>Realisasi</td>
              <td>Persentase</td>
              <td>Anggaran</td>
              <td>Realisasi</td>
              <td>Persentase</td>
              <td>Anggaran</td>
              <td>Realisasi</td>
              <td>Persentase</td>
              <td>Anggaran</td>
              <td>Realisasi</td>
              <td>Persentase</td>
              <td>Anggaran</td>
              <td>Realisasi</td>
              <td>Persentase</td>
              <td>Anggaran</td>
              <td>Realisasi</td>
              <td>Persentase</td>
            </tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td>
                {{ props.row.Province }}
              </q-td>
              <q-td>
                {{ props.row.RegencyCity }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.Village.Budget) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.Village.Realization) }}
              </q-td>
              <q-td>
                {{ parseFloat(props.row.Village.Precentage).toFixed(2) }}%
              </q-td>
              <q-td>
                {{ rupiah(props.row.CSR.Budget) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.CSR.Realization) }}
              </q-td>
              <q-td style="border-right: 1px solid black">
                {{ parseFloat(props.row.CSR.Precentage).toFixed(2) }}%
              </q-td>
              <q-td>
                {{ rupiah(props.row.SocialDepartment.Budget) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.SocialDepartment.Realization) }}
              </q-td>
              <q-td>
                {{
                  parseFloat(props.row.SocialDepartment.Precentage).toFixed(2)
                }}%
              </q-td>
              <q-td>
                {{ rupiah(props.row.PUDepartment.Budget) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.PUDepartment.Realization) }}
              </q-td>
              <q-td>
                {{ parseFloat(props.row.PUDepartment.Precentage).toFixed(2) }}%
              </q-td>
              <q-td>
                {{ rupiah(props.row.EduDepartment.Budget) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.EduDepartment.Realization) }}
              </q-td>
              <q-td>
                {{ parseFloat(props.row.EduDepartment.Precentage).toFixed(2) }}%
              </q-td>
              <q-td>
                {{ rupiah(props.row.NakerDepartment.Budget) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.NakerDepartment.Realization) }}
              </q-td>
              <q-td>
                {{
                  parseFloat(props.row.NakerDepartment.Precentage).toFixed(2)
                }}%
              </q-td>
              <q-td>
                {{ rupiah(props.row.PemdesDepartment.Budget) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.PemdesDepartment.Realization) }}
              </q-td>
              <q-td>
                {{
                  parseFloat(props.row.PemdesDepartment.Precentage).toFixed(2)
                }}%
              </q-td>
              <q-td>
                {{ rupiah(props.row.OtherDepartment.Budget) }}
              </q-td>
              <q-td>
                {{ rupiah(props.row.OtherDepartment.Realization) }}
              </q-td>
              <q-td>
                {{
                  parseFloat(props.row.OtherDepartment.Precentage).toFixed(2)
                }}%
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
        .get("/forms/" + year + "/recap-survey")
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
