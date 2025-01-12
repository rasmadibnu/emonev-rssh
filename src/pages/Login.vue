<template>
  <q-layout>
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
          box-shadow: rgba(36, 55, 99, 0.5) 0 0 0 1000000px inset;
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
          <q-form @submit.prevent="login">
            <q-card-section class="tw-space-y-1">
              <div class="tw-space-y-1">
                <div class="text-left">ID Pengguna</div>
                <q-input
                  filled
                  v-model="username"
                  placeholder="Masukan ID Pengguna Anda"
                  :rules="[(val) => !!val || 'Field ini harus diisi']"
                >
                  <template v-slot:prepend>
                    <div class="bg-white tw-p-2 tw-rounded-md text-primary">
                      <vx-icon iconName="User" :size="20" />
                    </div>
                  </template>
                </q-input>
              </div>
              <div class="tw-space-y-1">
                <div class="text-left">Password</div>
                <q-input
                  filled
                  v-model="password"
                  placeholder="Masukan password anda"
                  :type="typePassword ? 'password' : 'text'"
                  :rules="[(val) => !!val || 'Field ini harus diisi']"
                >
                  <template v-slot:prepend>
                    <div class="bg-white tw-p-2 tw-rounded-md text-primary">
                      <vx-icon iconName="Lock1" :size="20" />
                    </div>
                  </template>
                  <template v-slot:append>
                    <div
                      class="bg-white tw-p-2 tw-rounded-md text-primary tw-cursor-pointer"
                      @click="typePassword = !typePassword"
                    >
                      <vx-icon
                        :iconName="typePassword ? 'Eye' : 'EyeSlash'"
                        :size="20"
                      />
                    </div>
                  </template>
                </q-input>
              </div>
              <div>
                <q-btn
                  type="submit"
                  label="Masuk"
                  class="tw-w-full tw-rounded-md tw-my-2"
                  unelevated
                  color="primary"
                  no-caps
                  :loading="loading"
                />
              </div>

              <footer class="text-center tw-py-3">
                {{ new Date().getFullYear() }} © Copyright All Right Reserved
              </footer>
            </q-card-section>
          </q-form>
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
import { defineComponent, ref } from "vue";
import VxIcon from "src/components/VxIcon.vue";
import { useAuthStore } from "src/stores/auth";

export default defineComponent({
  components: { VxIcon },
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
      loading: ref(false),

      username: ref(""),
      password: ref(""),
      typePassword: ref(true),
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$api
        .post("/auth/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.loading = true;
          localStorage.setItem("token", response.data.data);
          this.authStore.token = response.data.data;
          this.authStore.getUser();
          this.$router.push({ name: "beranda" });
        })
        .catch((error) => {
          var message;
          if (error?.response?.status == 404) {
            message = "ID atau Password salah";
          } else {
            message = error?.message;
          }
          this.loading = false;
          this.$q.notify({ message: message, color: "negative" });
        });
    },
  },
});
</script>
