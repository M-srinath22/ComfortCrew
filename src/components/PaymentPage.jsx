import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PaymentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
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
  margin-top: 20px;
`;

const PayButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 20px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const PaymentPage = () => {
  const location = useLocation();
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const totalPrice = location.state?.totalPrice || 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Process the payment here (e.g., send data to the backend)
    console.log('Payment information submitted:', paymentInfo);
    alert('Payment successful!');
  };

  return (
    <PaymentContainer>
      <Header>Payment</Header>
      
      <PaymentForm onSubmit={handlePaymentSubmit}>
        <InputField>
          <Label>Card Number</Label>
          <Input 
            type="text" 
            name="cardNumber" 
            value={paymentInfo.cardNumber} 
            onChange={handleInputChange} 
            required
          />
        </InputField>
        <InputField>
          <Label>Expiry Date</Label>
          <Input 
            type="text" 
            name="expiryDate" 
            value={paymentInfo.expiryDate} 
            onChange={handleInputChange} 
            placeholder="MM/YY"
            required
          />
        </InputField>
        <InputField>
          <Label>CVV</Label>
          <Input 
            type="text" 
            name="cvv" 
            value={paymentInfo.cvv} 
            onChange={handleInputChange} 
            required
          />
        </InputField>
        <InputField>
          <Label>Cardholder Name</Label>
          <Input 
            type="text" 
            name="cardHolderName" 
            value={paymentInfo.cardHolderName} 
            onChange={handleInputChange} 
            required
          />
        </InputField>

        <TotalPrice>Total: ₹ {totalPrice.toFixed(2)}</TotalPrice>

        <PayButton type="submit">Pay Now</PayButton>
      </PaymentForm>
    </PaymentContainer>
  );
};

export default PaymentPage;
