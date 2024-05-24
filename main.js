import '@fortawesome/fontawesome-free/css/all.min.css';


// document.addEventListener("DOMContentLoaded", function() {
//     const cards = document.querySelectorAll('.card');
//
//     cards.forEach(card => {
//         const cardBody = card.querySelector('.card-body');
//         const img = cardBody.querySelector('img');
//         let scrollInterval;
//
//         card.addEventListener('mouseenter', () => {
//             scrollInterval = setInterval(() => {
//                 if (cardBody.scrollTop + cardBody.clientHeight < img.clientHeight) {
//                     cardBody.scrollTop += 1;
//                 } else {
//                     clearInterval(scrollInterval);
//                 }
//             }, 10);
//         });
//
//         card.addEventListener('mouseleave', () => {
//             clearInterval(scrollInterval);
//             cardBody.scrollTop = 0;
//         });
//     });
// });