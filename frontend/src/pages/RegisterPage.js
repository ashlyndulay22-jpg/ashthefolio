import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RegisterPage = () => {
  const [name, setName]         = useState('');   // NEW state
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const { register } = useAuth();
  const navigate  = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Pass name along with email & password
      await register(name, email, password);
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className='register-page'>
      <h2 className='font'>Register for TheFolio</h2>
      {error && <p className='error-msg'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Full name'
          value={name} onChange={e => setName(e.target.value)} required />
        <input type='email' placeholder='Email address'
          value={email} onChange={e => setEmail(e.target.value)} required />
        <input type='password' placeholder='Password'
          value={password} onChange={e => setPassword(e.target.value)} required />
        <button type='submit' className='font'>Register</button>
      </form>
      <p className='font' style={{paddingTop: 35}}>
        Already have an account? <Link to='/login'>Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
