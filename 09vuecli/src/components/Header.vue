<template>
  <header class="gl-header">
    <h1><a href="index.html">門庭</a></h1>
    <p>東京都江東区富岡1-6-6TTRビル1F<br>
        TEL:03-5875-9666<br>
        毎週月曜定休
    </p>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
/*-------------------------
  ヘッダー
-------------------------*/
.gl-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gl-header h1 {
  width: 180px;
  height: 100px;
  margin-bottom: 2px;
  background: url("././img/logo2-1.png") 0 0 / cover no-repeat;
}

.gl-header h1 a {
  display: block;
  text-indent: -9999px;
  height: 100px;
}

.gl-header p {
  text-align: right;
  line-height: 2.1rem;
  margin: 0 15px 0 0;
}

@media screen and (max-width: 768px) {
  .gl-header {
    height: 50px;
  }

  .gl-header h1 {
    width: 50px;
    height: 32px;
    margin-bottom: 2px;
  }

  .gl-header h1 a {
    height: auto;
  }

  .gl-header p {
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 0 5px 0 0;
  }
}
</style>
