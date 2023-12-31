import React from 'react';
import { SvgXml } from 'react-native-svg';

export function PlusIcon() {
    const svgString = `
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_107_14368)">
<rect width="56" height="56" rx="16" fill="#870D1A"/>
<path d="M35 29H29V35H27V29H21V27H27V21H29V27H35V29Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_107_14368">
<rect width="56" height="56" rx="16" fill="white"/>
</clipPath>
</defs>
</svg>

    `;

    return (
      <SvgXml xml={svgString} />
    );
};

