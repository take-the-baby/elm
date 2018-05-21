/*
  这里面只用于对state的操作，不允许进行逻辑、流程、异步等操作
 */
import {
  DECREMENT
} from './types'

export default {
	[DECREMENT]: (state) => {
    state.count--;
  },
}
