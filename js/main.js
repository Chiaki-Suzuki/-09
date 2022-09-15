let app = new Vue({
  el: '#app',
  data: {
    // アコーディオン用
    menu: [],
    gensen: [],
    zeitaku: [],
    akami: [],
    kiwami: [],
    // フォーム用
    name: '',
    nameErr: false,
    tel: '',
    telErr: false,
    adult: 0,
    child: 0,
    time: 0,
    course: 0,
    date: ''
  },
  created: async function () {
    // アコーディオン用メニュー取得
    let res = await fetch('../実務課題09/js/menu.json');
    let items = await res.json();
    this.menu = items;
    this.gensen = this.menu[0].gensen;
    this.zeitaku = this.menu[0].zeitaku;
    this.akami = this.menu[0].akami;
    this.kiwami = this.menu[0].kiwami;
  },
  filters: {
    number_format: function (val) {
      return val.toLocaleString();
    }
  },
  methods: {
    /*-------------------------
      フォーム
    -------------------------*/
    // 名前のバリデーションチェック
    nameCheck: function () {
      if (!this.name.match(/[0-9０-９ -/:-\[-~！-／：-＠［-｀｛-～、-〜”’・]/)) {
        this.nameErr = false;
      } else {
        this.nameErr = true;
      }
    },
    // 電話番号のバリデーションチェック
    telCheck: function () {
      if (this.tel.match(/^[0-9]+$/)) {
        this.telErr = false;
      } else {
        this.telErr = true;
      }
    },
    // 日付をYYYY-MM-DD形式に変換
    formatDate: function (dt) {
      let y = dt.getFullYear();
      let m = ('00' + (dt.getMonth() + 1)).slice(-2);
      let d = ('00' + dt.getDate()).slice(-2);
      let result = y + '-' + m + '-' + d;
      return result;
    },
    // 合計金額を表示
    totalPrice: function () {
      return (parseInt(this.course) * (parseInt(this.adult) + parseInt(this.child)));
    }
  }
})
