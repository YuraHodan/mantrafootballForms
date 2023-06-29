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


// const formations = {
//     f343: {
//         lineUp: ['cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st' ],
//         lineUpWithReserve: ['cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st' , 'cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st'],
//     },
//     f3412: {
//         lineUp: ['cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st' ],
//         lineUpWithReserve: ['cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st', 'cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st' ],
//     },
//     f3412: {
//         lineUp: ['cb', 'cb', 'cb', 'wb', 'wb/w', 'dm/cm', 'dm', 'am', 'am/fw', 'fw/st' ],
//         lineUpWithReserve: ['cb', 'cb', 'cb', 'wb', 'wb/w', 'dm/cm', 'dm', 'am', 'am/fw', 'fw/st' , 'cb', 'cb', 'cb', 'wb', 'wb/w', 'dm/cm', 'dm', 'am', 'am/fw', 'fw/st']
//     },
//     f352: {
//         lineUp: ['cb', 'cb', 'cb', 'wb', 'dm', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st' ] ,
//         lineUpWithReserve: ['cb', 'cb', 'cb', 'wb', 'dm', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st' , 'cb', 'cb', 'cb', 'wb', 'dm', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st' ]
//     },
//     f3511: {
//         lineUp: ['cb', 'cb', 'cb', 'wb/w', 'dm', 'dm', 'cm', 'wb/w', 'am/fw', 'fw/st' ],
//         lineUpWithReserve: ['cb', 'cb', 'cb', 'wb/w', 'dm', 'dm', 'cm', 'wb/w', 'am/fw', 'fw/st', 'cb', 'cb', 'cb', 'wb/w', 'dm', 'dm', 'cm', 'wb/w', 'am/fw', 'fw/st' ]
//     },
//     f433: {
//         lineUp: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st' ],
//         lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st' ]
//     },
//     f4312: {
//         lineUp: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st' ],
//         lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st' ]
//     },
//     f442: {
//         lineUp: ['cb', 'cb', 'lb', 'rb', 'wb', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st'],
//         lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'wb', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'wb', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st']
//     },
//     f4141: {
//         lineUp: ['cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm/am', 'am', 'w', 'fw/st'],
//         lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm/am', 'am', 'w', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm/am', 'am', 'w', 'fw/st']
//     },
//     f4411: {
//         lineUp: ['cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm', 'wb/w', 'am/fw', 'fw/st'],
//         lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm', 'wb/w', 'am/fw', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm', 'wb/w', 'am/fw', 'fw/st']
//     },
//     f4231: {
//         lineUp: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'w/am', 'am', 'fw', 'fw/st'],
//         lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'w/am', 'am', 'fw', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'w/am', 'am', 'fw', 'fw/st']
//     },
// };