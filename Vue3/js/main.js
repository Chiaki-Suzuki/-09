let app = Vue.createApp({
  components: {
    'montei-header': monteiHeader,
    'montei-footer': monteiFooter,
    'top-content': topContent
  },
  filters: {
    number_format: function (val) {
      return val.toLocaleString();
    }
  }
})

app.mount('#app')
