import { useState } from "react";

export default function Profile() {
  return (
    <section>
      <label>Name: </label>
      <input type="text" />

      <label>Email: </label>
      <input type="text" />

      <label>Phone: </label>
      <input type="text" />
    </section>
  );
}
