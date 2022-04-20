import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';

export const FormStep1 = () => {
  const navigate = useNavigate();
  const handleNextStep = () => {
    navigate('/step2');
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 1/3</p>
        <h1>Let's begin with your name</h1>
        <p>Insert Full Name</p>

        <hr />
        <label>
          Full Name
          <input type='text' autoFocus />
        </label>

        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};
