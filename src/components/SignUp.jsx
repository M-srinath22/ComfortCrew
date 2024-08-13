import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('https://wallpaperaccess.com/full/974684.jpg'); /* Update with your image path */
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

const Select = styled.select`
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

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    city: '',
    role: '',
    referCode: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log('User signed up:', result);

      // Navigate to the login page on successful signup
      if (response.ok) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <Background>
      <Container>
        <FormContainer>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
            <Input type="text" name="mobileNumber" placeholder="Enter Mobile Number" value={formData.mobileNumber} onChange={handleChange} required />
            <Select name="city" value={formData.city} onChange={handleChange} required>
              <option value="">Select City</option>
              <option value="city1">Chennai</option>
              <option value="city2">Coimbatore</option>
              <option value="city3">Madurai</option>
            </Select>
            <Select name="role" value={formData.role} onChange={handleChange} required>
              <option value="">Select Role</option>
              <option value="customer">Customer</option>
              <option value="worker">Worker</option>
            </Select>
            <Input type="text" name="referCode" placeholder="Enter Refer Code (Optional)" value={formData.referCode} onChange={handleChange} />
            <Button type="submit">Sign Up</Button>
          </form>
          <Paragraph>
            Already have an account? <a href="/login">Sign In Now</a>
          </Paragraph>
        </FormContainer>
      </Container>
    </Background>
  );
};

export default Signup;
