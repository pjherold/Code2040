import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
//import { Step2, Step3, Step4, Step5 } from '.';
import Step2 from './Step2.jsx';
import Step3 from './Step3.jsx';
import Step4 from './Step4.jsx';
import Step5 from './Step5.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {step: 2};
		this.handleClick2 = this.handleClick2.bind(this);
		this.handleClick3 = this.handleClick3.bind(this);
		this.handleClick4 = this.handleClick4.bind(this);
		this.handleClick5 = this.handleClick5.bind(this);
		this.renderContent = this.renderContent.bind(this);
	}

	handleClick2() {
		this.setState({ step: 2 });
	}
	handleClick3() {
		this.setState({ step: 3 });
	}
	handleClick4() {
		this.setState({ step: 4 });
	}
	handleClick5() {
		this.setState({ step: 5 });
	}

	renderContent() {
		const { step } = this.state;
		switch (step) {
			case 2:
				return (
					<Step2 token={this.props.token}/>
				);

			case 3:
				return (
					<Step3 token={this.props.token}/>
				);

			case 4:
				return (
					<Step4 token={this.props.token}/>
				);

			case 5:
				return (
					<Step5 token={this.props.token}/>
				);

			default:
				return null;
		}
	}

    render() {
    	return (
    		<div>
			    <Button bsStyle="primary" bsSize="large" 
			    		onClick={this.handleClick2}>Step 2
			    </Button>
			    <Button bsStyle="success" bsSize="large"
			    		onClick={this.handleClick3}>Step 3
			    </Button>
			    <Button bsStyle="warning" bsSize="large"
			    		onClick={this.handleClick4}>Step 4
			    </Button>
			    <Button bsStyle="danger" bsSize="large"
			    		onClick={this.handleClick5}>Step 5
			    </Button>
			    <br/>
			    <p></p>
			     <Jumbotron>
    				{this.renderContent()}
  				</Jumbotron>
  			</div>
    	);
    }
}

export default App
