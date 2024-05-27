import { useState } from "react"
import { DndContext, closestCorners} from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable";
import { VisitContainer } from "../VisitContainer/VisitContainer";


export const VisitWrapper = ({ visits }) => {

    const [visitData, setVisitData] = useState(visits)
    const getVisitPos = id => visitData.findIndex(visit => visit.id === id)

    const handleDragEnd = event => {
      const { active, over } = event
      if (active.id === over.id) return
  
      setVisitData((visitData) => {
        const originalPos = getVisitPos(active.id)
        const newPos = getVisitPos(over.id)
        return arrayMove(visitData, originalPos, newPos)
      })
    }


    return (
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <VisitContainer visits={visitData} />
        </DndContext>
    )

}
