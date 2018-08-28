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

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        return (
            <div className="section">
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '5px' }}>Projects</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardHeader className="text-center"><b>Your Real time Project experience description</b></CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup row>
                                    <Label for="pname" sm={2}>Project Name</Label>
                                    <Col sm={10}>
                                        <Input
                                            type="text"
                                            name="pname"
                                            id="pname"
                                            placeholder="Project Title"
                                            value={this.props.projectName}
                                            onChange={(event) => this.props.dispatch({ type: "projectName", value: event.target.value })}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="pname" sm={2}>Project Description</Label>
                                    <Col sm={10}>
                                        <Input
                                            type="textarea"
                                            name="pdescription"
                                            id="pdescription"
                                            placeholder="Project Title"
                                            value={this.props.projectDescription}
                                            onChange={(event) => this.props.dispatch({ type: "projectDescription", value: event.target.value })}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="prole" sm={2}>Roles and Responsibilites</Label>
                                    <Col sm={10}>
                                        <Input
                                            type="textarea"
                                            name="prole"
                                            id="prole"
                                            placeholder="Project Title"
                                            value={this.props.projectRoles}
                                            onChange={(event) => this.props.dispatch({ type: "projectRoles", value: event.target.value })}
                                        />
                                    </Col>
                                </FormGroup>
                                </Form>
                        </CardBody>
                    </Card>
                </Collapse>
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    projectName: state.projectName,
    projectDescription: state.projectDescription,
    projectRoles: state.projectRoles
})

export default connect(mapStateToProps, undefined)(Projects)