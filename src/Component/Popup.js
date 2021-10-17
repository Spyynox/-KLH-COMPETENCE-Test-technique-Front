import React, { Component } from 'react';
import './Popup.css'


export default class Popup extends Component {
    render() {
        return (this.props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    { this.props.children }
                </div>
            </div>
        ) : ""
    }
}
