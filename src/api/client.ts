/**
 * client.ts
 *
 * Initialize an instance of axios for use in API interactions.
 */

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const client = axios.create({
  /* withCredentials: true, */
  baseURL: import.meta.env.VITE_API_URL,
  /* signal: AbortSignal.timeout(import.meta.env.VITE_REQUEST_TIMEOUT), */
});

/**
 * Log to console if in development environment.
 *
 * @param message The message to log.
 */
const logOnDev = (message: string) => {
  /* TODO: Change this function so that it outputs to a real log file.
   It should write to a different file based on the environment.
   In production, the logs should be accessible from AWS Cloudwatch. */
  if (import.meta.env.MODE === "development") {
    console.log(message);
  }
};

/**
 * Actions to perform before a request is sent.
 *
 * This function prepares a request before it is sent to the back-end.
 * Currently it just logs to console and sets the timeout for GET requests.
 * Eventually it will set headers, check authorization, and update the "loading" state.
 *
 * @param config The axios config to set a timeout for.
 *
 * @returns The provided Axios config, possibly with a new timeout set.
 */
const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const { method, url, baseURL } = config;

  /* Set loading start. */

  /* Set headers. */

  /* Check auth. */

  logOnDev(`[API] ${method?.toUpperCase()} ${baseURL}/${url} | Request`);

  if (method === "get") {
    config.timeout = 15000;
  }

  return config;
};

/**
 * Handle response data before passing it back to the application.
 *
 * Currently this function just logs the response to the console.
 * Eventually it will transform the response data to fit what the application
 * needs, do some error handling, and update the "loading" state.
 *
 * @param response The axios response object.
 *
 * @returns  The provided response.
 */
const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url, baseURL } = response.config;
  const { status } = response;

  /* Set loading end. */

  /* Handle response data. */

  /* Error handling . */

  logOnDev(
    `[API] ${method?.toUpperCase()} ${baseURL}/${url} | Response ${status}`
  );

  return response;
};

/* Custom error handler for all API services. */
const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { response } = error;
    const { method, url } = error.config as AxiosRequestConfig;
    const { statusText, status } = (error.response as AxiosResponse) ?? {};

    logOnDev(
      `[API] ${method?.toUpperCase()} ${url} | Error ${status} ${statusText} - ${
        response?.data.message
      }`
    );

    if (status === 401) {
      /* TODO: Delete token and go to login page. Can't implement now because auth isn't implemented at all yet.*/
      console.log(
        "There is where we would delete the token and redirect to the login page."
      );
    }
  } else {
    logOnDev(`[API] | Error ${error.message}`);
  }

  return Promise.reject(error);
};

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(onRequest, onErrorResponse);
  instance.interceptors.response.use(onResponse, onErrorResponse);

  return instance;
};

setupInterceptors(client);

export { client };
