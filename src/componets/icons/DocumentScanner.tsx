import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

export function DocumentScanner({fill}: any) {
    const svgString = `
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="1">
        <g clip-path="url(#clip0_383_1257)">
        <path d="M16 14.5H15.5V15V17.5H14.5V13.5H18.5V14.5H16ZM32.5 15V14.5H32H29.5V13.5H33.5V17.5H32.5V15ZM15.5 33V33.5H16H18.5V34.5H14.5V30.5H15.5V33ZM32 33.5H32.5V33V30.5H33.5V34.5H29.5V33.5H32ZM29.5 18V17.5H29H19H18.5V18V30V30.5H19H29H29.5V30V18ZM30.5 30C30.5 30.8239 29.8239 31.5 29 31.5H19C18.1761 31.5 17.5 30.8239 17.5 30V18C17.5 17.1761 18.1761 16.5 19 16.5H29C29.8239 16.5 30.5 17.1761 30.5 18V30ZM21.5 21.5V20.5H26.5V21.5H21.5ZM21.5 24.5V23.5H26.5V24.5H21.5ZM21.5 27.5V26.5H26.5V27.5H21.5Z" fill=${fill} stroke=${fill}/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_383_1257">
        <rect x="4" y="4" width="40" height="40" rx="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    `;

    return (
      <SvgXml xml={svgString} />
    );
};

