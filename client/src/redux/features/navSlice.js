import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNav: null, // 用来存储当前激活的导航状态
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNav: (state, action) => {
      state.activeNav = action.payload; // 设置当前激活的导航
    },
    resetNav: () => initialState, // 重置导航状态为初始值
  },
});

// 导出 actions
export const { setNav, resetNav } = navSlice.actions;

// 导出 reducer
export default navSlice.reducer;
