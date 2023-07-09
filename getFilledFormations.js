const formations = {
    f343: {
        lineUp: ['cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st' ],
        lineUpWithReserve: ['cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st' , 'cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st'],
    },
    f3412: {
        lineUp: ['cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st' ],
        lineUpWithReserve: ['cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st', 'cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st' ],
    },
    f3421: {
        lineUp: ['cb', 'cb', 'cb', 'wb', 'wb/w', 'dm/cm', 'dm', 'am', 'am/fw', 'fw/st' ],
        lineUpWithReserve: ['cb', 'cb', 'cb', 'wb', 'wb/w', 'dm/cm', 'dm', 'am', 'am/fw', 'fw/st' , 'cb', 'cb', 'cb', 'wb', 'wb/w', 'dm/cm', 'dm', 'am', 'am/fw', 'fw/st']
    },
    f352: {
        lineUp: ['cb', 'cb', 'cb', 'wb', 'dm', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st' ] ,
        lineUpWithReserve: ['cb', 'cb', 'cb', 'wb', 'dm', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st' , 'cb', 'cb', 'cb', 'wb', 'dm', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st' ]
    },
    f3511: {
        lineUp: ['cb', 'cb', 'cb', 'wb/w', 'dm', 'dm', 'cm', 'wb/w', 'am/fw', 'fw/st' ],
        lineUpWithReserve: ['cb', 'cb', 'cb', 'wb/w', 'dm', 'dm', 'cm', 'wb/w', 'am/fw', 'fw/st', 'cb', 'cb', 'cb', 'wb/w', 'dm', 'dm', 'cm', 'wb/w', 'am/fw', 'fw/st' ]
    },
    f433: {
        lineUp: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st' ],
        lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st' ]
    },
    f4312: {
        lineUp: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st' ],
        lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st' ]
    },
    f442: {
        lineUp: ['cb', 'cb', 'lb', 'rb', 'wb', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st'],
        lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'wb', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'wb', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st']
    },
    f4141: {
        lineUp: ['cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm/am', 'am', 'w', 'fw/st'],
        lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm/am', 'am', 'w', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm/am', 'am', 'w', 'fw/st']
    },
    f4411: {
        lineUp: ['cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm', 'wb/w', 'am/fw', 'fw/st'],
        lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm', 'wb/w', 'am/fw', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm', 'wb/w', 'am/fw', 'fw/st']
    },
    f4231: {
        lineUp: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'w/am', 'am', 'fw', 'fw/st'],
        lineUpWithReserve: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'w/am', 'am', 'fw', 'fw/st', 'cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'w/am', 'am', 'fw', 'fw/st']
    },
};

function isLineUpFilled(lineUp, players) {
    let allPositionsFilled = true;

    for (let position of lineUp) {
        const possiblePositions = position.split('/');
        let found = false;

        for (let i = 0; i < possiblePositions.length; i++) {
            const playerPositions = players.filter(playerPosition => {
                const positionRegex = new RegExp(`\\b${possiblePositions[i]}\\b`);
                return positionRegex.test(playerPosition);
            });

            if (playerPositions.length > 0) {
                players.splice(players.indexOf(playerPositions[0]), 1);
                found = true;
                break;
            }
        }

        if (!found) {
            allPositionsFilled = false;
            for (let i = 0; i < possiblePositions.length; i++) {
                const player = players.filter(playerPosition => {
                    const positionRegex = new RegExp(`\\b${possiblePositions[i]}\\b`);
                    return positionRegex.test(playerPosition);
                });

                if (!player) {
                    allPositionsFilled = false;
                    break;
                }
            }
        }
    }

    return allPositionsFilled;
}

function getFilledFormations(teamComposition) {
    const sortTeamComposition = teamComposition.sort((a, b) => {
        const aHasExt = a.indexOf("/") > -1;
        const bHasExt = b.indexOf("/") > -1;
        return aHasExt - bHasExt;
    });

    const filledFormations = {};

    for (let formation in formations) {
        filledFormations[formation] = {
            lineUp: isLineUpFilled(formations[formation].lineUp, [...sortTeamComposition]),
            lineUpWithReserve: isLineUpFilled(formations[formation].lineUpWithReserve, [...sortTeamComposition])
        };
    }

    return filledFormations;
}