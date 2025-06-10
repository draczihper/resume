import { useState } from "react";
function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@email.com");
  const [phone, setPhone] = useState(0);

  return (
    <>
      <Input
        label="Name: "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email: "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Phone: "
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div>
        <h1>CV</h1>
        <p>My name is {name}.</p>
        <p>
          You can contact me at {email} call me on {phone}
        </p>
      </div>
    </>
  );
}
export default App;

const Input = ({ label, value, onChange }) => {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input type="text" id="name" value={value} onChange={onChange} />
    </div>
  );
};
