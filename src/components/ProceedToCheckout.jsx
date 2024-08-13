import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const PersonalInfoSection = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
`;

const InputField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const TotalPrice = styled.h2`
  text-align: right;
`;

const CheckoutButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 20px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
`;

const ProceedToCheckout = () => {
  const location = useLocation();
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    flatNo: '',
    homeAddress: '',
    cityPincode: ''
  });

  const totalPrice = location.state?.totalPrice || 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  return (
    <CheckoutContainer>
      <Header>Proceed to Checkout</Header>

      <PersonalInfoSection>
        <h2>Personal Information</h2>
        <InputField>
          <Label>Full Name</Label>
          <Input 
            type="text" 
            name="fullName" 
            value={personalInfo.fullName} 
            onChange={handleInputChange} 
          />
        </InputField>
        <InputField>
          <Label>Email Address</Label>
          <Input 
            type="email" 
            name="email" 
            value={personalInfo.email} 
            onChange={handleInputChange} 
          />
        </InputField>
        <InputField>
          <Label>Phone Number</Label>
          <Input 
            type="text" 
            name="phoneNumber" 
            value={personalInfo.phoneNumber} 
            onChange={handleInputChange} 
          />
        </InputField>
        <InputField>
          <Label>Flat No</Label>
          <Input 
            type="text" 
            name="flatNo" 
            value={personalInfo.flatNo} 
            onChange={handleInputChange} 
          />
        </InputField>
        <InputField>
          <Label>Home Address</Label>
          <Input 
            type="text" 
            name="homeAddress" 
            value={personalInfo.homeAddress} 
            onChange={handleInputChange} 
          />
        </InputField>
        <InputField>
          <Label>City & Pincode</Label>
          <Input 
            type="text" 
            name="cityPincode" 
            value={personalInfo.cityPincode} 
            onChange={handleInputChange} 
          />
        </InputField>
      </PersonalInfoSection>

      <TotalPrice>Total: ₹ {totalPrice.toFixed(2)}</TotalPrice>
      <Link to='/payment'>
        <CheckoutButton>Continue</CheckoutButton>
      </Link>
    </CheckoutContainer>
  );
};

export default ProceedToCheckout;
