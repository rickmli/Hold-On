import { useDispatch, useSelector } from "react-redux";
import { setNav, resetNav } from "../redux/features/navSlice"; // 导入 actions

// 自定义 Hook 来处理 nav 状态
const useNav = () => {
  const dispatch = useDispatch();
  const activeNav = useSelector((state) => state.nav.activeNav); // 获取当前活动导航

  const setActiveNav = (nav) => {
    dispatch(setNav(nav)); // 设置活动导航
  };

  const resetActiveNav = () => {
    dispatch(resetNav()); // 重置活动导航
  };

  return {
    activeNav,
    setActiveNav,
    resetActiveNav,
  };
};

export default useNav;
