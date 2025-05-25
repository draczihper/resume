import { useState } from "react";

export default function Profile() {
  return (
    <div className="form">
      <label>Name: </label>
      <input type="text" />

      <label>Email: </label>
      <input type="text" />

      <label>Phone: </label>
      <input type="text" />
    </div>
  );
}
