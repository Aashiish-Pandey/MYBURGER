import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/layout/Burger/Burger";
import BuildControls from "../../components/layout/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/modal/modal'
import OrderSummary from "../../components/layout/Burger/OrderSummary/OrderSummary";

const INGRIDENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseble:false,
    purchasing:false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
    .map(igKey=>{

      return ingredients[igKey]
    }
    )
    .reduce((acc, cvlaue) =>{

      return acc+cvlaue
    },0)

    this.setState({purchaseble:sum>0})
    
  }

  addIngrientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngridents = {
      ...this.state.ingredients,
    };
    updatedIngridents[type] = updatedCount;
    const priceAddition = INGRIDENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngridents });

    this.updatePurchaseState(updatedIngridents)
  };
  removeIngridentHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount<=0) {

      return

    }
    const updatedCount = oldCount - 1;
    const updatedIngridents = {
      ...this.state.ingredients,
    };
    updatedIngridents[type] = updatedCount;
    const priceDeduction = INGRIDENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngridents });
    this.updatePurchaseState(updatedIngridents)
  };

  purchaseHandler = ()=> {

  this.setState({purchasing:true})
  }

  purchaseCancelHandler = ()=> {

    this.setState({purchasing:false})
  }

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {

      disabledInfo[key] = disabledInfo[key]<=0
      
    }
    return (
      <Aux>

        <Modal show ={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
          <OrderSummary ingredients = {this.state.ingredients}></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <div>
          <BuildControls
            ingredientAdded={this.addIngrientHandler}
            ingredientRemoved={this.removeIngridentHandler}
            disabled = {disabledInfo}
            price ={this.state.totalPrice}
            purchaseble={this.state.purchaseble}
            ordered = {this.purchaseHandler}
          />
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
