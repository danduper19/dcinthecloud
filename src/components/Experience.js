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

const Job = styled.div`
  margin-bottom: 25px;
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Company = styled.h3`
  color: #2c3e50;
  margin: 0;
  font-size: 1.3rem;
`;

const Period = styled.span`
  color: #7f8c8d;
  font-style: italic;
`;

const Title = styled.h4`
  margin: 0 0 10px 0;
  color: #3498db;
`;

const Description = styled.ul`
  padding-left: 20px;
`;

const DescItem = styled.li`
  margin-bottom: 8px;
`;

function Experience() {
  const jobs = [
    {
      company: "Company Name",
      title: "Job Title",
      period: "Month Year - Present",
      description: [
        "Accomplished [specific achievement] that resulted in [specific positive outcome].",
        "Led [specific project or team] to achieve [specific goal] by [specific action].",
        "Improved [specific process or metric] by implementing [specific solution]."
      ]
    },
    {
      company: "Previous Company Name",
      title: "Previous Job Title",
      period: "Month Year - Month Year",
      description: [
        "Developed and implemented [specific strategy or tool] that [specific outcome].",
        "Collaborated with cross-functional teams to [specific achievement].",
        "Recognized for [specific accomplishment or award] due to [specific contribution]."
      ]
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Professional Experience</SectionTitle>
      {jobs.map((job, index) => (
        <Job key={index}>
          <JobHeader>
            <Company>{job.company}</Company>
            <Period>{job.period}</Period>
          </JobHeader>
          <Title>{job.title}</Title>
          <Description>
            {job.description.map((item, i) => (
              <DescItem key={i}>{item}</DescItem>
            ))}
          </Description>
        </Job>
      ))}
    </SectionContainer>
  );
}

export default Experience;