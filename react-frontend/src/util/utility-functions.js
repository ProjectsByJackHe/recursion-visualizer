// getFuncName helper
const findDef = (s, code) => {
    const lookFor = "fed"
    for (let i = 0; i < lookFor.length; i++) {
        if (!(s - i >= 0 && lookFor[i] === code[s - i])) {
            return false
        }
    }
    // we know now that s is the starting point for 'f' in 'def'. 
    let functionName = ""
    for (let j = s + 1; j < code.length; j++) {
        if (code[j] === "(") {
            break
        }
        if (code[j] !== " ") {
            functionName += code[j]
        } 
    }
    return functionName
}
/**
 * @param {string} code 
 */
export function getFuncName(code) {
    // search for 'def' and get whatever text comes after ' ' and ends at '('
    // if no def was found or if functionName is > 8 characters long, then return undefined. 
    for (let i = code.length - 1; i >= 0; i--) {
        // parse backwards to find the word 'def' 
        let functionName = findDef(i, code)
        if (functionName !== false) {
            return functionName
        }
    }
    return -1
}


// getFuncCall helper
const reverseString = (str) => {
    let ans = ""
    for (let c of str) {
        ans = c + ans
    }
    return ans
}

// getFuncCall helper
const findCall = (s, code, functionName) => {
    const lookFor = functionName
    for (let i = 0; i < lookFor.length; i++) {
        if (!(s - i >= 0 && lookFor[i] === code[s - i])) {
            return false
        }
    }
    // we know that at position s is the last character for functionName
    // check that there is no 'def' a few characters later. 
    let check1 = s - lookFor.length - 1 >= 0 && code[s - lookFor.length - 1] === "f"
    let check2 = s - lookFor.length - 2 >= 0 && code[s - lookFor.length - 2] === "e"
    let check3 = s - lookFor.length - 3 >= 0 && code[s - lookFor.length - 3] === "d"

    if (check1 && check2 && check3) {
        return false
    }
    let functionCall = ""
    for (let k = s - lookFor.length; k < code.length; k++) {
        if (code[k] !== ")") {
            functionCall += code[k]
        } else {
            functionCall += ")"
            return functionCall
        }
    }
    return false
}
/**
 * @param {string} code 
 * @param {string} functionName 
 */
export function getFuncCall(code, functionName) {
    // parse code in reverse, and actively search for functionName. 
    // if found, remember index i, and go backwards some more to look for 'fed', 
    // not counting spaces. If we encounter 3 foreign characters that are not 'fed', we 
    // are good. 
    // parse forward from i and collect the entire function call, ending at ")".
    // if no ")" was found, then return -1. 
    // once entire function call is collected, store i, and store i + functionCall.length 
    // return ['call', [i, i + functionCall.length]]
    const lookFor = reverseString(functionName)
    for (let i = code.length - 1; i >= 0; i--) {
        let call = findCall(i, code, lookFor)
        if (call) {
            return [call, [i - functionName.length, i + (call.length - functionName.length)]]
        }
    }
    return -1
}



/**
 * 
 * @param {string} code 
 * @param { -1 | (string | number[])[]} callLocation 
 */
export function truncateFuncCall(code, functionCall) {
    // completely remove functionCall from code via it's callLocation. 
    // split the entire code string from [s] to [s + functionCall.length]
    // recombine the split parts. 
    const callLocation = functionCall[1]
    let left = "" 
    let right = ""
    for (let i = 0; i < callLocation[0]; i++) {
        left += code[i]
    }
    for (let j = callLocation[1] + 1; j < code.length; j++) {
        right += code[j]
    }
    return left + right 
}