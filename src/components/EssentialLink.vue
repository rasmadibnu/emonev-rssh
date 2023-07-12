<template>
  <q-item :to="{ name: link }">
    <q-item-section v-if="icon" avatar>
      <vx-icon :iconName="icon" :size="24" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
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
  },
});
</script>
