import React from "react"
import style from "./VisitList.module.css"
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { Visit } from "../Visit/Visit"
import { DndContext, closestCenter } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"


export const VisitList = ({ visits, setSeen, error }) => {
    return (
        <div className={style.container}>
            <div className={`${style.next} ${style.buttonDiv}`}>
                <button onClick={setSeen} className={style.buttonPushable} role="button">
                    <span className={style.buttonShadow}></span>
                    <span className={style.buttonEdge}></span>
                    <span className={`${style.buttonFront} ${style.text}`}>
                        Assign Patient
                    </span>
                </button>
                {/* <button onClick={setSeen} className={` btn ${style.button} button`}>Next</button> */}
                {error && (
                    <h4 className={style.error}>{error}</h4>
                )}
            </div>
            <SortableContext items={visits} strategy={verticalListSortingStrategy}>
                {visits.map((visit) => (
                    <Visit id={visit.id} severity={visit.severity} reason={visit.reason} key={visit.id} />
                ))}
            </SortableContext>
        </div>
    )
}