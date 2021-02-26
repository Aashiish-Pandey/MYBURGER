import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/layout/Burger/Burger";
import BuildControls from "../../components/layout/Burger/BuildControls/BuildControls";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>
          <BuildControls />
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
