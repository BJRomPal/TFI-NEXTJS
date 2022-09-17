import vl, { fieldQ } from 'vega-lite-api';
export const viz = vl.markPoint()
    .encode(
        vl.x(fieldQ('acceleration')),
        vl.y(fieldQ('horsepower'))
);

