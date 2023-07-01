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

const team = [];

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



$(document).ready(function() {
    const options = [
        {text: "Оберіть позицію"},
        {value: "cb", text: "CB"},
        {value: "lb", text: "LB"},
        {value: "rb", text: "RB"},
        {value: "wb", text: "WB"},
        {value: "dm", text: "DM"},
        {value: "cm", text: "CM"},
        {value: "am", text: "AM"},
        {value: "w", text: "W"},
        {value: "fw", text: "FW"},
        {value: "st", text: "ST"},
        {value: "cb/rb", text: "CB/RB"},
        {value: "cb/lb", text: "CB/LB"},
        {value: "cb/lb/wb", text: "CB/LB/Wb"},
        {value: "cb/rb/wb", text: "CB/RB/Wb"},
        {value: "lb/rb/wb", text: "LB/RB/WB"},
        {value: "rb/wb/dm", text: "RB/WB/DM (new)"},
        {value: "cb/dm", text: "CB/DM"},
        {value: "rb/wb", text: "RB/Wb"},
        {value: "lb/wb", text: "LB/WB"},
        {value: "dm/cm", text: "DM/CM"},
        {value: "dm/wb", text: "DM/WB"},
        {value: "cm/wb", text: "CM/WB"},
        {value: "cm/am", text: "CM/AM"},
        {value: "cm/w", text: "CM/W"},
        {value: "cm/am/w", text: "CM/AM/W"},
        {value: "am/w", text: "AM/W"},
        {value: "am/w/fw", text: "AM/W/FW"},
        {value: "am/fw", text: "AM/FW"},
        {value: "w/fw", text: "W/FW"},
        {value: "w/wb", text: "W/WB"},
    ];

    for (let i = 1; i <= 23; i++) {
        const select = $('<select>', {
            id: `pet-select-${i}`,
        });

        $('select').change(function() {
            const selectedId = $(this).attr('id');
            const selectedValue = $(this).val();
            team[selectedId] = selectedValue;
            const result = Object.values(team).map(item => item);
            show(getFilledFormations(result), result);
        });

        options.forEach((option) => {
            select.append($('<option>', {
                value: option.value,
                text: option.text
            }));
        });

        $('#container').append(select);
    }


    function show(testFormations, result) {
        const $formationsContainer = $('#formations-container');
        $formationsContainer.empty();

        for (let key in testFormations) {
            const value = testFormations[key];

            const $formationBlock = $('<div>').addClass('formation-block');
            const $formationName = $('<div>').text(key + ' : ' + formations[key].lineUp).addClass('formation-name');

            if (value.lineUp && value.lineUpWithReserve) {
                $formationBlock.addClass('green-bg');
            } else if (value.lineUp) {
                $formationBlock.addClass('yellow-bg');
            } else {
                $formationBlock.addClass('red-bg');
            }

            $formationBlock.append($formationName);
            $formationsContainer.append($formationBlock);
        }

        $("#result").text('[' + result  + ']');
    }
});




