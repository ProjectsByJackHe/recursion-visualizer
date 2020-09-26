import React, {Fragment, useEffect, useState} from 'react'


const Interval = (props: any) => {
    /* 
        code here to always run whenever callTrace changes.
        incrementally add values from callTrace to renderTrace
    */
    const ANIMATION_SPEED = 250; // milliseconds per interval
    const callTrace: string[][] = props.arrOfCalls
    const [renderTrace, setRenderTrace] = useState<string[][]>([])
    useEffect(() => {
        setRenderTrace([])
        let interval: NodeJS.Timeout
        let index = 0
        console.log(callTrace)
        interval = setInterval(() => {
            if (index < callTrace.length) {
                setRenderTrace(renderTrace => renderTrace.concat([callTrace[index]]))       
                index += 1  
            } else {
                clearInterval(interval)
            }
        }, ANIMATION_SPEED);
        return () => clearInterval(interval);
    }, [callTrace]);

    return <Fragment>
        <div style={{textAlign: "center", display: "flex"}}>
        {renderTrace.map((call: string[]) => {
                const intrep = parseInt(call[2]) * 50
                const marginTop = (intrep).toString() + "px"
    
                return <div style={{marginTop:marginTop, fontSize: "30px", marginLeft: "10px", marginRight: "10px"}}>
                    {props.name + call[0]}
                </div>
        })}
        </div>
    </Fragment>
}

export default Interval