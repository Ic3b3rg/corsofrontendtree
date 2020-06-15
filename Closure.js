function interviewQuestion(job){
    return function(name){
        if(job=== 'designer'){
            return console.log(job + ' '+name+' techer')
        }else if (job=== 'teacher'){
            return console.log(job + ' '+name +' techer')
        }else{
           return console.log(job + ' '+name+' techer')
        }
    }
}

interviewQuestion('designer')('jhon')