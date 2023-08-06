<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Group</div>
    <q-card flat>
      <q-card-section class="tw-flex tw-justify-between tw-items-center">
        <q-btn outline no-caps color="primary" @click="openDialog(null)">
          <vx-icon iconName="AddCircle" class="tw-mr-2" :size="20" />
          Tambah
        </q-btn>
      </q-card-section>
      <q-card-section class="q-pt-none">
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
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td @click="props.expand = !props.expand">
                {{ props.rowIndex + 1 }}
              </q-td>
              <q-td>
                <q-btn
                  size="sm"
                  flat
                  color="primary"
                  round
                  dense
                  @click="props.expand = !props.expand"
                  :icon="props.expand ? 'remove' : 'add'"
                />
                {{ props.row.Name }}
              </q-td>
              <q-td @click="props.expand = !props.expand">
                {{ props.row.Description }}
              </q-td>
              <q-td>
                <q-btn flat dense size="sm" color="primary">
                  <vx-icon iconName="More" :size="18" />
                  <q-menu auto-close class="tw-shadow-none tw-border">
                    <q-list style="min-width: 100px">
                      <q-item
                        clickable
                        v-ripple
                        class="text-primary"
                        @click="openDialogRegency(props.row)"
                      >
                        <q-item-section avatar>
                          <vx-icon iconName="LocationAdd" :size="20" />
                        </q-item-section>

                        <q-item-section>Tambah Kabupaten / Kota</q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        class="text-primary"
                        @click="openDialog(props.row)"
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
              <q-td> </q-td>
              <q-td colspan="100%">
                <q-table
                  flat
                  :rows="props.row.Details"
                  :columns="columnsDetail"
                ></q-table>
              </q-td>
              <q-td> </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>

  <q-dialog v-model="form_dialog">
    <q-card style="min-width: 600px">
      <q-card-section class="row items-center">
        <div class="text-h6">{{ !is_edit ? "Tmabah" : "Ubah" }} Group</div>
        <q-space />
        <q-btn flat round dense v-close-popup>
          <vx-icon iconName="CloseCircle" :size="20" />
        </q-btn>
      </q-card-section>

      <q-form @submit.prevent="submit">
        <q-card-section class="tw-space-y-2">
          <q-input
            v-model="form.Name"
            filled
            label="Nama"
            :rules="[(val) => !!val || 'Field harus diisi']"
          />
          <q-input
            v-model="form.Description"
            filled
            label="Deskripsi"
            type="textarea"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            label="Batal"
            no-caps
            flat
            @click="closeDialog"
            color="negative"
          />
          <q-btn
            label="Simpan"
            :loading="loading"
            type="submit"
            no-caps
            flat
            color="primary"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
  <q-dialog
    v-model="dialogRegency"
    @show="$refs.tableRegencyRef.requestServerInteraction()"
  >
    <q-card style="width: 600px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">List Kabupaten / Kota</div>

        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section>
        <div class="tw-mb-3">Nama Group: {{ selectedGroup?.Name }}</div>
        <!-- <q-virtual-scroll
          :items="selectedGroup?.Details"
          virtual-scroll-horizontal
          v-slot="{ item, index }"
          class="tw-mb-4"
        >
          <q-badge :key="index" :label="item.RegencyCity.Name" />
        </q-virtual-scroll> -->
        <q-scroll-area style="height: 50vh" class="tw-w-full">
          <q-table
            dense
            flat
            ref="tableRegencyRef"
            class="remove-padding-table-top"
            :loading="loadingRegency"
            :rows="rowsRegency"
            :columns="columnsRegency"
            @request="getDataRegency"
            v-model:pagination="paginationRegency"
            v-model:selected="selectedRegency"
            selection="multiple"
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
            <!-- <template #body-cell-index="props">
            <q-td :props="props">
              {{ props.rowIndex + 1 }}
            </q-td>
          </template> -->
          </q-table>
        </q-scroll-area>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Batal" no-caps color="primary" v-close-popup />
        <q-btn
          flat
          label="Simpan"
          no-caps
          @click="submitRegency"
          color="primary"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
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

