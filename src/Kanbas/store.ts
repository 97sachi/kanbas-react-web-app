import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import modulesReducer from "./Courses/Modules/reducer";
import enrollmentReducer from "./redux/enrollmentsReducer"; 
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollment: enrollmentReducer,
  },
});
export default store;

