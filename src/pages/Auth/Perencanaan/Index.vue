<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Dokumen Perencanaan</div>
    <q-card flat>
      <q-card-section>
        <div class="tw-flex tw-justify-between tw-items-center tw-mb-4">
          <div class="tw-flex tw-gap-4">
            <q-input
              dense
              placeholder="Search..."
              v-model="search"
              debounce="350"
              filled
            >
              <template #prepend>
                <vx-icon iconName="SearchStatus" :size="20" />
              </template>
            </q-input>
            <q-select
              dense
              filled
              v-model="year"
              label="Pilih Tahun"
              class="tw-w-36"
              :options="list_year"
              @update:model-value="
                this.$refs.tableRef.requestServerInteraction()
              "
              map-options
              emit-value
            />
          </div>
          <q-btn
            outline
            no-caps
            color="primary"
            :to="{ name: 'perencanaan-create' }"
          >
            <vx-icon iconName="AddCircle" class="tw-mr-2" :size="20" />
            Tambah
          </q-btn>
        </div>
        <q-table
          flat
          ref="tableRef"
          class="remove-padding-table-top"
          :loading="loading"
          :rows="rows"
          :columns="columns"
          @request="getData"
          v-model:pagination="pagination"
          row-key="ID"
        >
          <template #body-cell-index="props">
            <q-td :props="props">
              {{ props.rowIndex + 1 }}
            </q-td>
          </template>
          <template #body-cell-action="props">
            <q-td :props="props">
              <q-btn flat dense size="sm" color="primary">
                <vx-icon iconName="More" :size="18" />
                <q-menu auto-close class="tw-shadow-none tw-border">
                  <q-list style="min-width: 100px">
                    <q-item
                      clickable
                      v-ripple
                      class="text-primary"
                      :to="{
                        name: 'survey-edit',
                        params: { id: props.row.ID },
                      }"
                    >
                      <q-item-section avatar>
                        <vx-icon iconName="Edit" :size="20" />
                      </q-item-section>

                      <q-item-section>Ubah</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item
                      clickable
                      v-ripple
                      class="text-negative"
                      @click="confirmDelete(props.row.ID)"
                    >
                      <q-item-section avatar>
                        <vx-icon iconName="Trash" :size="20" />
                      </q-item-section>

                      <q-item-section>Hapus</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </q-td>
          </template>
          <!-- <template v-slot:body="props">
            <q-tr :props="props">
              <q-td @click="props.expand = !props.expand">
                {{ props.rowIndex + 1 }}
              </q-td>
              <q-td>
                <q-btn
                  size="sm"
                  color="primary"
                  round
                  dense
                  flat
                  @click="props.expand = !props.expand"
                  :icon="props.expand ? 'remove' : 'add'"
                />
                {{ props.row.RegencyCity.Province.LongName }}
              </q-td>
              <q-td @click="props.expand = !props.expand">
                {{ props.row.RegencyCity.Name }}
              </q-td>
              <q-td @click="props.expand = !props.expand">
                {{ props.row.User.Name }}
              </q-td>
              <q-td @click="props.expand = !props.expand">
                {{ moment(props.row.CreatedAt).format("YYYY-MM-DD HH:mm:ss") }}
              </q-td>
              <q-td align="right">
                <q-btn flat dense size="sm" color="primary">
                  <vx-icon iconName="More" :size="18" />
                  <q-menu auto-close class="tw-shadow-none tw-border">
                    <q-list style="min-width: 100px">
                      <q-item
                        clickable
                        v-ripple
                        class="text-primary"
                        :to="{
                          name: 'perencanaan-edit',
                          params: { id: props.row.ID },
                        }"
                      >
                        <q-item-section avatar>
                          <vx-icon iconName="Edit" :size="20" />
                        </q-item-section>

                        <q-item-section>Ubah</q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item
                        clickable
                        v-ripple
                        class="text-negative"
                        @click="confirmDelete(props.row.ID)"
                      >
                        <q-item-section avatar>
                          <vx-icon iconName="Trash" :size="20" />
                        </q-item-section>

                        <q-item-section>Hapus</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-td>
            </q-tr>
            <q-tr v-show="props.expand" :props="props" no-hover>
              <q-td></q-td>
              <q-td colspan="100%">
                <q-table
                  flat
                  :rows="props.row.FieldResponse"
                  :columns="columnsDetail"
                >
                  <template #body-cell-Isi="props">
                    <q-td :props="props">
                      <template v-if="props.row.Field?.Type == 'radio'">
                        <template v-if="props.row.Value == '0'">
                          Tidak
                        </template>
                        <template v-else>Ya</template>
                      </template>
                      <template v-else-if="props.row.Field?.Type == 'file'">
                        <q-btn
                          color="secondary"
                          padding="0"
                          label="Lampiran yang diunggah"
                          icon="attachment"
                          @click="openFileDialog(props.row.Value)"
                          no-caps
                          flat
                        />
                      </template>
                      <template v-else>
                        {{ props.row.Value }}
                      </template>
                    </q-td>
                  </template>
                </q-table>
              </q-td>
              <q-td></q-td>
            </q-tr>
          </template> -->
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>

  <q-dialog v-model="confirm">
    <q-card>
      <q-card-section>
        <div class="text-h6 text-negative tw-flex tw-items-center">
          <VxIcon iconName="Warning2" class="tw-mr-2" :size="22" />
          Konfirmasi
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Anda yakin ingin menghapus data ini?
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" no-caps v-close-popup />
        <q-btn flat label="Yes" color="negative" no-caps @click="deleteData" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="file_dialog">
    <q-card style="width: 600px">
      <q-card-section class="tw-flex tw-gap-2 tw-items-center">
        <q-icon name="attachment" size="sm" />
        <div class="text-h6">Lampiran</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-list v-if="file_list.length > 0">
          <template v-for="(file, index) in file_list" :key="index">
            <q-item
              clickable
              v-ripple
              as="a"
              target="_blank"
              :href="$api_url.split('/api/v1')[0] + file"
            >
              <q-item-section>
                <q-item-label>File {{ index + 1 }}</q-item-label>
                <q-item-label class="text-primary" caption>{{
                  file
                }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-list>
        <template v-else> Belum ada file yang di unggah </template>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Tutup" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<style lang="scss">
.remove-padding-table-top .q-table__top {
  padding: 0;
}
</style>
<script>
import VxIcon from "src/components/VxIcon.vue";
import { defineComponent, ref } from "vue";
import moment from "moment";
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
        name: "Provinsi",
        label: "Provinsi",
        align: "left",
        field: (row) => row.RegencyCity.Province.LongName,
        sortable: true,
      },
      {
        name: "Kabupaten / Kota",
        label: "Kabupaten / Kota",
        align: "left",
        field: (row) => row.RegencyCity.Name,
        sortable: true,
      },
      {
        name: "Created By",
        label: "Created By",
        align: "left",
        field: (row) => row.User.Name,
        sortable: true,
      },
      {
        name: "Year",
        label: "Tahun",
        align: "left",
        field: (row) => row.Form.Year,
        sortable: true,
      },
      {
        name: "Created At",
        label: "Created At",
        align: "left",
        field: (row) => moment(row.CreatedAt).format("YYYY-MM-DD HH:mm:ss"),
        sortable: true,
      },

      {
        name: "action",
        label: "Aksi",
        align: "right",
      },
    ];
    const columnsDetail = [
      {
        name: "Code",
        label: "Code",
        align: "left",
        field: (row) => row?.Field?.Code,
        sortable: true,
      },
      {
        name: "Label",
        label: "Label",
        align: "left",
        field: (row) => row?.Field?.Label,
        sortable: true,
      },
      {
        name: "Isi",
        label: "Isi",
        align: "left",
        sortable: false,
      },
    ];
    return {
      auth,
      moment,
      columnsDetail,
      rows: ref([]),
      columns,
      pagination: ref({
        page: 1,
        rowsPerPage: 10,
      }),
      search: ref(""),
      totalPages: ref(0),

      confirm: ref(false),
      loading: ref(false),
      id: ref(""),

      file_dialog: ref(false),
      file_list: ref([]),

      list_year: ref([]),
      year: ref(null),
    };
  },
  mounted() {
    this.getYear();
    this.$refs.tableRef.requestServerInteraction();
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

      const year = this.list_year.find((year) => year.value == this.year);

      if (this.search) {
        params.append(
          "filters",
          `[[["Form.type", "planning"]` +
            (this.year ? ',["AND"],["Form.year", "' + year.label + '"]' : "") +
            `],["AND"],["RegencyCity.Province.long_name","like","${this.search}"],["OR"],["RegencyCity.Province.short_name","like","${this.search}"],["OR"],["RegencyCity.name","like","${this.search}"],["OR"],["User.name","like","${this.search}"],["OR"],["User.username","like","${this.search}"]]`
        );
      } else {
        params.append(
          "filters",
          '[["Form.type", "planning"]' +
            (this.year ? ',["AND"],["Form.year", "' + year.label + '"]' : "") +
            "]"
        );
      }

      this.$api
        .get("/form-responses", data)
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
        .then(() => {
          this.$refs.tableRef.requestServerInteraction();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    openDialog(data) {
      if (!data) {
        this.form = { ...initial_form };
        this.is_edit = false;
      } else {
        this.is_edit = true;
        this.id = data.ID;
        delete data.Password;
        this.form = { ...data };
      }
      this.form_dialog = true;
    },
    closeDialog() {
      this.form = { ...initial_form };
      this.form_dialog = false;
      this.loading = false;
    },
    confirmDelete(id) {
      this.id = id;
      this.confirm = true;
    },
    deleteData() {
      this.$api
        .delete("/form-responses/" + this.id)
        .then((res) => {
          this.$q.notify({
            message: "Dokumen Perencanaan berhasil dihapus",
            color: "positive",
          });
          this.$refs.tableRef.requestServerInteraction();
          this.confirm = false;
        })
        .catch((err) => {
          console.log(err);
          this.confirm = false;
        });
    },

    openFileDialog(data) {
      this.file_list = data.split("|");
      this.file_dialog = true;
    },
  },
});
</script>
