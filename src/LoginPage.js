import LoginForm from "./LoginForm";

/** LoginPage Component
 *
 * Props: login()
 * State: none
 */

function LoginPage({ login }) {
  return (
    <div className="LoginPage">
      <LoginForm login={login} />
    </div>
  );
}

export default LoginPage;
