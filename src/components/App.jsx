import { useState } from "react";
function App() {
  const [form, setForm] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    school: "Blue Sky university",
    programme: "Astronomy",
    year: "1850-55",
    company: "Canopus",
    title: "Planetary Astronomer",
    responsibilities: "Search for extra terrestial habitable planets",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <>
      <FormSection sectionName="personal">
        <Input
          id="name"
          label="name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          id="email"
          label="email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          id="phone"
          label="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </FormSection>

      <FormSection sectionName="education">
        <Input
          id="school"
          label="School of Study"
          value={form.school}
          onChange={handleChange}
        />
        <Input
          id="programme"
          label="programme"
          value={form.programme}
          onChange={handleChange}
        />
        <Input
          id="year"
          label="Year of Study"
          value={form.year}
          onChange={handleChange}
        />
      </FormSection>
      <FormSection sectionName="experience">
        <Input
          id="company"
          label="company"
          value={form.company}
          onChange={handleChange}
        />
        <Input
          id="title"
          label="title"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          name="responsibilities"
          id="responsibilities"
          placeholder="What are the main responsibilities in your company?"
        ></textarea>
        <Input
          inputType="date"
          id="date"
          label="date"
          value={form.date}
          onChange={handleChange}
        />
      </FormSection>
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
