import style from "./SignIn.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation, useQuery } from "@apollo/client";
import { ADD_DOCTOR } from "../utils/mutations";
import Auth from "../utils/auth"
import LoginPrompt from "../components/LoginPrompt/LoginPrompt";
import UpdateRooms from "../components/UpdateRooms/UpdateRooms";


const AddDoctor = () => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [addDoc, { error, data }] = useMutation(ADD_DOCTOR);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleAddDoc = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addDoc({
        variables: { ...formState },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
    setFormState({
      username: "",
      password: "",
    })
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <div>
          <p className={`${style.option}`}>Add new login credentials</p>
          <p></p>

          <div>
            <form
              className={`form ${style.severityForm}`}
              onSubmit={handleAddDoc}
            >
              <input
                value={formState.username}
                placeholder="Username"
                type="username"
                name="username"
                className={`form-control ${style.formItem}`}
                onChange={handleChange}
              />
              <input
                value={formState.password}
                placeholder="Password"
                type="password"
                name="password"
                className={`form-control ${style.formItem}`}
                onChange={handleChange}
              />
              <button
                className={`btn btn-warning ${style.button}`}
                type="submit"
              >
                Submit
              </button>

              {data && (
                <div>
                  <p>
                    Login credentals for {data.addDoctor.doctor.username} are
                    now in the database
                  </p>
                </div>
              )}

              {error && (
                <div>
                  <p className={style.error}>{error.message}</p>
                </div>
              )}
            </form>
          </div>
              {/* update rooms avaibale div */}
              <div>
                <UpdateRooms/>
              </div>
        </div>
      ) : (
        <LoginPrompt />
      )}
    </div>
  );
};

export default AddDoctor;
