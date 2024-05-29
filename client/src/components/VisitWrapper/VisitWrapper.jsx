import { useState } from "react"
import { DndContext, closestCorners } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable";
import { VisitList } from "../VisitList/VisitList";
import style from "./VisitWrapper.module.css"
import { useMutation } from "@apollo/client";
import { UPDATE_STATUS } from "../../utils/mutations";

export const VisitWrapper = ({ visits }) => {

  const [updateStatus] = useMutation(UPDATE_STATUS);
  const waiting = []
  const beingSeen = []
  for (const visit of visits) {
    if (visit.status === "Waiting") {
      waiting.push(visit)
    } else {
      beingSeen.push(visit)
    }
  }

  const [waitingData, setWaitingData] = useState(waiting)
  const [seenData, setSeenData] = useState(beingSeen)

  const getVisitPos = id => waitingData.findIndex(visit => visit.id === id)
  const handleDragEnd = event => {
    const { active, over } = event
    if (active.id === over.id) return

    setWaitingData((visitData) => {
      const originalPos = getVisitPos(active.id)
      const newPos = getVisitPos(over.id)
      return arrayMove(visitData, originalPos, newPos)
    })
  }

  const setSeen = async () => {
    const visit = waitingData[0]
    try {
      const updvisit = await updateStatus({variables: {id: visit.id, status: "Being Seen"}})
    } catch (err) {
      console.log(err)
    }
    setWaitingData((waitingData) => {
      return waitingData.slice(1)
    })
    setSeenData((seenData) => {
      return seenData.concat([visit])
    })
  }

  return (
    <div className="row align-items-start">
      <div className="col-5">
        <h2 className={style.bigText}>{`Waiting: ${waitingData.length}`}</h2>
        <hr className={style.hr}></hr>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <VisitList visits={waitingData} />
        </DndContext>
      </div>
      <div className={`col-1 ${style.next} ${style.buttonDiv}`}>
        <button onClick={setSeen} className={`btn ${style.button}`}>Next</button>
      </div>
      <div className="col-6">
        <h2 className={style.bigText}>{`Being Seen: ${seenData.length}/8`}</h2>
        <hr className={style.hr}></hr>
        <VisitList visits={seenData} />

      </div>
    </div>
  )
}