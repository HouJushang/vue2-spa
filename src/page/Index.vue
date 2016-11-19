<template>
  <div class="indexPage">
    <HeaderCompoent :title="title"></HeaderCompoent>
    <div class="goList">
      <router-link to="/list"> list 去列表页 </router-link>
    </div>
  </div>
</template>
<style lang="sass">
  .indexPage
    .goList
      text-align: center
      font-size: 22px
      line-height: 3
</style>
<script>
  import HeaderCompoent from '../components/HeaderCompoent.vue'
  export default{
    name: 'index',
    data () {
      return {title: '这里是首页'}
    },
    methods: {
    },
    watch: {
    },
    components: {
      HeaderCompoent
    },
    mounted () {
    }
  }
</script>
