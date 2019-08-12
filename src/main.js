import React, {Component} from 'react';
import { render } from 'react-dom';

class Header extends Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

render(<Header title={"Hello, I am a superheader!"}  />, document.getElementById('app'));