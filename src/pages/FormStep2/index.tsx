import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  });

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/step3');
    } else {
      alert('Enter your information.');
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 2/3</p>
        <h1>{state.name}, what best describes you?</h1>
        <p>
          Choose an option that best suit your current professional knowledge.
        </p>
        <hr />

        <SelectOption
          title='I am a beginner'
          description='I have started to develop less than 2 years'
          icon='🥳'
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title='I am a developer'
          description='I develop for over 2 years'
          icon='😎'
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to='/' className='previousButton'>Previous</Link>
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};
