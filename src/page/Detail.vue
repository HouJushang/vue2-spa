<template>
  <div class="detailPage">
    <HeaderCompoent :title='title'></HeaderCompoent>
    {{data.name}}
    今年{{data.age}}岁
  </div>
</template>
<style>
</style>
<script>
    import HeaderCompoent from '../components/HeaderCompoent.vue'
    import {detailData} from '../data.js'
    import Http from '../util/http.js'
    export default{
      data () {
        return detailData
      },
      components: {
        HeaderCompoent
      },
      mounted () {
        Http('get', `data/${this.id}`, '', (e) => {
          this.data = Object.assign({}, e)
        })
      }
    }
</script>
