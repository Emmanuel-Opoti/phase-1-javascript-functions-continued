function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visFlair){
    return function (adjective = 'special'){
        return `You are ${visFlair}${adjective}${visFlair}!`
    }
}

console.log(wrapAdjective('!')('nice'))
