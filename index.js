function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!` 
}

function mondayWork(tasks = "go to the office"){
    return `This Monday, I will ${tasks}.`
}

function wrapAdjective(flair = '*'){
    return function(adj = 'special'){
        return `You are ${flair}${adj}${flair}!`
    }
}