import * as C from './styles';
import { Theme } from '../../components/Theme';

export const FormStep1 = () => {
  const handleNextStep = () => {};

  return (
    <Theme>
      <C.Container>
        <p>Step 1/3</p>
        <h1>Let's begin with your name</h1>
        <p>Insert Full Name</p>

        <hr />
        <label htmlFor=''>
          Full Name
          <input type='text' autoFocus />
        </label>

        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};
