import React from "react";

import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators";

const Authenticate = () => {
  const [formState, inputHandler] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );

  const authenticateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form onSubmit={authenticateSubmitHandler}>
      <Input
        id="email"
        element="input"
        type="email"
        label="E-Mail"
        onInput={inputHandler}
        initialValue={formState.inputs.email.value}
        initialValid={formState.inputs.email.isValid}
        errorText="Please enter a valid email!"
        validators={[VALIDATOR_EMAIL()]}
      />
      <Input
        id="password"
        element="input"
        type="password"
        label="Password"
        onInput={inputHandler}
        initialValue={formState.inputs.password.value}
        initialValid={formState.inputs.password.isValid}
        errorText="Please enter a valid password (min. length 5 characters)!"
        validators={[VALIDATOR_MINLENGTH(5)]}
      />
      <Button disabled={!formState.isValid}>LOG IN</Button>
    </form>
  );
};

export default Authenticate;
