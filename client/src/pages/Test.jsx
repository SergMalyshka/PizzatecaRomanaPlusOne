import Auth from "../utils/auth"
import { QUERY_ALL_OPEN_VISITS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { DndContext, PointerSensor, closestCorners, useSensor } from "@dnd-kit/core"
import style from './Test.module.css'
import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { VisitWrapper } from "../components/VisitWrapper/VisitWrapper";


export default function test () {

    const { loading, data } = useQuery(QUERY_ALL_OPEN_VISITS, {fetchPolicy: "network-only"})

    return (
        <div>
            {Auth.loggedIn() ? (
                <div className={style.dashboard}>
                <h1>Tab2</h1>
          
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <VisitWrapper visits={data.openVisits} />
                   )}
              </div>
            ) : (
                <p>You must log in</p>
            )}
        </div>
    )
}