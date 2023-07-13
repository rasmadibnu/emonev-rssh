<template>
  <q-item v-if="childs.length < 1" clickable :to="{ name: link }">
    <q-item-section v-if="icon" avatar>
      <vx-icon :iconName="icon" :size="24" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
  <q-expansion-item v-else class="!tw-px-0" header-class="tw-px-6">
    <template v-slot:header>
      <q-item-section avatar>
        <q-avatar>
          <vx-icon :iconName="icon" :size="24" />
        </q-avatar>
      </q-item-section>

      <q-item-section class="tw-pl-2">
        {{ title }}
      </q-item-section>
    </template>
    <q-list>
      <essential-link
        class="tw-px-16"
        v-for="child in childs"
        v-bind="child"
        v-bind:key="child"
      />
    </q-list>
  </q-expansion-item>
</template>

<script>
import { defineComponent } from "vue";
import VxIcon from "src/components/VxIcon.vue";

export default defineComponent({
  components: { VxIcon },
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
    childs: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
