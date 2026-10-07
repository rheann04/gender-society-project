import React from 'react';

const TapedPhoto = ({
  src,
  alt,
  caption,
  width = 400,
  height = 300,
  className = '',
  rotation = -2,
  variant = '',
  loading = 'lazy',
  style = {},
}) => {
  if (!src) return null;

  return (
    <figure
      className={`taped-photo ${variant} ${className}`.trim()}
      style={{
        '--photo-rotation': `${rotation}deg`,
        ...style,
      }}
    >
      <div className="taped-photo__frame">
        <img src={src} alt={alt} width={width} height={height} loading={loading} />
      </div>
      {caption ? <figcaption className="photo-caption">{caption}</figcaption> : null}
    </figure>
  );
};

export default TapedPhoto;
