// src/Add.js
import { Password } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

const Container = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const FormContainer = styled.div`
  max-width: 300px;
  margin: auto;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Paragraph = styled.p`
  margin-top: 20px;
`;

const Add = () => {
  const [email, setEmail] = useState('');
  const[name,setName]=useState('');
  const[password,setPassword]=useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users on component mount
    const fetchUsers = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/users/get`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Check if email is provided
      if (!email) {
        setError('Email is required.');
        setSuccess('');
        return;
      }

      // Check if email exists in the list of users
      const userExists = users.some(user => user.email === email);

      if (userExists) {
        setSuccess('Login successful!');
        setError('');
        // Redirect or perform other actions upon successful login
        window.location.href = '/'; // Redirect to home page
      } else {
        setError('Email not found.');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Background>
      <video autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/6195515/6195515-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container>
        <FormContainer>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <Input type="Name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit">Login</Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
          </form>
          <Paragraph>
            Don't have an account? <a href="/signup">Sign Up Now</a>
          </Paragraph>
        </FormContainer>
      </Container>
    </Background>
  );
};

export default Add;
