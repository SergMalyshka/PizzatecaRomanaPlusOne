import React from "react";
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
    const styling = severity

    return (
        <div
          ref={setNodeRef}
          className={`${severity} visit`}
          style={style}
          {...attributes}
          {...listeners}
        >
          {reason}
        </div>
      );
}