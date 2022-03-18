import {Component} from "react";


export default class Modal extends Component {
    render () {
        console.log('in modal');
        return (
            <div className="modal">
                hello there
                <button>

                </button>
                <button onClick={this.handlePopUp}>
                    cancel
                </button>
            </div>
        )
    }
}