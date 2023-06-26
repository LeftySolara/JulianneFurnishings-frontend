import { Link } from "react-router-dom";

const HomePage = () => {
  /* TODO: use react-router loader to fetch data:
  https://reactrouter.com/en/main/start/tutorial#loading-data
  */

  return (
    <div>
      <h1>Home</h1>
      <Link to={"signup"}>Sign Up</Link>
    </div>
  );
};

export { HomePage };
