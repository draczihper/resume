import Button from './Button'

function Layout({form, onEdit}){

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
      </div>
      <Button label="Edit" onClick={onEdit} />
        </>
    )
}
export default Layout;