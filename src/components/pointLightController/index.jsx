import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { PointLightHelper } from 'three'

export default function PointLightController() {
  /*   const point01 = useRef()
    const point02 = useRef()
    useHelper(point01, PointLightHelper, 1, 'blue')
    useHelper(point02, PointLightHelper, 1, 'blue') */
  return (
    <>
      <pointLight castShadow scale={1.4} position={[3, -1, .5]} intensity={1} />
      <pointLight castShadow scale={1.4} position={[-3, -1, -.5]} intensity={1} />
    </>
  )
}
