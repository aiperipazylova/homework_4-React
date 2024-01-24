// HOMEWORK - 4 

import React, { useState } from 'react';

export default function AuthForm() {
  const [userData, setUserData] = useState({
    fullName: '',
    age: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправленные данные:', userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ФИО:
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Возраст:
        <input
          type="number"
          name="age"
          value={userData.age}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Электронная почта:
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Номер телефона:
        <input
          type="tel"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Отправить</button>

      <div>
        <h2>Данные в режиме REAL-TIME:</h2>
        <p>ФИО: {userData.fullName}</p>
        <p>Возраст: {userData.age}</p>
        <p>Электронная почта: {userData.email}</p>
        <p>Номер телефона: {userData.phoneNumber}</p>
      </div>
    </form>
  );
};
