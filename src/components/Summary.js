import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

const SummaryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

function Summary() {
  return (
    <SectionContainer>
      <SectionTitle>Professional Summary</SectionTitle>
      <SummaryText>
        Dedicated and versatile professional with a proven track record in [Your Field]. 
        Offering [X] years of experience with expertise in [Key Skill 1], [Key Skill 2], and [Key Skill 3]. 
        Known for delivering high-quality results through analytical thinking, problem-solving, and 
        effective communication. Seeking to leverage my skills and experience to contribute to a dynamic team.
      </SummaryText>
    </SectionContainer>
  );
}

export default Summary;