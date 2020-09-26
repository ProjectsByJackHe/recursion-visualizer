export function parseNodesFromCalls(calls, funcName) {
    /**
     * given an array of ["[parameter]", "result", "[caller]"], 
     * return a list of nodes with a caller where each node is unique. 
     * So if there are duplicate [parameter] or [caller], then add a space " ".
     * 
     * example: [
     *  {id: [1], caller: 0, result: 0},
     *  {id: [2], caller: [1], result: 0}, 
     *  {id: [3], caller: [2], result: 0}
     * ] 
     * 
     */
    let spaces = {}
    for (let call of calls) {
        spaces[call[0]] = ""
    }
    // "0" is the root caller
    spaces["0"] = ""

    let nodes = []
    for (let i = 0; i < calls.length; i++) {
        const param = calls[i][0]
        const result = calls[i][1]
        const caller = calls[i][2]
        // shift a new " " with param
        let callerToAdd = "(" + caller.substring(1, caller.length - 1) + ")" + spaces[caller]
        callerToAdd = funcName + callerToAdd.substring(0, callerToAdd.length - 1)
        const paramToAdd = funcName + "(" + param.substring(1, param.length - 1) + ")" + spaces[param] 
        spaces[param] += " "
        nodes.push({
            id: paramToAdd, 
            caller: callerToAdd, 
            result: result
        })
    }
    return nodes
}


export function parseEdgesFromNodes(listOfNodes) {
    /**
     * Assume each node in listOfNodes has: 
     *  - param 
     *  - caller 
     *  - result 
     * link source: caller, target: param.
     * 
     * PROBLEM: each object in the list must be unique. 
     */
    let listOfEdges = []
    for (let i = 1; i < listOfNodes.length; i++) {
        listOfEdges.push({
            source: listOfNodes[i].caller, 
            target: listOfNodes[i].id
        })
    }
    return listOfEdges
}