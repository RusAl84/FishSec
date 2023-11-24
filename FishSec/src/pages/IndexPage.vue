<template>
  <q-page class="flex flex-center">
    <q-card>
      <div>
      <div>
      <q-input outlined v-model="text" label="Outlined" />
      </div>
      <div>
        {{text}}
        <q-btn color="primary" label="Отправить" />
        {{res}}
      </div>
    </div>
    </q-card>

  </q-page>
</template>

<script>
import { defineComponent, ref  } from 'vue'
import API from "../api/api";
// export default defineComponent({
//   name: 'IndexPage'
// })
export default defineComponent({
  setup () {
    return {
      text: ref('Значение по умолчанию'),
      res: ref('')
    }
  },
  methods: {
    // Реакция на кнопку отправки
    async onSendClick() {
      try {
        this.res = await API.sendMessage(this.text);
        console.log(this.text);
        console.log(this.res);
        // this.$router.push("/vis");
      } catch (e) {
        console.error(e);
      }
    }
    },
})
</script>
