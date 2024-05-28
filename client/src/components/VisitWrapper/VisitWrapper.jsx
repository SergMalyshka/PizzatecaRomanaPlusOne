import { useState } from "react"
import { DndContext, closestCorners } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable";
import { VisitList } from "../VisitList/VisitList";
import style from "./VisitWrapper.module.css"
import { useQuery } from "@apollo/client";


export const VisitWrapper = ({ visits }) => {

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


  return (
    <div className="row align-items-start">
      <div className="col-5">
        <h2 className={style.bigText}>Waiting</h2>
        <hr className={style.hr}></hr>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <VisitList visits={waitingData} />
        </DndContext>
      </div>
      <div className={`col-1 ${style.next} ${style.buttonDiv}`}>
        <button className={`btn ${style.button}`}>Next</button>
      </div>
      <div className="col-6">
        <h2 className={style.bigText}>Being Seen</h2>
        <hr className={style.hr}></hr>
        <VisitList visits={beingSeen} />
      </div>
    </div>

  )

}
