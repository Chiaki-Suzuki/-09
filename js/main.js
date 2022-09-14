let app = new Vue({
  el: '#app',
  data: {
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
    // レコメンド用
    status: 1,
    answer1: '',
    answer2: '',
    resultName: '',
    resultImg: '',
    items: {
      meats: {
        1: {
          name: 'ホルモン5種盛り',
          image: 'image/horumon.jpg'
        },
        2: {
          name: '和牛カルビ',
          image: 'image/karubi.jpg'
        }
      },
      ippin: {
        1: {
          name: '白菜キムチ',
          image: 'image/kimuti.jpg'
        },
        2: {
          name: 'テールおじや',
          image: 'image/ojiya.jpg'
        }
      }
    }
  },
  filters: {
    number_format: function (val) {
      return val.toLocaleString();
    }
  },
  methods: {
    /*-------------------------
      レコメンド機能
    -------------------------*/
    // あなたの焼き肉の楽しみ方は？
    q1: function (ans) {
      this.answer1 = ans;
      if (ans === 'meats') {
        this.status = 2;
      } else if (ans === 'ippin') {
        this.status = 3;
      }
    },
    // 気になるのはどっち？
    q2: function (ans) {
      this.answer2 = ans;
      this.resultName = this.items[this.answer1][this.answer2].name
      this.resultImg = this.items[this.answer1][this.answer2].image
      this.status = 4;
    },
    // もう一度
    reset: function () {
      this.answer1 = '';
      this.answer2 = '';
      this.resultName = '';
      this.resultImg = '';
      this.status = 1;
    },
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
