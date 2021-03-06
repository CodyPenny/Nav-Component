import React from 'react';
import ProductMenu from '../dropDownmenus/products-menu/ProductMenu.jsx'
import LeftNavButton from './LeftNavButton.jsx';


class ProductsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    onClick = event => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {

        const activeClass = this.state.active ? "active" : "";

        return (
            <li>
                <LeftNavButton activeClass={activeClass} onClick={this.onClick} title="Products" />
                <ProductMenu active={activeClass} />
            </li>
        )
    }
}


export default ProductsButton;