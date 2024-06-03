import { Link } from "react-router-dom";
import style from "./PreviousVisits.module.css"


export const PreviousVisits = ({ data, id }) => {
    data = data.filter(item => item.id !== id);
    return (
        <div>
            <h4 className={`align-center notes-header ${style.header}`}>
                Other visits for the patient
            </h4>
            <div className={`${style.previousContainer}`}>
                {data.map((visit) => {
                    return (
                        <div className={`${style.link}`}>
                            <Link className={`${style.link}`} to={`/visits/${visit.id}`}>{`${visit.date}: ${visit.reason}`}</Link>
                        </div>
                    )
                }
                )}
            </div>
        </div>

    )
}

export default PreviousVisits;