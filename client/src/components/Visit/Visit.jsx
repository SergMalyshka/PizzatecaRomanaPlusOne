import React from "react";
import styleList from "./Visit.module.css"
import "./Visit.css"
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities"

export const Visit = ({ id, reason, severity }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div
          ref={setNodeRef}
          className={`${severity} visit`}
          style={style}
          {...attributes}
          {...listeners}
        >
          <h3 className={styleList.reason}>{reason}</h3>
        </div>
      );
}