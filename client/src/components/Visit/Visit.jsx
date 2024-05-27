import React from "react";
import styleVisit from "./Visit.module.css"
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities"

export const Visit = ({ id, reason }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
          className={styleVisit.visit}
        >
          <input type="checkbox" className="checkbox" />
          {reason}
        </div>
      );
}