import { Link } from "react-router";

export default function Landing() {

  return (
    <>
      <Link to="/signUp"> Sign up</Link>
      <Link to="/login"> Login</Link>
    </>
  );
}
