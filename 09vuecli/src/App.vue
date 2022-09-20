<template>
  <div id="app">
    <Header></Header>
    <router-link to="/">home</router-link>
    <router-link to="/news">News</router-link>
    <router-view/>
    <main>
      <p>門庭</p>
    </main>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

/*-------------------------
  初期化
-------------------------*/
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 1.7rem;
  font-family: serif, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  background: url("./assets/images/back.jpg") 0 0 repeat;
}

ul, ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

p {
  margin-bottom: 0;
}

/*-------------------------
  グローバル
-------------------------*/
.container {
  width: 870px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .container {
    width: 90%;
  }
}

h2 {
  font-size: 6.2rem;
  font-weight: 800;
  text-align: center;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 8px;
  letter-spacing: -0.5rem;
  margin: -7px 0 10px 0;
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 3rem;
  }
}

.top {
  position: relative;
  z-index: 10;
}

.top a {
  position: fixed;
  width: 120px;
  height: 160px;
  bottom: 0;
  right: 0;
  background: url("./assets/images/top.png") 0 0 / cover no-repeat;
}

.top a:hover {
  opacity: 0.8;
}

.top a p {
  text-indent: -9999px;
}

@media screen and (max-width: 768px) {
  .top a {
    width: 50px;
    height: 30px;
    bottom: 70px;
    right: 10px;
    text-decoration: none;
    background: rgba(0,0,0,0.6);
  }

  .top a::before {
    content: '▲TOP';
    display: block;
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
    padding: 7px 0;
  }
}

/*-------------------------
  キービジュアル
-------------------------*/
main {
  width: 100%;
  height: 674px;
  background: url("./assets/images/tumami.jpg") 0 0 / cover no-repeat;
  position: relative;
  margin: 0 0 80px 0;
}

main::before {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 325px;
  background: rgba(255,255,255,0.6) url("./assets/images/logo2.png") center 50% / 60% no-repeat;
  box-shadow: 3px 3px 10px rgb(0,0,0,.8)
}

main p {
  text-indent: -9999px;
}

@media screen and (max-width: 768px) {
  main {
    background: url("./assets/images/hu.jpg") 0 0 / cover no-repeat;
    height: auto;
    aspect-ratio: 25 / 14;
    margin: 0 0 30px 0;
  }

  main::before {
    content: '';
    display: none;
  }
}
</style>
