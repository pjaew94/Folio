import { motion, useSpring, useTransform, useViewportScroll } from "framer-motion"
import { useEffect, useState } from "react"

const ScrollProgressBar: React.FC<{black?: boolean}> = ({black}) => {
    const [progress, setProgress] = useState(0);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.99], [0,1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 } )
    useEffect(() => {
        yRange.onChange(v => setProgress(v))
    },[scrollYProgress])

    return (
        <div className='fixed top-0 left-0 w-screen h-1 z-20'>
            <motion.div className={`h-full w-full ${black ? 'bg-black' : 'bg-red'} origin-left`} style={{pathLength, scaleX: progress}}/>
        </div>
    )
}

export default ScrollProgressBar
