<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Beranda</div>
    <div class="tw-grid tw-grid-cols-4 tw-gap-4">
      <q-card flat class="tw-rounded-lg">
        <q-item>
          <q-item-section avatar>
            <q-avatar color="secondary" size="50px">
              <vx-icon
                iconName="Profile2User"
                class="text-white"
                :size="'24'"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="tw-font-bold tw-text-xl">12</q-item-label>
            <q-item-label>User</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card flat class="tw-rounded-lg">
        <q-item>
          <q-item-section avatar>
            <q-avatar color="secondary" size="50px">
              <vx-icon
                iconName="Profile2User"
                class="text-white"
                :size="'24'"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="tw-font-bold tw-text-xl">12</q-item-label>
            <q-item-label>User</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card flat class="tw-rounded-lg">
        <q-item>
          <q-item-section avatar>
            <q-avatar color="secondary" size="50px">
              <vx-icon
                iconName="Profile2User"
                class="text-white"
                :size="'24'"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="tw-font-bold tw-text-xl">12</q-item-label>
            <q-item-label>User</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card flat class="tw-rounded-lg">
        <q-item>
          <q-item-section avatar>
            <q-avatar color="secondary" size="50px">
              <vx-icon
                iconName="Profile2User"
                class="text-white"
                :size="'24'"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="tw-font-bold tw-text-xl">12</q-item-label>
            <q-item-label>User</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import VxIcon from "src/components/VxIcon.vue";

export default defineComponent({
  props: ["user"],
  components: { VxIcon },
});
</script>
