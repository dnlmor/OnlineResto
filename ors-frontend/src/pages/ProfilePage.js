import React, { useState, useEffect } from 'react';
import { fetchUserProfile, updateProfile } from '../services/api';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  // Simulated userId for demonstration purposes
  const userId = 1; // Replace with actual user ID logic

  // Fetch user profile data on component mount (simulated)
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userProfile = await fetchUserProfile(userId);
        setProfile(userProfile);
        setUsername(userProfile.username);
        setEmail(userProfile.email);
        setAddress(userProfile.address);
        setPhone(userProfile.phone);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfileData();
  }, [userId]); // Ensure userId is included in dependencies array

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const updatedProfile = {
      username,
      email,
      address,
      phone,
    };

    try {
      // Assuming updateProfile function updates user profile and returns updated data
      const updatedUser = await updateProfile(userId, updatedProfile); // Replace with actual update logic
      console.log('Updated user profile:', updatedUser);
      setProfile(updatedUser); // Update profile state with updated data
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Error updating profile. Please try again.');
    }
  };

  const toggleEditing = () => {
    setEditing(!editing);
  };

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-page">
      <h2>Profile Page</h2>
      {editing ? (
        <form onSubmit={handleSaveChanges}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button type="submit">Save Changes</button>
          <button type="button" onClick={toggleEditing}>Cancel</button>
        </form>
      ) : (
        <div>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
          <p>Address: {profile.address}</p>
          <p>Phone: {profile.phone}</p>
          <button className="edit-button" onClick={toggleEditing}>Edit Profile</button>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ProfilePage;
