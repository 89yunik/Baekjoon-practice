const readline = require('readline');
const { arrayBuffer } = require('stream/consumers');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let [cnt, inputs] = [0, []]

rl.on('line', function(x){
    if(cnt === 0) cnt = parseInt(x)+1
    else inputs.push(x.split(' '))
    if(cnt === 1) rl.close()
    cnt--
}).on('close', function(){
    let queue = []
    for(input of inputs) {
        switch(input[0]){
            case 'push' : 
            queue.push(parseInt(input[1]))
            break;
            case 'pop' : 
            queue.length !== 0 ? console.log(queue.shift()) : console.log(-1)
            break;
            case 'size' : 
            console.log(queue.length)
            break;
            case 'empty' : 
            queue.length === 0 ? console.log(1) : console.log(0)
            break;
            case 'front' : 
            queue.length !== 0 ? console.log(queue[0]) : console.log(-1)
            break;
            case 'back' : 
            queue.length !== 0 ? console.log(queue[queue.length-1]) : console.log(-1)
            break;
        }
        // if(input[0] === 'push') queue.push(parseInt(input[1]))
        // if(input[0] === 'pop') queue.length !== 0 ? console.log(queue.shift()) : console.log(-1)
        // if(input[0] === 'size') console.log(queue.length)
        // if(input[0] === 'empty') queue.length === 0 ? console.log(1) : console.log(0)
        // if(input[0] === 'front') queue.length !== 0 ? console.log(queue[0]) : console.log(-1)
        // if(input[0] === 'back') queue.length !== 0 ? console.log(queue[queue.length-1]) : console.log(-1)
    }
})