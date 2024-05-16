import React, { useState } from 'react';
import Cards from './components/Cards';
import Form from './components/Form';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers((prevUsers) => [...prevUsers, data]); // Using functional update for state
  };

  const handleRemove = (id)=>{
      setUsers(()=>users.filter((item , index) => index!=id))
  }

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className="container mx-auto">
        <Cards users={users} handleRemove={handleRemove} />
        <Form handleFormSubmitData={handleFormSubmitData} /> {/* Corrected prop name */}
      </div>
    </div>
  );
};

export default App;
