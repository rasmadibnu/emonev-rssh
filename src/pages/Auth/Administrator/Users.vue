<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Pengguna</div>
    <q-card flat>
      <q-card-section class="tw-flex tw-justify-between tw-items-center">
        <q-input
          dense
          placeholder="Cari..."
          v-model="search"
          filled
          debounce="350"
          @update:model-value="$refs.tableRef.requestServerInteraction()"
        >
          <template #prepend>
            <vx-icon iconName="SearchStatus" :size="20" />
          </template>
        </q-input>
        <q-btn outline no-caps color="primary" @click="openFormDialog(null)">
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
                      @click="openRoleDialog(props.row)"
                    >
                      <q-item-section avatar>
                        <vx-icon iconName="UserOctagon" :size="20" />
                      </q-item-section>

                      <q-item-section>Roles</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item
                      clickable
                      v-ripple
                      class="text-primary"
                      @click="openFormDialog(props.row)"
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
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>

  <q-dialog v-model="role_dialog">
    <q-card style="width: 600px">
      <q-card-section class="row items-center">
        <div class="text-h6">Role</div>
        <q-space />
        <q-btn flat round dense v-close-popup>
          <vx-icon iconName="CloseCircle" :size="20" />
        </q-btn>
      </q-card-section>
      <q-card-section class="q-py-none">
        <div class="tw-text-lg tw-mb-4">
          Pengguna: <span class="tw-font-semibold">{{ form?.Name }}</span>
        </div>
        <q-table
          flat
          :rows="roles"
          :columns="columns_roles"
          v-model:selected="role_selected"
          row-key="ID"
          selection="multiple"
          :loading="role_loading"
        >
        </q-table>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Batal" color="negative" no-caps v-close-popup />
        <q-btn flat label="Tambah" no-caps @click="assignRole" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="form_dialog">
    <q-card style="width: 600px">
      <q-card-section class="row items-center">
        <div class="text-h6">{{ !is_edit ? "Tambah" : "Ubah" }} Pengguna</div>
        <q-space />
        <q-btn flat round dense v-close-popup>
          <vx-icon iconName="CloseCircle" :size="20" />
        </q-btn>
      </q-card-section>

      <q-form @submit.prevent="submit">
        <q-card-section
          class="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-x-4 tw-gap-y-2"
        >
          <q-input
            v-model="form.Username"
            filled
            label="ID Pengguna"
            :rules="[(val) => !!val || 'Field harus diisi']"
          />
          <q-input
            v-model="form.Name"
            filled
            label="Nama"
            :rules="[(val) => !!val || 'Field harus diisi']"
          />
          <q-input
            v-model="form.Email"
            filled
            label="E-Mail"
            :rules="[
              (val) => !!val || 'Field harus diisi',
              (val) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'E-Mail tidak valid',
            ]"
            lazy-rules
          />
          <q-select
            filled
            v-model.number="form.GroupID"
            :options="list_group"
            map-options
            emit-value
            label="Group"
            hint=""
            @filter="filterGroup"
            use-input
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                  <q-item-label v-if="scope.opt.details" caption
                    >{{
                      scope.opt.details
                        .map((regen) => regen.RegencyCity.Name)
                        .slice(
                          0,
                          scope.opt.details.length > 2
                            ? 2
                            : scope.opt.details.length
                        )
                        .join(", ")
                    }}{{
                      scope.opt.details.length > 2 ? "..." : ""
                    }}</q-item-label
                  >
                </q-item-section>
              </q-item>
            </template></q-select
          >
          <q-input
            v-if="!is_edit"
            v-model="form.Password"
            type="password"
            filled
            label="Password"
            :rules="[(val) => !!val || 'Field harus diisi']"
          />
          <q-input
            v-else
            v-model="form.Password"
            type="password"
            filled
            label="Password"
            hint=""
          />
          <q-input
            v-model="form.ConfirmPassword"
            :disable="form.Password == null"
            type="password"
            filled
            label="Konfirmasi Password"
            :rules="[
              (val) =>
                val === form.Password || 'Konfirmasi password tidak sama',
            ]"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            label="Batal"
            no-caps
            flat
            @click="closeFormDialog"
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

