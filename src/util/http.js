/**
 * Created by hou on 2016/11/1.
 */
import Vue from 'vue'
import {server} from '../config'
import VueResource from 'vue-resource'
import {loadingData} from '../data.js'
import prompt from './prompt'

Vue.use(VueResource)

Vue.http.options.root = '/root'

export default function (type, url, data, succ, err) {
  loadingData.show = true
  let path = server + url
  Vue.http[type](path, data).then((response) => {
    setTimeout(() => {
      succ(response.body)
      loadingData.show = false
    }, 500)
  }, function (response) {
    prompt('服务器繁忙,请重试!')
    loadingData.show = false
  })
}

