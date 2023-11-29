import React, { useState, useEffect } from 'react';

const Q3 = () => {
  const [name, setName] = useState('?');
  const [gender, setGender] = useState('?')
  const [age, setAge] = useState('?');
  const [loc, setLocation] = useState('?');
  const [mail, setMail] = useState('?');
  const [mo, setMobileno] = useState('?');


  useEffect(() => {
    const interval = setInterval(() => {
      // Update the name and personal information after 5 seconds
      setName('Dhruv Patel');
      setGender('Male');
      setAge('19');
      setLocation('Ahmedabad');
      setMail('f63.dhruvpatel@gmail.com');
      setMobileno('9638527410');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Gender: {gender}</h2>
      <h3>Age: {age}</h3>
      <h4>Location: {loc}</h4>
      <h5>Mail: {mail}</h5>
      <h6>Mobileno: {mo}</h6>
    </div>
  );
};

export default Q3;
