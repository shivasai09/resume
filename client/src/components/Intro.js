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
    CardTitle
} from 'reactstrap';
class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div className="section">
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '5px' }}>Introduction</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card outline color="primary"  >
                        <CardHeader className="text-center"><b>This is an Introduction section</b> </CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup row>
                                    <Label for="name" sm={1}>Your Name</Label>
                                    <Col sm={5}>
                                        <Input
                                            type="text"
                                            name="yname"
                                            id="yname"
                                            placeholder="RAMESH IYER"
                                            value={this.props.intro.yName}
                                            onChange={(event) => this.props.dispatch({ type: 'yName', value: event.target.value })}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Email" sm={1}>Email</Label>
                                    <Col sm={5}>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="Email"
                                            placeholder="sai@gmail.com"
                                            value={this.props.intro.email}
                                            onChange={(event) => this.props.dispatch({ type: 'email', value: event.target.value })}
                                        />
                                    </Col>
                                    <Label for="Mobile" sm={1}>Mobile</Label>
                                    <Col sm={5}>
                                        <Input
                                            type="text"
                                            name="mobie"
                                            id="Mobile"
                                            placeholder="+91-995949593"
                                            value={this.props.intro.mobile}
                                            onChange={(event) => {
                                                if (/^\d{1,10}$/.test(event.target.value || event.target.value === "")) {
                                                    this.props.dispatch({ type: "mobile", vlaue: event.target.value })
                                                }
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>
                            <CardTitle>Address</CardTitle>
                            <Form>
                                <FormGroup >
                                    <Label for="houseNo" sm={1}>House No</Label>
                                    <Col sm={5}>
                                        <Input
                                            type="text"
                                            name="houseNo"
                                            id="hosueNo"
                                            placeholder="8-1-333 6th corss"
                                            value={this.props.intro.houseNo}
                                            onChange={(event) => this.props.dispatch({ type: 'houseNo', value: event.target.value })}
                                        />
                                    </Col>
                                    <Label for="area" sm={1}>area</Label>
                                    <Col sm={5}>
                                        <Input
                                            type="text"
                                            name="area"
                                            id="area"
                                            placeholder="kalyan Nagar"
                                            value={this.props.intro.area}
                                            onChange={(event) => this.props.dispatch({ type: 'area', value: event.target.value })}
                                        />
                                    </Col>
                                    <Label for="city" sm={1}>city</Label>
                                    <Col sm={5}>
                                        <Input
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder="Banglore"
                                            value={this.props.intro.city}
                                            onChange={(event) => this.props.dispatch({ type: 'city', value: event.target.value })}
                                        />
                                    </Col>
                                    <Label for="pincode" sm={1}>Pincode</Label>
                                    <Col sm={5}>
                                        <Input
                                            type="text"
                                            name="pincode"
                                            id="pincode"
                                            placeholder="500034"
                                            value={this.props.intro.pincode}
                                            onChange={(event) => this.props.dispatch({ type: 'pincode', value: event.target.value })}
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    intro: state
})

export default connect(mapStateToProps, undefined)(Intro);