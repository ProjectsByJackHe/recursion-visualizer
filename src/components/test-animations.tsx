import React, { Fragment, useRef} from 'react'
// eslint-disable-next-line 
import { useSpring, animated, useChain, useTrail, useTransition, useSprings } from 'react-spring'

const TestAnimations = () => {

    const toggleRef = useRef<HTMLButtonElement>(null)
    const headerRef = useRef<HTMLHeadingElement>(null)

    const config = useSpring({
        fontSize: 100,
        from: {
            fontSize: 10
        }
    })

    // eslint-disable-next-line 
    let isOn = false
    let interval: NodeJS.Timeout;


    const toggle = () => {
        if (!isOn) {
            interval = setInterval(() => {
                // do something continuously here: 
                
                // eslint-disable-next-line 
            }, 200)
            if (toggleRef && toggleRef.current) {
                toggleRef.current.innerHTML = "Stop"
            }
            isOn = !isOn
        } else {
            clearInterval(interval)
            if (toggleRef && toggleRef.current) {
                toggleRef.current.innerHTML = "Start"
            }
            isOn = !isOn
        }
    }

    return <Fragment>
        <animated.h1 style={config} ref = {headerRef}>
            Hello World
        </animated.h1>
        <button onClick = {toggle} ref = {toggleRef}>Start</button>
    </Fragment>
}

export default TestAnimations
