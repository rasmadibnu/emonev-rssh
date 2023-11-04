<!-- eslint-disable vue/no-mutating-props -->
<template>
  <tr class="q-tr--no-hover" v-if="Dividen && Index != 0">
    <td colspan="100%">
      <q-separator />
      <div
        v-if="Removeable && Index != 0"
        class="tw-flex tw-justify-end tw-mt-4"
      >
        <div class="tw-flex tw-justify-end">
          <q-btn
            icon="close"
            label="Hapus"
            color="negative"
            flat
            no-caps
            @click="triggerRemove"
          />
        </div>
      </div>
    </td>
  </tr>
  <tr class="q-tr--no-hover">
    <td>
      {{ Code }}
    </td>
    <td>{{ Label }}</td>
    <td class="md:tw-block tw-hidden" style="height: 100%">
      <template v-if="IsRequired">
        <q-input
          v-if="Type == 'currency'"
          denur="onBlur"
          filled
          mask="###,###,###,###,###,###,###,###,###,###"
          reverse-fill-mask
          prefix="Rp"
          @focus="onFocus"
          @blur="onBlur"
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
          :rules="[(val) => !!val && IsRequired]"
          :readonly="Readonly"
        />
        <q-input
          v-if="Type == 'text'"
          dense
          filled
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
          :rules="[(val) => !!val && IsRequired]"
          :readonly="Readonly"
        />
        <q-input
          v-if="Type == 'numeric'"
          dense
          filled
          mask="##############################"
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
          :rules="[(val) => !!val && IsRequired]"
          :readonly="Readonly"
        />
        <div v-else-if="Type == 'radio'" class="q-gutter-sm">
          <q-radio
            :model-value="modelValue"
            @update:model-value="(val) => updateModelValue(val)"
            val="1"
            label="Ya"
          />
          <q-radio
            :model-value="modelValue"
            @update:model-value="(val) => updateModelValue(val)"
            val="0"
            label="Tidak"
          />
        </div>
        <q-uploader
          v-else-if="Type == 'file'"
          :url="$api_url + '/attachments'"
          :headers="[
            {
              name: 'Authorization',
              value: 'Bearer ' + Token,
            },
          ]"
          style="max-width: 300px"
          flat
          bordered
          auto-upload
          field-name="data_files"
          @uploaded="(info) => onUploaded(info)"
          multiple
          batch
          label="Unggah Dokumen"
        />
        <q-btn
          v-if="Type == 'file' && modelValue != '' && modelValue"
          color="secondary"
          padding="0"
          class="tw-mt-2"
          label="Dokumen yang diunggah"
          icon="attachment"
          no-caps
          flat
          @click="list_dialog = true"
        />
        <q-btn v-if="Type == 'dynamic'" color="primary" :label="'dawwwww'" />
        <div v-if="Error && !modelValue" class="text-negative">
          {{ ErrorMessage }}
        </div>
      </template>
      <template v-else>
        <q-input
          v-if="Type == 'currency'"
          dense
          filled
          mask="###,###,###,###,###,###,###,###,###,###"
          reverse-fill-mask
          prefix="Rp"
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
          :readonly="Readonly"
        />
        <q-input
          v-if="Type == 'text'"
          dense
          filled
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
          :readonly="Readonly"
        />
        <q-input
          v-if="Type == 'numeric'"
          dense
          filled
          mask="##############################"
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
          :readonly="Readonly"
        />
        <div v-else-if="Type == 'radio'" class="q-gutter-sm">
          <q-radio
            :model-value="modelValue"
            @update:model-value="(val) => updateModelValue(val)"
            val="1"
            label="Ya"
          />
          <q-radio
            :model-value="modelValue"
            @update:model-value="(val) => updateModelValue(val)"
            val="0"
            label="Tidak"
          />
        </div>
        <q-uploader
          v-else-if="Type == 'file'"
          :url="$api_url + '/attachments'"
          :headers="[
            {
              name: 'Authorization',
              value: 'Bearer ' + Token,
            },
          ]"
          style="max-width: 300px"
          flat
          bordered
          auto-upload
          field-name="data_files"
          @uploaded="(info) => onUploaded(info)"
          multiple
          batch
          label="Unggah Dokumen"
        />
        <q-btn
          v-if="Type == 'file' && modelValue != '' && modelValue"
          color="secondary"
          padding="0"
          class="tw-mt-2"
          label="Dokumen yang diunggah"
          icon="attachment"
          no-caps
          flat
          @click="list_dialog = true"
        />
        <q-btn
          v-if="Type == 'dynamic'"
          color="primary"
          :label="Label"
          flat
          :icon="clicked ? 'expand_less' : 'expand_more'"
          no-caps
          @click="clickDynamic"
        />
        <div v-if="Error && !modelValue" class="text-negative">
          {{ ErrorMessage }}
        </div>
      </template>
    </td>
  </tr>
  <tr class="q-tr--no-hover tw-table-row md:tw-hidden">
    <td colspan="100%" style="height: 100%">
      <template v-if="IsRequired">
        <q-input
          v-if="Type == 'currency'"
          dense
          filled
          mask="###,###,###,###,###,###,###,###,###,###"
          reverse-fill-mask
          prefix="Rp"
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
          :rules="[(val) => !!val && IsRequired]"
        />
        <q-input
          v-if="Type == 'text'"
          dense
          filled
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
          :rules="[(val) => !!val && IsRequired]"
        />
        <q-input
          v-if="Type == 'numeric'"
          dense
          filled
          mask="##############################"
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
          :rules="[(val) => !!val && IsRequired]"
        />
        <div v-else-if="Type == 'radio'" class="q-gutter-sm">
          <q-radio
            :model-value="modelValue"
            @update:model-value="(val) => updateModelValue(val)"
            val="1"
            label="Ya"
          />
          <q-radio
            :model-value="modelValue"
            @update:model-value="(val) => updateModelValue(val)"
            val="0"
            label="Tidak"
          />
        </div>
        <q-uploader
          v-else-if="Type == 'file'"
          :url="$api_url + '/attachments'"
          :headers="[
            {
              name: 'Authorization',
              value: 'Bearer ' + Token,
            },
          ]"
          style="max-width: 300px"
          flat
          bordered
          auto-upload
          field-name="data_files"
          @uploaded="(info) => onUploaded(info)"
          @failed="(info) => onFailed(info)"
          multiple
          batch
          label="Unggah Dokumen"
        />
        <q-btn
          v-if="Type == 'file' && modelValue != '' && modelValue"
          color="secondary"
          padding="0"
          class="tw-mt-2"
          label="Dokumen yang diunggah"
          icon="attachment"
          no-caps
          flat
          @click="list_dialog = true"
        />
        <q-btn
          v-if="Type == 'dynamic'"
          color="primary"
          :label="Label"
          flat
          :icon="clicked ? 'expand_less' : 'expand_more'"
          no-caps
          @click="clickDynamic"
        />
        <div v-if="Error && !modelValue" class="text-negative">
          {{ ErrorMessage }}
        </div>
      </template>
      <template v-else>
        <q-input
          v-if="Type == 'currency'"
          dense
          filled
          mask="###,###,###,###,###,###,###,###,###,###"
          reverse-fill-mask
          prefix="Rp"
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
        />
        <q-input
          v-if="Type == 'text'"
          dense
          filled
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
        />
        <q-input
          v-if="Type == 'numeric'"
          dense
          filled
          mask="##############################"
          :model-value="modelValue"
          @update:model-value="(val) => updateModelValue(val)"
        />
        <div v-else-if="Type == 'radio'" class="q-gutter-sm">
          <q-radio
            :model-value="modelValue"
            @update:model-value="(val) => updateModelValue(val)"
            val="1"
            label="Ya"
          />
          <q-radio
            :model-value="modelValue"
            @update:model-value="(val) => updateModelValue(val)"
            val="0"
            label="Tidak"
          />
        </div>
        <q-uploader
          v-else-if="Type == 'file'"
          size="sm"
          :url="$api_url + '/attachments'"
          :headers="[
            {
              name: 'Authorization',
              value: 'Bearer ' + Token,
            },
          ]"
          style="max-width: 300px"
          flat
          bordered
          auto-upload
          field-name="data_files"
          @uploaded="(info) => onUploaded(info)"
          @failed="(info) => onFailed(info)"
          multiple
          batch
          label="Unggah Dokumen"
        />
        <q-btn
          v-if="Type == 'file' && modelValue != '' && modelValue"
          color="secondary"
          padding="0"
          class="tw-mt-2"
          label="Dokumen yang diunggah"
          icon="attachment"
          no-caps
          flat
          @click="list_dialog = true"
        />
        <q-btn
          v-if="Type == 'dynamic'"
          color="primary"
          :label="Label"
          flat
          :icon="clicked ? 'expand_less' : 'expand_more'"
          no-caps
          @click="clickDynamic"
        />
        <div v-if="Error && !modelValue" class="text-negative">
          {{ ErrorMessage }}
        </div>
      </template>
    </td>
  </tr>
  <template v-if="(modelValue && Childs) || (Type == 'dynamic' && clicked)">
    <template v-if="modelValue != '0'">
      <template v-if="clicked">
        <TRInput
          v-for="(inp, index) in localChilds.sort(
            (a, b) => a.SortOrder - b.SortOrder
          )"
          v-bind="{ ...inp, Index: index, Token: Token, Removeable: true }"
          v-model="inp.Value"
          :key="inp.ID"
          @remove="remove"
        />
        <tr v-if="clicked" class="tw-w-full q-tr--no-hover">
          <td colspan="100%">
            <div class="tw-flex tw-justify-end">
              <q-btn icon="add" label="Tambah Lagi" flat @click="add" no-caps />
            </div>
          </td>
        </tr>
      </template>
      <template v-else>
        <TRInput
          v-for="(inp, index) in Childs.sort(
            (a, b) => a.SortOrder - b.SortOrder
          )"
          v-bind="{ ...inp, Index: index, Token: Token }"
          v-model="inp.Value"
          :key="inp.ID"
        />
      </template>
    </template>
  </template>
  <q-dialog v-model="list_dialog" v-if="Type == 'file'">
    <q-card style="width: 600px">
      <q-card-section class="tw-flex tw-gap-2 tw-items-center">
        <q-icon name="attachment" size="sm" />
        <div class="text-h6">Dokumen</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-list separator v-if="modelValue != '' && modelValue">
          <template v-for="(file, index) in modelValue.split('|')" :key="index">
            <q-item
              clickable
              v-ripple
              as="a"
              target="_blank"
              :href="$api_url.split('/api/v1')[0] + file"
            >
              <q-item-section>
                <q-item-label>Dokumen {{ index + 1 }}</q-item-label>
                <q-item-label class="text-primary" caption>{{
                  file.substring(file.length, 8)
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
<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  ResponseFieldID: Number,
  Index: Number,
  Token: String,
  Dividen: Boolean,
  Code: String,
  Label: String,
  Type: String,
  IsRequired: Boolean,
  Childs: Array,
  modelValue: String,
  ID: Number,
  ParentID: Number,
  Parent: Object,
  FormID: Number,
  SortOrder: Number,
  CreatedAt: String,
  UpdatedAt: String,
  DeletedAt: String,
  Error: Boolean,
  ErrorMessage: String,
  Value: String,
  Removeable: {
    default: false,
    type: Boolean,
  },
  Readonly: {
    default: false,
    type: Boolean,
  },
});

