import React, { useEffect } from 'react';
import Source from '../components/Source';

const WhyItHappens = () => {
  useEffect(() => {
    document.title = 'Why It Happens | Teenage Pregnancy sa Pilipinas';
  }, []);

  return (
    <div>
      <h1>
        <span className="handwritten">Why</span>
        {' '}<span>It Happens</span>
      </h1>

      <p className="handwritten" style={{ fontSize: '1.3rem' }}>
        Hindi lang "bad decision." Mas komplikado kaysa dun.
      </p>

      {/* Gender Norms */}
      <section className="yellow-pad torn-edge" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <h2>Gender Norms & Double Standards</h2>

        <p>
          Sa Pilipinas, may <strong>double standards</strong> kapag dating sa sexuality:
        </p>

        <ul className="checkbox-list">
          <li className="checked">Ang boys are "encouraged" na mag-explore, pero ang girls are "expected" na magpigil</li>
          <li className="checked">Ang girls who get pregnant ay "disgrasya," pero ang boys ay hindi blamed</li>
          <li className="checked">Ang consent ay hindi always clear dahil sa power imbalance</li>
          <li className="checked">Ang rape at sexual abuse ay under-reported dahil sa stigma</li>
        </ul>

        <div className="sticky-note" style={{ transform: 'rotate(2deg)' }}>
          <p className="handwritten-red">
            Ang gender norms na ito ay nagiging dahilan din na hindi girls ang lumalaban sa pressure at hindi boys ang nag-reresponsibilidad.
          </p>
        </div>
      </section>

      {/* Poverty */}
      <section style={{ margin: 'var(--space-xl) 0' }}>
        <h2>Poverty & Limited Opportunities</h2>

        <p>
          Ang teenage pregnancy ay <strong>strongly linked sa poverty</strong>:
        </p>
        <Source id={6} />

        <ul className="checkbox-list">
          <li className="checked">Poor families have limited access sa health services at information</li>
          <li className="checked">Sa poor communities, early marriage/union ay minsan nakikita na "solution" sa financial problems</li>
          <li className="checked">Limited educational opportunities mean fewer alternatives</li>
        </ul>

        <p>
          NEDA estimated na ang teenage pregnancy costs the Philippines <span className="red-pen">24-42 billion pesos</span> in lost lifetime earnings.
        </p>
        <Source id={6} />
      </section>

      {/* Lack of Information */}
      <section className="graph-paper folded-corner" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <h2>Lack of Information & Services</h2>

        <p>
          Maraming kabataan ang <strong>hindi alam</strong> ang basics:
        </p>

        <ul className="checkbox-list">
          <li className="checked">Only 24% ng males at 14% ng females used protection sa first sexual encounter</li>
          <li className="checked">Only 12% ng males at 18% ng females knew when a woman is most likely to get pregnant</li>
          <li className="checked">Maraming schools ay hindi fully implementing CSE dahil sa cultural resistance</li>
          <li className="checked">Health providers minsan refuse to serve adolescents dahil sa personal beliefs</li>
          <li className="checked">Ang de-kalidad na CSE ay hindi nagtutulak sa maagang pakikipagtalik at nakatutulong sa mas ligtas na pagpili</li>
        </ul>
        <Source ids={[6, 7, 8]} />
      </section>

      {/* Child Marriage & Abuse */}
      <section style={{ margin: 'var(--space-xl) 0' }}>
        <h2>Child Marriage & Sexual Abuse</h2>

        <p className="content-notice">Content notice: This section discusses abuse and coercion.</p>

        <p>
          Ang pagbubuntis sa edad 10-14 ay maaaring senyales ng <span className="red-pen">abuse o exploitation</span>, hindi dapat sisihin ang bata:
        </p>

        <ul className="checkbox-list">
          <li className="checked">Sa mga naitalang panganganak sa edad 9-14, 21 lamang sa mga ama ang halos kaedad ng mga ina</li>
          <li className="checked">May mga proteksyon laban sa child marriage at sexual exploitation; tingnan ang <a href="#/know-the-law">Know the Law</a> para sa detalye.</li>
        </ul>

        <p className="handwritten-red">
          Ang data na ito ay indicative ng statutory rape at abuse. Hindi ito "teenage relationships."
        </p>
        <Source id={2} />
      </section>

      {/* Stigma */}
      <section className="yellow-pad torn-edge" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <h2>Stigma & Shame</h2>

        <p>
          Ang stigma ay nagpapahirap sa mga kabataan na:
        </p>

        <ul className="checkbox-list">
          <li className="checked">Magseek help sa health services</li>
          <li className="checked">Ipatuloy ang pag-aaral</li>
          <li className="checked">Makausap ang family openly</li>
          <li className="checked">Access contraception</li>
        </ul>

        <p>
          Ang stigma din ay <strong>disproportionately affects girls</strong>, while boys often escape accountability.
        </p>
      </section>

      {/* Teen Fathers */}
      <section style={{ margin: 'var(--space-xl) 0' }}>
        <h2>Shared Responsibilities of Teen Parents</h2>

        <p>
          Hindi dapat pasan ng ina lamang ang pagpapalaki at pag-aalaga. Magkatuwang ang mga magulang sa pagbuo ng ligtas at suportadong kapaligiran para sa anak.
        </p>

        <ul className="checkbox-list">
          <li className="checked"><strong>Pag-aalaga:</strong> Magbahagi sa araw-araw na pag-aalaga at pagplano para sa pangangailangan ng bata.</li>
          <li className="checked"><strong>Kalusugan:</strong> Suportahan ang prenatal at postnatal checkups at pag-usapan ang mahahalagang desisyon nang may paggalang at pahintulot.</li>
          <li className="checked"><strong>Suporta:</strong> Magbigay ng emosyonal na suporta at mag-ambag sa gastusin ayon sa kakayahan at responsibilidad.</li>
          <li className="checked"><strong>Pag-aaral:</strong> Magtulungan upang maipagpatuloy ng bawat magulang ang edukasyon at makahanap ng mapagkakatiwalaang suporta.</li>
          <li className="checked"><strong>Kaligtasan:</strong> Igalang ang hangganan ng isa't isa; walang sinuman ang dapat pilitin, takutin, o saktan.</li>
        </ul>

        <div className="sticky-note">
          <p className="handwritten">
            Parehong may pananagutan, at parehong dapat makatanggap ng angkop na suporta.
          </p>
        </div>
        <Source ids={[6, 15]} />
      </section>

      {/* Effects */}
      <section className="graph-paper folded-corner" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <h2>Effects on Teenage Students</h2>
        <p>
          Maaaring makaapekto ang pagbubuntis at pagiging magulang sa pag-aaral ng kabataang estudyante. Hindi pare-pareho ang karanasan; malaking tulong ang suporta ng paaralan, pamilya, at komunidad.
        </p>

        <ul className="checkbox-list">
          <li className="checked"><strong>Pagpapatuloy ng klase:</strong> Checkups, panganganak, pag-aalaga ng sanggol, at kakulangan sa childcare ay maaaring magpahirap sa pagpasok at pagtatapos.</li>
          <li className="checked"><strong>Pagkatuto at kapakanan:</strong> Pagod, stress, stigma, o panghuhusga ay maaaring makaapekto sa konsentrasyon at pakiramdam na ligtas sa paaralan.</li>
          <li className="checked"><strong>Mga gastusin at oras:</strong> Maaaring mahati ang oras sa pag-aaral, pag-aalaga, at paghahanap ng kita.</li>
          <li className="checked"><strong>Suporta at karapatan:</strong> Mahalaga ang flexible na tulong at ligtas na paraan upang makapagpatuloy sa edukasyon.</li>
        </ul>
        <Source ids={[10, 15]} />

        <p className="handwritten-red">Ang pagbubuntis ay hindi dahilan para ipagkait ang edukasyon; nasa Know the Law ang detalye ng proteksyon sa paaralan.</p>
      </section>

      <p>Hindi ito blame game. Ang solusyon ay suporta at systemic change, hindi shaming.</p>
    </div>
  );
};

export default WhyItHappens;
