import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
} from "@chakra-ui/react";
import * as yup from "yup";
import { Field, Formik } from "formik";
import {
  useSubmit,
  useActionData,
  useNavigation,
  Form,
} from "react-router-dom";
import { ApiError } from "@api/apiError";

const validationSchema = yup.object({
  emailAddress: yup
    .string()
    .email("Invalid email address.")
    .required("Email address is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be 8 characters or more."),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match."),
  firstName: yup
    .string()
    .required("First name is required.")
    .min(3, "First name must 3 characters or more.")
    .max(45, "First name must be 45 characters or less."),
  lastName: yup
    .string()
    .required("Last name is required.")
    .min(3, "Last name must 3 characters or more.")
    .max(45, "Last name must be 45 characters or less."),
});

const SignupForm = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{
        emailAddress: "",
        password: "",
        passwordConfirmation: "",
        firstName: "",
        lastName: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        submit(values, { method: "post" });
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form method="post" onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.firstName && touched.firstName}>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Field
              as={Input}
              id="firstName"
              name="firstName"
              type="text"
              variant="filled"
            />
            <FormErrorMessage>{errors.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.lastName && touched.lastName}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Field
              as={Input}
              id="lastName"
              name="lastName"
              type="text"
              variant="filled"
            />
            <FormErrorMessage>{errors.lastName}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={!!errors.emailAddress && touched.emailAddress}
          >
            <FormLabel htmlFor="emailAddress">Email Address</FormLabel>
            <Field
              as={Input}
              id="emailAddress"
              name="emailAddress"
              type="email"
              variant="filled"
            />
            <FormErrorMessage>{errors.emailAddress}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password && touched.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Field
              as={Input}
              id="password"
              name="password"
              type="password"
              variant="filled"
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={
              !!errors.passwordConfirmation && touched.passwordConfirmation
            }
          >
            <FormLabel htmlFor="passwordConfirmation">
              Confirm Password
            </FormLabel>
            <Field
              as={Input}
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              variant="filled"
            />
            <FormErrorMessage>{errors.passwordConfirmation}</FormErrorMessage>
          </FormControl>
          <Button type="submit" disabled={navigation.state === "submitting"}>
            {navigation.state === "submitting" && <Spinner />}
            Sign Up
          </Button>
          <p>{actionData ? (actionData as ApiError).message : undefined}</p>
        </Form>
      )}
    </Formik>
  );
};

export { SignupForm };
