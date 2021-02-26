import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/layout/Burger/Burger";
import BuildControls from "../../components/layout/Burger/BuildControls/BuildControls";

const INGRIDENT_PRICES = {

  salad: 0.5,
  cheese:0.4,
  meat:1.3,
  bacon:0.7
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice:4
  };

  addIngrientHandler = (type) => {

    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount+1
    const updatedIngridents = {

      ...this.state.ingredients
    }
    updatedIngridents[type] = updatedCount
    const priceAddition = INGRIDENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice+priceAddition
    this.setState({totalPrice:newPrice,ingredients:updatedIngridents})

    
  }
  removeIngrientHandler = (type) => {

  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>
          <BuildControls ingredientAdded = {this.addIngrientHandler} />
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
