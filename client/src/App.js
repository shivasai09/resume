import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import CarrerObj from './components/CarrerObj';
import EducationDetails from './components/EducationDetails';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import PossesionAndHobby from './components/PossesionAndHobby';
import PersonalDetails from './components/PersonalDetails'
import createStore from "./store/configureStore";
import { connect } from 'react-redux';
import LoadingScreen from 'react-loading-screen';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class App extends Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.loadData = this.loadData.bind(this);
    this.makeResume = this.makeResume.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isLoading: false,
      modal: false
    }
  }
  static getDerivedStateFromProps(props, state) {

  }
  sendData() {
    // let data = {
    //   name: "shiva",
    //   age: 22
    // }
    let sampleData = this.props.state
    let details = {
      name: sampleData.yName,
      address: `${sampleData.houseNo} ${sampleData.city} ${sampleData.area} ${sampleData.pincode}`,
      email: sampleData.email,
      phoneNo: sampleData.phoneNo,
      careerObjective: sampleData.carrerObjective,
      degreeExamination: sampleData.degreeExamination,
      interMediateExamination: sampleData.degreeExamination,
      schoolExamination: sampleData.schoolExamination,
      degreeBoard: sampleData.degreeBoard,
      interMediateBoard: sampleData.interMediateBoard,
      schoolBoard: sampleData.schoolBoard,
      degreeInstitution: sampleData.degreeInstitution,
      interMediateInstitution: sampleData.interMediateInstitution,
      schoolInstitution: sampleData.schoolInstitution,
      schoolPercentage: sampleData.schoolPercentage,
      interMediatePercentage: sampleData.interMediatePercentage,
      degreePercentage: sampleData.degreePercentage,
      technicalSkills: sampleData.programingLanguages.join(", "),
      toolsUsed: sampleData.toolsUsed.join(", "),
      systemsUsed: sampleData.knownOs,
      projectName: sampleData.projectName,
      projectDescription: sampleData.projectDescription,
      projectRoles: sampleData.projectRoles,
      knownLanguages: sampleData.LanguagesKnown,
      myName: sampleData.myName,
      dob: sampleData.dob,
      fatherName: sampleData.fatherName,
      achievements: sampleData.achievements,
      hobbies: sampleData.hobbies,
      declaration: `I hereby declare that the above written particulars are true to the best of my knowledge.`,
    }
    this.setState({
      isLoading: true
    }, () => this.makeResume(details))
  }
  makeResume(details) {
    fetch('/', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data) => {
      if(data.status === 200){
        this.setState({
          isLoading:false,
          modal:true,
          status:"yeah resume builded sucessfully"
        })
      }
      else{
        this.setState({
          isLoading:false,
          modal:true,
          status:"sorry resume din't build sucessfully due to some technical issue, we request you to load the page fill the details again and then build the resume"
        })
      }
    })
  //   setTimeout(() => {
  //     this.setState({
  //       isLoading: false,
  //       modal: true,
  //       status: "sorry resume din't build sucessfully due to some technical issue, we request you to load the page fill the details again and then build the resume"
  //     })
  //   }, 2000)
  }
  loadData() {

    let sampleData = {
      yName: 'Sarapu Siva Sai',
      email: "saishiva99@gmail.com",
      mobile: "9959549192",
      houseNo: 'plot No 39 Tmc cly',
      city: "secunderabad",
      area: "marredpally",
      pincode: "500026",
      carrerObjective: "To work in globally competitive environment on challenging assignments that shall yield the twin benefits of the job satisfaction and a steady-pace professional growth",
      degreeExamination: "B.Tech",
      degreeBoard: "JNTU",
      degreeInstitution: "GNITc",
      degreePercentage: "73%",
      interMediateExamination: "MPC",
      interMediateBoard: "SSC",
      interMediateInstitution: "Narayana",
      interMediatePercentage: "93.3%",
      schoolExamination: "10th",
      schoolBoard: "CBSE",
      schoolInstitution: "K.V.picket",
      schoolPercentage: "90%",
      knownOs: "window,ubuntu",
      projectName: "wifi sharing",
      projectDescription: "simply hacking other wifi and sharing it with friends",
      projectRoles: "i am the leader",
      programingLanguages: ["c", "java", "javascript", "reactjs"],
      toolsUsed: ["vs code", "eclipse", "Turboc"],
      achievements: ["i am gold medalist in running 100m", "cr for 3 continuous years", "made 100 cakes in 2 hrs"],
      hobbies: ["stamp collecting", "music"],
      myName: "siva sai",
      fname: "rammohan ",
      dob: "09-08-1996",
      LanguagesKnown: "English,hindi,telugu"
    }
    this.props.dispatch({
      type: 'load_Dummy',
      data: sampleData
    })
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div className="app">
        <div className="appcontent">
          <Button color="secondary" onClick={this.loadData} className="button">load sample data</Button>{' '}
          <Button color="secondary" onClick={this.sendData}  className="button">send data an make Resume</Button>{' '}
          <LoadingScreen
            loading={this.state.isLoading}
            bgColor='#f1f1f1'
            spinnerColor='#9ee5f8'
            textColor='#676767'
            // logoSrc='./rocks.png'
            text='Sit back and relax we are making your resume'
          > </LoadingScreen>
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Resume stautus</ModalHeader>
            <ModalBody>
              {this.state.status}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>ok</Button>
            </ModalFooter>
          </Modal>
          <Intro />
          <CarrerObj />
          <EducationDetails />
          <TechnicalSkills />
          <Projects />
          <PossesionAndHobby />
          <PersonalDetails />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, undefined)(App);
