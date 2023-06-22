import { Canvas } from '@react-three/fiber'
import Box from './components/Box/Box'
import Polyhedron from './components/Polyhedron/Polyhedron'
import * as THREE from 'three'
export default function App() {
    const polyhedron = [
        new THREE.BoxGeometry(),
        new THREE.SphereGeometry(0.785398),
        new THREE.DodecahedronGeometry(0.785398)
    ]
    return (
        <Canvas camera={{ position: [0, 0, 2] }}>
            {/* <Box position={[-0.75, 0, 0]} name="A" />
            <Box position={[0.75, 0, 0]} name="B" /> */}
            <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
        </Canvas>
    )
}
