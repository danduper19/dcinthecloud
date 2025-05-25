import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  color: #3498db;
  font-size: 1.2rem;
`;

const ContactLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  
  &:hover {
    color: #3498db;
    text-decoration: underline;
  }
`;

const ContactText = styled.span`
  color: #2c3e50;
`;

function Contact() {
  const contactInfo = [
    { 
      icon: "📧", 
      label: "Email", 
      value: "your.email@example.com",
      isLink: true,
      href: "mailto:your.email@example.com"
    },
    { 
      icon: "📱", 
      label: "Phone", 
      value: "(123) 456-7890",
      isLink: true,
      href: "tel:1234567890"
    },
    { 
      icon: "📍", 
      label: "Location", 
      value: "City, State",
      isLink: false
    },
    { 
      icon: "🔗", 
      label: "LinkedIn", 
      value: "linkedin.com/in/yourprofile",
      isLink: true,
      href: "https://linkedin.com/in/yourprofile"
    },
    { 
      icon: "💻", 
      label: "GitHub", 
      value: "github.com/yourusername",
      isLink: true,
      href: "https://github.com/yourusername"
    },
    { 
      icon: "🌐", 
      label: "Portfolio", 
      value: "yourwebsite.com",
      isLink: true,
      href: "https://yourwebsite.com"
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Contact Information</SectionTitle>
      <ContactGrid>
        {contactInfo.map((item, index) => (
          <ContactItem key={index}>
            <IconWrapper>{item.icon}</IconWrapper>
            {item.isLink ? (
              <ContactLink href={item.href} target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? '' : '_blank'}>
                {item.value}
              </ContactLink>
            ) : (
              <ContactText>{item.value}</ContactText>
            )}
          </ContactItem>
        ))}
      </ContactGrid>
    </SectionContainer>
  );
}

export default Contact;