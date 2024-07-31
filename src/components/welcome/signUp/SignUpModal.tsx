import { useSelector } from 'react-redux';
import SignUp from './SignUp';
import SignUpForm from './SignUpForm';

type Props = {};

export default function SignUpModal({}: Props) {
  const userState = useSelector((state: any) => state.user_signup.value);

  const handleSignUpSteps = () => {
    return userState.username ? <SignUpForm /> : <SignUp />;
  };

  return handleSignUpSteps();
}
