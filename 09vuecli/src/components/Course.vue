<template>
  <section class="course" id="course">
    <h2>コースメニュー</h2>
    <div class="course_box">
        <div class="course_info">
            <img src="../assets/images/gensen.jpg" alt="門庭厳選コース">
            <div class="course_detail">
                <h3>門庭厳選コース(11品)<span>税込3,500円</span></h3>
                <p>キムチ/ナムル/チョレギサラダ/<br>
                    タン塩/トントロ/カルビ/ハラミ/ヒレ/鶏もも/<br>
                    テールおじやorミニ冷麺/デザート
                </p>
            </div>
        </div>
        <div class="menu">
            <label for="course1">メニューの写真を表示</label>
            <input type="checkbox" id="course1">
            <div class="menu_box">
                <ul class="item-11">
                    <li v-for="menu in gensen" v-bind:key="menu.name">
                        <img v-bind:src="getUrl(menu.image)">
                            <p>{{ menu.name }}</p>
                        </img>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="course_box">
        <div class="course_info">
            <img src="../assets/images/zeitaku.jpg" alt="門庭贅沢コース">
            <div class="course_detail">
                <h3>門庭贅沢コース(10品)<span>税込5,000円</span></h3>
                <p>キムチ/ナムル/門庭サラダ/<br>
                    タン塩/和牛上カルビ/和牛上ロース/国産豚バラ/<br>
                    本日のおすすめ和牛肉2点/<br>
                    テールおじやorミニ冷麺/デザート
                </p>
            </div>
        </div>
        <div class="menu">
            <label for="course2">メニューの写真を表示</label>
            <input type="checkbox" id="course2">
            <div class="menu_box">
                <ul>
                    <li v-for="menu in zeitaku" v-bind:key="menu.name">
                        <img v-bind:src="getUrl(menu.image)" alt="">
                            <p>{{ menu.name }}</p>
                        </img>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="course_box">
        <div class="course_info">
            <img src="../assets/images/akami.jpg" alt="門庭究極の赤身コース">
            <div class="course_detail">
                <h3>門庭究極の赤身コース(10品)<span>税込6,000円</span></h3>
                <p>キムチ/ナムル/サラダ/<br>
                    和牛黒タン塩/カメノコ/ヒレ/<br>
                    和牛上ハラミ/本日の厳選赤身肉2品/<br>
                    テールおじやorミニ冷麺/デザート
                </p>
            </div>
        </div>
        <div class="menu">
            <label for="course3">メニューの写真を表示</label>
            <input type="checkbox" id="course3">
            <div class="menu_box">
                <ul>
                    <li v-for="menu in akami" v-bind:key="menu.name">
                        <img v-bind:src="getUrl(menu.image)" alt="">
                            <p>{{ menu.name }}</p>
                        </img>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="course_box">
        <div class="course_info">
            <img src="../assets/images/kiwami.jpg" alt="最高峰の極みコース">
            <div class="course_detail">
                <h3>最高峰の極みコース(10品)<span>税込8,000円</span></h3>
                <p>キムチ/ナムル/サラダ/海鮮盛り/<br>
                    和牛黒タン塩/和牛ブリスケ(ササバラ)/<br>
                    和牛ヒレ(シャトーブリアン)/和牛上ハラミ/<br>
                    テールおじやorミニ冷麺/デザート
                </p>
            </div>
        </div>
        <div class="menu">
            <label for="course4">メニューの写真を表示</label>
            <input type="checkbox" id="course4">
            <div class="menu_box">
                <ul>
                    <li v-for="menu in kiwami" v-bind:key="menu.name">
                        <img v-bind:src="getUrl(menu.image)" alt="">
                            <p>{{ menu.name }}</p>
                        </img>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="attention">
        <p>各コース2名様より承ります。<br>
            全てのコースにプラス1,500円で2時間飲み放題が付けられます(L.O.30分前)<br>
            ※上記コース以外にもご予算・お好みでコースをおつくりいたします。<br>
            お気軽にお問い合わせください。
        </p>
    </div>
  </section>
</template>

<script>
import menu from '../assets/menu.json'

export default {
  name: 'Course',
  data: () => {
    return {
      menu: menu,
      gensen: menu[0].gensen,
      zeitaku: menu[0].zeitaku,
      akami: menu[0].akami,
      kiwami: menu[0].kiwami
    }
  },
  created: () => {
    console.log(this.gensen)
  },
  methods: {
    getUrl: function(img) {
      return `/images/${img}`
    }
  }
}
</script>

<style>
/*-------------------------
  course
-------------------------*/
.course {
  margin-bottom: 42px;
}

.course_box {
  width: 100%;
  background-color: rgba(255,255,255,0.7);
  margin: 0 0 20px 0;
}

.course_info {
  display: flex;
  align-items: center;
  padding: 22px 25px;
}

.course_box .course_detail{
  width: calc(100% - 325px);
  height: 240px;
  margin: 0 0 0 85px;
}

.course_box .course_detail h3{
  font-size: 3.5rem;
  line-height: 4rem;
  text-align: right;
  margin: 0 0 10px 0;
}

.course_box .course_detail h3 span {
  display: block;
  color: #b32f2e;
}

.course_box .course_detail p{
  font-size: 2rem;
  text-align: center;
}

.attention {
  width: 100%;
  align-items: center;
  background-color: rgba(255,255,255,0.7);
  border: 1px solid;
  border-radius: 10px;
  line-height: 1.8rem;
  padding: 33px 20px;
  margin: 35px 0 20px 0;
}

/* アコーディオンメニュー */
.menu {
  position: relative;
}

.menu label {
  position: absolute;
  top: -50px;
  right: 20px;
  background-color: #b32f2e;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.menu label:hover {
  opacity: 0.8;
}

.menu input {
  display: none;
}

.menu_box {
  height: 0;
  padding: 0;
  overflow: hidden;
  opacity: 0;
  transition: .5s;
}

.menu input:checked ~ .menu_box {
  padding: 0 20px 10px;
  height: auto;
  opacity: 1;
}

.menu_box ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.menu_box ul li {
  width: calc((100% - 100px) / 10);
}

.menu_box ul.item-11 li {
  width: calc((100% - 100px) / 11);
}

.menu_box ul li img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50em;
}

.menu_box ul li p {
  font-size: 1rem;
  letter-spacing: -1px;
  text-align: center;
}

.attention p {
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
  .course {
    margin: 0 0 20px 0;
  }

  .course_box {
    margin: 0 0 15px 0;
  }

  .course_info {
    display: block;
    padding: 10px;
  }

  .course_box img {
    display: block;
    margin: 0 auto 10px;
    width: 80%;
    height: auto;
    aspect-ratio: 5 / 2;
    object-fit:cover;
  }

  .course_box .course_detail{
    margin: 0 0 45px;
    width: 100%;
    height: auto;
  }

  .course_box .course_detail h3{
    font-size: 2.2rem;
    line-height: 2.5rem;
  }

  .course_box .course_detail p{
    font-size: 1.2rem;
  }

  .menu_box ul li {
    width: calc((100% - 30px) / 5);
    margin-bottom: 5px;
  }

  .menu_box ul.item-11 li {
    width: calc((100% - 20px) / 6);
  }

  .attention {
    margin: 0 0 0 0;
    padding: 10px;
    font-size: 1.1rem;
    line-height: 1.2rem;
  }
}
</style>
