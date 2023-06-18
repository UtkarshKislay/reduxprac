import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./IceCream/IcecreamReducer";
import userReducer from "./User/userReducer";

const rootReducer=combineReducers({
   cake: cakeReducer,
   iceCream: iceCreamReducer,
   user:userReducer
})


export default rootReducer;
