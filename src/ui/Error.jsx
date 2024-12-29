import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import { BackIcon } from "../utils/Icons";

function Error() {
  const error = useRouteError();
  // console.log("see here ==>>", error);
  return (
    <div className="mx-5 mt-7 space-y-3">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">
        <span>
          <BackIcon size={22} />
        </span>
        Go back
      </LinkButton>
    </div>
  );
}

export default Error;
