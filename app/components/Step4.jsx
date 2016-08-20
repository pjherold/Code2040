import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class Step4 extends React.Component {
	constructor(props) {
		super(props);
        this.state = { prefix: '', array: '', newArray: '' }
        this.getStrings = this.getStrings.bind(this);
        this.postStrings = this.postStrings.bind(this);
	}

    getStrings() {
        this.setState({ prefix: 'jztm', array: "[akjf, jztmfd, ibhj]" });
    }

    postStrings() {
        if (this.state.prefix !== '') {
            this.setState({ newArray: "[akjf, ibhj]" });
        }
    }

    render() {
    	return (
    		<div>
    			<div className="stepDescription">
                    Prefix
                </div>
                <br/>
                <br/>
                <Button bsStyle="warning" 
                        onClick={this.getStrings}>Get Prefix and Array
                </Button>
                <br/>
                <br/>
                    <input className="prefix" type="text"
                           placeholder="Prefix" value={this.state.prefix} 
                           readOnly/>
                    <input className="array" type="text"
                           placeholder="Array" value={this.state.array} 
                           readOnly/>
                <br/>
                <br/>
                <br/>
                <Button bsStyle="warning" 
                        onClick={this.postStrings}>POST New Array
                </Button>
                <br/>
                <br/>
                    <input className="newarray" type="text"
                           placeholder="New Array" value={this.state.newArray} 
                           readOnly/>
  			</div>
    	);
    }
}

export default Step4