<template>
  <div class="indexPage">
    <HeaderCompoent :title="title"></HeaderCompoent>
    <dl>
      <dt>这里是列表</dt>
      <dd v-for="item in list" @click="goDetal(item.id)">
          {{item.id}}.
          {{item.name}}
          我今年{{item.age}}岁
      </dd>
    </dl>
  </div>
</template>
<style lang="sass">
  .indexPage
    dl
      margin: 20px
      line-height: 2
      dt
        text-align: center
</style>
<script>
  import Http from '../util/http.js'
  import HeaderCompoent from '../components/HeaderCompoent.vue'
  import {router} from '../router.js'
  import {listData, detailData} from '../data.js'
  export default{
    data () {
      return listData
    },
    components: {
      HeaderCompoent
    },
    methods: {
      goDetal (id) {
        detailData.id = id
        router.push('detail')
      }
    },
    mounted () {
      Http('get', 'data', '', (e) => {
        this.list = e
      })
    }
  }
</script>
