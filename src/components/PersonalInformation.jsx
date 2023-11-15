import React from 'react'
import ProfileLeftSection from './ProfileLeftSection';
import ProfileRightSection from './ProfileRightSection';
import PersonalDetails from './PersonalDetails';
import PersonalSkillsExperience from './PersonalSkillsExperience';
import CowndownSection from './CowndownSection';

const PersonalInformation = () => {
  return (
    <main className="container">
      <section className="profile">
        <ProfileLeftSection />
        <ProfileRightSection />
      </section>
      <PersonalDetails />
      <PersonalSkillsExperience />
      <CowndownSection/>
    </main>
  );
}

export default PersonalInformation;