<template>
  <section class="prompt" :class="{ promptActive: show }">
    <p>
      {{ msg }}
    </p>
  </section>
</template>
<style lang="sass">
  .prompt
    position: absolute
    top: 0
    left: 100%
    width: 100%
    height: 100%
    display: flex
    display: -webkit-flex
    justify-content: center
    align-items: center
    z-inde: 100
    transition: opacity .6s
    opacity: 0
    p
      padding: 8px 20px
      background-color: rgba(0, 1, 1, 0.6)
      color: #fff
      border-radius: 4px
      -webkit-border-radius: 4px
      font-size: 13px
      z-index: 1
  .promptActive
    left: 0
    opacity: 1

</style>
<script>
  import {promptData} from '../data.js'
  export default{
    data () {
      return promptData
    }
  }

</script>