const initial_form = {
  Name: null,
  Description: null,
};

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
        name: "Name",
        label: "Nama",
        align: "left",
        field: "Name",
        sortable: true,
      },
      {
        name: "Deskripsi",
        label: "Deskripsi",
        align: "left",
        field: "Description",
        sortable: true,
      },

      {
        name: "action",
        label: "Action",
        align: "right",
      },
    ];
    const columnsRegency = [
      // {
      //   name: "index",
      //   label: "#",
      //   align: "center",
      // },
      {
        name: "Name",
        label: "Nama",
        align: "left",
        field: "Name",
        sortable: true,
      },
      {
        name: "Provinsi",
        label: "Provinsi",
        align: "left",
        field: (row) => row.Province.LongName,
        sortable: true,
      },
      {
        name: "Kode",
        label: "Kode",
        align: "left",
        field: "Code",
        sortable: true,
      },

      // {
      //   name: "action",
      //   label: "Action",
      //   align: "right",
      // },
    ];
    const columnsDetail = [
      // {
      //   name: "index",
      //   label: "#",
      //   align: "center",
      // },
      {
        name: "Kabupaten",
        label: "Kabupaten / Kota",
        align: "left",
        field: (row) => row.RegencyCity.Name,
        sortable: true,
      },
      {
        name: "Provinsi",
        label: "Provinsi",
        align: "left",
        field: (row) => row.RegencyCity.Province.LongName,
        sortable: true,
      },
      {
        name: "Kode",
        label: "Kode",
        align: "left",
        field: (row) => row.RegencyCity.Code,
        sortable: true,
      },

      // {
      //   name: "action",
      //   label: "Action",
      //   align: "right",
      // },
    ];
    return {
      rows: ref([]),
      columns,
      columnsDetail,
      pagination: ref({
        page: 1,
        rowsPerPage: 10,
      }),
      search: ref(""),
      totalPages: ref(0),

      form_dialog: ref(false),
      confirm: ref(false),
      is_edit: ref(false),
      loading: ref(false),
      id: ref(""),
      form: ref(structuredClone(initial_form)),

      dialogRegency: ref(false),
      loadingRegency: ref(false),
      rowsRegency: ref([]),
      columnsRegency,
      paginationRegency: ref({
        page: 1,
        rowsPerPage: 10,
      }),
      totalPagesRegency: ref(0),
      selectedRegency: ref([]),
      selectedGroup: ref({}),
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
      params.append("Relations", '{"Name":"Details.RegencyCity.Province"}');

      this.$api
        .get("/groups", data)
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
          .post("/groups", {
            ...this.form,
            CreatedBy: this.user.Username,
          })
          .then((res) => {
            this.$q.notify({
              message: "Group berhasil ditambahkan",
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
          .put("/groups/" + this.id, {
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
        .delete("/groups/" + this.id)
        .then((res) => {
          this.$q.notify({
            message: "Group berhasil dihapus",
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

    getDataRegency(props) {
      this.loadingRegency = true;
      this.paginationRegency = props?.pagination;

      const params = new URLSearchParams();
      const data = {
        params: params,
      };
      let { page, rowsPerPage, rowsNumber } = props.pagination;

      if (rowsPerPage == 0) {
        page = 1;
        rowsPerPage = rowsNumber;
      }

      if (this.totalPagesRegency < page) {
        page = this.totalPagesRegency;
      }

      params.append("Limit", rowsPerPage);
      params.append("Page", page);
      params.append("Relations", '{"Name":"Province"}');

      this.$api
        .get("/regency-cities", data)
        .then((response) => {
          this.rowsRegency = response.data.data.Rows;
          this.paginationRegency.rowsNumber = response.data.data.TotalRows;
          this.totalPagesRegency = response.data.data.TotalPages;

          this.loadingRegency = false;
        })
        .catch((error) => {
          console.log(error);
          this.loadingRegency = false;
        });
    },
    openDialogRegency(data) {
      this.selectedRegency = [];
      this.selectedRegency = data.Details.map((detail) => detail.RegencyCity);
      this.selectedGroup = data;
      this.dialogRegency = true;
    },

    submitRegency() {
      const payload = {
        Details: this.selectedRegency.map((regency) => {
          return {
            GroupID: this.selectedGroup?.ID,
            ProvinceID: regency.ProvinceID,
            RegencyCityID: regency.ID,
          };
        }),
      };

      this.$api
        .post("/group-details/bulk", payload)
        .then((res) => {
          this.$q.notify({
            message: "Kabupaten / Kota berhasil ditambahkan ke group",
            color: "positive",
          });
          this.dialogRegency = false;
          this.$refs.tableRef.requestServerInteraction();
        })
        .catch((errr) => {
          console.log(errr);
        });
    },
  },
});
</script>
