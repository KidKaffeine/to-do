import { useOutletContext } from "react-router";
import DotLoader from "react-spinners/DotLoader";

export default function Homepage() {
  const user = useOutletContext();
  
  return (
    <>
      {user.length ? (
        <h2>Hello, {user[0].username}</h2>
      ) : (
        <DotLoader
          color={"black"}
          size={75}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </>
  );
}
