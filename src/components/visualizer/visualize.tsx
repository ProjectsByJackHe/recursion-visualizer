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

    return <Fragment>
        <ol>
        {
            callTrace.map((call: String[]) => {
                return <li>
                    {call[0] + " || " + call[1] + "||" + call[2]}
                </li>
            })
        }
        </ol>
    </Fragment>
}

export default Visualizer