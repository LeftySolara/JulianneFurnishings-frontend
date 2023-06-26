import { AxiosError, AxiosResponse } from "axios";
import { client } from "@api/client";
import { ApiError } from "@api/apiError";

interface CreateUserRequestBody {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
}

/** Object shape for requests that return users. */
interface UserResponseBody {
  uuid: string;
  slug: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
}

interface IUserAPI {
  create(
    requestBody: CreateUserRequestBody
  ): Promise<UserResponseBody | ApiError>;
}

class UserAPI implements IUserAPI {
  private endpoint = "users";

  async create(
    requestBody: CreateUserRequestBody
  ): Promise<UserResponseBody | ApiError> {
    let response: AxiosResponse;

    try {
      response = await client.post(this.endpoint, requestBody);
      const data = response.data as UserResponseBody;
      return data;
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        throw new ApiError(err.status as number, err.response?.data.message);
      } else {
        throw new ApiError(500, "Internal server error.");
      }
    }
  }
}

const userAPI = new UserAPI();

export { userAPI, type CreateUserRequestBody, type UserResponseBody };
