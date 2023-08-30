<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Edit Survey</div>
    <q-card flat>
      <q-card-section class="text-primary tw-font-bold">
        Anggaran APBD Kab/Kota
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-form @submit="submit" ref="myForm">
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
              <TRInput
                v-for="(inp, index) in fields"
                v-model="inp.Value"
                v-bind="{ ...inp, Index: index, Token: auth.token }"
                :key="inp.ID"
              />
            </tbody>
          </q-markup-table>
          <div class="tw-flex tw-justify-center tw-mt-4 tw-gap-4">
            <q-btn
              outline
              color="primary"
              unelevated
              label="Kembali"
              :to="{ name: 'survey-index' }"
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

export default defineComponent({
  components: { TRInput },
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
    };
  },
  mounted() {
    this.getData();
    this.getYear();
  },
  methods: {
    getData() {
      return this.$api
        .get(
          `/form-responses/${this.$route.params.id}?Relations={"Name": "FieldResponse.Field"}&Relations={"Name": "RegencyCity"}`
        )
        .then((res) => {
          this.year = res.data.data.FormID;
          this.regency = res.data.data.RegencyCityID;
          this.list_province = this.auth.provinces;
          this.auth.province = res.data.data.RegencyCity.ProvinceID;
          this.auth.setRegencies(res.data.data.RegencyCity.ProvinceID);
          this.list_regency = this.auth.regency;
          this.fields = res.data.data.FieldResponse.map((e) => {
            return { ...e.Field, Value: e.Value, ResponseFieldID: e.ID };
          });
          console.log(this.fields);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getYear() {
      this.loading = true;
      this.$api
        .get('/forms?Limit=-&Filters={"Type": "survey"}')
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
        .get("/forms/" + year + '/survey?Relation={"Name": "Fields"}')
        .then((res) => {
          this.fields = res.data.data.Fields;
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

    flattenFields(data) {
      const result = [];

      function flatten(item) {
        console.log(item);
        const flattenedItem = {
          ID: item.ResponseFieldID,
          Value: item.Value,
        };

        if (flattenedItem.Value) {
          result.push(flattenedItem);
        }

        if (item.Childs && item.Childs.length > 0) {
          item.Childs.forEach((child) => {
            flatten(child);
          });
        }
      }

      data.forEach((item) => {
        flatten(item);
      });

      return result;
    },

    submit() {
      this.loading = true;
      const payload = {
        FormID: this.year,
        UserID: this.user.ID,
        RegencyCityID: this.regency,
        FieldResponse: this.flattenFields(this.fields),
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
    },
    onFileUploaded(info, index) {
      this.fields[index].Value = JSON.parse(info.xhr.response).data.Url;
    },
  },
});
</script>
