import React from 'react';
import { SvgXml } from 'react-native-svg';

export function BigArrowRight() {
    const svgString = `
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.41003 0L0.590027 2.82L9.75003 12L0.590027 21.18L3.41003 24L15.41 12L3.41003 0Z" fill="#121212"/>
    </svg>
    `;

    return (
      <SvgXml xml={svgString} />
    );
};

