<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">History Anggaran</div>
    <q-card flat>
      <q-card-section>
        <q-markup-table flat separator="none" class="tw-overflow-y-hidden">
          <tbody>
            <tr class="q-tr--no-hover">
              <td><div class="">Tahun Anggaran</div></td>
              <td class="md:tw-block tw-hidden">
                <q-select
                  dense
                  filled
                  v-model="year"
                  label="Tahun"
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
                  label="Tahun"
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
              <td>Provinsi</td>
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
                  label="Provinsi"
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
              <td>Kabupaten Kota</td>
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
                  label="Kabupaten Kota"
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
          </tbody>
        </q-markup-table>
      </q-card-section>
      <q-separator class="tw-my-6" />
      <q-card-section class="q-pt-none">
        <q-splitter v-model="splitterModel" style="height: 100%">
          <template v-slot:before>
            <q-tabs v-model="tab" vertical active-color="secondary">
              <template v-for="hist in history" v-bind:key="hist.ID">
                <q-tab :name="hist.ID" no-caps>
                  <div class="tw-my-4">
                    {{ moment(hist.CreatedAt).format("YYYY-MM-DD hh:mm:ss") }}
                    <br />
                    <div class="tw-mt-2">
                      {{ hist.User.Name }}
                    </div>
                  </div>
                </q-tab>
              </template>
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels
              v-model="tab"
              animated
              swipeable
              vertical
              transition-prev="jump-up"
              transition-next="jump-up"
            >
              <template v-for="hist in history" v-bind:key="hist.ID">
                <q-tab-panel :name="hist.ID">
                  <q-markup-table flat separator="none" class="tw-h-auto">
                    <tbody>
                      <TRInput
                        v-for="(inp, index) in hist.FieldResponse.map((e) => {
                          return {
                            ...e.Field,
                            Value: e.Value,
                            ResponseFieldID: e.ID,
                          };
                        }).sort((a, b) => a.SortOrder - b.SortOrder)"
                        v-model="inp.Value"
                        v-bind="{
                          ...inp,
                          Index: index,
                          Token: auth.token,
                          Readonly: true,
                        }"
                        :key="inp.ID"
                        @onValueEmpty="flushChilds(inp)"
                      />
                    </tbody>
                  </q-markup-table>
                </q-tab-panel>
              </template>
            </q-tab-panels>
          </template>
        </q-splitter>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import TRInput from "src/components/TRInput.vue";
import moment from "moment";
import { useAuthStore } from "src/stores/auth";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { TRInput },
  props: ["user"],
  setup() {
    const auth = useAuthStore();
    return {
      moment,

      auth,
      list_year: ref([]),
      year: ref(null),
      list_province: ref([]),
      province: ref(null),
      list_regency: ref([]),
      regency: ref(null),
      fields: ref([]),
      loading: ref(false),
      tab: ref(""),
      splitterModel: ref(20),

      history: ref([]),
    };
  },
  mounted() {
    this.getData().then((data) => {
      this.getHistory();
    });
    this.getYear();
  },
  methods: {
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
            return { ...e.Field, Value: e.Value, ResponseFieldID: e.ID };
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
    getHistory() {
      return this.$api
        .get(`/form-responses/${this.$route.params.id}/history`)
        .then((res) => {
          this.history = res.data.data;
          return res;
        })
        .then((res) => {
          this.tab = this.history[0].ID;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    setRegencies(val) {
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
    getForm(val) {
      this.loading = true;
      const year = this.list_year.find((year) => year.value == val).label;
      this.$api
        .get("/forms/" + year + '/planning?Relation={"Name": "Fields"}')
        .then((res) => {
          this.fields = res.data.data.Fields.sort(
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
  },
});
</script>
