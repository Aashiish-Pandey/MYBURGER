import React, {Component} from 'react'
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/layout/Burger/Burger'
class BurgerBuilder extends Component {

    render () {

        return (

            <Aux>
                <Burger/>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;
