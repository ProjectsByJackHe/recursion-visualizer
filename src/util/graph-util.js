export function parseNodesFromCalls(calls, funcName) {
    if (calls.length > 0) {
        return [{id: "0"}, {id: "1"}, {id: "2"}, {id: "3"}, {id: "4"}, {id: "5"}, {id: "6"}, {id: "7"}]
    } else {
        return []
    }
}

export function parseEdgesFromNodes(listOfNodes) {
    if (listOfNodes.length > 0) {
        return [{source: "0", target: "1"}, {source: "1", target: "2"}, {source: "2", target: "3"}, {source: "3", target: "4"}, {source: "4", target: "5"}, {source: "5", target: "6"}, {source: "6", target: "7"} ]
    } else {
        return []
    }
}