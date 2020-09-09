import React, { Component } from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`/assets/${this.props.item.category}/${this.props.item.image}`}
                    alt={this.props.item.name}
                />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
        <p className="card-text">{this.props.item.price}€ / {this.props.item.unit}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;
