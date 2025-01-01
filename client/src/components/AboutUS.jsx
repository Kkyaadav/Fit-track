import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 0 0 105px;
  text-align: center;
  color: #333;
  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.strong`
  color: #ff2f11;
`;

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Title>About Us</Title>
        <Paragraph>
          Welcome to <Highlight>Fittrack</Highlight> – your ultimate fitness companion. At Fittrack, we believe in empowering individuals to achieve their health and wellness goals with cutting-edge technology and data-driven insights.
        </Paragraph>
        <Paragraph>
          Our mission is to make fitness accessible, engaging, and personalized for everyone. Whether you're a beginner or a seasoned athlete, Fittrack provides the tools you need to track progress, stay motivated, and reach your potential.
        </Paragraph>
        <Paragraph>
          Join thousands of users who trust Fittrack to guide them on their fitness journey. Together, let's build a healthier future.
        </Paragraph>
      </Container>
    </Section>
  );
};

export default AboutUs;
