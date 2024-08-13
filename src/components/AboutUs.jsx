import React from 'react';
import styled from 'styled-components';

// URLs for the images
const firstStepImage = 'https://www.choicehomewarranty.com/wp-content/uploads/2017/11/home-repair-assistance-1024x608.jpg';
const secondStepImage = 'https://www.articlization.com/img/uploads/article_images/big/1502264143_home-repar-maintance-1.jpg';
const thirdStepImage = 'https://thumbs.dreamstime.com/z/young-couple-doing-repair-new-home-relaxing-renovation-family-concept-coffee-copy-space-176419742.jpg';

const Background = styled.div`
  background-color: #f5f5f5;
  padding: 50px 0;
`;

const Container = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 50px;
  margin: 0 auto;
  max-width: 1200px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const StepContainer = styled.div`
  margin-top: 40px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const StepNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4CAF50;
  margin-right: 20px;
`;

const StepText = styled.div`
  text-align: left;
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 16px;
`;

const Image = styled.img`
  flex: 1;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  margin: 0 20px;
`;

const AboutUs = () => {
  return (
    <Background>
      <Container>
        <Content>
          <Title>How Service On Wheel works</Title>
          <Subtitle>Service On Wheel is the smart way to get things done by connecting you with others in your neighborhood.</Subtitle>
          
          <StepContainer>
            <Step>
              <Image src={firstStepImage} alt="Step 1" />
              <StepText>
                <StepNumber>1</StepNumber>
                <StepTitle>We find the best people to help you.</StepTitle>
                <StepDescription>You can trust our team of smart, talented Taskers, who have all been thoroughly vetted.</StepDescription>
              </StepText>
            </Step>
            <Step>
              <Image src={secondStepImage} alt="Step 2" />
              <StepText>
                <StepNumber>2</StepNumber>
                <StepTitle>Generate your service request online.</StepTitle>
                <StepDescription>Just tell us what you need done and we connect you to qualified Taskers available to help.</StepDescription>
              </StepText>
            </Step>
            <Step>
              <Image src={thirdStepImage} alt="Step 3" />
              <StepText>
                <StepNumber>3</StepNumber>
                <StepTitle>You relax while we take care of your to-do list.</StepTitle>
                <StepDescription>Our Taskers will handle your tasks efficiently, so you can enjoy your free time.</StepDescription>
              </StepText>
            </Step>
          </StepContainer>
        </Content>
      </Container>
    </Background>
  );
};

export default AboutUs;
