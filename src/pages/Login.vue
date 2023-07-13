<template>
  <q-layout class="tw-font-['Sen']">
    <q-page-container>
      <q-page
        class="flex flex-center text-flex tw-flex-col tw-text-center tw-space-y-8"
        style="
          overflow-y: hidden !important;
          overflow-x: hidden !important;
          background-image: url('bg-login.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 1000000px inset;
        "
      >
        <div class="md:tw-text-2xl tw-text-md tw-font-bold tw-text-white">
          Resilient and Sustainable System for Health (RSSH)<br />AIDS -
          Tuberculosis - Malaria (ATM)
        </div>
        <q-card class="tw-w-80 md:tw-w-96">
          <q-card-section class="tw-mt-4 md:tw-my-4 text-primary">
            <div class="tw-text-3xl tw-font-bold">
              <span class="text-secondary">e</span>Monev
            </div>
          </q-card-section>
          <q-card-section class="tw-space-y-3">
            <div class="text-left">ID Pengguna</div>
            <q-input filled placeholder="Masukan ID Pengguna Anda">
              <template v-slot:prepend>
                <div class="bg-white tw-p-2 tw-rounded-md text-primary">
                  <vx-icon iconName="User" :size="20" />
                </div>
              </template>
            </q-input>
            <div class="text-left">Passowrd</div>
            <q-input filled placeholder="Masukan password anda" type="password">
              <template v-slot:prepend>
                <div class="bg-white tw-p-2 tw-rounded-md text-primary">
                  <vx-icon iconName="Lock1" :size="20" />
                </div>
              </template>
            </q-input>
            <div>
              <q-btn
                label="Masuk"
                class="tw-w-full tw-rounded-md tw-my-2"
                unelevated
                color="primary"
                no-caps
                :to="{ name: 'beranda' }"
              />
            </div>

            <footer class="text-center tw-py-3">
              {{ new Date().getFullYear() }} © Copyright All Right Reserved
            </footer>
          </q-card-section>
        </q-card>
        <q-btn
          flat
          label="Lihat Dashabord"
          :to="{ name: 'dashboard' }"
          no-caps
          color="white"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";
import VxIcon from "src/components/VxIcon.vue";

export default defineComponent({
  components: { VxIcon },
  setup() {},
});
</script>
