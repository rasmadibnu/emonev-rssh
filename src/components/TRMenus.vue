<template>
  <q-tr :props="props">
    <q-td>
      <div>
        <template v-if="number2"> {{ number2 }}.</template>
        {{ number + 1 }}
      </div>
    </q-td>
    <q-td>
      <div
        :style="{
          marginLeft: childIndent,
        }"
      >
        <q-btn
          no-caps
          flat
          dense
          size="sm"
          v-if="row.Childs.length > 0"
          @click="toggleExpand(row.ID)"
          :icon="!expand.includes(row.ID) ? 'remove' : 'add'"
        />
        {{ row.Name }}
      </div>
    </q-td>
    <q-td>
      {{ row.Code }}
    </q-td>
    <q-td>
      {{ row.Url }}
    </q-td>
    <q-td>
      <div class="text-center">
        <VxIcon :iconName="row.Icon" :size="18" />
      </div>
    </q-td>
    <q-td>
      <div class="text-center">
        {{ row.Ord }}
      </div>
    </q-td>
    <q-td>
      <div class="text-right">
        <q-btn flat dense size="sm" color="primary">
          <vx-icon iconName="More" :size="18" />
          <q-menu auto-close class="tw-shadow-none tw-border">
            <q-list style="min-width: 100px">
              <q-item
                clickable
                v-ripple
                class="text-primary"
                @click="openDialog(row)"
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
                @click="confirmDelete(row.ID)"
              >
                <q-item-section avatar>
                  <vx-icon iconName="Trash" :size="20" />
                </q-item-section>

                <q-item-section>Hapus</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-td>
  </q-tr>
  <template v-if="!expand.includes(row.ID)">
    <TRMenus
      v-for="(child1, index) in row.Childs"
      :key="child1.ID"
      :number="index"
      :number2="number + 1"
      :row="child1"
      :indent="indent + 10"
      @openDialog="openDialog"
      @confirmDelete="confirmDelete"
    />
  </template>
</template>
<script>
import VxIcon from "src/components/VxIcon.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TRMenus",
  props: ["props", "row", "number", "number2", "indent"],
  components: {
    VxIcon,
  },
  setup() {
    return {
      expand: ref([]),
    };
  },
  computed: {
    childIndent() {
      return this.indent + "px";
    },
  },
  methods: {
    toggleExpand(id) {
      this.expand.includes(id)
        ? this.expand.splice(this.expand.indexOf(id), 1)
        : this.expand.push(id);
    },
    openDialog(row) {
      this.$emit("openDialog", row);
    },
    confirmDelete(id) {
      this.$emit("confirmDelete", id);
    },
  },
});
</script>
