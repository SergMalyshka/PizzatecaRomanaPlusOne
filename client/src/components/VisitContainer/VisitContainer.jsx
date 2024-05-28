import React from "react"
import styleVisit from "./VisitContainer.module.css"
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { Visit } from "../Visit/Visit"
import { DndContext, closestCenter } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"


export const VisitContainer = ({ visits }) => {
    return (
        <div className={styleVisit.container}>
            <SortableContext items={visits} strategy={verticalListSortingStrategy}>
                {visits.map((visit) => (
                    <Visit id={visit.id} reason={visit.reason} key={visit.id}/>
                ))}
            </SortableContext>

        </div>
    )
}