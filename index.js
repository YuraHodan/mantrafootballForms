const formations = {
    f343: ['cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st' ],
    f3412: ['cb', 'cb', 'cb', 'wb', 'wb', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st' ],
    f3421: ['cb', 'cb', 'cb', 'wb', 'wb/w', 'dm/cm', 'dm', 'am', 'am/fw', 'fw/st' ],
    f352: ['cb', 'cb', 'cb', 'wb', 'dm', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st' ],
    f3511: ['cb', 'cb', 'cb', 'wb/w', 'dm', 'dm', 'cm', 'wb/w', 'am/fw', 'fw/st' ],
    f433: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'w/fw', 'w/fw', 'fw/st' ],
    f4312: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'cm', 'am', 'fw/st', 'fw/st' ],
    f442: ['cb', 'cb', 'lb', 'rb', 'wb', 'dm/cm', 'cm', 'wb/w', 'fw/st', 'fw/st' ],
    f4141: ['cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm/am', 'am', 'w', 'fw/st' ],
    f4411: ['cb', 'cb', 'lb', 'rb', 'dm', 'wb/w', 'cm', 'wb/w', 'am/fw', 'fw/st' ],
    f4231: ['cb', 'cb', 'lb', 'rb', 'dm', 'dm/cm', 'w/am', 'am', 'fw', 'fw/st' ],
};

const team = [];

function getMissingPlayers (teamComposition) {
    const sortTeamComposition = teamComposition.sort((a,b) => {
        const aHasExt = a.indexOf("/") > -1;
        const bHasExt = b.indexOf("/") > -1;
        return aHasExt - bHasExt;
    })
    const missingPlayers = {};

    for (let formation in formations) {
        missingPlayers[formation] = {
            variablePositions: [],
            nonAlternativePositions: []
        };
        const positions = formations[formation];
        const players = [...sortTeamComposition];
        for (let position of positions) {
            const possiblePositions = position.split('/');
            let found = false;
            for (let i = 0; i < possiblePositions.length; i++) {
                const playerPositions = players.filter(playerPosition => playerPosition.includes(possiblePositions[i]));
                if (playerPositions.length > 0) {
                    players.splice(players.indexOf(playerPositions[0]), 1);
                    found = true;
                    break;
                }
            }
            if (!found) {
                let missingPosition = possiblePositions[0];
                let player = sortTeamComposition.find(playerPosition => playerPosition.includes(missingPosition));
                if (player) {
                    const possiblePositions = [];

                    positions.forEach((position) => {
                        const positionList = position.split('/');
                        if (positionList.some((pos) => player.split('/').includes(pos))) {
                            if (!possiblePositions.includes(position)) {
                                possiblePositions.push(position);
                            }
                        }
                    });
                    if (possiblePositions.length === 1) {
                        missingPlayers[formation].nonAlternativePositions.push(possiblePositions[0]);
                    } else {
                        const positions = possiblePositions.flatMap(position => position.split('/'));
                        const uniquePositions = positions.filter((position, index) => positions.indexOf(position) === index);
                        missingPlayers[formation].variablePositions.push(...uniquePositions);
                    }
                } else {
                    missingPlayers[formation].nonAlternativePositions.push(missingPosition);
                }
            }
            missingPlayers[formation].variablePositions = missingPlayers[formation].variablePositions.filter(position => !missingPlayers[formation].nonAlternativePositions.includes(position));
            const formationPositions = positions.flatMap(position => position.split('/'));
            missingPlayers[formation].variablePositions = missingPlayers[formation].variablePositions.filter(position => formationPositions.includes(position));
            missingPlayers[formation].variablePositions.filter(position => formationPositions.some(fp => fp.includes(position)));
        }
    }

    return missingPlayers;
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
            test(getMissingPlayers(result));
        });

        options.forEach((option) => {
            select.append($('<option>', {
                value: option.value,
                text: option.text
            }));
        });

        $('#container').append(select);
    }


    function test(formations) {
        $('#formations-table').empty();
        for (let key in formations) {
            const value = formations[key];
            const variablePositions = value.variablePositions.join(', ');
            const nonAlternativePositions = value.nonAlternativePositions.join(', ');
            $('#formations-table').append(`<tr><td>${key} - </td><td>variable Positions - ${variablePositions}</td><td>non-alternative positions - ${nonAlternativePositions}</td></tr>`);
        }
    };
});



