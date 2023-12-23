import React from 'react';
import { SvgXml } from 'react-native-svg';

export function ClassIcon({fill}: any) {
    const svgString = `
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="1">
        <g clip-path="url(#clip0_383_2445)">
        <path d="M21 15.5H20.5V16V21V22L21.3 21.4L22 20.875L22.7 21.4L23.5 22V21V16V15.5H23H21ZM30 32.5H30.5V32V16V15.5H30H25H24.5V16V24L22.3 22.35L22 22.125L21.7 22.35L19.5 24V16V15.5H19H18H17.5V16V32V32.5H18H30ZM18 14.5H30C30.8239 14.5 31.5 15.1761 31.5 16V32C31.5 32.8239 30.8239 33.5 30 33.5H18C17.1761 33.5 16.5 32.8239 16.5 32V16C16.5 15.1761 17.1761 14.5 18 14.5Z" fill=${fill} stroke=${fill}/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_383_2445">
        <rect x="4" y="4" width="40" height="40" rx="20" fill="white"/>
        </clipPath>
        </defs>
    </svg>

    `;

    return (
      <SvgXml xml={svgString} />
    );
};

