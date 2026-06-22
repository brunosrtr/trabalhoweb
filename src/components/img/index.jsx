import React from 'react';

export default function Img({ src, alt, width = 100 }) {
  return <img src={src} alt={alt} width={width} />;
}
