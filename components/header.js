import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <div className= "header">{this.props.header}</div>
            </header>
        )
    }
}

export default Header;