import React from "react"
import styleVisit from "./RoomList.module.css"
import { Room } from "../Room/Room"



export const RoomList = ({ seenData, setSeenDataFn }) => {
    return (
        <div className={styleVisit.container}>
            {seenData.map((visit) => {
                return (
                    <Room visit={visit} seenData={seenData} setSeenDataFn={setSeenDataFn} key={visit.id} />
                )
            }
            )}
        </div>
    )
}