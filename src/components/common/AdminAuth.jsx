import React, { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { RiAdminFill } from 'react-icons/ri';
import './AdminAuth.css';

const AdminAuth = () => {
  const { isAdmin, setIsAdmin } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleAuth = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setShowModal(true);
    }
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === '1234') {
      setIsAdmin(true);
      setShowModal(false);
      setPin('');
      setError('');
    } else {
      setError('Incorrect PIN. Please try again.');
      setPin('');
    }
  };

  return (
    <>
      <button onClick={handleAuth} className={`admin-toggle ${isAdmin ? 'active' : ''}`}>
        <RiAdminFill />
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setShowModal(false)}>&times;</button>
            <h2>Admin Login</h2>
            <form onSubmit={handlePinSubmit}>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN"
                autoFocus
              />
              {error && <p className="error-message">{error}</p>}
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default AdminAuth;
