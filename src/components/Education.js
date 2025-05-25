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

const School = styled.div`
  margin-bottom: 20px;
`;

const SchoolHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  flex-wrap: wrap;
`;

const Institution = styled.h3`
  color: #2c3e50;
  margin: 0;
  font-size: 1.3rem;
`;

const Period = styled.span`
  color: #7f8c8d;
  font-style: italic;
`;

const Degree = styled.h4`
  margin: 0 0 5px 0;
  color: #3498db;
`;

const GPA = styled.p`
  margin: 0;
  font-style: italic;
`;

const Achievements = styled.ul`
  padding-left: 20px;
  margin-top: 10px;
`;

const AchievementItem = styled.li`
  margin-bottom: 5px;
`;

function Education() {
  const education = [
    {
      school: "University Name",
      degree: "Bachelor of Science in Your Major",
      period: "Year - Year",
      gpa: "GPA: 3.8/4.0",
      achievements: [
        "Academic scholarship recipient",
        "Dean's List: All semesters",
        "Relevant coursework: Course 1, Course 2, Course 3"
      ]
    },
    {
      school: "Another University or College",
      degree: "Associate Degree or Certification",
      period: "Year - Year",
      gpa: "",
      achievements: [
        "Graduated with Honors",
        "Relevant project: Project Name"
      ]
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Education</SectionTitle>
      {education.map((edu, index) => (
        <School key={index}>
          <SchoolHeader>
            <Institution>{edu.school}</Institution>
            <Period>{edu.period}</Period>
          </SchoolHeader>
          <Degree>{edu.degree}</Degree>
          {edu.gpa && <GPA>{edu.gpa}</GPA>}
          {edu.achievements && edu.achievements.length > 0 && (
            <Achievements>
              {edu.achievements.map((item, i) => (
                <AchievementItem key={i}>{item}</AchievementItem>
              ))}
            </Achievements>
          )}
        </School>
      ))}
    </SectionContainer>
  );
}

export default Education;