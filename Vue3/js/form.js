let app = Vue.createApp({
  data() {
    return {
      // フォーム用
      name: '',
      nameErr: false,
      tel: '',
      telErr: false,
      adult: 0,
      child: 0,
      time: 0,
      course: 0,
      date: '',
      minDate: ''
    }
  },
  components: {
    'montei-header': monteiHeader,
    'montei-footer': monteiFooter,
  },
  created() {
    // 選択不可の日付を設定（使ってない）
    let dt = new Date();
    dt.setDate(dt.getDate() + 1);
    this.minDate = this.formatDate(dt) + 'T17:00';
    console.log(this.minDate)
  },
  methods: {
    /*-------------------------
      フォーム
    -------------------------*/
    // 名前のバリデーションチェック
    nameCheck() {
      if (!this.name.match(/[0-9０-９ -/:-\[-~！-／：-＠［-｀｛-～、-〜”’・]/)) {
        this.nameErr = false;
      } else {
        this.nameErr = true;
      }
    },
    // 電話番号のバリデーションチェック
    telCheck() {
      if (this.tel.match(/^[0-9]+$/)) {
        this.telErr = false;
      } else {
        this.telErr = true;
      }
    },
    // 日付をYYYY-MM-DD形式に変換
    formatDate(dt) {
      let y = dt.getFullYear();
      let m = ('00' + (dt.getMonth() + 1)).slice(-2);
      let d = ('00' + dt.getDate()).slice(-2);
      let result = y + '-' + m + '-' + d;
      return result;
    },
    // 合計金額を表示
    totalPrice() {
      return (parseInt(this.course) * (parseInt(this.adult) + parseInt(this.child)));
    }
  }
})

// 金額をカンマ区切りに
app.config.globalProperties.$filters = {
  number_format(val) {
    return parseInt(val).toLocaleString();
  }
}

app.mount('#app')
