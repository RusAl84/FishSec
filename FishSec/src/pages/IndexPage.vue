<template>
  <q-page class="flex flex-center">
    <q-card>
      <div>
      <div>
      <q-input outlined v-model="text" label="Outlined" />
      </div>
      <div>
        <q-btn color="primary" label="Отправить" @click="onSendClick"/>

        <div class="q-pa-md" style="max-width: 300px">
        <q-input
        v-model="res"
        filled
        type="textarea"
    />
  </div>
      </div>
    </div>
    </q-card>

  </q-page>
</template>

<script>
import { defineComponent, ref  } from 'vue'
import axios from 'axios';
export default defineComponent({
  setup () {
    return {
      text: ref('ya.ru'),
      res: ref('')
    }
  },
  methods: {
    // Реакция на кнопку отправки
    async onSendClick() {
      var apikey = '';
      const encodedParams = new URLSearchParams();
        encodedParams.set('url', this.text);
        const options = {
          method: 'POST',
          url: 'https://www.virustotal.com/api/v3/urls',
          headers: {
            accept: 'application/json',
            'x-apikey': apikey,
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: encodedParams,
        };
        try {
              const resp = await axios.request(options)
              this.res = resp.data.data.id
              console.log(this.res)
            } catch(e) {
              console.error(e)
        }
        const options2 = {
          method: 'GET',
          url: 'https://www.virustotal.com/api/v3/analyses/'+this.res,
          headers: {
            accept: 'application/json',
            'x-apikey': apikey
          }
        };

        try {
              var resp = await axios.request(options2)
              resp = resp.data.data.attributes
              this.res = JSON.stringify(resp);
              console.log(this.res)
            } catch(e) {
              console.error(e)
        }
        }
    },
})
</script>
