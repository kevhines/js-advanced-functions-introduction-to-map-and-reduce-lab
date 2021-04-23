// Your code here
function mapToNegativize(array) {
    let newArray =[]
    array.forEach( element => {
        newArray.push(0-element)
    })
    return newArray
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let newArray =[]
    array.forEach( element => {
        newArray.push(2 * element)
    })
    return newArray
}

function mapToSquare(array) {
    let newArray =[]
    array.forEach( element => {
        newArray.push(element ** 2)
    })
    return newArray
}

function reduceToTotal(array, start = 0) {
    let result = start
    array.forEach( element => {
        result += element
    })
    return result 
}

function reduceToAnyTrue(array) {
    let result = false
    array.forEach( element => {
        if (element) {result = true}
    })
    return result 
}

function reduceToAllTrue(array) {
    let result = true
    array.forEach( element => {
        if (!element) { result = false}
    })
    return result 
}

