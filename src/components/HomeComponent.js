import React, {Component} from 'react';
import NavbarComponent from "./NavbarComponent";

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <NavbarComponent />
            </div>
        );
    }
}

export default HomeComponent;