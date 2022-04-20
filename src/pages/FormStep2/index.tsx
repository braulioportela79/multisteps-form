import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  });

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/step2');
    } else {
      alert('Enter your information.');
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 2/3</p>
        <h1>Let's begin with your name</h1>
        <p>Insert Full Name</p>
        <hr />

        <SelectOption
          title='I am a beginner'
          description='I started to develop less than 2 years'
          icon='🥳'
        />

        <SelectOption
          title='I am a developer'
          description='I develop for over 2 years'
          icon='😎'
        />

        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};
