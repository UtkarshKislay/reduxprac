import { BUY_CAKE } from "./cakeTypes"

const initalSate={
    numOfCakes:10
}
const cakeReducer=(state=initalSate,action)=>{
   // console.log(initalSate);
   switch(action.type){
     case BUY_CAKE:return{
        ...state,
        numOfCakes:state.numOfCakes-action.payload
     }
     default:return state
   }
}

export default cakeReducer;