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
    <td class="md:tw-block tw-hidden">
      <q-input
        v-if="Type == 'currency'"
        dense
        filled
        mask="###,###,###,###,###,###,###,###,###,###"
        reverse-fill-mask
        prefix="Rp"
        :model-value="modelValue"
        @update:model-value="(val) => $emit('update:modelValue', val)"
        :rules="[(val) => !!val && IsRequired]"
      />
      <q-input
        v-if="Type == 'text'"
        dense
        filled
        :model-value="modelValue"
        @update:model-value="(val) => $emit('update:modelValue', val)"
        :rules="[(val) => !!val && IsRequired]"
      />
      <div v-else-if="Type == 'radio'" class="q-gutter-sm">
        <q-radio
          :model-value="modelValue"
          @update:model-value="(val) => $emit('update:modelValue', val)"
          val="1"
          label="Ya"
        />
        <q-radio
          :model-value="modelValue"
          @update:model-value="(val) => $emit('update:modelValue', val)"
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
        @uploaded="(info) => $emit('onFileUploaded', info, Index)"
        label="Unggah Lampiran"
      />
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
        @update:model-value="(val) => $emit('update:modelValue', val)"
        :rules="[(val) => !!val && IsRequired]"
      />
      <q-input
        v-if="Type == 'text'"
        dense
        filled
        :model-value="modelValue"
        @update:model-value="(val) => $emit('update:modelValue', val)"
        :rules="[(val) => !!val && IsRequired]"
      />
      <div v-else-if="Type == 'radio'" class="q-gutter-sm">
        <q-radio
          :model-value="modelValue"
          @update:model-value="(val) => $emit('update:modelValue', val)"
          val="1"
          label="Ya"
        />
        <q-radio
          :model-value="modelValue"
          @update:model-value="(val) => $emit('update:modelValue', val)"
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
        @uploaded="(info) => $emit('onFileUploaded', info, Index)"
        label="Unggah Lampiran"
      />
    </td>
  </tr>
  <template v-if="modelValue">
    <template v-if="modelValue != '0'">
      <TRInput
        v-for="(inp, index) in Childs"
        v-bind="{ ...inp, Index: index, Token: Token }"
        v-model="inp.Value"
        :key="inp.ID"
      />
    </template>
  </template>
</template>
<script setup>
defineProps({
  Index: Number,
  Token: String,
  Dividen: Boolean,
  Code: String,
  Label: String,
  Type: String,
  IsRequired: Boolean,
  Childs: Array,
  modelValue: String,
});

defineEmits(["update:modelValue", "onFileUploaded"]);
</script>
