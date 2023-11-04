<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Kumpulan Dokumen</div>
    <q-card flat>
      <q-card-section class="tw-grid md:tw-grid-cols-3 tw-gap-4">
        <q-select
          dense
          filled
          v-model="year"
          label="Pilih Tahun"
          :options="list_year"
          @update:model-value="this.$refs.tableRef.requestServerInteraction()"
          map-options
          emit-value
        />
        <q-select
          ref="selectProvince"
          dense
          filled
          v-model="auth.province"
          label="Filter Provinsi"
          :options="list_province"
          @filter="filterProvince"
          @update:model-value="setRegencies"
          :disable="auth.provinces.length == 1"
          use-input
          map-options
          emit-value
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
                <q-item-label caption>{{ scope.opt.province }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-select
          dense
          filled
          v-model="regency"
          label="Pilih Kabupaten Kota"
          :options="list_regency"
          @filter="filterRegency"
          :disable="auth.province == null"
          use-input
          map-options
          emit-value
          @update:model-value="this.$refs.tableRef.requestServerInteraction()"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
                <q-item-label caption>{{ scope.opt.province }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-input
          dense
          placeholder="Cari..."
          class="tw-col-span-3"
          v-model="search"
          filled
          debounce="350"
        >
          <template #prepend>
            <vx-icon iconName="SearchStatus" :size="20" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-table
          grid
          ref="tableRef"
          class="remove-padding-table-top"
          :loading="loading"
          :rows="rows"
          :columns="columns"
          @request="getData"
          v-model:pagination="pagination"
          :filter="search"
        >
          <template v-slot:item="props">
            <div class="q-pa-xs col-xs-12 col-sm-6 col-md-3">
              <q-card flat bordered class="tw-h-full">
                <q-card-section class="flex flex-center">
                  <vx-icon iconName="Document" :size="64" />
                </q-card-section>
                <q-separator />
                <q-card-section>
                  <div class="tw-text-xs">
                    Provinsi<br />
                    <span class="tw-font-bold">{{
                      props.row.FormResponse.RegencyCity?.Province.LongName
                    }}</span>
                    <div class="tw-mt-2">Kabupaten Kota</div>
                    <span class="tw-font-bold">{{
                      props.row.FormResponse.RegencyCity?.Name
                    }}</span>
                    <div class="tw-mt-2">Tahun</div>
                    <span class="tw-font-bold">{{
                      props.row.FormResponse.Form?.Year
                    }}</span>
                    <div class="tw-mt-2">Tipe</div>
                    <span
                      class="tw-font-bold tw-capitalize"
                      v-if="props.row.FormResponse.Form?.Type == 'budget'"
                    >
                      {{ "Anggaran" }}
                    </span>
                    <span
                      class="tw-font-bold tw-capitalize"
                      v-else-if="props.row.FormResponse.Form?.Type == 'survey'"
                    >
                      {{ "Kemitraan" }}
                    </span>
                    <span
                      class="tw-font-bold tw-capitalize"
                      v-else-if="
                        props.row.FormResponse.Form?.Type == 'planning'
                      "
                    >
                      {{ "Dokumen Perencanaan" }}
                    </span>
                  </div>
                  <q-btn
                    :label="
                      props.row.Value.split('|').length > 1
                        ? props.row.Field.Label +
                          ' (' +
                          props.row.Value.split('|').length +
                          ')'
                        : props.row.Field.Label
                    "
                    no-caps
                    unelevated
                    color="primary"
                    class="tw-w-full tw-mt-2"
                    size="sm"
                    :href="$api_url.split('/api/v1')[0] + props.row.Value"
                    target="_blank"
                  />
                </q-card-section>
              </q-card>
            </div>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import VxIcon from "src/components/VxIcon.vue";
import { defineComponent, ref } from "vue";
import { useAuthStore } from "src/stores/auth";

export default defineComponent({
  props: ["user"],
  components: { VxIcon },
  setup() {
    const auth = useAuthStore();

    const columns = [
      {
        name: "index",
        label: "#",
        align: "center",
      },
      {
        name: "Regency",
        label: "Kabupaten / Kota",
        align: "left",
        field: (row) => row.FormResponse.RegencyCity.Name,
        sortable: true,
      },
      {
        name: "Province",
        label: "Provinsi",
        align: "left",
        field: (row) => row.FormResponse.RegencyCity.Province.LongName,
        sortable: true,
      },
      {
        name: "Attachment",
        label: "Value",
        align: "left",
        field: "Value",
        sortable: true,
      },
      {
        name: "Name",
        label: "Name",
        align: "left",
        field: (row) => row.Field.Label,
        sortable: true,
      },
      {
        name: "action",
        label: "Aksi",
        align: "right",
      },
    ];
    return {
      rows: ref([]),
      columns,
      pagination: ref({
        page: 1,
        rowsPerPage: 16,
      }),
      totalPages: ref(0),
      loading: ref(false),
      auth,

      list_year: ref([]),
      year: ref(null),
      list_regency: ref([]),
      regency: ref(null),
      list_province: ref([]),
      province: ref(null),

      search: ref(""),
    };
  },
  mounted() {
    this.getYear();
    if (this.auth.provinces.length > 1) {
      this.auth.province = null;
    }
  },
  methods: {
    getData(props) {
      this.loading = true;
      this.pagination = props?.pagination;

      const params = new URLSearchParams();
      const data = {
        params: params,
      };
      let { page, rowsPerPage, rowsNumber } = props.pagination;

      if (rowsPerPage == 0) {
        page = 1;
        rowsPerPage = rowsNumber;
      }

      if (this.totalPages < page) {
        page = this.totalPages;
      }

      params.append("size", rowsPerPage);
      params.append("page", page - 1);
      var where = [];
      if (this.regency) {
        where.push(`["FormResponse.regency_city_id",${this.regency}]`);
      }
      if (this.auth.province) {
        where.push(
          `["FormResponse.RegencyCity.province_id","${
            this.auth.province instanceof Object
              ? this.auth.province.value
              : this.auth.province
          }"]`
        );
      }
      if (this.year) {
        const year = this.list_year.find((y) => {
          return y.value == this.year;
        });
        where.push(`["FormResponse.Form.year","${year.label}"]`);
      }

      if (this.search) {
        let search = [];
        let field = [
          "value",
          "Field.label",
          "FormResponse.Form.year",
          "FormResponse.RegencyCity.name",
          "FormResponse.RegencyCity.Province.short_name",
          "FormResponse.RegencyCity.Province.long_name",
        ];
        field.forEach((e) => {
          search.push(`["${e}", "like", "${this.search}"]`);
        });

        console.log(search);
        where.push("[" + search.join(',["OR"],') + "]");
      }

      params.append("filters", "[" + where.join(',["AND"],') + "]");
      params.append("sort", "-created_at");

      this.$api
        .get("/attachments", data)
        .then((response) => {
          this.rows = response.data.data.items;
          this.pagination.rowsNumber = response.data.data.total;
          this.totalPages = response.data.data.total_pages;

          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },

    getYear() {
      this.loading = true;
      this.$api
        .get('/forms?Limit=-&Filters={"Type": "budget"}&Sort=year asc')
        .then((res) => {
          this.list_year = res.data.data.Rows.map((year) => {
            return { label: year.Year, value: year.ID };
          });
          this.loading = false;
          return this.list_year;
        })
        .then((res) => {
          // const nowYear = new Date().getFullYear();
          // const findYear = res.find((year) => year.label == nowYear);
          // if (findYear) {
          //   this.year = findYear.value;
          // } else {
          //   this.year = res[0].value;
          // }
        })
        .then(() => {
          this.$refs.tableRef.requestServerInteraction();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setRegencies(val) {
      this.$refs.tableRef.requestServerInteraction();
      this.regency = null;
      this.auth.setRegencies(val);
    },
    filterRegency(val, update) {
      if (val === "") {
        update(() => {
          this.list_regency = this.auth.regency;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.list_regency = this.user?.Group.Details.map((regency) => {
          return {
            label: regency.RegencyCity.Name,
            value: regency.RegencyCityID,
            province: regency.RegencyCity.Province.LongName,
          };
        }).filter((v) => v.label.toLowerCase().indexOf(needle) > -1);
      });
    },
    filterProvince(val, update) {
      if (val === "") {
        update(() => {
          this.list_province = this.auth.provinces;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.list_province = this.auth.provinces.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
});
</script>
