<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Menu</div>
    <q-card flat>
      <q-card-section class="text-primary tw-font-bold">
        <q-btn outline no-caps color="primary" @click="openDialog(null)">
          <vx-icon iconName="AddCircle" class="tw-mr-2" :size="20" />
          Tambah
        </q-btn>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-table
          flat
          class="remove-padding-table-top"
          :loading="loading"
          :rows="rows"
          :columns="columns"
          row-key="ID"
          :pagination="{ rowsPerPage: 10 }"
        >
          <!-- @request="getData"
    v-model:pagination="pagination" -->
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
            <TRMenus
              :props="props"
              :row="props.row"
              :number="props.rowIndex"
              :indent="10"
              @openDialog="openDialog"
              @confirmDelete="confirmDelete"
            />
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>

  <q-dialog v-model="form_dialog">
    <q-card style="width: 600px">
      <q-card-section class="row items-center">
        <div class="text-h6">{{ !is_edit ? "Tmabah" : "Ubah" }} Menu</div>
        <q-space />
        <q-btn flat round dense v-close-popup>
          <vx-icon iconName="CloseCircle" :size="20" />
        </q-btn>
      </q-card-section>

      <q-form @submit.prevent="submit">
        <q-card-section
          class="tw-grid md:tw-grid-cols-6 tw-grid-cols-1 tw-gap-x-4 tw-gap-y-2"
        >
          <q-select
            class="md:tw-col-span-6"
            :options="menu_list"
            emit-value
            map-options
            clearable
            v-model.number="form.ParentID"
            filled
            label="Parent"
            hint=""
          />
          <q-input
            v-model="form.Name"
            filled
            label="Nama"
            :rules="[(val) => !!val || 'Field harus diisi']"
            class="md:tw-col-span-2"
          />
          <q-input
            v-model="form.Code"
            filled
            label="Code"
            class="md:tw-col-span-2"
            hint=""
          />
          <q-input
            v-model="form.Url"
            filled
            label="URL"
            :rules="[(val) => !!val || 'Field harus diisi']"
            class="md:tw-col-span-2"
          />
          <q-input
            v-model="form.Icon"
            filled
            label="Icon"
            :rules="[(val) => !!val || 'Field harus diisi']"
            class="md:tw-col-span-3"
          />
          <q-input
            v-model.number="form.Index"
            filled
            mask="#"
            reverse-fill-mask
            label="Urutan"
            :rules="[(val) => !!val || 'Field harus diisi']"
            class="md:tw-col-span-3"
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
import TRMenus from "src/components/TRMenus.vue";

const initial_form = {
  Name: null,
  Url: null,
  Icon: null,
  Code: null,
  Index: null,
};

export default defineComponent({
  props: ["user"],
  components: { VxIcon, TRMenus },
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
        name: "Kode",
        label: "Kode",
        align: "left",
        field: "Kode",
        sortable: true,
      },
      {
        name: "Url",
        label: "URL",
        align: "left",
        field: "Url",
        sortable: true,
      },
      {
        name: "Icon",
        label: "Icon",
        align: "left",
        field: "Icon",
        sortable: true,
      },
      {
        name: "Urutan",
        label: "Urutan",
        align: "center",
        field: "Ord",
        sortable: true,
      },

      {
        name: "action",
        label: "Action",
        align: "right",
      },
    ];
    return {
      rows: ref([]),
      columns,
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

      menu_list: ref([]),
    };
  },
  mounted() {
    // this.$refs.tableRef.requestServerInteraction();
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      // this.pagination = props?.pagination;

      // const params = new URLSearchParams();
      // const data = {
      //   params: params,
      // };
      // let { page, rowsPerPage, rowsNumber } = props.pagination;

      // if (rowsPerPage == 0) {
      //   page = 1;
      //   rowsPerPage = rowsNumber;
      // }

      // if (this.totalPages < page) {
      //   page = this.totalPages;
      // }

      // params.append("Limit", rowsPerPage);
      // params.append("Page", page);

      this.$api
        .get("/menus")
        .then((response) => {
          this.rows = response.data.data;
          // this.pagination.rowsNumber = response.data.data.TotalRows;
          // this.totalPages = response.data.data.TotalPages;

          this.menu_list = this.rows
            .filter((menu) => {
              return menu.ParentID == 0;
            })
            .map((menu) => {
              return { value: menu.ID, label: menu.Name };
            });
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
        if (!data.ParentID) {
          delete data.ParentID;
        }
        this.form = { ...data, Index: data.Ord };
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
          .post("/menus", {
            ...this.form,
            CreatedBy: this.user.Username,
          })
          .then((res) => {
            this.$q.notify({
              message: "Menu berhasil ditambahkan",
              color: "positive",
            });
            this.closeDialog();
            this.getData();
          })
          .catch((err) => {
            this.closeDialog();
            console.log(err);
          });
      } else {
        this.$api
          .put("/menus/" + this.id, {
            ...this.form,
            UpdateBy: this.user.Username,
          })
          .then((res) => {
            this.$q.notify({
              message: "Menu berhasil diubah",
              color: "positive",
            });
            this.closeDialog();
            this.getData();
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
        .delete("/menus/" + this.id)
        .then((res) => {
          this.$q.notify({
            message: "Menu berhasil dihapus",
            color: "positive",
          });
          this.getData();
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
