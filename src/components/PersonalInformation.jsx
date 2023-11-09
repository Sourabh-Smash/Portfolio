import React from 'react'
import ProfileLeftSection from './ProfileLeftSection';
import ProfileRightSection from './ProfileRightSection';
import PersonalDetails from './PersonalDetails';
import PersonalSkillsExperience from './PersonalSkillsExperience';

const PersonalInformation = () => {
  return (
    <main className="container">
      <section className="profile">
        <ProfileLeftSection />
        <ProfileRightSection />
      </section>
      <PersonalDetails />
      <PersonalSkillsExperience/>
    </main>
  );
}

export default PersonalInformation;