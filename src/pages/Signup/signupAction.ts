import { ActionFunctionArgs, redirect } from "react-router-dom";
import { CreateUserRequestBody, userAPI } from "@api/services/userAPI";
import { ApiError } from "@api/apiError";

const signupAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const { firstName, lastName, emailAddress, password } =
    Object.fromEntries(formData);

  const requestBody = {
    firstName,
    lastName,
    emailAddress,
    password,
  } as CreateUserRequestBody;

  try {
    await userAPI.create(requestBody);
  } catch (err: unknown) {
    if (err instanceof ApiError) {
      return err;
    } else {
      return new ApiError(500, "Internal server error.");
    }
  }

  return redirect("/");
};

export { signupAction };
