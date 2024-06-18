import React, { useState } from 'react';
import './styles/Profile.css';

const Profile = ({ user, onSaveChanges }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name: name,
      email: email,
      address: address,
      phone: phone
    };
    onSaveChanges(updatedUser);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
