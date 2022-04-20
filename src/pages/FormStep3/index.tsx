import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  });

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state);
    } else {
      alert('Enter your information.');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 3/3</p>
        <h1>Nice {state.name}, where can we find you?</h1>
        <p>Insert your contact information.</p>
        <hr />
        <label>
          What is your e-mail?
          <input
            type='email'
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          What is your GitHub?
          <input
            type='url'
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <Link to='/step2' className='previousButton'>
          Previous
        </Link>
        <button onClick={handleNextStep}>Send Register</button>
      </C.Container>
    </Theme>
  );
};
