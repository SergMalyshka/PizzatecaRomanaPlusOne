import React from "react";
import "./Room.css"
import ageCalculator from "../../utils/ageCalculator";
import style from "./Room.module.css"
import { UPDATE_STATUS } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { Link } from 'react-router-dom';


export const Room = ({ visit, seenData, setSeenDataFn }) => {
    const age = ageCalculator(visit.patient.dob)
    const [updateStatus] = useMutation(UPDATE_STATUS);
    const update = async () => {
        await updateStatus({variables: {id: visit.id, status: "Discharged"}})
        seenData = seenData.filter(entry => entry.id !== visit.id)
        setSeenDataFn(seenData)
    }

    return (
        <div className={`card ${visit.severity} ${style.border}`}>
            <div className="card-header name">
                <h4 className={style.top}>{`${visit.patient.firstName} ${visit.patient.lastName}: ${age} Years Old`}</h4>
            </div>
            <div className="card-body">
                <h5 className={style.reason}>{visit.reason}</h5>
                {visit.notes[0] && (
                    <p className="card-text">{visit.notes[visit.notes.length - 1]}</p>
                )}
            </div>
            <div className={`row ${style.buttons}`}>
                <div className="col-6">
                    <Link to={`/visits/${visit.id}`} className={`${style.button}`}>Visit Details</Link>
                </div>
                <div className="col-6">
                    <button onClick={update} className={`${style.button} ${style.discharge}`}>Discharge</button>
                </div>
            </div>
        </div>
    );
}