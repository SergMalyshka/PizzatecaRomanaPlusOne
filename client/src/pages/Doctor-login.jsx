import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

const Login = (props) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = usemutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Tab3</h1>
    </div>
  );
};
