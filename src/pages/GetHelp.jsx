import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Source from '../components/Source';
import TapedPhoto from '../components/TapedPhoto';
import ContactDetails from '../components/ContactDetails';
import { agencies, crisisHotlines } from '../data/hotlines';

import helpPhoto from '../assets/photos/05707jfNational_Center_for_Mental_Health_Mauway_Mandaluyong_Cityfvf_02.jpg';

const GetHelp = () => {
  const [activeTab, setActiveTab] = useState('doh');

  useEffect(() => {
    document.title = 'Get Help | Teenage Pregnancy sa Pilipinas';
  }, []);

  const tabs = [
    { id: 'doh', label: 'DOH' },
    { id: 'popcom', label: 'POPCOM' },
    { id: 'dswd', label: 'DSWD' },
    { id: 'pcw', label: 'PCW' },
    { id: 'chr', label: 'CHR' }
  ];

  return (
    <div className="get-help-page">
      <h1>
        <span className="handwritten">Get</span>
        {' '}<span>Help</span>
      </h1>

      <p className="handwritten" style={{ fontSize: '1.3rem' }}>
        Hindi ka nag-iisa. May tulong na available.
      </p>

      {/* Emergency Banner */}
      <div style={{ background: 'var(--teacher-red)', color: 'white', padding: 'var(--space-lg)', borderRadius: 'var(--radius-sm)', margin: 'var(--space-xl) 0', overflow: 'hidden' }}>
        <h2 style={{ color: 'white', marginBottom: 'var(--space-md)' }}>Emergency Help</h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          If you are in immediate danger, experiencing abuse, or need urgent help:
        </p>
        <ul style={{ marginBottom: 'var(--space-md)', paddingLeft: 'var(--space-lg)' }}>
          <li style={{ marginBottom: 'var(--space-sm)' }}>
            <strong><a className="contact-link emergency-link" href="tel:911" aria-label="Call emergency services at 911">Call 911</a></strong> for emergency police response
          </li>
          <li style={{ marginBottom: 'var(--space-sm)' }}>For other support options, see the hotlines below.</li>
          <li><strong>Go to the nearest hospital or police station</strong></li>
        </ul>
      </div>

      {/* If You're a Pregnant Teen */}
      <section className="yellow-pad torn-edge" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <div className="photo-row align-end">
          <div>
            <h2>If You're a Pregnant Teen</h2>

            <p>
              Ang pregnancy sa teenage years ay overwhelming, pero may rights ka at may resources na available.
            </p>

            <p>
              May karapatan ka sa edukasyon at serbisyong pangkalusugan. Basahin ang <a href="#/know-the-law">Know the Law</a> para sa detalye.
            </p>
          </div>

          <TapedPhoto
            src={helpPhoto}
            alt="A tree-lined street with pedestrians, parked cars, and buildings."
            caption="Help is close by."
            width={360}
            height={240}
            variant="photocopy"
            className="section-figure"
          />
        </div>

        <h3>What You Can Do:</h3>
        <ul className="checkbox-list">
          <li className="checked">Go to a health center or hospital for prenatal check-up</li>
          <li className="checked">Talk to a trusted adult (parent, relative, teacher, guidance counselor)</li>
          <li className="checked">Contact POPCOM for information and referral: Regional offices available nationwide</li>
          <li className="checked">If you want to continue school, talk to your school about accommodations</li>
        </ul>

        <div className="sticky-note" style={{ transform: 'rotate(1deg)' }}>
          <p className="handwritten-red">
            Remember: Pregnancy doesn't mean your life is over. Many teen mothers finish school and build good lives. You can too.
          </p>
        </div>
      </section>

      {/* If You're a Teen Parent */}
      <section className="graph-paper folded-corner" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <h2>If You're a Teen Parent (Mother or Father)</h2>

        <p>
          Parenting is hard sa anumang edad. Mas mahirap sa teenage years, pero possible. May support available.
        </p>

        <h3>For Teen Mothers:</h3>
        <ul className="checkbox-list">
          <li className="checked">You can continue your education through regular school or ALS</li>
          <li className="checked">You may qualify for government assistance programs</li>
          <li className="checked">Some schools have day-care or breastfeeding stations (check with your school)</li>
        </ul>
        <Source id={10} />

        <h3>For Teen Fathers:</h3>
        <ul className="checkbox-list">
          <li className="checked">You have financial responsibilities to your child</li>
          <li className="checked">You can seek parenting education and support</li>
          <li className="checked">Being present and responsible makes a big difference</li>
        </ul>

        <h3>Resources:</h3>
        <ul className="checkbox-list">
          <li className="checked"><strong>DSWD WiSUPPORT:</strong> Contact details are listed in <Link to={{ pathname: '/get-help', hash: '#dswd-hotline' }}>Hotlines below</Link></li>
          <li className="checked"><strong>POPCOM:</strong> For adolescent health and development information</li>
          <li className="checked"><strong>Local Health Centers:</strong> For prenatal and postnatal care</li>
        </ul>
        <Source ids={[18, 19]} />
      </section>

      {/* If You're a Parent or Teacher */}
      <section style={{ margin: 'var(--space-xl) 0' }}>
        <h2>If You're a Parent or Teacher</h2>

        <p>
          Ang role mo ay crucial sa pag-support sa mga kabataan. Here's what you can do:
        </p>

        <h3>For Parents:</h3>
        <ul className="checkbox-list">
          <li className="checked">Create a safe space for open communication</li>
          <li className="checked">Educate yourself about adolescent reproductive health</li>
          <li className="checked">Support your child if they disclose pregnancy — don't shame</li>
          <li className="checked">Help them find trusted support and accurate information</li>
          <li className="checked">Access parenting resources from POPCOM and DSWD</li>
        </ul>

        <h3>For Teachers:</h3>
        <ul className="checkbox-list">
          <li className="checked">Follow DepEd Order No. 31 s. 2018 on CSE implementation</li>
          <li className="checked">Do not expel or discriminate against pregnant students (RA 9710)</li>
          <li className="checked">Refer students to guidance counselors and health services</li>
          <li className="checked">Be a trusted adult they can approach</li>
        </ul>
        <Source ids={[12, 15]} />

        <div className="paper-clip-card" style={{ marginTop: 'var(--space-lg)' }}>
          <h3>Resources for Adults:</h3>
          <ul className="checkbox-list">
            <li className="checked"><strong>POPCOM:</strong> Parent education programs</li>
            <li className="checked"><strong>DSWD:</strong> Parenting and family support programs</li>
            <li className="checked"><strong>DepEd:</strong> CSE implementation guidelines</li>
          </ul>
        </div>
      </section>

      {/* If Someone is Hurting You */}
      <section className="yellow-pad torn-edge" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <h2>If Someone is Pressuring or Hurting You</h2>
        <p className="content-notice">Content notice: This section discusses abuse and coercion.</p>

        <p>
          If someone is pressuring, abusing, or exploiting you, that's never okay. You have rights and there is help.
        </p>

        <h3>Hotlines:</h3>
        <div className="contact-card-grid" id="help-hotlines">
          {agencies.filter(agency => agency.phones.length || agency.emails.length || agency.id === 'pnp-wcpc').map(agency => (
            <article className="paper-clip-card contact-card" key={agency.id} id={agency.id === 'dswd' ? 'dswd-hotline' : undefined}>
              <h4>{agency.name}</h4>
              <ContactDetails agency={agency} />
            </article>
          ))}
          {crisisHotlines.map(agency => (
            <article className="paper-clip-card contact-card" key={agency.id}>
              <h4>{agency.name}</h4>
              <ContactDetails agency={agency} />
              {agency.id === 'ncmh' && <p className="contact-note">Available 24/7.</p>}
            </article>
          ))}
        </div>

        <p>For details about protections under the law, see <a href="#/know-the-law">Know the Law</a>.</p>

        <h3>What You Can Do:</h3>
        <ul className="checkbox-list">
          <li className="checked">Call a hotline for help and guidance</li>
          <li className="checked">Tell a trusted adult (parent, teacher, relative)</li>
          <li className="checked">Go to a police station or barangay VAW desk</li>
          <li className="checked">Seek medical attention if needed</li>
          <li className="checked">Document incidents if safe to do so</li>
        </ul>

        <div className="sticky-note" style={{ transform: 'rotate(-1deg)' }}>
          <p className="handwritten-red">
            Hindi kasalanan mo kung sinasaktan ka. May help. May hope. Don't give up.
          </p>
        </div>
      </section>

      {/* Government Agencies */}
      <section className="graph-paper folded-corner" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <h2>Government Agencies and Resources</h2>

        <div className="tabs" role="tablist" aria-label="Government agencies">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'doh' && (
          <div className="tab-content active" id="tab-doh" role="tabpanel">
            <div className="paper-clip-card">
              <h3>Department of Health (DOH)</h3>
              <p>Provides health services, including reproductive health services.</p>
              <ContactDetails agency={agencies.find(agency => agency.id === 'doh')} />
              <p><strong>Services:</strong> Health centers, hospitals, RH services</p>
            </div>
          </div>
        )}

        {activeTab === 'popcom' && (
          <div className="tab-content active" id="tab-popcom" role="tabpanel">
            <div className="paper-clip-card">
              <h3>Commission on Population and Development (POPCOM)</h3>
              <p>Leads adolescent health and development programs, including teenage pregnancy prevention.</p>
              <ContactDetails agency={agencies.find(agency => agency.id === 'popcom')} />
              <p><strong>Regional Helplines:</strong> Available in various regions (check regional POPCOM websites)</p>
              <p><strong>Services:</strong> Adolescent health information, family planning, referrals</p>
            </div>
          </div>
        )}

        {activeTab === 'dswd' && (
          <div className="tab-content active" id="tab-dswd" role="tabpanel">
            <div className="paper-clip-card">
              <h3>Department of Social Welfare and Development (DSWD)</h3>
              <p>Provides social protection programs and crisis intervention.</p>
              <ContactDetails agency={agencies.find(agency => agency.id === 'dswd')} />
              <p><strong>Services:</strong> Crisis intervention, counseling, social protection programs</p>
            </div>
          </div>
        )}

        {activeTab === 'pcw' && (
          <div className="tab-content active" id="tab-pcw" role="tabpanel">
            <div className="paper-clip-card">
              <h3>Philippine Commission on Women (PCW)</h3>
              <p>Leads gender equality and women's empowerment programs.</p>
              <ContactDetails agency={agencies.find(agency => agency.id === 'pcw')} />
              <p><strong>Services:</strong> Gender and development programs, women's rights information</p>
            </div>
          </div>
        )}

        {activeTab === 'chr' && (
          <div className="tab-content active" id="tab-chr" role="tabpanel">
            <div className="paper-clip-card">
              <h3>Commission on Human Rights (CHR)</h3>
              <p>Protects and promotes human rights, including children's rights.</p>
              <ContactDetails agency={agencies.find(agency => agency.id === 'chr')} />
              <p><strong>Services:</strong> Human rights complaints, legal assistance referrals</p>
            </div>
          </div>
        )}
      </section>

      {/* Local Resources */}
      <section style={{ margin: 'var(--space-xl) 0' }}>
        <h2>Local Resources</h2>

        <div className="paper-clip-card">
          <h3>Barangay VAW Desk</h3>
          <p>Every barangay should have a Violence Against Women (VAW) desk. This is your first point of contact for reporting abuse at the local level.</p>
          <p><strong>What to do:</strong> Go to your barangay hall and ask for the VAW desk.</p>
        </div>

        <div className="paper-clip-card" style={{ marginTop: 'var(--space-lg)' }}>
          <h3>Local Health Center / Rural Health Unit</h3>
          <p>Your local health center provides basic health services, including prenatal check-ups, family planning counseling, and referrals.</p>
          <p><strong>What to do:</strong> Visit your nearest health center during operating hours.</p>
        </div>

        <div className="paper-clip-card" style={{ marginTop: 'var(--space-lg)' }}>
          <h3>School Guidance Counselor</h3>
          <p>If you're a student, your school guidance counselor can provide counseling, referrals, and support.</p>
          <p><strong>What to do:</strong> Ask your school office about the guidance counseling services.</p>
        </div>
      </section>

      {/* Final Message */}
      <div className="sticky-note" style={{ maxWidth: '100%', margin: 'var(--space-xl) 0', transform: 'rotate(1deg)' }}>
        <h3 className="handwritten-red">You Are Not Alone</h3>
        <p>
          Whatever you're going through, there are people and organizations that can help. Don't be afraid to reach out. Asking for help is a sign of strength, not weakness.
        </p>
        <p className="handwritten">
          Kaya mo 'to. May tulong. May pag-asa.
        </p>
      </div>
    </div>
  );
};

export default GetHelp;
