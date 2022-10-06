import * as CS from "./courseTypes";

const initialState = {
  courses: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CS.SAVE_COURSE_REQUEST:
    case CS.FETCH_COURSE_REQUEST:
    case CS.UPDATE_COURSE_REQUEST:
    case CS.DELETE_COURSE_REQUEST:
      return {
        ...state,
      };
    case CS.COURSE_SUCCESS:
      return {
        course: action.payload,
        error: "",
      };
    case CS.COURSE_FAILURE:
      return {
        course: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;