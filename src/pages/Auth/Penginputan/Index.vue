<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Penginputan</div>
    <q-card flat>
      <q-card-section>
        <div class="tw-flex tw-justify-end tw-items-center tw-mb-4">
          <q-btn
            outline
            no-caps
            color="primary"
            :to="{ name: 'penginputan-create' }"
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
          <template #top>
            <div class="tw-flex tw-justify-between tw-w-full">
              <!-- <q-input dense placeholder="Search..." v-model="search" filled>
          <template #prepend>
            <vx-icon iconName="SearchStatus" :size="20" />
          </template>
        </q-input> -->
            </div>
          </template>
          <template #body-cell-index="props">
            <q-td :props="props"> </q-td>
          </template>
          <template v-slot:body="props">
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
                          name: 'penginputan-edit',
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
                        disable
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
                />
              </q-td>
              <q-td></q-td>
            </q-tr>
          </template>
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

export default defineComponent({
  props: ["user"],
  components: { VxIcon },
  setup() {
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
        name: "Created At",
        label: "Created At",
        align: "left",
        field: (row) => moment(row.CreatedAt).format("YYYY-MM-DD HH:mm:ss"),
        sortable: true,
      },

      {
        name: "action",
        label: "Action",
        align: "right",
      },
    ];
    const columnsDetail = [
      {
        name: "Code",
        label: "Code",
        align: "left",
        field: (row) => row.Field.Code,
        sortable: true,
      },
      {
        name: "Label",
        label: "Label",
        align: "left",
        field: (row) => row.Field.Label,
        sortable: true,
      },
      {
        name: "Isi",
        label: "Isi",
        align: "left",
        field: (row) => row.Value,
        sortable: true,
      },
    ];
    return {
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
    };
  },
  mounted() {
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

      params.append("Limit", rowsPerPage);
      params.append("Page", page);
      params.append("Relation", '{"Name": "User"}');
      params.append("Relation", '{"Name": "Form"}');
      params.append("Relation", '{"Name": "RegencyCity.Province"}');
      params.append("Relation", '{"Name": "FieldResponse.Field"}');

      this.$api
        .get("/form-responses", data)
        .then((response) => {
          this.rows = response.data.data.Rows;
          this.pagination.rowsNumber = response.data.data.TotalRows;
          this.totalPages = response.data.data.TotalPages;

          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
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
    submit() {
      this.loading = true;
      if (!this.is_edit) {
        this.$api
          .post("/roles", {
            ...this.form,
            CreatedBy: this.user.Username,
          })
          .then((res) => {
            this.$q.notify({
              message: "Role berhasil ditambahkan",
              color: "positive",
            });
            this.closeDialog();
            this.$refs.tableRef.requestServerInteraction();
          })
          .catch((err) => {
            this.closeDialog();
            console.log(err);
          });
      } else {
        this.$api
          .put("/roles/" + this.id, {
            ...this.form,
            UpdateBy: this.user.Username,
          })
          .then((res) => {
            this.$q.notify({
              message: "Role berhasil diubah",
              color: "positive",
            });
            this.closeDialog();
            this.$refs.tableRef.requestServerInteraction();
          })
          .catch((err) => {
            this.closeDialog();
            console.log(err);
          });
      }
    },
    confirmDelete(id) {
      this.id = id;
      this.confirm = true;
    },
    deleteData() {
      this.$api
        .delete("/roles/" + this.id)
        .then((res) => {
          this.$q.notify({
            message: "Role berhasil dihapus",
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
  },
});
</script>
