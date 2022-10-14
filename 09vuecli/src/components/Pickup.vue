<template>
  <section class="pickup">
    <h2>ピックアップメニュー</h2>
    <div class="pickup_box">
        <img src="././img/kimuti.jpg" alt="白菜キムチ">
        <div class="pickup_text">
            <h4>白菜キムチ</h4>
            <p>この道45年の沖縄出身の料理長が<br>
                丹精込めて毎日漬けています。<br>
                馬からの味をお楽しみ下さい。
            </p>
        </div>
    </div>
    <div class="pickup_box">
        <img src="././img/ojiya.jpg" alt="テールおじや">
        <div class="pickup_text">
            <h4>テールおじや</h4>
            <p>和牛の尾を使用した<br>
                栄養たっぷりなテールおじや<br>
                うまみとコクがたまらない逸品です。
            </p>
        </div>
    </div>
    <div class="pickup_box">
        <img src="././img/horumon.jpg" alt="ホルモン5種盛り">
        <div class="pickup_text">
            <h4>ホルモン5種盛り</h4>
            <p>屠場より入荷した<br>
                鮮度抜群のホルモンを<br>
                プリプリのままご提供いたします。
            </p>
        </div>
    </div>
    <div class="pickup_box">
        <img src="././img/karubi.jpg" alt="和牛カルビ">
        <div class="pickup_text">
            <h4>和牛カルビ</h4>
            <p>その時に入荷した和牛バラを<br>
                厳選し選び抜かれたカルビです。<br>
                味はもちろんコスパも最高です。
            </p>
        </div>
    </div>
    <div class="recomend">
        <h3>あなたへのおすすめ</h3>
        <p class="que">あなたにピッタリなメニューをご提案します。</p>
        <div class="qbox" v-if="status === 1">
            <p class="que">あなたの焼き肉の楽しみ方は？</p>
            <button v-on:click="q1('meats')">お肉一択！</button>
            <button v-on:click="q1('ippin')">一品料理も好き</button>
        </div>
        <div class="qbox" v-if="status === 2">
            <p class="que">どちらが気になりますか？</p>
            <button v-on:click="q2(1)">いろいろな味を楽しみたい</button>
            <button v-on:click="q2(2)">厳選された逸品を楽しみたい</button>
        </div>
        <div class="qbox" v-if="status === 3">
            <p class="que">どちらが気になりますか？</p>
            <button v-on:click="q2(1)">まずはコレでしょ！</button>
            <button v-on:click="q2(2)">〆の一杯が至高</button>
        </div>
        <div class="qbox" v-if="status === 4">
            <p class="ans">あなたにぴったりなのは・・・</p>
            <img v-bind:src="resultImg">
            <p><span>{{ resultName }}</span>です！<br>
                お店に来てぜひ注文してみてくださいね♪
            </p>
            <button class="return" v-on:click="reset">もう一度</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Pickup',
  data: () => {
    return {
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
            image: 'horumon.jpg'
          },
          2: {
            name: '和牛カルビ',
            image: 'karubi.jpg'
          }
        },
        ippin: {
          1: {
            name: '白菜キムチ',
            image: 'kimuti.jpg'
          },
          2: {
            name: 'テールおじや',
            image: 'ojiya.jpg'
          }
        }
      }
    }
  },
  methods: {
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
      this.resultImg = this.getUrl(this.items[this.answer1][this.answer2].image)
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
    getUrl: function(img) {
      return `/./img/${img}`
    }
  }
}
</script>

<style>
/*-------------------------
  pickup
-------------------------*/
.pickup {
  margin: 0 0 35px 0;
}

.pickup_box {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(255,255,255,0.7);
}

.pickup_text {
  margin: 0 0 0 60px;
  text-align: center;
}

.pickup_text h4 {
  font-size: 2.4rem;
  margin: 0 0 20px 0;
}

.pickup_text p {
  font-size: 1.5rem;
  line-height: 2rem;
}

/* レコメンド */
.recomend {
  width: 100%;
  margin: 20px 0 0 0;
  padding: 30px;
  text-align: center;
  background-color: rgba(255,255,255,0.7);
}

.recomend h3 {
  display: inline-block;
  font-size: 3rem;
  border-top: 1px dashed;
  border-bottom: 1px dashed;
  margin: 0 0 10px 0;
  padding: 5px 10px;
}

.recomend > p {
  margin: 0 0 20px 0;
  font-size: 1.4rem;
  letter-spacing: -1px;
}

.recomend .qbox {
  background: rgb(236 230 217 / 50%);
  padding: 20px;
  border-radius: 10px;
}

.recomend .qbox .que,
.recomend .qbox .ans {
  font-weight: bold;
  margin: 0 0 10px 0;
}

.recomend .qbox .que::before {
  content:'Q.';
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: #69beb6;
}

.recomend .qbox button {
  display: inline-block;
  margin: 0 0 0 8px;
  color: #725643;
  border: 1px solid #d9d4c4;
  border-radius: 50em;
  background: #fbfaf4;
  padding: 10px 20px;
  transition: .5s;
  outline: none;
}
.recomend .qbox button:first-of-type {
  margin: 0;
}

.recomend .qbox button:hover {
  background: #725643;
  color: #fbfaf4;
}

.recomend .qbox img {
  margin: 0 0 10px 0;
}

.recomend .qbox p span {
  display: block;
  font-weight: bold;
  font-size: 2.5rem;
}

.recomend .qbox button.return {
  border: 0;
  padding: 5px 15px;
  font-size: 1.3rem;
  letter-spacing: -1px;
  margin: 10px 0 0 0;
  background: #e3dfd8;
}

@media screen and (max-width: 768px) {
  .pickup_box {
    display: block;
    margin: 0 0 10px 0;
  }
  .pickup_box img {
    width: 100%;
    height: auto;
    max-height: 180px;
    aspect-ratio: 11 / 4;
    object-fit: cover;
  }
  .pickup_text h4 {
    font-size: 2rem;
    margin: 0 0 5px 0;
  }
  .pickup_text {
    margin: 0 0 0 0;
    padding: 10px;
  }
  .recomend {
    padding: 20px;
  }
  .recomend h3 {
    font-size: 2.4rem;
  }
  .recomend .qbox {
    padding: 20px 10px;
  }
  .recomend .qbox button {
    display: block;
    width: 90%;
    margin: 0 auto 5px;
    padding: 10px 15px;
    letter-spacing: -1px;
  }
  .recomend .qbox button:first-of-type {
    margin: 0 auto 5px;
  }
  .recomend .qbox img {
    width: 90%;
  }
  .recomend .qbox button.return {
    display: inline-block;
    width: 40%;
    margin: 10px 0 0 0;
  }
}
</style>