const initial_form = {
  Username: null,
  GroupID: null,
  Name: null,
  Email: null,
  Password: null,
  ConfirmPassword: null,
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
        name: "Username",
        label: "ID Pengguna",
        align: "left",
        field: "Username",
        sortable: true,
      },
      {
        name: "Email",
        label: "E-Mail",
        align: "left",
        field: "Email",
        sortable: true,
      },

      {
        name: "action",
        label: "Aksi",
        align: "right",
      },
    ];

    const columns_roles = [
      {
        name: "Name",
        label: "Role",
        align: "left",
        field: "Name",
        sortable: true,
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

      options_gorup: ref([]),
      list_group: ref([]),

      role_dialog: ref(false),
      columns_roles,
      roles: ref([]),
      role_selected: ref([]),
      role_loading: ref(false),
    };
  },
  mounted() {
    this.$refs.tableRef.requestServerInteraction();
    this.getGroup();
    this.getRole();
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
      if (this.search) {
        params.append(
          "filters",
          `[["name","like","${this.search}"],["or"],["username","like","${this.search}"],["or"],["email","like","${this.search}"]]`
        );
      }
      // params.append("Relations", '{"Name": "Roles.Menus"}');

      this.$api
        .get("/users", data)
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
    getGroup() {
      this.$api
        .get(
          '/groups?Limit=-&Relation={"Name": "Details.RegencyCity.Province"}'
        )
        .then((res) => {
          this.list_group = res.data.data.items.map((group) => {
            return {
              value: group.ID,
              label: group.Name,
              details: group.Details,
            };
          });

          this.options_gorup = this.list_group;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRole() {
      return this.$api
        .get('/roles?Limit-&Relations={"Name": "Menus"}')
        .then((res) => {
          this.roles = res.data.data.Rows;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    openFormDialog(data) {
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
    closeFormDialog() {
      this.form = { ...initial_form };
      this.form_dialog = false;
      this.loading = false;
    },
    submit() {
      this.loading = true;
      if (!this.is_edit) {
        this.$api
          .post("/auth/register", {
            ...this.form,
            CreatedBy: this.user.Username,
          })
          .then((res) => {
            this.$q.notify({
              message: "User berhasil ditambahkan",
              color: "positive",
            });
            this.closeFormDialog();
            this.$refs.tableRef.requestServerInteraction();
          })
          .catch((err) => {
            this.closeFormDialog();
            console.log(err);
          });
      } else {
        this.$api
          .put("/users/" + this.id, {
            ...this.form,
            UpdateBy: this.user.Username,
          })
          .then((res) => {
            this.$q.notify({
              message: "User berhasil diubah",
              color: "positive",
            });
            this.closeFormDialog();
            this.$refs.tableRef.requestServerInteraction();
          })
          .catch((err) => {
            this.closeFormDialog();
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
        .delete("/users/" + this.id)
        .then((res) => {
          this.$q.notify({
            message: "User berhasil dihapus",
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

    openRoleDialog(data) {
      this.id = data.ID;
      delete data.Password;
      this.form = { ...data };
      this.role_selected = [];
      this.role_loading = true;
      this.role_dialog = true;

      this.$api
        .get("/users/" + data.ID + '?Relation={"Name": "Roles"}')
        .then((res) => {
          this.role_selected = res.data.data.Roles;
          this.role_loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    assignRole() {
      this.$api
        .post("users/roles/assign", {
          Roles: this.role_selected.map((e) => {
            return { UserID: this.id, RoleID: e.ID };
          }),
        })
        .then((res) => {
          this.$q.notify({
            message: "Role berhasil ditambahkan",
            color: "positive",
          });
          this.$refs.tableRef.requestServerInteraction();
          this.role_dialog = false;
        });
    },

    filterGroup(val, update) {
      if (val === "") {
        update(() => {
          this.list_group = this.options_gorup;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.list_group = this.options_gorup.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
});
</script>
