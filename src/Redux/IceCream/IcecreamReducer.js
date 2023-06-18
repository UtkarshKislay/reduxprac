import { BUY_ICE_CREAM } from "./IceCreamType";

const initalState={
    numOfIceCream:20
}


const iceCreamReducer=(state=initalState,action)=>{
    switch(action.type){
        case BUY_ICE_CREAM:return{
                ...state,
                numOfIceCream:state.numOfIceCream-1
            }
         default :return state;
    }
}

export default iceCreamReducer