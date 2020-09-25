import React, {Fragment} from 'react'
import Interval from './interval'
/**
 * TODO: 
 *  - polish the visualizer component now with react springs 
 *  - learn about dockerization and containerization to enforce safe 
 *    remote code execution 
 *  - handle more edge cases on flask server. (infinite recursion calls, runtime... etc)
 */

const Visualizer = (props: any) => {
    const callTrace = props.arrOfCalls 
    return <Interval arrOfCalls = {callTrace} />
}

export default Visualizer