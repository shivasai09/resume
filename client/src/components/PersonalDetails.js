import React from 'react';
import { connect } from 'react-redux';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    CardHeader,
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    CardTitle,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

class PersonalDetails extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div className="section">
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '5px' }}>Personal Details</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardHeader className="text-center"><b>let's get personal </b></CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup row>
                                    <Label for="pname" sm={2}> Name</Label>
                                    <Col sm={7}>
                                        <Input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="your name"
                                            value={this.props.myName}
                                            onChange={(event) => this.props.dispatch({ type: "myName", value: event.target.value })}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="fname" sm={2}>father's Name</Label>
                                    <Col sm={7}>
                                        <Input
                                            type="text"
                                            name="fname"
                                            id="fname"
                                            placeholder="your father name"
                                            value={this.props.fname}
                                            onChange={(event) => this.props.dispatch({ type: "fname", value: event.target.value })}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="dob" sm={2}>date of birth</Label>
                                    <Col sm={7}>
                                        <Input
                                            type="text"
                                            name="dob"
                                            id="dob"
                                            placeholder="09-08-1996"
                                            value={this.props.dob}
                                            onChange={(event) => this.props.dispatch({ type: "dob", value: event.target.value })}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="langk" sm={2}>Languages Known</Label>
                                    <Col sm={7}>
                                        <Input
                                            type="text"
                                            name="langk"
                                            id="langk"
                                            placeholder="Hindi,English..."
                                            value={this.props.LanguagesKnown}
                                            onChange={(event) => this.props.dispatch({ type: "LanguagesKnown", value: event.target.value })}
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    myName: state.myName,
    fname: state.fname,
    dob: state.dob,
    LanguagesKnown: state.LanguagesKnown
})

export default connect(mapStateToProps, undefined)(PersonalDetails)