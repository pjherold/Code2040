import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class Step5 extends React.Component {
	constructor(props) {
		super(props);
        this.state = { datestamp: '', interval: '', newDate: '' }
        this.getData = this.getData.bind(this);
        this.postDate = this.postDate.bind(this);
	}

    getData() {
        this.setState({ datestamp: '2016-09-17T07:29:58Z',
                        interval: '20539' });
    }

    postDate() {
        if (this.state.datestamp !== '') {
            this.setState({ newDate: '2016-09-17T13:12:17Z'});
        }
    }

    render() {
    	return (
    		<div>
    			<div className="stepDescription">
                    The dating game
                </div>
                <br/>
                <br/>
                <Button bsStyle="danger" 
                        onClick={this.getData}>Get Date and Interval
                </Button>
                <br/>
                <br/>
                    <input className="date" type="text"
                           placeholder="Datestamp" value={this.state.datestamp} 
                           readOnly/>
                    <input className="interval" type="text"
                           placeholder="Interval" value={this.state.interval} 
                           readOnly/>
                <br/>
                <br/>
                <br/>
                <Button bsStyle="danger" 
                        onClick={this.postDate}>POST New Date
                </Button>
                <br/>
                <br/>
                    <input className="newdate" type="text"
                           placeholder="New Date" value={this.state.newDate} 
                           readOnly/>
  			</div>
    	);
    }
}

export default Step5