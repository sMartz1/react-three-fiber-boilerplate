import { Canvas } from '@react-three/fiber'
import Box from './components/Box/Box'

export default function App() {
    return (
        <Canvas camera={{ position: [0, 0, 2] }}>
            <Box />
        </Canvas>
    )
}
