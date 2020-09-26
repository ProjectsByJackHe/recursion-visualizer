import React, { useState, useEffect, Fragment } from 'react'
import { Graph } from 'react-d3-graph'
import { parseNodesFromCalls, parseEdgesFromNodes } from '../../util/graph-util'
/**
 * TODO: 
 * - take a list of function calls, and write every parameter call to node. 
 * - rewrite logic in backend to retrieve a node and it's caller instead of level. 
 * - rename duplicate nodes by adding an extra whitespace. 
 */

const GraphComponent = (props) => {
    /* 
        code here to always run whenever callTrace changes.
        incrementally add values from callTrace to renderTrace
    */
   const funcName = props.name 
   const callTrace = props.callTrace
   const ANIMATION_SPEED = props.renderSpeed; // milliseconds per interval
   const [graphState, setGraphState] = useState({
       nodes: [], 
       links: []
   })

    useEffect(() => {
        /**
         * Call utility functions here to transform callTrace into a list of nodes. 
         * Also transform the list of nodes into a list of edges. 
         * Set nodes to list of nodes. 
         * Incrementally add edge by edge to links from list of edges. 
         */
       setGraphState({
           nodes: [], 
           links: []
       })
       const listOfNodes = parseNodesFromCalls(callTrace, funcName)
       const listOfEdges = parseEdgesFromNodes(listOfNodes)
       let interval
       let links = []
       interval = setInterval(() => {
            if (listOfEdges.length > 0) {
                // incrementally takes an item from listOfEdges and adds them to graphState.nodes
                links.push(listOfEdges.shift())
                setGraphState({
                    nodes: listOfNodes, 
                    links: links
                })
            } else {
                clearInterval(interval)
            }
       }, ANIMATION_SPEED);
       return () => clearInterval(interval);
   }, [callTrace, funcName, ANIMATION_SPEED]);

    const myConfig = {
        nodeHighlightBehavior: true,
        node: {
            color: "red",
            size: 500,
            highlightStrokeColor: "blue",
            fontSize: 30, 
            highlightFontSize: 50,
            labelPosition: "top",
            labelProperty: "label"
        },
        d3: {
            gravity: -1000
        },
        link: {
            highlightColor: "black",
        },
        directed: true,
        width: window.innerWidth * 2, 
        height: window.innerHeight,
        staticGraph: false
    };

    // include methods to manipulate the nodes
    const onClickNode = (nodeId) => {
        let nodesSoFar = graphState.nodes 
        for (let i = 0; i < nodesSoFar.length; i++) {
            if (nodesSoFar[i].id === nodeId) {
                nodesSoFar[i] = {
                    id: nodesSoFar[i].id, 
                    caller: nodesSoFar[i].caller,
                    result: nodesSoFar[i].result,
                    label: nodesSoFar[i].result,
                    color: "cyan"
                }
                setGraphState({
                    nodes: nodesSoFar,
                    links: graphState.links
                }) 
                setTimeout(() => {
                    if (i === 0) {
                        nodesSoFar[i] = {
                            id: nodesSoFar[i].id, 
                            caller: nodesSoFar[i].caller,
                            result: nodesSoFar[i].result,
                            label: nodesSoFar[i].id,
                            color: "green",
                            size: 800
                        }
                    } else {
                        nodesSoFar[i] = {
                            id: nodesSoFar[i].id, 
                            caller: nodesSoFar[i].caller,
                            result: nodesSoFar[i].result,
                            label: nodesSoFar[i].id,
                            color: "red"
                        }
                    }
                    setGraphState({
                        nodes: nodesSoFar,
                        links: graphState.links
                    }) 
                }, 3000);
                break
            }
        }
    }

    return <Fragment>
        {
            graphState.nodes.length > 0 ?  
            <Graph 
                id="graph-id"
                data = {graphState}
                config = {myConfig}
                onClickNode = {onClickNode}
            /> : 
            <h1>Graph placeholder</h1>
        }
    </Fragment>
}

export default GraphComponent