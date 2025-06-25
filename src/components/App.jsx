import Layout from './Layout';
import Button from './Button';
import Form from './Form';
import { useState } from 'react';


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
    responsibilities: "search for extra terrestial habitable planets",
  })
  return (
    <>
    <Form form={form} setForm={setForm} />
    <Button child="Submit"/>
    <Layout form={form} />
    </>
  )
}
export default App;

