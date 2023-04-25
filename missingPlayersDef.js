// const missingPlayers = {};
//
// for (let formation in formations) {
//     missingPlayers[formation] = [];
//     const positions = formations[formation];
//     const players = [...teamComposition];
//     for (let position of positions) {
//         const possiblePositions = position.split('/');
//         let found = false;
//         for (let i = 0; i < possiblePositions.length; i++) {
//             const playerPositions = players.filter(playerPosition => playerPosition.includes(possiblePositions[i]));
//             if (playerPositions.length > 0) {
//                 players.splice(players.indexOf(playerPositions[0]), 1);
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             let missingPosition = possiblePositions[0];
//             let player = teamComposition.find(playerPosition => playerPosition.includes(missingPosition));
//             if (player) {
//                 const possiblePositions = [];
//
//                 positions.forEach((position) => {
//                     const positionList = position.split('/');
//                     if (positionList.some((pos) => player.split('/').includes(pos))) {
//                         if (!possiblePositions.includes(position)) {
//                             possiblePositions.push(position);
//                         }
//                     }
//                 });
//                 missingPlayers[formation].push(possiblePositions);
//
//             } else {
//                 missingPlayers[formation].push(missingPosition);
//             }
//         }
//     }
// }