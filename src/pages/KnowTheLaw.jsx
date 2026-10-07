import React, { useEffect, useState } from 'react';
import Source from '../components/Source';

const KnowTheLaw = () => {
  const [activeTab, setActiveTab] = useState('rh');

  useEffect(() => {
    document.title = 'Know the Law | Teenage Pregnancy sa Pilipinas';
  }, []);

  const tabs = [
    { id: 'rh', label: 'RH Law' },
    { id: 'child', label: 'Child Protection' },
    { id: 'consent', label: 'Age of Consent' },
    { id: 'marriage', label: 'Child Marriage' },
    { id: 'education', label: 'Education Rights' },
    { id: 'executive', label: 'Executive Orders' }
  ];

  return (
    <div>
      <h1>
        <span className="handwritten">Know</span>
        {' '}<span>the Law</span>
      </h1>

      <p className="handwritten" style={{ fontSize: '1.3rem' }}>
        Ang batas ay nandiyan para protektahan ka. Alamin mo.
      </p>

      <p>
        I-click ang tabs sa ibaba para makita ang mga batas at policies na may kinalaman sa teenage pregnancy, reproductive health, at protection ng kabataan.
      </p>

      {/* Interactive Law Explorer */}
      <section className="graph-paper folded-corner" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <div className="tabs" role="tablist" aria-label="Law categories">
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

        {/* RH Law Tab */}
        {activeTab === 'rh' && (
          <div className="tab-content active" id="tab-rh" role="tabpanel">
            <div className="paper-clip-card">
              <h3>RA 10354 (2012)</h3>
              <p className="handwritten-red">Responsible Parenthood and Reproductive Health Act</p>

              <h4>What it says:</h4>
              <ul className="checkbox-list">
                <li className="checked">Provides universal access sa reproductive health care services</li>
                <li className="checked">Mandates age- and development-appropriate reproductive health education sa schools</li>
                <li className="checked">Guarantees access sa medically-safe, non-abortifacient contraceptives</li>
                <li className="checked">Prohibits discrimination based sa reproductive health decisions</li>
              </ul>

              <Source id={11} />

              <h4>Who it protects:</h4>
              <p>Everyone, including adolescents, especially poor women at those in remote areas.</p>

              <h4>What it means for teenagers:</h4>
              <p>You have the right to accurate information about reproductive health at sexuality education. You can access family planning services (with parental guidance for minors).</p>

              <h4>Key provisions for teens:</h4>
              <ul className="checkbox-list">
                <li className="checked">Section 14: Age- and development-appropriate RH education</li>
                <li className="checked">Section 23: Prohibits withholding of RH information</li>
              </ul>

              <Source id={11} />
            </div>
          </div>
        )}

        {/* Child Protection Tab */}
        {activeTab === 'child' && (
          <div className="tab-content active" id="tab-child" role="tabpanel">
            <div className="paper-clip-card">
              <h3>RA 7610 (1992)</h3>
              <p className="handwritten-red">Special Protection of Children Against Abuse, Exploitation and Discrimination Act</p>

              <h4>What it says:</h4>
              <ul className="checkbox-list">
                <li className="checked">Protects children from all forms of abuse, including sexual abuse</li>
                <li className="checked">Criminalizes child abuse and exploitation</li>
                <li className="checked">Mandates reporting of child abuse cases</li>
              </ul>

              <h4>Who it protects:</h4>
              <p>All children (persons below 18 years old).</p>

              <h4>What it means for teenagers:</h4>
              <p>If you are being abused, exploited, or coerced, this law protects you. Adults who abuse children face criminal penalties.</p>

              <h4>Penalties:</h4>
              <p>Imprisonment and fines depending on the gravity of the abuse.</p>

              <Source id={12} />
            </div>

            <div className="paper-clip-card" style={{ marginTop: 'var(--space-lg)' }}>
              <h3>RA 8353 (1997)</h3>
              <p className="handwritten-red">Anti-Rape Law of 1997</p>

              <h4>What it says:</h4>
              <ul className="checkbox-list">
                <li className="checked">Reclassified rape as a crime against persons (not against chastity)</li>
                <li className="checked">Expanded definition of rape</li>
                <li className="checked">Removed the requirement that the victim must "resist to the utmost"</li>
              </ul>

              <h4>Who it protects:</h4>
              <p>All persons, especially women and children.</p>

              <Source id={13} />
            </div>
          </div>
        )}

        {/* Age of Consent Tab */}
        {activeTab === 'consent' && (
          <div className="tab-content active" id="tab-consent" role="tabpanel">
            <div className="paper-clip-card">
              <h3>RA 11648 (2022)</h3>
              <p className="handwritten-red">Raised Age of Sexual Consent to 16</p>

              <h4>What it says:</h4>
              <ul className="checkbox-list">
                <li className="checked">Raised the age of sexual consent from 12 to 16 years old</li>
                <li className="checked">Sexual activity with anyone under 16 is statutory rape</li>
                <li className="checked">Exception: No criminal liability if age difference is ≤3 years, consensual, non-abusive, non-exploitative (but NOT if victim is under 13)</li>
              </ul>

              <Source id={9} />

              <h4>Who it protects:</h4>
              <p>Children and adolescents under 16 years old from sexual exploitation and abuse.</p>

              <h4>What it means for teenagers:</h4>
              <p>Anyone under 16 cannot legally consent to sex. Sexual activity with them is considered rape, with narrow exceptions for close-in-age relationships (but never for under 13).</p>

              <h4>Penalties:</h4>
              <p>Rape is punishable by reclusion perpetua (20-40 years) or reclusion temporal (12-20 years), depending on circumstances.</p>

              <Source id={9} />
            </div>
          </div>
        )}

        {/* Child Marriage Tab */}
        {activeTab === 'marriage' && (
          <div className="tab-content active" id="tab-marriage" role="tabpanel">
            <div className="paper-clip-card">
              <h3>RA 11596 (2021)</h3>
              <p className="handwritten-red">Prohibiting Child Marriage</p>

              <h4>What it says:</h4>
              <ul className="checkbox-list">
                <li className="checked">Prohibits child marriage (marriage before 18 years old)</li>
                <li className="checked">Declares child betrothal and marriage as having no legal effect</li>
                <li className="checked">Criminalizes facilitation of child marriage</li>
              </ul>

              <Source id={14} />

              <h4>Who it protects:</h4>
              <p>All children under 18 years old, especially girls.</p>

              <h4>What it means for teenagers:</h4>
              <p>You cannot legally marry before 18. Any marriage before 18 is void. Adults who arrange child marriage face criminal penalties.</p>

              <h4>Penalties:</h4>
              <ul className="checkbox-list">
                <li className="checked">Prision mayor (6-12 years) and fine of P40,000</li>
                <li className="checked">If perpetrator is parent/guardian: Prision mayor in maximum period, fine of P50,000, and perpetual loss of parental authority</li>
              </ul>

              <Source id={14} />
            </div>
          </div>
        )}

        {/* Education Rights Tab */}
        {activeTab === 'education' && (
          <div className="tab-content active" id="tab-education" role="tabpanel">
            <div className="paper-clip-card">
              <h3>RA 9710 (2009)</h3>
              <p className="handwritten-red">Magna Carta of Women</p>

              <h4>What it says:</h4>
              <ul className="checkbox-list">
                <li className="checked">Prohibits expulsion or non-readmission of female students due to pregnancy outside of marriage</li>
                <li className="checked">Prohibits refusing admission solely because of pregnancy</li>
              </ul>

              <Source id={15} />

              <h4>Who it protects:</h4>
              <p>Female students and faculty who become pregnant outside of marriage.</p>

              <h4>What it means for teenagers:</h4>
              <p>Schools cannot kick you out or refuse to admit you just because you're pregnant. You have the right to continue your education.</p>

              <Source id={15} />
            </div>

            <div className="paper-clip-card" style={{ marginTop: 'var(--space-lg)' }}>
              <h3>DepEd Order No. 31, s. 2018</h3>
              <p className="handwritten-red">Comprehensive Sexuality Education Policy</p>

              <h4>What it says:</h4>
              <ul className="checkbox-list">
                <li className="checked">Establishes policy guidelines for implementing CSE in all schools</li>
                <li className="checked">CSE is age-appropriate, culturally relevant, scientifically accurate</li>
                <li className="checked">Applies to all learners in public and private schools</li>
              </ul>

              <Source id={12} />

              <h4>What it means for teenagers:</h4>
              <p>You should receive comprehensive sexuality education in school that is accurate and appropriate for your age.</p>

              <Source id={12} />
            </div>
          </div>
        )}

        {/* Executive Orders Tab */}
        {activeTab === 'executive' && (
          <div className="tab-content active" id="tab-executive" role="tabpanel">
            <div className="paper-clip-card">
              <h3>Executive Order No. 141 (2021)</h3>
              <p className="handwritten-red">Teenage Pregnancy Prevention as National Priority</p>

              <h4>What it says:</h4>
              <ul className="checkbox-list">
                <li className="checked">Adopts prevention of teenage pregnancies as a National Priority</li>
                <li className="checked">Mobilizes government agencies to address root causes</li>
                <li className="checked">Recognizes gender norms, lack of information, and discrimination as root causes</li>
                <li className="checked">Strengthens adolescents' capacity to make informed decisions</li>
              </ul>

              <Source id={16} />

              <h4>What it means for teenagers:</h4>
              <p>The government is required to coordinate efforts to prevent teenage pregnancy through education, health services, and addressing gender norms.</p>

              <Source id={16} />
            </div>
          </div>
        )}
      </section>

      {/* Pending Bills */}
      <section className="yellow-pad torn-edge" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <h2>Pending Bills (NOT YET LAW)</h2>

        <div style={{ background: '#FFF0F0', borderLeft: '4px solid var(--teacher-red)', padding: 'var(--space-md)', margin: 'var(--space-lg) 0' }}>
          <p style={{ margin: 0, fontWeight: 600 }}>
            ⚠️ These are proposed bills. They are NOT yet law. They may change or may not be passed.
          </p>
        </div>

        <div className="paper-clip-card">
          <h3>Adolescent Pregnancy Prevention Bill</h3>
          <p className="handwritten-red">Various versions filed in Congress</p>

          <p>
            There have been several bills filed to strengthen adolescent pregnancy prevention efforts, including:
          </p>

          <ul className="checkbox-list">
            <li className="checked">Strengthening implementation of CSE</li>
            <li className="checked">Improving access to adolescent-friendly health services</li>
            <li className="checked">Providing support for adolescent parents</li>
            <li className="checked">Addressing social determinants like poverty</li>
          </ul>

          <p className="handwritten-red" style={{ marginTop: 'var(--space-md)' }}>
            [TO VERIFY: Check current status of these bills in the 18th or 19th Congress]
          </p>
        </div>
      </section>

      {/* What You Can Do */}
      <section style={{ margin: 'var(--space-xl) 0' }}>
        <h2>What You Can Do</h2>

        <div className="sticky-note" style={{ transform: 'rotate(-1deg)' }}>
          <p className="handwritten">
            Know your rights. Ang batas ay nandiyan para protektahan ka, hindi parusahan ka.
          </p>
        </div>

        <ul className="checkbox-list">
          <li className="checked">If you're pregnant, you have the right to stay in school (RA 9710)</li>
          <li className="checked">If you're under 16 and someone is pressuring you for sex, that's illegal (RA 11648)</li>
          <li className="checked">If you're being abused, you can report it (RA 7610)</li>
          <li className="checked">You have the right to accurate RH information (RA 10354)</li>
        </ul>

      </section>

      <p className="legal-note">For education only, not legal advice. For legal help, contact the PAO or the CHR.</p>
    </div>
  );
};

export default KnowTheLaw;
