import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hotel from './Hotel';
import Error from './Error';

export default class Hotels extends Component {
 
    render() {
        let hotels = this.props.data.map(h => {
            return <Hotel key={h.id} {...h} />
        });
        return (
            <div className="container">
                <div className="row justify-content-start">
                      {hotels}
                </div>
            </div>
        );
    }
}

if (document.getElementById('hotels')) {
     fetch('/hotels').then(data => {
        data.json().then(d => {
            ReactDOM.render(<Hotels data={d} />, document.getElementById('hotels'));
        }).catch(e => {
            ReactDOM.render(<Error message="Couldnt parse hotels" />,  document.getElementById('hotels'));
        });
    }).catch(e => {
        ReactDOM.render(<Error message="Couldnt load hotels" />,  document.getElementById('hotels'));
    });
}
