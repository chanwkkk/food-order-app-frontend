import React from 'react'
import Button from 'react-bootstrap/Button'
import {addOrder} from '../actions/orderAction'
import {connect} from 'react-redux'

class Dish extends React.Component{

    handleClick = (dish) =>{
        this.props.addOrder(dish)
        localStorage.setItem("order", JSON.stringify(this.props.order))
        alert(`${dish.name} added to your order!`)
      }  
    



    render(){
      let dish = this.props.dish  
        return(
        <div className="col-4">  
            <img
            width = "100%" 
            height = "70%"
            className="fluid" 
            src={`./images/${dish.image}`} 
            alt={dish.name} />
            <h5>{dish.name}         ${dish.price}</h5>
            <Button onClick = {()=>this.handleClick(dish)} size="sm" variant="primary">Order</Button>   
            <Button onClick = {()=>this.handleClick(dish)} size="sm" variant="secondary">Cancel</Button> 

            {/* depending on where it comes from, if a request makes from order then we don't have a order button,
            only when it comes from dishes it has all two buttons
            also the button should inherit some functions from the parent component
            and if it is ordered, there is a cancel button!for the dish*/}
        </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
    return {
        addOrder: (dish) =>dispatch(addOrder(dish))
    }
}

const mapStateToProps = state =>{
    return{
        order: state.order
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dish)
