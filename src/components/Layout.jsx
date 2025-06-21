import * as form from './Form'


function Layout(){
    return (
        <>
        <div className='layout'>
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
    )
}
export default Layout;