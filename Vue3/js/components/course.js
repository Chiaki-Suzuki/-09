let course = {
  template: `
  <section class="course" id="course">
    <h2>コースメニュー</h2>
    <div class="course_box">
        <div class="course_info">
            <img src="image/gensen.jpg" alt="門庭厳選コース">
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
                        <img v-bind:src="menu.image" alt="">
                        <p>{{ menu.name }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="course_box">
        <div class="course_info">
            <img src="image/zeitaku.jpg" alt="門庭贅沢コース">
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
                        <img v-bind:src="menu.image" alt="">
                        <p>{{ menu.name }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="course_box">
        <div class="course_info">
            <img src="image/akami.jpg" alt="門庭究極の赤身コース">
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
                        <img v-bind:src="menu.image" alt="">
                        <p>{{ menu.name }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="course_box">
        <div class="course_info">
            <img src="image/kiwami.jpg" alt="最高峰の極みコース">
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
                        <img v-bind:src="menu.image" alt="">
                        <p>{{ menu.name }}</p>
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
  `,
  data(props) {
    return {
      // アコーディオン用
      menu: [],
      gensen: [],
      zeitaku: [],
      akami: [],
      kiwami: [],
    }
  },
  async created() {
    // アコーディオン用メニュー取得
    let res = await fetch('js/menu.json');
    let items = await res.json();
    this.menu = items;
    this.gensen = this.menu[0].gensen;
    this.zeitaku = this.menu[0].zeitaku;
    this.akami = this.menu[0].akami;
    this.kiwami = this.menu[0].kiwami;
  }
}
