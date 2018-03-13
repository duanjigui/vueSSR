<template>
    <div>
         <h2>this is hahaha!</h2>
        <ul>
            <li v-for="list in serverList" :key="list">
                {{list}}
            </li>
        </ul>
    </div>
   
</template>
<script>
export default {
  data(){
      return {
      }
  },
  /*路由跳转到该组件时，第一个执行的方法 */
  asyncData({ store, route}){
     return store.dispatch('FEATCH_SERVER_LIST')
  },
  computed:{
      serverList(){
          return this.$store.getters.serverList
      }
  }

}
</script>
<style lang="stylus">

</style>
