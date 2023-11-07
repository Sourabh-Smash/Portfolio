import React from 'react'
import ProfileLeftSection from './ProfileLeftSection';
import ProfileRightSection from './ProfileRightSection';
import PersonalDetails from './PersonalDetails';

const PersonalInformation = () => {
  return (
    <main className="container">
      <section className="profile">
        <ProfileLeftSection />
        <ProfileRightSection />
      </section>
      <PersonalDetails />
    </main>
  );
}

export default PersonalInformation;