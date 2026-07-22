import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars, Sparkles } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Group, Mesh } from 'three'
import * as THREE from 'three'

function Core() {
  const mesh = useRef<Mesh>(null)
  const wire = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const x = state.pointer.x
    const y = state.pointer.y
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.35 + x * 0.4
      mesh.current.rotation.x = Math.sin(t * 0.4) * 0.25 + y * 0.25
    }
    if (wire.current) {
      wire.current.rotation.y = -t * 0.2 + x * 0.2
      wire.current.rotation.z = t * 0.12
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.7} floatIntensity={1.4}>
      <mesh ref={mesh} scale={1.7}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#2ee6d6"
          emissive="#083833"
          roughness={0.12}
          metalness={0.85}
          distort={0.42}
          speed={2.8}
        />
      </mesh>
      <mesh ref={wire} scale={2.05}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#f5b942" wireframe transparent opacity={0.32} />
      </mesh>
      <mesh scale={2.45}>
        <torusGeometry args={[1, 0.01, 16, 120]} />
        <meshBasicMaterial color="#2ee6d6" transparent opacity={0.45} />
      </mesh>
    </Float>
  )
}

function OrbitRing({
  radius,
  speed,
  color,
  count = 24,
  tilt = 0.5,
}: {
  radius: number
  speed: number
  color: string
  count?: number
  tilt?: number
}) {
  const group = useRef<Group>(null)
  const positions = useMemo(() => {
    const pts: [number, number, number][] = []
    for (let i = 0; i < count; i += 1) {
      const a = (i / count) * Math.PI * 2
      pts.push([Math.cos(a) * radius, Math.sin(a) * 0.18, Math.sin(a) * radius])
    }
    return pts
  }, [radius, count])

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * speed
  })

  return (
    <group ref={group} rotation={[tilt, 0.15, 0.2]}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i % 4 === 0 ? 0.05 : 0.028, 12, 12]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  )
}

function MouseLight() {
  const light = useRef<THREE.PointLight>(null)
  useFrame((state) => {
    if (!light.current) return
    light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, state.pointer.x * 4, 0.1)
    light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, state.pointer.y * 2.5, 0.1)
  })
  return <pointLight ref={light} intensity={2.2} color="#7cf9ef" distance={12} />
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.6], fov: 40 }} dpr={[1, 1.6]}>
      <color attach="background" args={['#03050a']} />
      <fog attach="fog" args={['#03050a', 6, 16]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 4, 2]} intensity={1.6} color="#e8fffb" />
      <pointLight position={[-4, -2, -2]} intensity={2} color="#f5b942" />
      <MouseLight />
      <Stars radius={70} depth={50} count={2200} factor={3.6} saturation={0} fade speed={0.85} />
      <Sparkles count={60} scale={8} size={3} speed={0.45} opacity={0.55} color="#2ee6d6" />
      <Core />
      <OrbitRing radius={2.4} speed={0.42} color="#2ee6d6" />
      <OrbitRing radius={3.05} speed={-0.28} color="#f5b942" tilt={-0.55} count={28} />
      <OrbitRing radius={3.6} speed={0.18} color="#ff6b4a" tilt={0.9} count={20} />
    </Canvas>
  )
}
