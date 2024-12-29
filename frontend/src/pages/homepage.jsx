import { useOutletContext } from "react-router";
import Dashboard from "../components/Dashboard/Dashboard";

export default function Homepage() {
  const user = useOutletContext();

  return (
    <>
      {user.length && <>
        <Dashboard />
        <hr className="homepageRule" />
      </>}
    </>
  );
}
