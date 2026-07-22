import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Group, Mesh } from 'three'

function Crystal() {
  const mesh = useRef<Mesh>(null)

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.25
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.2
  })

  return (
    <Float speed={1.6} rotationIntensity={0.55} floatIntensity={1.1}>
      <mesh ref={mesh} scale={1.55}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#2ee6d6"
          emissive="#0d3d38"
          roughness={0.18}
          metalness={0.72}
          distort={0.28}
          speed={2.2}
        />
      </mesh>
      <mesh scale={1.78}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#f5b942" wireframe transparent opacity={0.28} />
      </mesh>
    </Float>
  )
}

function OrbitRing({
  radius,
  speed,
  color,
}: {
  radius: number
  speed: number
  color: string
}) {
  const group = useRef<Group>(null)
  const positions = useMemo(() => {
    const pts: [number, number, number][] = []
    for (let i = 0; i < 18; i += 1) {
      const a = (i / 18) * Math.PI * 2
      pts.push([Math.cos(a) * radius, Math.sin(a) * 0.25, Math.sin(a) * radius])
    }
    return pts
  }, [radius])

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * speed
  })

  return (
    <group ref={group} rotation={[0.4, 0.2, 0.15]}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} />
        </mesh>
      ))}
    </group>
  )
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.75]}>
      <color attach="background" args={['#05070d']} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 3, 2]} intensity={1.4} color="#dffcf8" />
      <pointLight position={[-3, -2, -2]} intensity={1.8} color="#f5b942" />
      <Stars radius={55} depth={40} count={1400} factor={3.2} saturation={0} fade speed={0.6} />
      <Crystal />
      <OrbitRing radius={2.35} speed={0.35} color="#2ee6d6" />
      <OrbitRing radius={2.9} speed={-0.22} color="#f5b942" />
    </Canvas>
  )
}
