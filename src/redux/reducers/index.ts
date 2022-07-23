import { combineReducers } from "redux";
import posts from "./posts.reducer"
import user from "./user.reducer"

const reducers = combineReducers({
  posts,
  user
})


export default reducers;