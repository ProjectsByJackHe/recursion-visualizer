import React, { useState, useEffect, Fragment } from 'react'
import { Graph } from 'react-d3-graph'
import { parseNodesFromCalls, parseEdgesFromNodes } from '../util/graph-util'
import OutlinedCard from './placeholder'
import './visualizer.css'


const Visualizer = (props) => {
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
       let nodes = []
       let links = []
       if (listOfNodes.length > 0) {
            nodes.push(listOfNodes.shift())
            setGraphState({
                nodes: nodes, 
                links: []
            })
       } else {
            setGraphState({
                nodes: [], 
                links: []
            })
       }
       interval = setInterval(() => {
            if (listOfEdges.length > 0) {
                // incrementally takes an item from listOfEdges and adds them to graphState.nodes
                nodes.push(listOfNodes.shift())
                links.push(listOfEdges.shift())
                setGraphState({
                    nodes: nodes, 
                    links: links
                })
            } else {
                // eslint-disable-next-line
                props.setIsRunning(false)
                clearInterval(interval)
            }
       }, ANIMATION_SPEED);
       return () => clearInterval(interval);
       // eslint-disable-next-line
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
            labelProperty: "label", 
            fontColor: "white"
        },
        d3: {
            gravity: -1000
        },
        link: {
            highlightColor: "yellow",
        },
        directed: true,
        width: window.innerWidth * 2, 
        height: window.innerHeight,
        staticGraph: !props.notJelly
    };
    // include methods to manipulate the nodes
    const onClickNode = (nodeId) => {
        let nodesSoFar = graphState.nodes 
        for (let i = 0; i < nodesSoFar.length; i++) {
            if (nodesSoFar[i].id === nodeId) {
                const originalColor = nodesSoFar[i].color
                nodesSoFar[i] = {
                    id: nodesSoFar[i].id, 
                    caller: nodesSoFar[i].caller,
                    result: nodesSoFar[i].result,
                    label: nodesSoFar[i].result,
                    color: "cyan",
                    size: nodesSoFar[i].size
                }
                setGraphState({
                    nodes: nodesSoFar,
                    links: graphState.links
                }) 
                setTimeout(() => {
                    nodesSoFar[i] = {
                        id: nodesSoFar[i].id, 
                        caller: nodesSoFar[i].caller,
                        result: nodesSoFar[i].result,
                        label: nodesSoFar[i].id,
                        color: originalColor,
                        size: nodesSoFar[i].size
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

    let placeHolder;

    if (props.isLoading) {
        console.log(props.isLoading)
        placeHolder = (
            <div className="circle">
            <div className="circleBig circleLine">
                <div className="twoQuarterBig circleLine">
                <div className="lineSmallLeft line"></div>
                <div className="lineSmallRight line"></div>
                    <div className="twoQuarterSmall circleLine">
                    <div className="lineBigUp line"></div>
                    <div className="lineBigDown line"></div>
                    <div className="circleSmall circleLine"></div>
                    </div>
                </div>
            </div>
            </div>
        )
    } else {
        // put promo stuff and instructions here
        placeHolder = (
            <OutlinedCard />
        )
    }

    return <Fragment>
        {
            graphState.nodes.length > 0 && !props.isLoading ?  
            <Graph 
                id="graph-id"
                data = {graphState}
                config = {myConfig}
                onClickNode = {onClickNode}
            /> : 
            placeHolder
        }
    </Fragment>
}

export default Visualizer