import Button from './Button'

export default function Form(props){

  const handleChange = (e) => {
    props.setForm({
      ...props.form,
      [e.target.id]: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    const {id, value} = e.target;

    props.setForm((prev) => {
      let updatedDate = {...prev.date, [id]: value};

      return {
        ...prev,
        date: updatedDate
      };
    });
  };

  return (
      <>
      <FormWrapper onSubmit={props.onSubmit}>
      <FormSection sectionName="personal" >
        <Input
          id="name"
          label="name"
          value={props.form.name}
          onChange={handleChange}
        />
        <Input
          id="email"
          label="email"
          value={props.form.email}
          onChange={handleChange}
        />
        <Input
          id="phone"
          label="phone"
          value={props.form.phone}
          onChange={handleChange}
        />
      </FormSection>

      <FormSection sectionName="education">
        <Input
          id="school"
          label="School of Study"
          value={props.form.school}
          onChange={handleChange}
        />
        <Input
          id="programme"
          label="programme"
          value={props.form.programme}
          onChange={handleChange}
        />
        <Input
          id="year"
          label="Year of Study"
          value={props.form.year}
          onChange={handleChange}
        />
      </FormSection>
      <FormSection sectionName="experience">
        <Input
          id="company"
          label="company"
          value={props.form.company}
          onChange={handleChange}
        />
        <Input
          id="title"
          label="title"
          value={props.form.title}
          onChange={handleChange}
        />
        <TextArea
          id="responsibilities"
          label="responsibilities"
          value={props.form.responsibilities}
          onChange={handleChange}
        />
        <div className='duration'>
        <Input
          inputType="month"
          id="from"
          label="From"
          value={props.form.date.from}
          onChange={handleDateChange}
          max={props.form.date.to || ""}
        />
        <Input
          inputType="month"
          id="to"
          label="To"
          value={props.form.date.to}
          onChange={handleDateChange}
          min={props.form.date.from || ""}
        />
        </div>
        <Button label="Submit" onClick={props.handleSubmit} type='submit'/>
      </FormSection>
      </FormWrapper>
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
      <div>{props.children}</div>
    </div>
  );
};

const FormWrapper = (props) => {
  return (
    <form onSubmit={props.onSubmit}>{props.children}</form>
  )
}


