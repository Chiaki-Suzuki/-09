<template>
  <footer class="gl-footer">
      <p><small>&copy;門庭</small></p>
  </footer>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
/*-------------------------
  フッター
-------------------------*/
.gl-footer {
  background-color: rgba(0,0,0,0.6);
  color: #fff;
  text-align: center;
  line-height: 14rem;
}

@media screen and (max-width: 768px) {
  .gl-footer {
    line-height: 6rem;
  }
}
</style>
