<template>
    <section class="reserve">
    <div class="reserve_box" v-if="isShow">
      <h2>席を予約する</h2>
      <img src="../assets/images/yoyaku.jpg" alt="ご予約">
      <p>肉問屋直営店ならではの、こだわり品質の和牛を取り揃えております。<br>
          皆様のご来店を心よりお待ちしております。
      </p>
      <router-link to="/form" v-on:click.native="formShow" class="tel web">Webサイトから予約</router-link>
      <a href="03-5875-9666" class="tel">Tel:03-5875-9666</a>
      <a href="" class="link">各グルメサイトからは24時間空席確認とネット予約が可能です。<br>
          併せてご利用ください。
      </a>
      <div class="sns">
          <p>門庭を気に入っていただけた方は<br>
              いいね＆フォローお願いします!
          </p>
          <div class="sns_btn">
              <a href=""><p>facebook</p></a>
              <a href=""><p>twitter</p></a>
          </div>
      </div>
    </div>
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'Reserve',
  data: () => {
    return {
      isShow: true
    }
  },
  methods: {
    formShow: function() {
      this.isShow = false;
      this.$emit('form-click')
    }
  }
}
</script>

<style>
/*-------------------------
  reserve
-------------------------*/
.reserve {
  margin: 0 0 30px 0;
}

.reserve > img {
  display: block;
  width: 100%;
  height: 420px;
  object-fit: cover;
  margin: 0 0 20px 0;
}

.reserve > p {
  text-align: center;
  margin: 0 0 25px 0;
}

.reserve .tel {
  display: block;
  width: 60%;
  margin: 10px auto 30px;
  background-color: #333;
  color: #fff;
  text-align: center;
  font-size: 3.6rem;
  letter-spacing: 3px;
  border-radius: 50em;
}

.reserve .tel:hover {
  text-decoration: none;
  opacity: 0.8;
}

.reserve .tel.web {
  background-color: #b32f2e;
}

.reserve .link {
  display: block;
  text-align: center;
  color: #333;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  margin: 0 0 10px;
}

.reserve .sns {
  text-align: center;
}

.reserve .sns .sns_btn {
  display: flex;
  justify-content: space-between;
  width: 160px;
  margin: 20px auto;
}

.reserve .sns .sns_btn a {
  display: block;
  width: 72px;
  height: 72px;
  background: url("../assets/images/fb.png") 0 0 / cover no-repeat;
}

.reserve .sns .sns_btn a:nth-of-type(2) {
  background: url("../assets/images/tw.png") 0 0 / cover no-repeat;
}

.reserve .sns .sns_btn a:hover {
  opacity: 0.8;
}

.reserve .sns .sns_btn a p {
  text-indent: -9999px;
}

@media screen and (max-width: 768px) {
  .reserve {
    margin: 0 0 40px 0;
  }
  .reserve > img {
    height: auto;
    aspect-ratio: 11 / 6;
    margin: 0 0 5px 0;
  }
  .reserve > p {
    font-size: 1rem;
    margin: 0 0 5px 0;
  }
  .reserve .tel {
    font-size: 1.3rem;
    padding: 6px;
    letter-spacing: 0;
    margin: 10px auto 5px;
  }

  .reserve .link,
  .reserve .sns {
    font-size: 1.1rem;
    margin: 0 0 10px 0;
  }

  .reserve .sns .sns_btn {
    width: 90px;
    margin: 10px auto;
  }

  .reserve .sns .sns_btn a {
    width: 40px;
    height: 40px;
  }
}
</style>
