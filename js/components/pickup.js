let pickup = {
  template: `
  <section class="pickup">
    <h2>ピックアップメニュー</h2>
    <div class="pickup_box">
        <img src="image/kimuti.jpg" alt="白菜キムチ">
        <div class="pickup_text">
            <h4>白菜キムチ</h4>
            <p>この道45年の沖縄出身の料理長が<br>
                丹精込めて毎日漬けています。<br>
                馬からの味をお楽しみ下さい。
            </p>
        </div>
    </div>
    <div class="pickup_box">
        <img src="image/ojiya.jpg" alt="テールおじや">
        <div class="pickup_text">
            <h4>テールおじや</h4>
            <p>和牛の尾を使用した<br>
                栄養たっぷりなテールおじや<br>
                うまみとコクがたまらない逸品です。
            </p>
        </div>
    </div>
    <div class="pickup_box">
        <img src="image/horumon.jpg" alt="ホルモン5種盛り">
        <div class="pickup_text">
            <h4>ホルモン5種盛り</h4>
            <p>屠場より入荷した<br>
                鮮度抜群のホルモンを<br>
                プリプリのままご提供いたします。
            </p>
        </div>
    </div>
    <div class="pickup_box">
        <img src="image/karubi.jpg" alt="和牛カルビ">
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
            <button v-on:click="$emit('q1click','meats')">お肉一択！</button>
            <button v-on:click="$emit('q1click','ippin')">一品料理も好き</button>
        </div>
        <div class="qbox" v-if="status === 2">
            <p class="que">どちらが気になりますか？</p>
            <button v-on:click="$emit('q2click',1)">いろいろな味を楽しみたい</button>
            <button v-on:click="$emit('q2click',2)">厳選された逸品を楽しみたい</button>
        </div>
        <div class="qbox" v-if="status === 3">
            <p class="que">どちらが気になりますか？</p>
            <button v-on:click="$emit('q2click',1)">まずはコレでしょ！</button>
            <button v-on:click="$emit('q2click',2)">〆の一杯が至高</button>
        </div>
        <div class="qbox" v-if="status === 4">
            <p class="ans">あなたにぴったりなのは・・・</p>
            <img v-bind:src="resultImg">
            <p><span>{{ resultName }}</span>です！<br>
                お店に来てぜひ注文してみてくださいね♪
            </p>
            <button class="return" v-on:click="$emit('resetclick')">もう一度</button>
        </div>
    </div>
  </section>
  `,
  props: ['status', 'resultImg', 'resultName']
}
