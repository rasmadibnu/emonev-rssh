<template>
  <q-page class="tw-p-6">
    <div class="tw-text-3xl tw-mb-4">Pengaturan Akun</div>
    <q-card flat>
      <q-card-section class="text-primary tw-font-bold">
        Informasi Personal</q-card-section
      >
      <q-form @submit.prevent="save">
        <q-card-section
          class="q-pt-none tw-grid md:tw-grid-cols-4 tw-items-center md:tw-gap-8 tw-gap-2"
        >
          <div class="tw-mt-2 md:tw-mt-0 tw-self-start">Nama Lengkap</div>
          <q-input
            filled
            dense
            v-model="name"
            :rules="[(val) => !!val || 'Field ini wajib diisi']"
          />

          <div class="tw-mt-2 md:tw-mt-0 tw-self-start">Alamat E-Mail</div>
          <q-input
            filled
            dense
            v-model="email"
            :rules="[(val) => !!val || 'Field ini wajib diisi']"
          />

          <div class="tw-mt-2 md:tw-mt-0 tw-self-start">ID Pengguna</div>
          <q-input
            filled
            dense
            v-model="id"
            :rules="[(val) => !!val || 'Field ini wajib diisi']"
          />

          <div class="tw-mt-2 md:tw-mt-0 tw-self-start">Group</div>
          <q-input filled dense v-model="group" hint readonly />

          <div class="md:tw-col-span-4">
            <q-separator />
          </div>
          <div class="tw-mt-2 md:tw-mt-0 tw-self-start">Password</div>
          <q-input
            filled
            dense
            v-model="password"
            type="password"
            hint="Kosongkan jika tidak ingin mengubah password"
          />

          <div class="tw-mt-2 md:tw-mt-0 tw-self-start">
            Konfirmasi Password
          </div>
          <q-input
            filled
            dense
            v-model="confirm_password"
            type="password"
            :rules="[
              (val) => (password ? !!val || 'Field ini wajib diisi' : []),
            ]"
          />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            class="tw-my-4"
            unelevated
            color="primary"
            label="Simpan"
            no-caps
            padding="sm xl"
            type="submit"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from "src/stores/auth";
export default defineComponent({
  setup() {
    const auth = useAuthStore();
    return {
      auth,
      name: ref(""),
      email: ref(""),
      group: ref(""),
      id: ref(""),
      password: ref(""),
      confirm_password: ref(""),
    };
  },
  mounted() {
    this.name = this.auth.user.Name;
    this.email = this.auth.user.Email;
    this.group = this.auth.user.Group.Name;
    this.id = this.auth.user.Username;
  },
  methods: {
    save() {
      let payload = {
        Name: this.name,
        Email: this.email,
        Username: this.id,
        UpdateBy: this.auth.user.Username,
      };
      if (this.password) {
        if (this.password != this.confirm_password) {
          this.$q.notify({
            message: "Password tidak sama",
            color: "negative",
          });
          return;
        } else {
          payload = {
            ...payload,
            Password: this.password,
          };
        }
      }
      this.$api
        .put("/users/" + this.auth.user.ID, payload)
        .then((res) => {
          this.$q.notify({
            message: "Profile berhasil diubah",
            color: "positive",
          });
          this.auth.getUser();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
