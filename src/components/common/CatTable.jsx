import React from "react";

export default function CatTable({cats, history, match}) {
  return (
    <div>
      <ul className="list-group">
        <li
          key={0}
          className={"list-group-item list-group-item-action"}
          onClick={() => history.push("/feed")}
        >
          All Categories
        </li>
        {/* Maps all the categories into a table */}
        {cats.map(cats => (
          <li
            key={0}
            className={"list-group-item list-group-item-action"}
            onClick={() => history.push(cats.path)}
          >
            {cats.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
