<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Edit Anggaran</div>
    <q-card flat>
      <q-card-section class="text-primary tw-font-bold">
        Anggaran APBD Kab/Kota
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-form @submit.prevent="submit" ref="myForm">
          <q-markup-table flat separator="none" class="tw-h-auto">
            <tbody>
              <tr class="q-tr--no-hover">
                <td><div class="">-</div></td>
                <td><div class="">Pilih Tahun Anggaran</div></td>
                <td class="md:tw-block tw-hidden">
                  <q-select
                    dense
                    filled
                    v-model="year"
                    label="Pilih Tahun"
                    :options="list_year"
                    @update:model-value="getForm"
                    map-options
                    emit-value
                    :rules="[(val) => !!val]"
                    readonly
                  />
                </td>
              </tr>
              <tr class="tw-table-row md:tw-hidden">
                <td colspan="100%">
                  <q-select
                    dense
                    filled
                    v-model="year"
                    label="Pilih Tahun"
                    :options="list_year"
                    @update:model-value="getForm"
                    map-options
                    emit-value
                    :rules="[(val) => !!val]"
                    readonly
                  />
                </td>
              </tr>
              <tr class="q-tr--no-hover">
                <td>-</td>
                <td>Pilih Provinsi</td>
                <td class="md:tw-block tw-hidden">
                  <q-select
                    ref="selectProvince"
                    dense
                    filled
                    v-model="auth.province"
                    label="Pilih Provinsi"
                    :options="list_province"
                    @filter="filterProvince"
                    @update:model-value="auth.setRegencies"
                    :disable="auth.provinces.length == 1"
                    use-input
                    map-options
                    emit-value
                    :rules="[(val) => !!val]"
                    readonly
                  >
                    <template v-slot:option="scope">
                      <q-item v-bind="scope.itemProps">
                        <q-item-section>
                          <q-item-label>{{ scope.opt.label }}</q-item-label>
                          <q-item-label caption>{{
                            scope.opt.province
                          }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </td>
              </tr>
              <tr class="tw-table-row md:tw-hidden">
                <td colspan="100%">
                  <q-select
                    ref="selectProvince"
                    dense
                    filled
                    v-model="auth.province"
                    label="Pilih Provinsi"
                    :options="list_province"
                    @filter="filterProvince"
                    @update:model-value="auth.setRegencies"
                    :disable="auth.provinces.length == 1"
                    use-input
                    map-options
                    emit-value
                    :rules="[(val) => !!val]"
                    readonly
                  />
                </td>
              </tr>
              <tr class="q-tr--no-hover">
                <td>-</td>
                <td>Pilih Kabupaten Kota</td>
                <td class="md:tw-block tw-hidden">
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
                    :rules="[(val) => !!val]"
                    readonly
                  >
                    <template v-slot:option="scope">
                      <q-item v-bind="scope.itemProps">
                        <q-item-section>
                          <q-item-label>{{ scope.opt.label }}</q-item-label>
                          <q-item-label caption>{{
                            scope.opt.province
                          }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </td>
              </tr>
              <tr class="tw-table-row md:tw-hidden">
                <td colspan="100%">
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
                    :rules="[(val) => !!val]"
                    readonly
                  >
                    <template v-slot:option="scope">
                      <q-item v-bind="scope.itemProps">
                        <q-item-section>
                          <q-item-label>{{ scope.opt.label }}</q-item-label>
                          <q-item-label caption>{{
                            scope.opt.province
                          }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </td>
              </tr>

              <tr class="q-tr--no-hover">
                <td colspan="100%">
                  <q-separator class="tw-w-full" />
                </td>
              </tr>

              <template v-if="year">
                <tr class="q-tr--no-hover">
                  <td>Upload Excel</td>
                  <td></td>
                  <td class="md:tw-block tw-hidden" style="height: 100%">
                    <q-file
                      accept=".xlsx"
                      outlined
                      v-model="excel"
                      label="Upload"
                      :loading="loadingUpload"
                      @update:model-value="onUpload"
                    >
                      <template #prepend>
                        <vx-icon iconName="DocumentUpload" :size="22" />
                      </template>
                    </q-file>
                  </td>
                </tr>
                <tr class="tw-table-row md:tw-hidden">
                  <td colspan="100%">
                    <q-file
                      accept=".xlsx"
                      outlined
                      v-model="excel"
                      label="Upload"
                      :loading="loadingUpload"
                      @update:model-value="onUpload"
                    >
                      <template #prepend>
                        <vx-icon iconName="DocumentUpload" :size="22" />
                      </template>
                    </q-file>
                  </td>
                </tr>
              </template>

              <TRInput
                v-for="(inp, index) in fields"
                v-model="inp.Value"
                v-bind="{ ...inp, Index: index, Token: auth.token }"
                :key="inp.ID"
                @onValueEmpty="flushChilds(inp)"
              />
            </tbody>
          </q-markup-table>
          <div class="tw-flex tw-justify-center tw-mt-4 tw-gap-4">
            <q-btn
              outline
              color="primary"
              unelevated
              label="Kembali"
              :to="{ name: 'penginputan-index' }"
              no-caps
              :loading="loading"
            />
            <q-btn
              type="submit"
              color="primary"
              unelevated
              label="Simpan"
              no-caps
              :loading="loading"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import TRInput from "src/components/TRInput.vue";
import { useAuthStore } from "src/stores/auth";
import { defineComponent, ref } from "vue";
import {
  flattenFields,
  assignErrorsToFields,
  flushChilds,
} from "src/helper/fields.js";
import * as XLSX from "xlsx";
import VxIcon from "src/components/VxIcon.vue";

export default defineComponent({
  components: { TRInput, VxIcon },
  props: ["user"],
  setup() {
    const auth = useAuthStore();
    return {
      auth,
      list_year: ref([]),
      year: ref(null),
      list_province: ref([]),
      province: ref(null),
      list_regency: ref([]),
      regency: ref(null),
      fields: ref([]),
      loading: ref(false),
      excel: ref(null),
      config_excel: ref({}),
      loadingUpload: ref(false),

      flattenFields,
      assignErrorsToFields,
      flushChilds,
    };
  },
  mounted() {
    this.getData();
    this.getYear();
    this.getConfig();
  },
  methods: {
    getConfig() {
      this.$api.get("/config-excel").then((res) => {
        this.config_excel = res.data.data;
      });
    },
    getData() {
      return this.$api
        .get(
          `/form-responses/${this.$route.params.id}?Relations={"Name": "FieldResponse.Field.Childs.Childs.Childs"}&Relations={"Name": "RegencyCity"}&Relations={"Name": "Form"}`
        )
        .then((res) => {
          this.year = res.data.data.FormID;
          this.regency = res.data.data.RegencyCityID;
          this.list_province = this.auth.provinces;
          this.auth.province = res.data.data.RegencyCity.ProvinceID;
          this.auth.setRegencies(res.data.data.RegencyCity.ProvinceID);
          this.list_regency = this.auth.regency;
          this.fields = res.data.data.FieldResponse.map((e) => {
            return { Value: e.Value, ResponseFieldID: e.ID, ...e.Field };
          }).sort((a, b) => a.SortOrder - b.SortOrder);
        })
        .catch((err) => {
          console.log(err);
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
        })
        .catch((err) => {
          console.log(err);
        });
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
    getForm(val) {
      this.loading = true;
      const year = this.list_year.find((year) => year.value == val).label;
      this.$api
        .get("/forms/" + year + '/budget?Relation={"Name": "Fields"}')
        .then((res) => {
          this.fields = res.data.data.Fields.Fields.sort(
            (a, b) => a.SortOrder - b.SortOrder
          );
          this.loading = false;
          return res;
        })
        .then((res) => {
          this.$refs.myForm.resetValidation();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    submit() {
      this.loading = true;

      const { isValid, errors, result } = this.flattenFields(this.fields);
      this.assignErrorsToFields(errors, this.fields);

      if (isValid) {
        const payload = {
          FormID: this.year,
          UserID: this.user.ID,
          RegencyCityID: this.regency,
          ProvinceID: this.auth.province,
          FieldResponse: result,
        };
        this.$api
          .put("form-responses/" + this.$route.params.id, payload)
          .then((res) => {
            this.$q.notify({
              message: "Data berhasil tersimpan",
              color: "positive",
            });
            this.loading = false;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$q.notify({
          message: "Ada field yang belum lengkap, silahkan cek kembali",
          color: "negative",
        });
        this.loading = false;
      }
    },

    onUpload() {
      this.loadingUpload = true;
      if (this.excel) {
        const reader = new FileReader();
        const myPromise = new Promise((resolve, reject) => {
          reader.onload = (e) => {
            /* Parse data */
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_json(ws, {
              raw: true,
              range: this.config_excel.Merge,
              defval: null,
            });

            data.forEach((e) => {
              const findCode = this.fields.find(
                (f) => f.Code == e[this.config_excel.CodeKey]
              );
              if (findCode) {
                if (e[this.config_excel.AnggaranKey]) {
                  findCode.Value = e[this.config_excel.AnggaranKey];
                }
              }
            });
          };

          reader.readAsBinaryString(this.excel);
          resolve();
        });

        myPromise.then((res) => {
          this.loadingUpload = false;
        });
      }
    },
  },
});
</script>
