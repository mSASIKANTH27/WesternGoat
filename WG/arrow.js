// // DOMContentLoaded event listener
// document.addEventListener('DOMContentLoaded', () => {
//     const marker = document.getElementById('marker');
//     const rightArrow = document.getElementById('right-arrow');
//     const leftArrow = document.getElementById('left-arrow');

//     const positions = ['25.3rem', '27rem', '23.8rem'];
//     let currentPositionIndex = 0;

//     rightArrow.addEventListener('click', () => {
//         if (positions[currentPositionIndex] === '27rem' || 
//             (positions[currentPositionIndex] === '23.8rem' && currentPositionIndex !== 2)) {
//             return;
//         }

//         currentPositionIndex = (currentPositionIndex + 1) % positions.length;
//         moveMarker(positions[currentPositionIndex]);
//         zoomEffect(marker);
//         updateMaterial();  // Update material based on the new position
//     });

//     leftArrow.addEventListener('click', () => {
//         if (positions[currentPositionIndex] === '23.8rem' || 
//             (positions[currentPositionIndex] === '27rem' && currentPositionIndex !== 1)) {
//             return;
//         }

//         currentPositionIndex = (currentPositionIndex - 1 + positions.length) % positions.length;
//         moveMarker(positions[currentPositionIndex]);
//         zoomEffect(marker);
//         updateMaterial();  // Update material based on the new position
//     });

//     function moveMarker(position) {
//         marker.style.transition = 'margin-left 0.2s';
//         marker.style.marginLeft = position;
//     }

//     function zoomEffect(element) {
//         element.style.transition = 'transform 0.2s';
//         element.style.transform = 'scale(1.1)';
//         setTimeout(() => {
//             element.style.transform = 'scale(1)';
//         }, 200);
//     }

//     function updateMaterial() {
//         switch (positions[currentPositionIndex]) {
//             case '25.3rem':
//                 changeMaterial(materialGrey);
//                 break;
//             case '27rem':
//                 changeMaterial(materialRed);
//                 break;
//             case '23.8rem':
//                 changeMaterial(materialBlue);
//                 break;
//         }
//     }

//     // Initial material setting
//     updateMaterial();
// });
