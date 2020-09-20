export function getFuncName(code) {
    // search for 'def' and get whatever text comes after ' ' and ends at '('
    // if no def was found or if functionName is > 8 characters long, then return undefined. 
    return code 
}

export function getFuncCall(code, functionName) {
    // parse code in reverse, and actively search for functionName. 
    // if found, remember index i, and go backwards some more to look for 'fed', 
    // not counting spaces. If we encounter 3 foreign characters that are not 'fed', we 
    // are good. 
    // parse forward from i and collect the entire function call, ending at ")".
    // if no ")" was found, then return undefined. 
    // once entire function call is collected, store i, and store i + functionCall.length 
    // return ['call', [i, i + functionCall.length]]

    return code
}

export function truncateFuncCall(code, callLocation) {
    // completely remove functionCall from code via it's callLocation. 
    // split the entire code string from [s] to [s + functionCall.length]
    // recombine the split parts. 
    return code 
}