import React, { useState, useEffect } from 'react'
import { Graph } from 'react-d3-graph'
import { parseNodesFromCalls } from '../../util/graph-util'
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
   const ANIMATION_SPEED = 1000; // milliseconds per interval
   const [graphState, setGraphState] = useState({
       nodes: [{id: "0", color: "black", res: "20"}, {id: "0", color: "red", res: "20"}, {id: "1"}, {id: "2"}, {id: "3"}, {id: "4"} ,{id: "5"}, {id: "6"}], 
       links: []
   })
   useEffect(() => {
        setGraphState({
            nodes: [{id: "0", color: "black", res: "20"}, {id: "0 ", color: "red", res: "20"}, {id: "1"}, {id: "2"}, {id: "3"}, {id: "4"} ,{id: "5"}, {id: "6"}], 
            links: []
        })
       let interval
       let index = 0
       interval = setInterval(() => {
            if (index === 6) {
                clearInterval(interval)
            } else {
                let links = graphState.links
                links.push({source: index.toString(), target: (index + 1).toString()})
                setGraphState({
                    nodes: graphState.nodes, 
                    links: links
                })
            }
            index++
       }, ANIMATION_SPEED);
       return () => clearInterval(interval);
   }, []);

    const myConfig = {
        nodeHighlightBehavior: true,
        node: {
            color: "red",
            size: 500,
            highlightStrokeColor: "blue",
            fontSize: 50, 
            highlightFontSize: 80,
            labelPosition: "top"
        },
        d3: {
            gravity: -1000
        },
        link: {
            highlightColor: "black",
        },
        directed: true,
        width: window.innerWidth, 
        height: window.innerHeight
    };

    return <Graph 
        id="graph-id"
        data = {graphState}
        config = {myConfig}
    />
}

export default GraphComponent