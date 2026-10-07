import React from 'react';
import { references, markReferenceUsed } from '../data/references';

const getSourceEntry = (id) => references.find((ref) => Number(ref.id) === Number(id));

const normalizeText = (value) => (typeof value === 'string' ? value.trim() : '');

export const Source = ({ id, ids, className = '' }) => {
  const sourceIds = Array.isArray(ids) ? ids : id != null ? [id] : [];

  const entries = sourceIds
    .map((sourceId) => getSourceEntry(sourceId))
    .filter(Boolean);

  sourceIds.forEach((sourceId) => markReferenceUsed(sourceId));

  if (!entries.length) {
    return (
      <p className={`source-line ${className}`.trim()}>
        Source: <span>[TO VERIFY]</span>
      </p>
    );
  }

  const content = entries.map((entry, index) => {
    const sourceText = normalizeText(entry.shortTitle || entry.title || entry.apa || 'Source');
    const hasUrl = typeof entry.url === 'string' && entry.url && entry.url !== '[TO VERIFY]';

    const sourceLink = hasUrl ? (
      <a
        href={entry.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open source in a new tab: ${sourceText}`}
      >
        {sourceText}
      </a>
    ) : (
      <span>{sourceText}</span>
    );

    return (
      <React.Fragment key={`${entry.id}-${index}`}>
        {index > 0 ? '; ' : ''}
        {sourceLink}
      </React.Fragment>
    );
  });

  return (
    <p className={`source-line ${className}`.trim()}>
      Source: {content}
    </p>
  );
};

export default Source;
