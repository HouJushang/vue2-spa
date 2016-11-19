/**
 * Created by hou on 2016/11/3.
 */
import {promptData} from '../data.js'
export default function (msg) {
  promptData.msg = msg
  promptData.show = true
  setTimeout(() => {
    promptData.show = false
  }, 900)
}

