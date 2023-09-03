<!-- eslint-disable vue/no-mutating-props -->
<template>
  <tr class="q-tr--no-hover" v-if="Dividen">
    <td colspan="100%">
      <q-separator />
    </td>
  </tr>
  <tr class="q-tr--no-hover">
    <td>
      {{ Code }}
    </td>
    <td>{{ Label }}</td>
    <td class="md:tw-block tw-hidden" style="height: 100%">
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
        field-name="data_file"
        @uploaded="(info) => onUploaded(info)"
        label="Unggah Lampiran"
      />
      <q-btn
        v-if="Type == 'file' && modelValue != '' && modelValue"
        as="a"
        target="_blank"
        color="secondary"
        padding="0"
        class="tw-mt-2"
        :href="$api_url.split('/api/v1')[0] + modelValue"
        label="Lampiran yang diunggah"
        icon="attachment"
        no-caps
        flat
      />
      <div v-if="Error && !modelValue" class="text-negative">
        {{ ErrorMessage }}
      </div>
    </td>
  </tr>
  <tr class="q-tr--no-hover tw-table-row md:tw-hidden">
    <td colspan="100%" style="height: 100%">
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
        field-name="data_file"
        @uploaded="(info) => onUploaded(info)"
        label="Unggah Lampiran"
      />
      <q-btn
        v-if="Type == 'file' && modelValue != '' && modelValue"
        as="a"
        target="_blank"
        color="secondary"
        padding="0"
        class="tw-mt-2"
        :href="$api_url.split('/api/v1')[0] + modelValue"
        label="Lampiran yang diunggah"
        icon="attachment"
        no-caps
        flat
      />
    </td>
  </tr>
  <template v-if="modelValue && Childs">
    <template v-if="modelValue != '0'">
      <TRInput
        v-for="(inp, index) in Childs.sort((a, b) => a.SortOrder - b.SortOrder)"
        v-bind="{ ...inp, Index: index, Token: Token }"
        v-model="inp.Value"
        :key="inp.ID"
      />
    </template>
  </template>
</template>
<script setup>
const props = defineProps({
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
  FormID: Number,
  SortOrder: Number,
  CreatedAt: String,
  UpdatedAt: String,
  DeletedAt: String,
  Error: Boolean,
  ErrorMessage: String,
  Value: String,
});

const emit = defineEmits(["update:modelValue", "onValueEmpty"]);

function onUploaded(info) {
  this.modelValue = JSON.parse(info.xhr.response).data.Url;
  updateModelValue(this.modelValue);
}

function updateModelValue(val) {
  emit("update:modelValue", val);

  if (val === "0") {
    emit("onValueEmpty");
  }
}
</script>
