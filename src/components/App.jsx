function App() {
  return (
    <>
      <Input label="Name: " />
      <Input label="Email: " />
      <Input label="Phone: " />
      <div>
        <h1>CV</h1>
        <p></p>
      </div>
    </>
  );
}
export default App;

const Input = ({ label }) => {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input type="text" id="name" />
    </div>
  );
};
