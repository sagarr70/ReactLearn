import { useRouteError } from "react-router";

const ErrorComponent = (() => {
    const error = useRouteError();
    return (
        <div className="error-page">
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but the page you were looking for could not be found.</p>
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    );
})

export default ErrorComponent;