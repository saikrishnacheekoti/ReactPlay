import './App.css';
import React, { useState,useEffect } from 'react';
import { Button } from '@soluto-private/mx-asurion-ui-react';



function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [customerData, setCustomerData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const[showCC, setShowCC] = useState(false);

  const handleOptionChange = (event) => {
    console.log('event',event.target.value);
    setSelectedOption(event.target.value);
    setShowInput(true);
    setInputValue('');
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  

  useEffect(() => {
    if (selectedOption === 'option3') {
      
      fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>
setCustomerData(data));

    } else {
      setCustomerData(null);
    }
  }, [selectedOption]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 
  const displayCCDetails = () => {
    setShowCC(true);
  };

  const clearSelection = () => {  
    setSelectedOption('');
    setShowInput(false);
    setInputValue('');
    setFirstName('');
    setLastName('');
    setShowCC(false)
  };

 const renderOptionContent = () => 
  {
    if(selectedOption === 'option1') { 
      return (
      <div>
        <table>
    <tbody>
      <tr>
        <td>Login :</td>
        <td><input type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter User Name'/></td>
      </tr>
      <tr>
        <td>Password :</td>
        <td><input type="password" value={inputValue} onChange={handleInputChange} placeholder='Enter Password'/></td>
      </tr>

      </tbody>
        </table>
     </div>
     );
    }
    else if(selectedOption === 'option2') { 
    return (  
    <div >
    <table className='App-buttom10'>
    <tbody>
      <tr>
        <td>First Name:</td>
        <td><input type="text" value={firstName} onChange={handleFirstNameChange} placeholder='Enter First Name'/></td>
      </tr>
      <tr  className='App-buttom10'>
        <td >Last Name:</td>
        <td><input type="text" value={lastName} onChange={handleLastNameChange} placeholder='Enter Last Name'/></td>
      </tr>
      <tr>
        <td>Testing Input</td>
        <td><input type='text' /></td>
        </tr>
      </tbody>
    </table>
    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
    <Button onClick={displayCCDetails}>Submit</Button>
    {showCC &&  (
      <div>
        <h2>First Name: {firstName}</h2>
        <h2>Last Name: {lastName}</h2>
        </div>)}
    </div>
    </div>
    );
    } else if (selectedOption === 'option3') {
      return (
        <div>
          <table>
    <tbody>
      <tr>
        <td>First Name:</td>
        <td>Phone:</td>
      </tr>
      {customerData?.map((customer) => (
        <tr key={customer.id}>
          <td>{customer.name}</td>
          <td>{customer.phone}</td>
        </tr>
      ))}

    </tbody>
  </table>
        </div>
      );
    }


}
  return (

    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
      <h1 className='App'>CSK React Pro</h1>
      <div className='App-buttom10 '>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
      </div>
      <div className='App-buttom10' >
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Option 2
        </label>
      </div>
      <div className='App-buttom10'>
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          Option 3
        </label>
      </div>
      <div className='App-buttom10'>
        <Button onClick={clearSelection}>Clear</Button>
      </div>
       {showInput && (
        <div>
          <h2>Selected Option: {selectedOption}</h2>
          {renderOptionContent()}
        </div>
      )}
    </div>
  );
}

export default App;
