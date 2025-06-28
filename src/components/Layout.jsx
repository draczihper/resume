import Button from './Button'

function Layout({form, onEdit}){

  const formatMonthYear = (dateStr) => {
    if(!dateStr) return "";

    const [year, month] = dateStr.split("-");
    const date = new Date(year, month - 1) // JS month are 0 based
    return date.toLocaleDateString("en-US", {
      month: "long", 
      year: "numeric"
    });
  }

    return (
        <>
        <div className='layout'>
        <h1>CV</h1>
        <p>My name is {form.name}.</p>
        <p>
          You can contact me at {form.email} or call me on {form.phone}.
        </p>
        <p>
          I studied my Master's of {form.programme} at {form.school} between the
          years of {form.year}.
        </p>
        <p>
          I gained valuable knowledge and expertise that allowed me to work at{" "}
          {form.company} as a {form.title}
        </p>
        <p>My major responsibilities where {form.responsibilities}.</p>
        <p>I worked in this company from {formatMonthYear(form.date.from)} to {formatMonthYear(form.date.to)}</p>
      </div>
      <Button label="Edit" onClick={onEdit} />
        </>
    )
}
export default Layout;