import React, { useState, useEffect, useRef } from 'react'
import FOG from 'vanta/dist/vanta.fog.min'

const AnimateBackground = (props) => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(FOG({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0x0,
                midtoneColor: 0xffffff,
                lowlightColor: 0x73ff,
                baseColor: 0x0,
                blurFactor: 0.14,
                speed: 0.60,
                zoom: 0.60
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div className="background" ref={myRef}>
    </div>
}

export default AnimateBackground;
