import React from 'react';
import Card from './Card'
class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row">
                {
                    this.props.items.map((item) => 
                        <div key={item.ref} className="col-sm-4 mb-3">
                            <Card item={item} />
                        </div>)
                }
            </div>
        );
    }
}

export default ProductsList;
