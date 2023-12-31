import React from 'react'
import {  connect } from 'react-redux'
import { buyCake, buyIceCream } from '../Redux'
const ItemContainer = (props) => {
  return (
    <div>
        <h2>Item- {props.item}</h2>
    </div>
  )
}

const mapStateToProps=(state,ownProps)=>{
  const itemState=ownProps.cake
  ?state.cake.numberOfCakes
  :state.iceCream.numOfIceCream
  return{
    item:itemState
  }
  
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFunction=ownProps.cake
    ?()=>dispatch(buyCake())
    :()=>dispatch(buyIceCream())
    return{
        buyItem:dispatchFunction
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)