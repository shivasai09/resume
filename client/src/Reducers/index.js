
let initialState = {
    yName: '',
    email: "",
    mobile: "",
    houseNo: '',
    city: "",
    area:"",
    pincode: "",
    carrerObjective: "",
    degreeExamination: "",
    degreeBoard: "",
    degreeInstitution: "",
    degreePercentage: "",
    interMediateExamination: "",
    interMediateBoard: "",
    interMediateInstitution: "",
    interMediatePercentage: "",
    schoolExamination: "",
    schoolBoard: "",
    schoolInstitution: "",
    schoolPercentage: "",
    knownOs: "",
    projectName: "",
    projectDescription: "",
    projectRoles: "",
    programingLanguages: [],
    toolsUsed: [],
    achievements: [],
    hobbies: [],
    myName: "",
    fname: "",
    dob: "",
    LanguagesKnown: ""
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'yName': return { ...state, yName: action.value }
            break;
        case 'email': return { ...state, email: action.value }
            break;
        case "mobile": return { ...state, mobile: action.value }
            break;
        case "houseNo": return { ...state, houseNo: action.value }
            break;
        case "area": return { ...state, area: action.value }
            break;
        case "city": return { ...state, city: action.value }
            break;
        case "pincode": return { ...state, pincode: action.value }
            break;
        case "carrerObjective": return { ...state, carrerObjective: action.value }
            break;
        case "degreeExamination": return { ...state, degreeExamination: action.value }
            break;
        case "degreeBoard": return { ...state, degreeBoard: action.value }
            break;
        case "degreeInstitution": return { ...state, degreeInstitution: action.value }
            break;
        case "degreePercentage": return { ...state, degreePercentage: action.value }
            break;
        case "interMediateExamination": return { ...state, interMediateExamination: action.value }
            break;
        case "interMediateBoard": return { ...state, interMediateBoard: action.value }
            break;
        case "interMediateInstitution": return { ...state, interMediateInstitution: action.value }
            break;
        case "interMediatePercentage": return { ...state, interMediatePercentage: action.value }
            break;
        case "schoolExamination": return { ...state, schoolExamination: action.value }
            break;
        case "schoolBoard": return { ...state, schoolBoard: action.value }
            break;
        case "schoolInstitution": return { ...state, schoolInstitution: action.value }
            break;
        case "schoolPercentage": return { ...state, schoolPercentage: action.value }
            break;
        case "programInput": return { ...state, programInput: action.value }
            break;
        case "addProgramSkill": return { ...state, programingLanguages: [...state.programingLanguages].concat(action.value), programInput: "" }
            break;
        case "deleteProgramSkill":
            let newProgramingLanguages = [...state.programingLanguages].slice(0, action.index).concat([...state.programingLanguages].slice(action.index + 1, state.programingLanguages.length));
            return { ...state, programingLanguages: newProgramingLanguages }
            break;
        case "toolInput": return { ...state, toolInput: action.value }
            break;
        case "addToolsUsed": return { ...state, toolsUsed: [...state.toolsUsed].concat(action.value), toolInput: "" }
            break;
        case "deleteToolsUsed":
            let newToolsUsed = [...state.toolsUsed].slice(0, action.index).concat([...state.toolsUsed].slice(action.index + 1, state.toolsUsed.length));
            return { ...state, toolsUsed: newToolsUsed }
            break;
        case "knownOs": return { ...state, knownOs: action.value }
            break;
        case "projectName": return { ...state, projectName: action.value }
            break;
        case "projectDescription": return { ...state, projectDescription: action.value }
            break;
        case "projectRoles": return { ...state, projectRoles: action.value }
            break;
        case "addAchievement": return { ...state, achievements: [...state.achievements].concat(action.value) }
            break;
        case "deleteAchievement":
            let newAchievements = [...state.achievements].slice(0, action.index).concat([...state.achievements].slice(action.index + 1, state.achievements.length));
            return { ...state, achievements: newAchievements }
            break;
        case "addHobby": return { ...state, hobbies: [...state.hobbies].concat(action.value) }
            break;
        case "deletehobby":
            let newHobbies = [...state.hobbies].slice(0, action.index).concat([...state.hobbies].slice(action.index + 1, state.hobbies.length));
            return { ...state, hobbies: newHobbies }
            break;
        case "myName": return { ...state, myName: action.value }
            break;
        case "fname": return { ...state, fname: action.value }
            break;
        case "dob": return { ...state, dob: action.value }
            break;
        case "LanguagesKnown": return { ...state, LanguagesKnown: action.value }
            break;
        case "load_Dummy": return JSON.parse(JSON.stringify(action.data))
            break;
        default: return state;
            break;
    }
}