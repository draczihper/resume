export default function Education() {

    return (
        <div className="education-details">
            <fieldset>
                <legend>Education</legend>
                <form>
                    <p><label htmlFor="school-name">School Name: </label>
                    <input type="text" id="school-name" /></p>
                    <p><label htmlFor="study-title">Title of study: </label>
                    <input type="text" id="study-title" /></p>
                    <p><label htmlFor="study-year">Year of study: </label>
                    <input type="text" id="study-year" /></p>
                </form>
            </fieldset>
        </div>
    )
}