import { strict } from 'assert'
import React, {Fragment} from 'react'

/**
 * TODO: 
 *  - polish the visualizer component now with react springs 
 *  - learn about dockerization and containerization to enforce safe 
 *    remote code execution 
 *  - handle more edge cases on flask server. (infinite recursion calls, runtime... etc)
 */

const Visualizer = (props: any) => {
    const callTrace = props.arrOfCalls 
    // const automaticMode = props.automaticMode
    // if (automaticMode) {
    //     const renderSpeed = props.renderSpeed 
    // } else {
    //     // manual mode
    //     const renderIndex = props.renderIndex
    // }
    // create a call hierarchy. 

    const tree = <div></div>
    return <Fragment>
        <div style={{textAlign: "center", display: "flex"}}>
        {callTrace.map((call: string[]) => {
                const intrep = parseInt(call[2]) * 50
                const marginTop = (intrep).toString() + "px"
    
                return <div style={{marginTop:marginTop, fontSize: "30px", marginLeft: "10px", marginRight: "10px"}}>
                    {"fib" + call[0]}
                </div>
        })}
        </div>
    </Fragment>
}

export default Visualizer