const originalChilds = ref([]);
if (props.Childs) {
  originalChilds.value = JSON.parse(JSON.stringify(props.Childs)).sort(
    (a, b) => a.SortOrder - b.SortOrder
  );
}

const clicked = ref(false);
const localChilds = ref([]);

const emit = defineEmits(["update:modelValue", "onValueEmpty", "remove"]);

const list_dialog = ref(false);

const copyArray = () => {
  if (props.Childs) {
    localChilds.value = JSON.parse(JSON.stringify(originalChilds.value));
  }
};

onMounted(() => {
  copyArray();
  if (props.Type == "currency") emit("update:modelValue", "0");
});

function onUploaded(info) {
  const model = JSON.parse(info.xhr.response)
    .data.map((e) => e.Url)
    .join("|");
  updateModelValue(model);
}

function onFailed(info) {
  this.$q.notify({
    message: "File terlalu besar atau ada kesalahan saat mengupload file",
    color: "negative",
  });
}

function updateModelValue(val) {
  emit("update:modelValue", val);

  if (val === "0") {
    emit("onValueEmpty");
  }
}

function onFocus() {
  if (props.Type == "currency" && props.modelValue == "0")
    emit("update:modelValue", "");
}

function onBlur() {
  if (props.Type == "currency" && props.modelValue == "")
    emit("update:modelValue", "0");
}

function clickDynamic() {
  if (!clicked.value) {
    localChilds.value = props.Childs;
  }
  clicked.value = !clicked.value;
}

function getUniqueObjects(array, property) {
  const uniqueObjects = Array.from(
    new Set(array.map((obj) => obj[property]))
  ).map((id) => {
    return array.find((obj) => obj[property] === id);
  });
  return uniqueObjects;
}

const add = () => {
  const last = localChilds.value[localChilds.value.length - 1];
  getUniqueObjects(originalChilds.value, "ID").forEach((e, index) => {
    delete e.Value;
    localChilds.value.push({ ...e, SortOrder: last.SortOrder + (index + 1) });
  });
};

const triggerRemove = () => {
  emit("remove", props.Index, props.ParentID);
};

const remove = (index, parent_id) => {
  if (props.ID == parent_id) {
    localChilds.value.splice(index, originalChilds.value.length);
  }
};
</script>
