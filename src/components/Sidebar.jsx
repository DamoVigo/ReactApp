import React, { Component } from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(props.items)
    }
    render() {
        return (
            <ul>
                {this.props.items.map((item) => (
                    <li
                        onClick={() => this.props.onCategorieChanged(item.id)}
                        style={style}
                        key={item.id}
                    >{item.name}</li>
                ))}
            </ul>
        );
    }
}
const style = {
    cursor: "pointer"
}
export default Sidebar;