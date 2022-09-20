<template>
  <section class="store">
    <h2>店舗案内</h2>
    <p>お肉を焼いた煙はテーブル下に吸引されるので、<br>
        煙を気にすることなく、お食事が楽しめます。
    </p>
    <ul>
        <li>
            <img src="../assets/images/naka1.jpg" alt="">
            <p>テーブル席<br>(2～6名様用)</p>
        </li>
        <li>
            <img src="../assets/images/naka2.jpg" alt="">
            <p>テーブル席<br>(8～13名様用)</p>
        </li>
        <li>
            <img src="../assets/images/naka3.jpg" alt="">
            <p>25名様～38名様で<br>貸し切り承ります。</p>
        </li>
    </ul>
    <table>
        <tr>
            <th>営業時間</th>
            <td>【火～土】17:00～24:00(Last Order 23:00)<br>
                【日】16:00～23:00(Last Order 22:00)<br>
                【ランチ(火～金)】11:00～14:00(Last Order 13:00)
            </td>
        </tr>
        <tr>
            <th>定休日</th>
            <td>毎週月曜日</td>
        </tr>
        <tr>
            <th>住所</th>
            <td>東京都江東区富岡1-6-6TTRビル1F</td>
        </tr>
        <tr>
            <th>電話</th>
            <td>03-5875-9666</td>
        </tr>
        <tr>
            <th>クレジットカード・電子マネー</th>
            <td>ご利用いただけます</td>
        </tr>
        <tr>
            <th>その他ご案内</th>
            <td>全席喫煙可能・近隣にパーキングあり</td>
        </tr>
    </table>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12964.96809982562!2d139.78838588939362!3d35.67104218469605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018891274c53765%3A0xc1848b77822e4fea!2z44CSMTM1LTAwNDcg5p2x5Lqs6YO95rGf5p2x5Yy65a-M5bKh77yR5LiB55uu77yW4oiS77yW!5e0!3m2!1sja!2sjp!4v1662973282525!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <table>
        <tr>
            <th>アクセス</th>
            <td>地下鉄東西線 門前仲町駅 A2番出口 徒歩1分<br><br>
                2番出口を右に出て、デイリーヤマザキさんと花屋さんの間に小道に入って10メートルほど先の右手にあります。
            </td>
        </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: 'Store'
}
</script>

<style>
/*-------------------------
  store
-------------------------*/
.store {
  margin: 0 0 50px;
}

.store > p {
  text-align: center;
  margin: 0 0 20px 0;
}

.store > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.store > ul li img{
  display: block;
  margin: 0 0 10px 0;
}

.store > ul li p{
  text-align: center;
  font-size: 1.4rem;
  margin: 0 0 10px 0;
}

.store > table {
  width: 100%;
  background-color: rgba(255,255,255,0.7);
  font-size: 1.4rem;
  margin: 0 0 25px 0;
}

.store > table tr th,
.store > table tr td {
  padding: 9px 10px;
}

.store > table tr th {
  width: 33%;
  text-align: center;
}

.store iframe {
  margin: 0 0 15px 0;
}

@media screen and (max-width: 768px) {
  .store {
    margin: 0 0 0px;
  }
  .store > p {
    font-size: 1.3rem;
    margin: 0 0 10px 0;
  }
  .store > ul {
    display: block;
    margin: 0 0 20px 0;
  }
  .store > ul li {
    display: flex;
    align-items: center;
  }
  .store > ul li img {
    width: 50%;
    margin: 0 0 0 0;
  }
  .store > ul li p {
    margin: 0 auto;
  }
  .store > table {
    font-size: 1rem;
    margin: 0 0 15px 0;
  }
  .store > table tr th,
  .store > table tr td {
  padding: 1px 10px;
  }

  .store > iframe {
    height: auto;
    aspect-ratio: 11 / 10;
  }
}
</style>
