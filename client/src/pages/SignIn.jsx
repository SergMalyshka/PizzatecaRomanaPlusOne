import style from './SignIn.module.css'
import { useState } from "react";
import validator from '../../utils/validator';

export default function SignIn() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState('')
  const [visitReason, setReason] = useState('')
  const [medicalHistory, setMedicalHistory] = useState('')
  const [allergies, setAllergies] = useState('')
  const [medications, setMedications] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [severity, setSeverity] = useState('')
  const [signInSuccess, setSignInSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [renderSignUp, setRenderSignUp] = useState(false)
  const [closure, setClosure] = useState('')
  const [signInButton, setSignInButton] = useState(true)

  const handleSignInSubmit = (e) => {
    e.preventDefault()

    if (!renderSignUp) {
      if (!firstName || !lastName || !dob) {
        setErrorMessage("Please complete all fields prior to submitting")
        return
      }

      if (!validator(dob)) {
        setErrorMessage("Check the date for validity, use MM/DD/YYYY format")
        return
      }

      setSignInSuccess(false)
      setErrorMessage("Patient Not found")
      setRenderSignUp(true)
    }

    if (renderSignUp) {
      if (!medicalHistory || !allergies || !medications) {
        setErrorMessage("Please complete all fields prior to submitting")
        return
      }
      setSignInSuccess(true)
      setSuccessMessage("Patient found!")
      setErrorMessage('')
      setSignInButton(false)

    }
  };

  const handleCompleteCheckIn = (e) => {
    e.preventDefault()
    setClosure("Check in completed successfully")


    //logic to create data before reset here


    //reset
    setErrorMessage('')
    setRenderSignUp(false)
    setSignInSuccess(false)
    setFirstName('')
    setLastName('')
    setDob('')
    setAllergies('')
    setMedicalHistory('')
    setMedications('')
    setReason('')
    setSignInButton(true)

  }

  const handleSignInChange = (e) => {
    const { name, value, id } = e.target;
    setClosure('')
    if (name === "firstName") {
      setFirstName(value)
    } else if (name === "lastName") {
      setLastName(value)
    } else if (name === "dob") {
      setDob(value)
    } else if (name === "medicalHistory") {
      setMedicalHistory(value)
    } else if (name === "allergies") {
      setAllergies(value)
    } else if (name === "medications") {
      setMedications(value)
    }
  }

  const handleSeverityChange = (e) => {
    const { name, value, id } = e.target
    if (name === "visitReason") {
      setReason(value)
    } else if (id === "btnradio1") {
      setSeverity("Critical")
    } else if (id === "btnradio2") {
      setSeverity("Semi-Urgent")
    } else {
      setSeverity("Non-Urgent")
    }
  }

  return (
    <div>
      <div>

        <div className={`${style.signin}`}>
          <p className={`${style.option}`}>Sign In</p>
          <form className={`form ${style.severityForm}`} onSubmit={handleSignInSubmit}>

            <input
              value={firstName}
              name='firstName'
              onChange={handleSignInChange}
              type="text"
              placeholder="First Name"
              className={`form-control ${style.formItem}`}
            />

            <input
              value={lastName}
              name='lastName'
              onChange={handleSignInChange}
              type="text"
              placeholder="Last Name"
              className={`form-control ${style.formItem}`}
            />
            <input
              value={dob}
              name='dob'
              onChange={handleSignInChange}
              type="text"
              placeholder="Date of Birth (MM/DD/YYYY)"
              className={`form-control ${style.formItem}`}
            ></input>

            {renderSignUp && (
              <div>
                <textarea
                  value={medicalHistory}
                  name='medicalHistory'
                  onChange={handleSignInChange}
                  type="text"
                  placeholder="Medical History, separated by a comma"
                  className={`form-control ${style.formItem}`}
                ></textarea>
                <textarea
                  value={allergies}
                  name='allergies'
                  onChange={handleSignInChange}
                  type="text"
                  placeholder="Allergies, separated by a comma"
                  className={`form-control ${style.formItem}`}
                ></textarea>
                <textarea
                  value={medications}
                  name='medications'
                  onChange={handleSignInChange}
                  type="text"
                  placeholder="Medications, separated by a comma"
                  className={`form-control ${style.formItem}`}
                ></textarea>
              </div>
            )}

            {errorMessage && (
              <div>
                <p className={style.error}>{errorMessage}</p>
              </div>
            )}

            {signInButton && (
              <div>
                <button className={`btn btn-warning ${style.button}`} type="submit">
                  Sign-In
                </button>
              </div>
            )}

          </form>
        </div>

        {signInSuccess && (
          <div>
            <hr className={`${style.horizontal}`}></hr>
            <p className={style.loggedIn}>{successMessage}</p>
            <form className={style.severityForm} onSubmit={handleCompleteCheckIn}>
              <input
                value={visitReason}
                name='visitReason'
                onChange={handleSeverityChange}
                type="text"
                placeholder="Reason for today's visit"
                className={`form-control ${style.formItem}`}
              ></input>

              <p className={style.severityText}>Severity</p>
              <div className={`btn-group ${style.severity}`} role="group" aria-label="Basic radio toggle button group">

                <input onChange={handleSeverityChange} type="radio" className={`btn-check`} name="btnradio" id="btnradio1" autoComplete="off" />
                <label className="btn btn-outline-danger" htmlFor="btnradio1">Critical</label>

                <input onChange={handleSeverityChange} type="radio" className={`btn-check`} name="btnradio" id="btnradio2" autoComplete="off" />
                <label className={`btn btn-outline-warning ${style.semi}`} htmlFor="btnradio2">Semi-Urgent</label>

                <input onChange={handleSeverityChange} type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                <label className={`btn btn-outline-success`} htmlFor="btnradio3">Non-Urgent</label>
              </div>
              <button className={`btn btn-warning ${style.button}`} type="submit">
                Complete Visit Check-in
              </button>

            </form>

          </div>
        )}
        {closure && (
          <div>
            <p className={style.severityText}>{closure}</p>
          </div>
        )}
      </div>
    </div >
  );
}
