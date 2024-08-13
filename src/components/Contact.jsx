import React from 'react';
import styled from 'styled-components';

// Styled components
const AppContainer = styled.div`
  text-align: center;
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  border: 1px solid #ddd;
`;

const ContactTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
  font-weight: 600;
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 4px rgba(0,123,255,0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: vertical;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 4px rgba(0,123,255,0.2);
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #004085;
    transform: translateY(0);
  }
`;

// Main component
const Contact = () => {
  return (
    <AppContainer>
      <Header>
        <h1>Contact Us</h1>
      </Header>
      <ContactContainer>
        <ContactTitle>We'd Love to Hear From You!</ContactTitle>
        <ContactInfo>
          <p>If you have any questions or need assistance, please don't hesitate to reach out using the form below.</p>
          <p>Alternatively, you can contact us at:</p>
          <p>Email: <a href="mailto:example@example.com" style={{ color: '#007bff' }}>example@example.com</a></p>
          <p>Phone: +123 456 7890</p>
        </ContactInfo>
        <form>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" name="message" rows="5" required />
          </FormGroup>
          <Button type="submit">Send Message</Button>
        </form>
      </ContactContainer>
    </AppContainer>
  );
};

export default Contact;
