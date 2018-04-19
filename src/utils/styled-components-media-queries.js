import { css } from "styled-components";

const sizes = {
  giant: 1600,
  desktop: 1200,
  laptop: 992,
  tablet: 768,
  phone: 420
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
