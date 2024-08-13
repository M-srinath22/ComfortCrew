import React from 'react';
import styled from 'styled-components';

// Define the service data
const services = [
  { name: 'Air Conditioner', icon: '❄️' },
  { name: 'Car Detailing', icon: '🚗' },
  { name: 'Refrigerator', icon: '❄️' },
  { name: 'Washing machine', icon: '🌀' },
  { name: 'Microwave oven', icon: '🍲' },
  { name: 'Water purifier', icon: '💧' },
  { name: 'Geyser', icon: '🔥' },
  { name: 'Kitchen Chimney', icon: '🍳' },
  { name: 'Kitchen Appliances', icon: '🍴' },
  { name: 'TV repair', icon: '📺' },
  { name: 'Plumber', icon: '🔧' },
  { name: 'Carpenter', icon: '🔨' },
  { name: 'Interior Designer', icon: '🏠' },
  { name: 'Bathroom Accessories', icon: '🛁' },
  { name: 'Hardware & Plywood', icon: '🔩' },
  { name: 'Electrical Material', icon: '💡' },
  { name: 'Car Rental', icon: '🚕' },
  { name: 'Glass Window & Doors', icon: '🚪' },
  { name: 'Granite & Tiles', icon: '🪨' },
  { name: 'Beauty salon', icon: '💇‍♀️' },
  { name: 'Barber', icon: '✂️' },
  { name: 'Car Repair', icon: '🚗🔧' },
  { name: 'Bike Repair', icon: '🛵🔧' },
  { name: 'Computer Repair', icon: '💻🔧' },
];

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
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const ServiceCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: 10px;
  padding: 30px;
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
`;

const ServiceIcon = styled.div`
  font-size: 60px;
`;

const ServiceName = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;

// Main component
const Services = () => {
  return (
    <AppContainer>
      <Header>
        <h1>Our Services</h1>
      </Header>
      <ServicesContainer>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceName>{service.name}</ServiceName>
          </ServiceCard>
        ))}
      </ServicesContainer>
    </AppContainer>
  );
};

export default Services;
