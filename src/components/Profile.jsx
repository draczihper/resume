import { Fragment, useState } from 'react';

function Input({label, id, value}) {
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
  const [value, setValue] = useState(' ');

  function handleInput(e) {
  setValue(e.target.value);
  }
  return (
    <>
    <h1>Curriculum Vitae</h1>
    <div id='container'>
    <div className="profile-input">
        <form action="">
      <Input label={"Full Name"} id={"name"} value={handleInput}/>
      <Input label={"Email"} id={"email"} value={handleInput}/>
      <Input label={"Phone"} id={"phone"} value={handleInput}/>
      </form>
      <Button child={"Edit"} />
      <Button child={"Submit"} />
    </div>
    <div className='profile-details'>
      <h2>Profile</h2>
      <h3>Name: </h3>
      <h3>Email: </h3>
      <h3>Phone:</h3>
      </div>
    </div>
    </>
  )
}