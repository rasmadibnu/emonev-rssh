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
        multiple
        batch
        label="Unggah Lampiran"
      />
      <q-btn
        v-if="Type == 'file' && modelValue != '' && modelValue"
        color="secondary"
        padding="0"
        class="tw-mt-2"
        label="Lampiran yang diunggah"
        icon="attachment"
        no-caps
        flat
        @click="list_dialog = true"
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
        multiple
        batch
        label="Unggah Lampiran"
      />
      <q-btn
        v-if="Type == 'file' && modelValue != '' && modelValue"
        color="secondary"
        padding="0"
        class="tw-mt-2"
        label="Lampiran yang diunggah"
        icon="attachment"
        no-caps
        flat
        @click="list_dialog = true"
      />
      <div v-if="Error && !modelValue" class="text-negative">
        {{ ErrorMessage }}
      </div>
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
  <q-dialog v-model="list_dialog" v-if="Type == 'file'">
    <q-card style="width: 600px">
      <q-card-section class="tw-flex tw-gap-2 tw-items-center">
        <q-icon name="attachment" size="sm" />
        <div class="text-h6">Lampiran</div>
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
                <q-item-label>File {{ index + 1 }}</q-item-label>
                <q-item-label class="text-primary" caption>{{
                  file
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
import { ref } from "vue";

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

const list_dialog = ref(false);

function onUploaded(info) {
  this.modelValue = JSON.parse(info.xhr.response)
    .data.map((e) => e.Url)
    .join("|");
  updateModelValue(this.modelValue);
}

function updateModelValue(val) {
  emit("update:modelValue", val);

  if (val === "0") {
    emit("onValueEmpty");
  }
}
</script>
