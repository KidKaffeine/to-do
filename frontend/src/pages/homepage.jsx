import { useOutletContext, useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";

export default function Homepage() {
  const user = useOutletContext();
  const userTasks = useLoaderData();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(userTasks);
  }, [userTasks]);

  return (
    <>
      {user.length ? (
        <>
          <Dashboard tasks={tasks} />
          <hr className="homepageRule" />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
