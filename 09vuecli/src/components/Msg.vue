<template>
  <section class="msg">
  <div class="msg_box">
      <img src="././img/mise.jpg" alt="イメージ01">
      <div class="msg_text">
          <h3>門庭は肉問屋直営店です</h3>
          <p>門前仲町の庭でありたい―――<br>
              その思いから名付けた『門庭』は、<br><br>
              創業40念を超える老舗肉卸問屋『山全』<br>
              直営の焼き肉店です。
          </p>
      </div>
  </div>
  <div class="msg_box">
      <img src="././img/namaniku.jpg" alt="イメージ02">
      <div class="msg_text">
          <h3>こだわりの味</h3>
          <p>門庭では毎月、<br>
              九州和牛を中心にプロが厳選して<br>
              仕入れを行っています。<br><br>
              老舗肉卸問屋直営だからこそ叶う<br>
              質・鮮度・味を、ぜひご堪能ください。
          </p>
      </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'Msg'
}
</script>

<style>
/*-------------------------
  msg
-------------------------*/
.msg {
  margin: 0 0 80px 0;
}

.msg_box {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(255,255,255,0.7);
  padding: 22px 25px;
  margin: 0 0 20px 0;
}

.msg_box .msg_text {
  text-align: center;
  line-height: 2rem;
  margin: 0 0 0 85px;
}

.msg_box .msg_text h3 {
  font-size: 2.4rem;
  margin-bottom: 20px;
}

.msg_box:nth-of-type(2n) {
  flex-direction: row-reverse;
}

.msg_box:nth-of-type(2n) .msg_text {
  margin: 0 85px 0 0;
}

@media screen and (max-width: 768px) {
  .msg {
    margin: 0 0 30px 0;
  }
  .msg_box {
    display: block;
    padding: 0;
    margin: 0 0 15px 0;
  }

  .msg_box img {
    width: 100%;
    height: auto;
    max-height: 200px;
    aspect-ratio: 11 / 5;
    object-fit: cover;
  }

  .msg_box .msg_text,
  .msg_box:nth-of-type(2n) .msg_text {
    text-align: center;
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin: 0 0 0 0;
    padding: 25px;
  }

  .msg_box .msg_text h3 {
    font-size: 1.9rem;
    margin-bottom: 15px;
  }
}
</style>
