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
    date: {
      from: "2001-01",
      to: "2023-09",
    }
  });

  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
  }

  const handleEdit = () => {
    setShowForm(true);
  }
  return (
    <>
    <div>
    {showForm ? 
    (<Form form={form} setForm={setForm} onSubmit={handleSubmit}/>) :
    (<Layout form={form} onEdit={handleEdit}/>) }
    </div>
    </>
  )
}
export default App;

