import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {isRouteErrorResponse(error)
            ? error.error?.message || error.statusText
            : "Unknown error."}
        </i>
      </p>
    </div>
  );
};

export { ErrorPage };
