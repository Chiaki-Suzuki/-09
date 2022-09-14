let app = new Vue({
  el: '#app',
  data: {
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
    }
  }
})
