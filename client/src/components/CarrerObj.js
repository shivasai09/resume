import React from 'react';
import { connect } from 'react-redux';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    CardHeader,
    Label,
    Input,
    CardTitle
} from 'reactstrap';

class CarrerObj extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            objectives:[
                'To work in globally competitive environment on challenging assignments that shall yield the twin benefits of the job satisfaction and a steady-pace professional growth',
                'To make a position for myself in the competitive corporate world and contribute to achieving the goals on both professional and personal level',
                'To look for challenges and try to overcome them with integrity and honesty in order to achieve excellence and satisfaction in the job',
                'To work in an environment that challenges me to improve and constantly thrive for perfection in all the tasks allotted to me',
                'To achieve a rewarding and fulfilling career in a healthy workforce'
            ]
        };
        this.toggle = this.toggle.bind(this);
    }
    static getDerivedStateFromProps(props, state){
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        return (
            <div className="section">
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '5px' }}>   CARRER OBJECTIVE </Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardHeader className="text-center"><b>you can defin your carrer objective in this section </b></CardHeader>
                        <CardBody>
                            <Label for="objective">Fill in the Objective</Label>
                            <Input 
                            type="textarea" 
                            name="objective" 
                            id="objective"  
                            value = {this.props.carrerObjective}
                            onChange = {(event)=>this.props.dispatch({type:"carrerObjective",value:event.target.value})}
                            />
                            <CardTitle>You Don't have one??? Then don't be shy to select from below </CardTitle>
                            {
                                this.state.objectives.map((item,index)=>{
                                    return(
                                        <Button 
                                            color="link" 
                                            key={index}
                                            onClick={()=>this.props.dispatch({type:"carrerObjective",value:item})}
                                        >{item}</Button>
                                    );
                                })
                            }
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        carrerObjective: state.carrerObjective
    }
}

export default connect(mapStateToProps, undefined)(CarrerObj)