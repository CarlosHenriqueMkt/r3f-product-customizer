import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import PointLightController from '../pointLightController'

export default function WorkStation({ children }) {

  return (
    <Canvas>
      <PointLightController />
      <OrbitControls enabled enablePan={false} enableZoom />
      <Environment
        background={false}
        preset='city'
      />
      <PerspectiveCamera fov={55} position={[0, 0, 10]} makeDefault />
      {children}
    </Canvas>
  )
}