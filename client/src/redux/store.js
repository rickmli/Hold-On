import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./features/navSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer, // 使用正确的 slice 名称 `nav`
  },
});

export default store;
