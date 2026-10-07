import React, { useEffect } from 'react';
import { members, courseInfo } from '../data/members';
import TapedPhoto from '../components/TapedPhoto';
import teamPhoto from '../assets/photos/photo-1763098844157-d0fffcc966a1.avif';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us | Teenage Pregnancy sa Pilipinas';
  }, []);

  return (
    <div>
      <h1>
        <span className="handwritten">About</span>
        {' '}<span>Us</span>
      </h1>

      {/* Course Information (EDITABLE) */}
      <section className="yellow-pad torn-edge" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <h2 className="handwritten-red">Course Information</h2>

        <p><strong>Course:</strong> {courseInfo.course}</p>
        <p><strong>Section:</strong> {courseInfo.section}</p>
        <p><strong>School:</strong> {courseInfo.school}</p>
        <p><strong>School Year:</strong> {courseInfo.schoolYear}</p>
        <p><strong>Instructor:</strong> {courseInfo.instructor}</p>
      </section>

      {/* Why We Chose This Issue */}
      <section className="graph-paper folded-corner" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <h2>Why We Chose This Issue</h2>

        <p>
          We chose teenage pregnancy as our topic because it's a real, pressing issue that affects thousands of Filipino youth every year. It's not just a statistic — it's about real people, real families, and real futures.
        </p>

        <p>
          We believe that comprehensive sexuality education is part of the solution, not the problem. Young people deserve accurate information, access to services, and protection from abuse. They deserve to make informed decisions about their bodies and their futures.
        </p>

        <p>
          This website is our small contribution to raising awareness, reducing stigma, and providing resources. We hope it helps someone — even just one person — feel less alone, more informed, and more empowered.
        </p>

        <div className="sticky-note" style={{ transform: 'rotate(-1deg)' }}>
          <p className="handwritten">
            To anyone reading this who might be going through something similar: You are not alone. There is help. There is hope.
          </p>
        </div>
      </section>

      {/* Team Members (EDITABLE) */}
      <section style={{ margin: 'var(--space-xl) 0' }}>
        <div className="photo-row align-end">
          <div>
            <h2>Team Members</h2>
            <p className="handwritten-red">We wrote this with honesty, care, and a lot of research.</p>
          </div>

          <TapedPhoto
            src={teamPhoto}
            alt="An empty classroom with desks, chairs, and a chalkboard."
            caption="Where ideas take shape."
            width={380}
            height={260}
            className="section-figure"
          />
        </div>

        <div className="members-grid" role="region" aria-label="Project team members" tabIndex="0">
          {members.map(member => (
            <article key={member.id} className="paper-clip-card member-card">
              <h3>{member.name}</h3>
              <p className="handwritten">Role: {member.role}</p>
              <p style={{ marginTop: 'var(--space-md)' }}>
                <em>"{member.reflection}"</em>
              </p>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
