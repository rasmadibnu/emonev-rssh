<template>
  <q-item v-if="Childs.length < 1" clickable :to="{ name: Url }">
    <q-item-section v-if="Icon" avatar>
      <vx-icon :iconName="Icon" :size="24" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ Name }}</q-item-label>
    </q-item-section>
  </q-item>
  <q-expansion-item v-else class="!tw-px-0" header-class="tw-px-6">
    <template v-slot:header>
      <q-item-section avatar>
        <q-avatar>
          <vx-icon :iconName="Icon" :size="24" />
        </q-avatar>
      </q-item-section>

      <q-item-section class="tw-pl-2">
        {{ Name }}
      </q-item-section>
    </template>
    <q-list>
      <essential-link
        class="tw-px-16"
        v-for="child in Childs"
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
    Name: {
      type: String,
      required: true,
    },

    Url: {
      type: String,
      default: "#",
    },

    Icon: {
      type: String,
      default: "",
    },
    Childs: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
