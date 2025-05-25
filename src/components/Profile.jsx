import { useState } from 'react';

function Input({label, id}) {
  const [value, setValue] = useState(' ');

  function handleInput(e) {
  setValue(e.target.value);
  console.log(e.target.value)
  }

  return (
    <label htmlFor={id}>{label}:
      <input type="text" id={id} value={value} onInput={handleInput}/>
    </label>
  )
}

function Button({child}) {
  return (
    <button>{child}</button>
  )
}


export default function Profile() {

  return (
    <div className="profile-details">
        <form action="">
      <Input label={"Full Name"} id={"name"}/>
      <Input label={"Email"} id={"email"}/>
      <Input label={"Phone"} id={"phone"}/>
      </form>
      <Button child={"Edit"} />
      <Button child={"Submit"} />
    </div>
  )
}