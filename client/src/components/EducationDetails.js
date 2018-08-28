import React from 'react';
import { connect } from 'react-redux';
import {
    Col,
    Collapse,
    Button,
    CardBody,
    Card,
    CardHeader,
    Label,
    Input,
    CardTitle,
    Form,
    FormGroup
} from 'reactstrap';

class EducationDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = { collapse: false };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        return (
            <div className="section">
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '5px' }}>Education Details</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardHeader className="text-center"><b>This section contains academic details</b></CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup row>
                                    <Label for="Email" sm={3} className="text-center">Examination</Label>
                                    <Label for="Email" sm={3} className="text-center">Borad/University</Label>
                                    <Label for="Email" sm={3} className="text-center">Instituition</Label>
                                    <Label for="Email" sm={3} className="text-center">Aggregate</Label>
                                </FormGroup>
                            </Form>
                            <Form>
                                <FormGroup row>
                                    <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="collegeE"
                                            id="collegeE"
                                            value={this.props.degreeExamination}
                                            placeholder="B.Tech/ B.B.A"
                                            onChange={(event)=>this.props.dispatch({type:"degreeExamination",value:event.target.value})}
                                            />
                                    </Col>
                                    <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="collegeB"
                                            id="collegeB"
                                            placeholder="JNTU" 
                                            value={this.props.degreeBoard}
                                            onChange={(event)=>this.props.dispatch({type:"degreeBoard",value:event.target.value})}
                                            />
                                    </Col>
                                    <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="collegeI"
                                            id="collegeI"
                                            placeholder="GNIT"
                                            value={this.props.degreeInstitution}
                                            onChange={(event)=>this.props.dispatch({type:"degreeInstitution",value:event.target.value})}
                                            />
                                    </Col>
                                    <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="collegeA"
                                            id="collegeA"
                                            placeholder="40%" 
                                            value={this.props.degreePercentage}
                                            onChange={(event)=>this.props.dispatch({type:"degreePercentage",value:event.target.value})}
                                            />
                                    </Col>
                                </FormGroup>
                            </Form>
                            <Form>
                                <FormGroup row>
                                <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="interE"
                                            id="interE"
                                            placeholder="MPC"
                                            value={this.props.interMediateExamination}
                                            onChange={(event)=>this.props.dispatch({type:"interMediateExamination",value:event.target.value})}
                                            />
                                    </Col>
                                    <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="interB"
                                            id="interB"
                                            placeholder="SSC"
                                            value={this.props.interMediateBoard}
                                            onChange={(event)=>this.props.dispatch({type:"interMediateBoard",value:event.target.value})}
                                            />
                                    </Col>
                                    <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="interI"
                                            id="interI"
                                            placeholder="narayan"
                                            value={this.props.interMediateInstitution}
                                            onChange={(event)=>this.props.dispatch({type:"interMediateInstitution",value:event.target.value})}
                                            />
                                    </Col>
                                    <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="interP"
                                            id="interP"
                                            placeholder="45%"
                                            value={this.props.interMediatePercentage}
                                            onChange={(event)=>this.props.dispatch({type:"interMediatePercentage",value:event.target.value})}
                                            />
                                    </Col>
                                   </FormGroup>
                            </Form>
                            <Form>
                                <FormGroup row>
                                <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="schoolE"
                                            id="schoolE"
                                            placeholder="10th class"
                                            value={this.schoolExamination}
                                            onChange={(event)=>this.props.dispatch({type:"schoolExamination",value:event.target.value})}
                                            />
                                    </Col>
                                    <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="schoolB"
                                            id="schoolB"
                                            placeholder="CBSE"
                                            value={this.props.schoolBoard}
                                            onChange={(event)=>this.props.dispatch({type:"schoolBoard",value:event.target.value})}
                                            />
                                    </Col>
                                    <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="schoolI"
                                            id="schoolI"
                                            placeholder="MMIT"
                                            value={this.props.schoolInstitution}
                                            onChange={(event)=>this.props.dispatch({type:"schoolInstitution",value:event.target.value})}
                                            />
                                    </Col>
                                    <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="schoolP"
                                            id="schoolP"
                                            placeholder="45%"
                                            value={this.props.schoolPercentage}
                                            onChange={(event)=>this.props.dispatch({type:"schoolPercentage",value:event.target.value})}
                                            />
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
    degreeExamination: state.degreeExamination,
    degreeBoard: state.degreeBoard,
    degreeInstitution: state.degreeInstitution,
    degreePercentage: state.degreePercentage,

    interMediateExamination: state.interMediateExamination, 
    interMediateBoard: state.interMediateBoard,
    interMediateInstitution: state.interMediateInstitution,
    interMediatePercentage: state.interMediatePercentage,
    
    

    schoolExamination: state.schoolExamination,
    schoolBoard: state.schoolBoard,
    schoolInstitution: state.schoolInstitution,
    schoolPercentage: state.schoolPercentage,  
})

export default connect(mapStateToProps, undefined)(EducationDetails)