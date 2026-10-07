import React, { useEffect } from 'react';
import { references } from '../data/references';

const References = () => {
  useEffect(() => {
    document.title = 'References | Teenage Pregnancy sa Pilipinas';
  }, []);

  return (
    <div>
      <h1>
        <span className="handwritten">References</span>
      </h1>

      <p className="handwritten" style={{ fontSize: '1.3rem' }}>
        Every statistic, law, and claim in this website is cited. Sources verified as of January 2025.
      </p>

      {/* References List */}
      <section className="graph-paper references-sheet" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <ol className="references-list handwritten" style={{ paddingLeft: 'var(--space-xl)', lineHeight: 1.65 }}>
          {references.map(ref => (
            <li key={ref.id} id={`ref-${ref.id}`}>
              <a href={ref.url} target="_blank" rel="noreferrer noopener">
                {ref.apa}
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="yellow-pad torn-edge" style={{ margin: 'var(--space-xl) 0', padding: 'var(--space-xl)' }}>
        <h2>Photo credits</h2>
        <ul className="checkbox-list photo-credits-list">
          <li className="checked"><strong>Notebook photo:</strong> src/assets/photos/notebook.avif — Photographer: [TO VERIFY]; License/source: [TO VERIFY].</li>
          <li className="checked"><strong>Tree-lined street photo:</strong> src/assets/photos/05707jfNational_Center_for_Mental_Health_Mauway_Mandaluyong_Cityfvf_02.jpg — Photographer: [TO VERIFY]; License/source: [TO VERIFY].</li>
          <li className="checked"><strong>Classroom photo:</strong> src/assets/photos/photo-1763098844157-d0fffcc966a1.avif — Photographer: [TO VERIFY]; License/source: [TO VERIFY].</li>
        </ul>
      </section>
    </div>
  );
};

export default References;
