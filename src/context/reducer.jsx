import { CHANGE_LANGUAGE } from "./actions";
const reducer = (state, action) => {
  if (action.type === CHANGE_LANGUAGE) {
    console.log("jestem w lang change");
    return {
      state,
      language: state.language === "english" ? "polish" : "english",
    };
  }
  return { state };
};
export default reducer;
