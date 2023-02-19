import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "../reducer/modalReducer";
import tasksReducer from "../reducer/tasksReducer";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    modal: modalReducer,
  },
});
