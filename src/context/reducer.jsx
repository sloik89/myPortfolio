import { CHANGE_LANGUAGE, SET_DARK_THEME } from "./actions";
const reducer = (state, action) => {
  if (action.type === CHANGE_LANGUAGE) {
    console.log("jestem w lang change");
    return {
      ...state,
      language: state.language === "english" ? "polish" : "english",
    };
  }
  if (action.type === SET_DARK_THEME) {
    return { ...state, darkTheme: !state.darkTheme };
  }
  return { state };
};
export default reducer;
