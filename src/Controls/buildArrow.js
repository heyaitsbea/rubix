import React from 'react';
// buildArrow is called in another part of the prgoram

export default (spinSlice) => ({slice, forward, style}) =>( // this function has no name. taking in a param called spinSlice

  <svg className='Arrow' width='36px' height='36px' viewBox='0 0 64 64'// creats a basic arrow shape
      onClick={() => spinSlice(slice, forward)} style={style} 
      opacity  = ".25"
      > 
    <circle fill='#4B61A1' cx='31.628' cy='31.627' r='29.628' />
    <polyline fill='#8088BA' points='40.344,27.261 8.258,27.261 8.258,36.367
                                    40.344,36.367 31.329,47.751 56.298,31.815
                                    31.329,15.215'
    />
  </svg>
);
