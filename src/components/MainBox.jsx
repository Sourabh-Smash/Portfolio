import React from 'react'
import ProfileLeftSection from './ProfileLeftSection';
import ProfileRightSection from './ProfileRightSection';

const MainBox = () => {
  return (
    <div className="container">
      <section className="profile"> 
        <ProfileLeftSection />
        <ProfileRightSection/>
      </section>
    </div>
  );
}

export default MainBox;