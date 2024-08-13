import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('/path/to/your/background-image.jpg');
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

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    background-color: #45a049;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #e53935;
  }
`;

const Paragraph = styled.p`
  margin-top: 20px;
`;

const ManageAccount = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email'); // Assume the email is passed as a query parameter

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    city: '',
    role: '',
    referCode: ''
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data based on email
    const fetchUserData = async () => {
      if (email) {
        try {
          const response = await fetch(`http://localhost:8081/api/users/email/${email}`);
          if (!response.ok) {
            const errorData = await response.json();
            setError(errorData.message || 'Error fetching user data.');
            return;
          }
          const data = await response.json();
          setFormData(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setError('Network error occurred while fetching user data.');
        }
      }
    };

    fetchUserData();
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8081/api/users/email/${formData.email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to update user.');
        setSuccess('');
        return;
      }
      const result = await response.json();
      setSuccess('User updated successfully!');
      setError('');
      console.log('User updated:', result);
      navigate('/'); // Redirect to home page after successful update
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Network error occurred while updating user.');
      setSuccess('');
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/users/email/${formData.email}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to delete user.');
        return;
      }
      navigate('/'); // Redirect to home page after successful deletion
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Network error occurred while deleting user.');
    }
  };

  return (
    <Background>
      <Container>
        <FormContainer>
          <h2>Manage Account</h2>
          <form onSubmit={handleUpdate}>
            <Input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
            {/* <Input type="text" name="mobileNumber" placeholder="Enter Mobile Number" value={formData.mobileNumber} onChange={handleChange} required /> */}
            {/* <Input type="text" name="city" placeholder="Enter City" value={formData.city} onChange={handleChange} required /> */}
            {/* <Input type="text" name="role" placeholder="Enter Role" value={formData.role} onChange={handleChange} required /> */}
            {/* <Input type="text" name="referCode" placeholder="Enter Refer Code" value={formData.referCode} onChange={handleChange} /> */}
            <Button type="submit">Update</Button>
          </form>
          <DeleteButton onClick={handleDelete}>Delete Account</DeleteButton>
          {error && <Paragraph style={{ color: 'red' }}>{error}</Paragraph>}
          {success && <Paragraph style={{ color: 'green' }}>{success}</Paragraph>}
        </FormContainer>
      </Container>
    </Background>
  );
};

export default ManageAccount;
