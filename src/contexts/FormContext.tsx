import { createContext, useContext, useReducer } from 'react';

const initialData = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

// Context
const FormContext = createContext(undefined);

// Reducer
enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}
const formReducer = (state, action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};

// Provider
const FormProvider = ({children}) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch};
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
};



