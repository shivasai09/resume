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

class TechnicalSkills extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            programInput: "",
            toolInput: ""
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            programInput: props.programInput,
            toolInput: props.toolInput
        }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        return (
            <div className="section">
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '5px' }}>Skills</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardHeader className="text-center"><b>It's time to show off your technical skills</b></CardHeader>
                        <CardBody>
                            <CardTitle>Programing Skills</CardTitle>
                            <Form>
                                <FormGroup row>
                                    <Label for="pskills" sm={1}>add Skills</Label>
                                    <Col sm={5}>
                                        <Input
                                            type="text"
                                            name="programmingSkills"
                                            id="programmingSkills"
                                            placeholder="c++/Java etc"
                                            value={this.state.programInput}
                                            onKeyDown={(event) => {
                                                if (event.which == 13) {
                                                    event.preventDefault()
                                                    event.stopPropagation();
                                                }
                                                else {
                                                    return;
                                                }
                                            }}
                                            onChange={(event) => {
                                                event.preventDefault()
                                                event.stopPropagation();
                                                this.props.dispatch({ type: 'programInput', value: event.target.value })
                                            }} />
                                    </Col>
                                    <Button
                                        sm={1}
                                        onClick={(event) => {
                                            event.preventDefault()
                                            event.stopPropagation();
                                            if (this.state.programInput) {
                                                this.props.dispatch({ type: "addProgramSkill", value: this.state.programInput })
                                            }
                                        }}
                                    >Add
                                    </Button>
                                </FormGroup>
                                <Col sm={3}>
                                    <ListGroup flush >
                                        {this.props.programingLanguages && this.props.programingLanguages.map((item, index) => {
                                            return (
                                                <ListGroupItem action tag="a" sm={1} key={index} className="justify-content-space-around">
                                                    <div className=" clearfix">
                                                        <div className="float-left">{item}</div>
                                                        <Button
                                                            className="float-right"
                                                            size="sm"
                                                            color="primary"
                                                            onClick={() => this.props.dispatch({ type: "deleteProgramSkill", index: index })}
                                                        >
                                                            delete
                                                        </Button>
                                                    </div>
                                                </ListGroupItem>
                                            )
                                        })}
                                    </ListGroup >
                                </Col>
                            </Form>
                            <CardTitle>Tools Used</CardTitle>
                            <Form>
                                <FormGroup row>
                                    <Label for="tools" sm={1}>add tools</Label>
                                    <Col sm={5}>
                                        <Input
                                            type="text"
                                            name="toolsUsed"
                                            id="toolsUsed"
                                            placeholder="turbo C/eclipse etc"
                                            value={this.state.toolInput}
                                            onKeyDown={(event) => {
                                                if (event.which == 13) {
                                                    event.preventDefault()
                                                    event.stopPropagation();
                                                }
                                                else {
                                                    return;
                                                }
                                            }}
                                            onChange={(event) => {
                                                event.preventDefault()
                                                event.stopPropagation();
                                                this.props.dispatch({ type: 'toolInput', value: event.target.value })
                                            }} />
                                    </Col>
                                    <Button
                                        sm={1}
                                        onClick={(event) => {
                                            event.preventDefault()
                                            event.stopPropagation();
                                            if (this.state.toolInput) {
                                                this.props.dispatch({ type: "addToolsUsed", value: this.state.toolInput })
                                            }
                                        }}
                                    >Add
                                    </Button>
                                </FormGroup>
                                <Col sm={3}>
                                    <ListGroup flush >
                                        {this.props.toolsUsed && this.props.toolsUsed.map((item, index) => {
                                            return (
                                                <ListGroupItem action tag="a" sm={1} key={index} className="justify-content-space-around">
                                                    <div className=" clearfix">
                                                        <div className="float-left">{item}</div>
                                                        <Button
                                                            className="float-right"
                                                            size="sm"
                                                            color="primary"
                                                            onClick={() => this.props.dispatch({ type: "deleteToolsUsed", index: index })}
                                                        >
                                                            delete
                                                        </Button>
                                                    </div>
                                                </ListGroupItem>
                                            )
                                        })}
                                    </ListGroup >
                                </Col>
                            </Form>
                            <Form>
                                <FormGroup row>
                                <Label for="tools" sm={4}>add Operating systems you have worked on</Label>
                                <Col sm={7}>
                                        <Input
                                            type="text"
                                            name="os"
                                            id="os"
                                            placeholder="type by comma seprated values ex:- windows,unbunt <-- like this"
                                            value={this.props.knownOs}
                                            onKeyDown={(event) => {
                                                if (event.which == 13) {
                                                    event.preventDefault()
                                                    event.stopPropagation();
                                                }
                                                else {
                                                    return;
                                                }
                                            }}
                                            onChange={(event) => {
                                                event.preventDefault()
                                                event.stopPropagation();
                                                this.props.dispatch({ type: 'knownOs', value: event.target.value })
                                            }} />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    toolInput: state.toolInput,
    programInput: state.programInput,
    programingLanguages: state.programingLanguages,
    toolsUsed: state.toolsUsed,
    knownOs: state.knownOs
})

export default connect(mapStateToProps, undefined)(TechnicalSkills)