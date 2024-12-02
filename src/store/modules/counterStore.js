import { createSlice } from "@reduxjs/toolkit"

// 创建了一个名字叫countStore的store
const countStore = createSlice({
  name: "counter",
  /**
   * 相当于state
   */
  initialState: {
    count: 0,
  },
  /**
   * 修改数据的方法  同步
   * 相当于actions
   */
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
  },
})

// 解构actions
const { increment, decrement } = countStore.actions
// 获取reducer
const reducer = countStore.reducer

export default reducer

// 按需导出
export { increment, decrement }
