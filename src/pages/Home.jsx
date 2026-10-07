import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Source from '../components/Source';
import TapedPhoto from '../components/TapedPhoto';
import homePhoto from '../assets/photos/notebook.avif';

const Home = () => {
  useEffect(() => {
    document.title = 'Usapang Totoo | Teenage Pregnancy sa Pilipinas';
  }, []);

  return (
    <div className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>
            <span className="handwritten">Hindi ito</span>
            {' '}
            <span className="red-pen">shaming.</span>
            <br />
            <span style={{ fontWeight: 700 }}>Teenage Pregnancy</span>
            <br />
            <span className="handwritten">sa Pilipinas</span>
          </h1>

          <p className="handwritten" style={{ fontSize: '1.4rem', margin: 'var(--space-lg) 0' }}>
            Isang totoong usap tungkol sa isang totoong problema — at kung ano ang pwede nating gawin.
          </p>

          <Source id={1} />
        </div>

        <div className="hero-visual">
          <TapedPhoto
            src={homePhoto}
            alt="A notebook on a desk with a pen, representing research and informed discussion."
            caption="Writing our own story."
            width={420}
            height={300}
            loading="eager"
            className="section-figure"
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', margin: 'var(--space-xl) 0' }}>
        <Link to="/the-numbers" className="btn">
          See the numbers →
        </Link>
      </div>

      <div className="paper-clip-card folded-corner" style={{ margin: 'var(--space-xl) 0', maxWidth: '500px' }}>
        <div className="hand-number">5.4%</div>
        <p>
          <strong>ng kababaihang 15-19 taong gulang</strong> ay naging buntis noong 2022.
          <br /><br />
          <span className="handwritten-red">Mababa kaysa sa 8.6% noong 2017, pero hindi pa sapat.</span>
        </p>
        <Source id={1} />
      </div>

      <section className="yellow-pad torn-edge" style={{ margin: 'var(--space-2xl) 0', padding: 'var(--space-xl)' }}>
        <h2 className="handwritten-red">Bakit ito mahalaga?</h2>

        <p>
          Ang teenage pregnancy ay hindi lang "problema ng mga bata." Ito ay <strong>isyung pangkalusugan, edukasyon, at ekonomiya</strong> na umaapekto sa buong bansa.
        </p>

        <ul className="checkbox-list">
          <li className="checked">Nabibigo ang mga kabataan na makapagtapos sa pag-aaral</li>
          <li className="checked">Nadadagdagan ang risk sa kalusugan ng ina at sanggol</li>
          <li className="checked">Limitado ang opportunities para sa magiging magulang na teen</li>
          <li className="checked">Madalas, ang very young mothers (10-14 years old) ay victims ng abuse</li>
        </ul>
        <Source ids={[2, 3, 4]} />

        <div className="sticky-note" style={{ margin: 'var(--space-lg) 0' }}>
          <p>
            Ang <strong>comprehensive sexuality education (CSE)</strong> ay hindi tungkol sa pag-encourage ng sex. Ito ay tungkol sa <span className="red-pen">tamang impormasyon</span>, pag-unawa sa consent, at pagprotekta sa sarili.
          </p>
        </div>

        <p>
          Sa website na ito, matutunan mo kung gaano kalaki ang problema, bakit ito nangyayari, ano ang sinasabi ng batas, at saan ka pwede makakuha ng tulong.
        </p>

        <p className="handwritten">
          Walang judgment. Langit lang pagkatapos.<br />
          <span className="handwritten-red">Totoong usap lang.</span>
        </p>
      </section>
    </div>
  );
};

export default Home;
