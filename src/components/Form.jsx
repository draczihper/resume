export default function Form({form, setForm}){

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
        <TextArea
          id="responsibilities"
          label="responsibilities"
          value={form.responsibilities}
          onChange={handleChange}
        />
        <Input
          inputType="date"
          id="date"
          label="date"
          value={form.date}
          onChange={handleChange}
        />
      </FormSection>
      </>
  );   
}

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

const TextArea = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>
        {props.label.charAt(0).toUpperCase() + props.label.slice(1)}: &nbsp;
      </label>
      <textarea
        type={props.inputType}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
}


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


