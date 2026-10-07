import React, { useEffect } from 'react';
import Source from '../components/Source';
import { BarChart, LineChart, ProgressBar } from '../components/Charts';
import {
  adolescentBirthTrend,
  adolescentChildbearingShare,
  adolescentPregnancyByAge,
  adolescentPregnancyByRegion,
  adolescentPregnancyByWealth,
  veryYoungMothersBirths
} from '../data/stats';

const TheNumbers = () => {
  useEffect(() => {
    document.title = 'The Numbers | Teenage Pregnancy sa Pilipinas';
  }, []);

  return (
    <div>
      <h1>
        <span className="handwritten">The</span>
        {' '}<span>Numbers</span>
      </h1>

      <p className="handwritten" style={{ fontSize: '1.3rem' }}>
        Totoong data. Walang hula-hula.
      </p>

      <section aria-label="Adolescent pregnancy charts" className="numbers-charts">
        <LineChart
          data={adolescentBirthTrend}
          title="Adolescent women aged 15-19 who have ever been pregnant"
          year="2017 and 2022"
          sourceId={1}
          takeaway="The reported share declined from 8.6% in 2017 to 5.4% in 2022."
        />
        <ProgressBar
          value={adolescentChildbearingShare.value}
          title="Share who have begun childbearing"
          year={adolescentChildbearingShare.year}
          sourceId={1}
          denominator={adolescentChildbearingShare.denominator}
          takeaway="About 5 in every 100 women aged 15-19 had begun childbearing in the 2022 survey."
        />
        <LineChart
          data={veryYoungMothersBirths}
          title="Registered births to mothers aged 9-14"
          year="2019 and 2023"
          sourceId={2}
          unit=" births"
          maxValue={4000}
          takeaway="Recorded births to very young mothers increased between 2019 and 2023."
        />
      </section>

      {/* Age Breakdown */}
      <section style={{ margin: 'var(--space-xl) 0' }}>
        <h2>By Age (2022)</h2>
        <p>
          Mas mataas sa older teens, pero ang <strong>very young mothers</strong> (10-14) ang pinaka-alarming dahil ito ay indicative ng abuse.
        </p>

        <BarChart
          data={adolescentPregnancyByAge}
          title="Reported pregnancy by selected single year of age"
          year="2022"
          sourceId={1}
          takeaway="The reported share was higher among the older selected ages shown."
        />

      </section>

      {/* Regional Differences */}
      <section className="yellow-pad torn-edge numbers-region-section" style={{ margin: 'var(--space-xl) 0' }}>
        <h2>By Region (2022)</h2>
        <p>
          Hindi pantay ang sitwasyon sa buong Pilipinas. Ang mga probinsya ay may higher rates kaysa sa urban areas.
        </p>

        <BarChart
          data={adolescentPregnancyByRegion}
          title="Selected regional rates"
          year="2022"
          sourceId={1}
          takeaway="The highest listed rate is in Northern Mindanao; these selected regions are not a complete ranking."
        />

        <p className="handwritten" style={{ marginTop: 'var(--space-md)' }}>
          Rural areas: 6.1% vs Urban areas: 4.8%
        </p>
        <Source id={1} />
      </section>

      {/* Income Disparity */}
      <section style={{ margin: 'var(--space-xl) 0' }}>
        <h2>By Wealth Quintile</h2>
        <p>
          Ang teenage pregnancy ay mas common sa <strong>poorest families</strong>.
        </p>

        <BarChart
          data={adolescentPregnancyByWealth}
          title="Reported pregnancy by wealth quintile"
          year="2022"
          sourceId={1}
          takeaway="The reported share in the poorest quintile was higher than in the wealthiest quintile."
        />

      </section>

      {/* Health Risks */}
      <section style={{ margin: 'var(--space-xl) 0' }}>
        <h2>Health Risks</h2>
        <p>
          Ang mga very young mothers (10-14) ay may higher risk ng:
        </p>

        <ul className="checkbox-list">
          <li className="checked">
            <strong>Preterm birth</strong>
            <span className="risk-definition">Kapag ipinanganak ang sanggol bago ang ika-37 linggo ng pagbubuntis.</span>
          </li>
          <li className="checked">
            <strong>Low birth weight</strong>
            <span className="risk-definition">Kapag mas mababa sa 2.5 kilo ang timbang ng sanggol sa kapanganakan.</span>
          </li>
          <li className="checked">
            <strong>Eclampsia</strong>
            <span className="risk-definition">Bihira ngunit malubhang kombulsyon na maaaring dulot ng komplikasyon sa presyon ng dugo habang buntis o nanganganak.</span>
          </li>
          <li className="checked">
            <strong>Obstetric fistula</strong>
            <span className="risk-definition">Hindi normal na butas na maaaring mabuo matapos ang matagal at mahirap na panganganak, at magdulot ng tagas ng ihi o dumi.</span>
          </li>
          <li className="checked">
            <strong>Maternal mortality</strong>
            <span className="risk-definition">Pagkamatay ng ina habang buntis, nanganganak, o matapos manganak dahil sa komplikasyong may kaugnayan sa pagbubuntis.</span>
          </li>
        </ul>

        <p className="handwritten-red" style={{ marginTop: 'var(--space-md)' }}>
          Ang mga babies ng teenage mothers din ay may higher risk ng health complications.
        </p>
      </section>

    </div>
  );
};

export default TheNumbers;
