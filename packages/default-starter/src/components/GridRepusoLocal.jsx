// // https://widgets.thereviewsplace.com/2.0/rw-widget-grid.js
// // https://cleverbeagle.com/blog/articles/tutorial-how-to-load-third-party-scripts-dynamically-in-javascript
// import React from 'react';
//
//
// const GridRepusoLocal = (callback) => {
//     const existingScript = document.getElementById('googleMaps');
//
//     if (!existingScript) {
//         const script = document.createElement('script');
//         script.src = 'https://widgets.thereviewsplace.com/2.0/rw-widget-grid.js';
//         script.id = 'googleMaps';
//         document.body.appendChild(script);
//
//         script.onload = () => {
//             if (callback) callback();
//         };
//     }
//
//     if (existingScript && callback) callback();
// };