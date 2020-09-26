import React, {Fragment} from 'react'
import { useTransition, animated } from 'react-spring'

const Transitions = (props: any) => {
    const callTrace = props.arrOfCallTrace
    console.log(callTrace)
    const transitions = useTransition(callTrace, item => item.keys, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' }
    })
    console.log(transitions)
    return <Fragment>
        {transitions.map(({item, props, key}) => {
            return <animated.div key = {key} style = {props}>{item[0]}</animated.div>
        })}
    </Fragment>
}

export default Transitions