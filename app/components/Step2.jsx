import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';


const url1 = 'http://challenge.code2040.org/api/reverse';
const url2 = 'http://challenge.code2040.org/api/reverse/validate';

class Step2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { string: '', reversed: '' };

		this.getString = this.getString.bind(this);
		this.postReversed = this.postReversed.bind(this);
	}

	getString() {
		this.setState({ string: 'lakeg' });
	}

	postReversed() {
		if (this.state.string !== '') {
			this.setState({ reversed: 'gekal' });
		}
	}

    render() {
    	return (
    		<div>
    			<div className="stepDescription">
    				Reverse a String
                </div> 
				<br/>
				<br/>
				<Button bsStyle="primary" 
		    			onClick={this.getString}>Get String
		    	</Button>
		    	<br/>
		    	<br/>
		    		<input className="string" type="text"
		    			   placeholder="String" value={this.state.string} 
		    			   readOnly/>
		    	<br/>
		    	<br/>
		    	<br/>
		    	<Button bsStyle="primary" 
		    			onClick={this.postReversed}>POST Reversed String
		    	</Button>
		    	<br/>
		    	<br/>
		    		<input className="revstring" type="text"
		    			   placeholder="Reversed String" value={this.state.reversed} 
		    			   readOnly/>
  			</div>
    	);
    }
}

export default Step2