import React from 'react';
import { SvgXml } from 'react-native-svg';

export function TestIcon({fill}: any) {
    const svgString = `
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="1">
<g clip-path="url(#clip0_383_540)">
<path d="M26.3499 15.1702L26.4693 15.5H26.82H31C31.8239 15.5 32.5 16.1761 32.5 17V33C32.5 33.8239 31.8239 34.5 31 34.5H17C16.1761 34.5 15.5 33.8239 15.5 33V17C15.5 16.1761 16.1761 15.5 17 15.5H21.18H21.5307L21.6501 15.1702C22.0027 14.1963 22.9228 13.5 24 13.5C25.0772 13.5 25.9973 14.1963 26.3499 15.1702ZM31 33.5H31.5V33V17V16.5H31H29H28.5V17V19.5H19.5V17V16.5H19H17H16.5V17V33V33.5H17H31ZM25.5 16C25.5 15.1739 24.8261 14.5 24 14.5C23.1739 14.5 22.5 15.1739 22.5 16C22.5 16.8261 23.1739 17.5 24 17.5C24.8261 17.5 25.5 16.8261 25.5 16Z" fill=${fill} stroke=${fill}/>
</g>
</g>
<defs>
<clipPath id="clip0_383_540">
<rect x="4" y="4" width="40" height="40" rx="20" fill="white"/>
</clipPath>
</defs>
</svg>

    `;

    return (
      <SvgXml xml={svgString} />
    );
};

