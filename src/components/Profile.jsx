import { useState } from "react";

export default function Profile() {
  return (
    <div className="profile-details">
      <label htmlFor="name">Name:</label>
        <input type="text" name="name"/><br></br>
     <label htmlFor="email">Email:</label>
        <input type="text" name="email"/><br></br>
     <label htmlFor="phone">Phone:</label>
      <input type="text" name="phone" /><br></br>
    </div>
  );
}
