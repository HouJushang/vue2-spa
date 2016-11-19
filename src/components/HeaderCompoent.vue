<template>
  <header class="header">
    <div @click="backEvent">
      <span></span>
    </div>
    {{title}}
  </header>
</template>
<style lang='sass'>
  header
    text-align: center
    height: 50px
    line-height: 51px
    background-color: #388ad7
    color: #fff
    font-size: 18px
    position: relative
    div
      width: 45px
      height: 100%
      position: absolute
      left: 0
    span
      display: block
      width: 12px
      height: 12px
      border-bottom: 3px solid #fff
      border-left: 3px solid #fff
      transform: rotate(45deg)
      margin: 0 auto
      margin-top: 17px
      -webkit-transform: rotate(45deg)
</style>
<script>
  import {router} from '../router.js'
  export default{
    name: 'header',
    props: ['title'],
    data () {
      return {
        'msg': 'sssss'
      }
    },
    methods: {
      backEvent () {
        router.go(-1)
      }
    }
  }

</script>
