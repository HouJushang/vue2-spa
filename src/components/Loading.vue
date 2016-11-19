<template>
    <section class="loading" :class="{ loadingActive: show }">
      <img :src="img" />
    </section>
</template>
<style lang="sass">
  .loading
    position: absolute
    top: 0
    left: 100%
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.4)
    opacity: 0
    display: flex
    display: -webkit-flex
    justify-content: center
    -webkit-justify-content: center
    align-items: center
    transition: opacity .6s
    transition-delay: 0.2s
    img
      width: 60px
    &.loadingActive
      left: 0
      opacity: 1
</style>
<script>
  import LoadingImage from '../assets/loading.gif'
  import {loadingData} from '../data.js'
  export default{
    data () {
      loadingData.img = LoadingImage
      return loadingData
    },
    components: {
    }
  }
</script>
