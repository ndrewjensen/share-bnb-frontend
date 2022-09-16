import SignupForm from "./SignupForm";

/** SignupPage Component
 *
 * Props:
 * -signup()
 *
 * State:
 * -none
 */

 function SignupPage({ signup }) {
  return (
  <div className="SignupPage">
    <SignupForm signup={signup}/>
    </div>);
}

export default SignupPage;