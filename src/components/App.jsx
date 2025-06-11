import { useState } from "react";

const initialForm = {
  personal: [
    { name: "John Doe" },
    { email: "johndoe@example.com" },
    { name: "+1234567890" },
  ],
  education: [
    { school: "Velorum University" },
    { programme: "Astronomy" },
    { name: "1900-1910" },
  ],
  experience: [
    { company: "Canopus" },
    { title: "Planetary Astronomer" },
    { responsibilities: "Search for extra terrestial life" },
  ],
};

function getKey(obj) {}

function App() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <>
      {initialForm.map((section) => {
        console.log(section);
      })}
      {/*<FormSection sectionName="personal">
        <Input
          id="name"
          label="name"
          value={form.name}
          onChange={handleChange}
        />
  </FormSection>*/}
      <Button text="Submit" />
      <div>
        <h1>CV</h1>
        <p>My name is {form.name}.</p>
        <p>
          You can contact me at {form.email} call me on {form.phone}.
        </p>
        <p>
          I studied my Master's of {form.programme} at {form.school} between the
          years of {form.year}.
        </p>
        <p>
          I gained valuable knowledge and expertise that allowed me to work at{" "}
          {form.company} as a {form.title}
        </p>
      </div>
    </>
  );
}
export default App;

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>
        {props.label.charAt(0).toUpperCase() + props.label.slice(1)}: &nbsp;
      </label>
      <input
        type={props.inputType}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
Input.defaultProps = {
  inputType: "text",
};

const FormSection = (props) => {
  return (
    <div className={props.sectionName + "-form-section"} id={props.sectionName}>
      <legend>
        {props.sectionName.charAt(0).toUpperCase() + props.sectionName.slice(1)}
      </legend>
      <form action="">{props.children}</form>
    </div>
  );
};

const Button = (props) => {
  return <button>{props.text}</button>;
};
