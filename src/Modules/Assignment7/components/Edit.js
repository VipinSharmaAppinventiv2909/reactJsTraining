import React from "react";
import users from "./Data";
export default function Edit() {
  const data = JSON.parse(localStorage.getItem("userData"));
  console.log(data);
  return (
    <div>
      {users.map((res) => {
        return (
          <>
            <h2>{res.firstName}</h2>
            <h2>{res.lastName}</h2>
          </>
        );
      })}
    </div>
  );
}
