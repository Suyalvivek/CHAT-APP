import React from 'react';
import './avatarSelector.css';

const avatars = [
  '/src/assets/avatar1.jpg',
  '/src/assets/avatar2.jpg',
  '/src/assets/avatar3.jpg',
  // Add more avatar image paths as needed
];

const AvatarSelector = ({ setProfileAvatar }) => {
  return (
    <div className="avatar-selector-overlay">
      <div className="avatar-selector-modal">
        <button className="close-btn" onClick={() => setProfileAvatar(false)}>×</button>
        <h3>Select an Avatar</h3>
        <div className="avatar-list">
          {avatars.map((src, idx) => (
            <img key={idx} src={src} alt={`Avatar ${idx + 1}`} className="avatar-option" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarSelector;
