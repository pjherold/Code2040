import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class Step3 extends React.Component {
	constructor(props) {
		super(props);
        this.state = { needle: '', haystack: '', index: '' }
        this.getData = this.getData.bind(this);
        this.postPos = this.postPos.bind(this);
	}

    getData() {
        this.setState({ needle: 'dke',
                        haystack: '[oen, ler, wie, dke, law]'
                     });
    }

    postPos() {
        if (this.state.needle !== '') {
            this.setState({ index: '3' });
        }
    }

    render() {
    	return (
    		<div>
    			<div className="stepDescription">
                    Needle in a haystack
                </div>
                <br/>
                <br/>
                <Button bsStyle="success" 
                        onClick={this.getData}>Get Needle and Haystack
                </Button>
                <br/>
                <br/>
                    <input className="needle" type="text"
                           placeholder="Needle" value={this.state.needle} 
                           readOnly/>
                    <input className="haystack" type="text"
                           placeholder="Haystack" value={this.state.haystack} 
                           readOnly/>
                <br/>
                <br/>
                <br/>
                <Button bsStyle="success" 
                        onClick={this.postPos}>POST Position
                </Button>
                <br/>
                <br/>
                    <input className="index" type="text"
                           placeholder="Index" value={this.state.index} 
                           readOnly/>
  			</div>
    	);
    }
}

export default Step3