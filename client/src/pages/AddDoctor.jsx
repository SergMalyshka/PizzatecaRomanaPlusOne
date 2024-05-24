import style from "./SignIn.module.css"
import {useState} from "react";
import { Link } from "react-router-dom";

import { useMutation, useQuery } from "@apollo/client";
import { ADD_DOCTOR } from "../utils/mutations";
import {QUERY_ME} from '../utils/queries'
import Auth from "../utils/auth"


const AddDoctor = () => {
const [formState, setFormState] = useState({ username: "", password: "" });
const [addDoc, { error }] = useMutation(ADD_DOCTOR);
const {loading, data} = useQuery(QUERY_ME);

const profile = data?.me || {};

if (loading) {
  return <div>Loading</div>
}

console.log(profile)

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
        variables: {...formState},
      });
      console.log(data)
  
      Auth.login(data.addDoc.token);
    } catch (e) {
      console.error(e);
    }
  };

return (
    <div>
      {Auth.loggedIn() ? (
        <div>
          <p className={`${style.option}`}>Add new login credentials</p>
       
          <div>
            <form className={`form ${style.severityForm}`} onSubmit={handleAddDoc}>
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
              <button className={`btn btn-warning ${style.button}`} type="submit">
              Submit
            </button>

            <p>{profile.username} is currently logged in</p>

            {error && (
              <div>
                <p className={style.error}>{error.message}</p>
              </div>
            )}
            </form>
          </div>
        </div>
      ) : ( 
        <p>You must login before creating new login credentials</p>
      )}

    </div>
)}

export default AddDoctor