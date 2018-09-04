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

class PossesionAndHobby extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            achievementInput: "",
            hobbyInput:""
        };
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div className="section">
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '5px' }}>Hobbies And Achievements</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardHeader className="text-center"><b>Your Achivements and Hobbies</b></CardHeader>
                        <CardBody>
                            <Form>
                                <CardTitle>Achievements</CardTitle>
                                <FormGroup row >
                                    <Label for="achievements" sm={2}>add achievements</Label>
                                    <Col sm={5}>
                                        <Input
                                            type="text"
                                            name="achievements"
                                            id="achievements"
                                            placeholder="i have won gold medal in maths olympiad"
                                            value={this.state.achievementInput}
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
                                                this.setState({ achievementInput: event.target.value })
                                            }} />
                                    </Col>
                                    <Button
                                        sm={3}
                                        onClick={(event) => {
                                            event.preventDefault()
                                            event.stopPropagation();
                                            if (this.state.achievementInput) {
                                                this.props.dispatch({ type: "addAchievement", value: this.state.achievementInput })
                                                this.setState({achievementInput:""})
                                            }
                                        }}
                                    >Add
                                    </Button>
                                </FormGroup>
                                <Col sm={3}>
                                    <ListGroup flush >
                                        {this.props.achievements && this.props.achievements.map((item, index) => {
                                            return (
                                                <ListGroupItem action tag="a" sm={1} key={index} >
                                                    <div className=" clearfix">
                                                        <div className="float-left">{item}</div>
                                                        <Button
                                                            className="float-right"
                                                            size="sm"
                                                            color="primary"
                                                            onClick={() => this.props.dispatch({ type: "deleteAchievement", index: index })}
                                                        >
                                                            delete
                                                        </Button>
                                                    </div>
                                                </ListGroupItem>
                                            )
                                        })}
                                    </ListGroup >
                                </Col>
                                <CardTitle>Hobbies</CardTitle>
                                <FormGroup row >
                                    <Label for="hobbies" sm={2}>add Hobbies</Label>
                                    <Col sm={5}>
                                        <Input
                                            type="text"
                                            name="hobbies"
                                            id="hobbies"
                                            placeholder="collection stamps"
                                            value={this.state.hobbyInput}
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
                                                this.setState({ hobbyInput: event.target.value })
                                            }} />
                                    </Col>
                                    <Button
                                        sm={3}
                                        onClick={(event) => {
                                            event.preventDefault()
                                            event.stopPropagation();
                                            if (this.state.hobbyInput) {
                                                this.props.dispatch({ type: "addHobby", value: this.state.hobbyInput })
                                                this.setState({hobbyInput:""})
                                            }
                                        }}
                                    >Add
                                    </Button>
                                </FormGroup>
                                <Col sm={3}>
                                    <ListGroup flush >
                                        {this.props.hobbies && this.props.hobbies.map((item, index) => {
                                            return (
                                                <ListGroupItem action tag="a" sm={1} key={index} >
                                                    <div className=" clearfix">
                                                        <div className="float-left">{item}</div>
                                                        <Button
                                                            className="float-right"
                                                            size="sm"
                                                            color="primary"
                                                            onClick={() => this.props.dispatch({ type: "deletehobby", index: index })}
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
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    achievements: state.achievements,
    hobbies: state.hobbies
})
export default connect(mapStateToProps, undefined)(PossesionAndHobby)