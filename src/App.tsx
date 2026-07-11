import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Center, Text } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import { KeyboardModel } from "./lib/models/Keyboard";
import Tree from "./lib/components/Tree";
import * as THREE from "three";

export default function App() {
  return (
    <div>
      <div>
        <div className="w-full h-screen">
          <Canvas camera={{ position: [0, 3, 7], fov: 45 }}>
            <color attach="background" args={["#b6efff"]} />

            <ambientLight intensity={2.8} />
            <directionalLight position={[5, 8, 5]} intensity={1.8} />

            {/*
            <Center>
              <KeyboardModel position={[0, 0, 0]} scale={1.5} />
            </Center>
              */}

            <OrbitControls
              enableDamping={true}
              rotateSpeed={0.8}
              dampingFactor={0.02}
              minDistance={2}
              maxDistance={15}
            />

            <Tree />

            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[20, 20]} />
              <meshStandardMaterial
                color="brown"
                roughness={1}
                metalness={0.5}
                side={THREE.DoubleSide}
              />
            </mesh>
            <mesh position={[0, 8, -8]}>
              <sphereGeometry args={[1, 32, 32]} />
              <meshBasicMaterial color="yellow" />
            </mesh>
            <mesh>
              <torusGeometry args={[0.6, 0.3, 16, 100]} />
              <meshStandardMaterial color="orange" />
            </mesh>
            <mesh position={[0, 3, 0]}>
              <capsuleGeometry args={[0.2, 1, 16, 32]} />
              <meshPhysicalMaterial
                color="white"
                transmission={1}
                roughness={0}
                thickness={0.5}
              />
            </mesh>
            <Text position={[2, 0, 1]} fontSize={1} color="white">
              Hello 3D World
            </Text>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
