import * as CS from "./courseTypes";
import axios from "axios";

export const saveCourses = (course) => {
  return (dispatch) => {
    dispatch({
      type: CS.SAVE_COURSE_REQUEST,
    });
    axios
      .post("http://localhost:8089/courses/save", course)
      .then((response) => {
        dispatch(bookSuccess(response.data));
      })
      .catch((error) => {
        dispatch(bookFailure(error));
      });
  };
};

export const fetchCourses = (courseId) => {
  return (dispatch) => {
    dispatch({
      type: CS.FETCH_COURSE_REQUEST,
    });
    axios
      .get("http://localhost:8089/courses/list" + courseId)
      .then((response) => {
        dispatch(bookSuccess(response.data));
      })
      .catch((error) => {
        dispatch(bookFailure(error));
      });
  };
};

// export const updateBook = (course) => {
//   return (dispatch) => {
//     dispatch({
//       type: CS.UPDATE_COURSE_REQUEST,
//     });
//     axios
//       .put("http://localhost:8081/rest/books", book)
//       .then((response) => {
//         dispatch(bookSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(bookFailure(error));
//       });
//   };
// };

// export const deleteBook = (courseId) => {
//   return (dispatch) => {
//     dispatch({
//       type: CS.DELETE_COURSE_REQUEST,
//     });
//     axios
//       .delete("http://localhost:8081/rest/books/" + bookId)
//       .then((response) => {
//         dispatch(bookSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(bookFailure(error));
//       });
//   };
// };

const bookSuccess = (course) => {
  return {
    type: CS.COURSE_SUCCESS,
    payload: course,
  };
};

const bookFailure = (error) => {
  return {
    type: CS.COURSE_FAILURE,
    payload: error,
  };
};