import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { OrbitControls, Center } from "@react-three/drei";
import { KeyboardModel } from "./Keyboard";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  function changeActive() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <div
        className={`${isActive ? "w-full h-screen" : "w-48 h-48 hover:shadow-lg hover:scale-[1.05] border-3 m-4 border-neutral-400/50 rounded-xl shadow-md shadow-black/50 overflow-hidden"} transition-all duration-300 ease-out`}
        onClick={changeActive}
      >
        <div
          className="w-full h-full"
          onClick={(e) => {
            if (isActive) e.stopPropagation();
          }}
        >
          <Canvas camera={{ position: [0, 3, 5], fov: 45 }}>
            <color attach="background" args={["#dadada"]} />

            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 8, 5]} intensity={1.8} />

            <Center>
              <KeyboardModel position={[0, 0, 0]} scale={1.5} />
            </Center>

            <OrbitControls
              enableDamping={true}
              rotateSpeed={0.8}
              dampingFactor={0.02}
              minDistance={2}
              maxDistance={15}
            />
          </Canvas>
        </div>
      </div>
      <h2 className="ml-4">Keyboard</h2>
    </div>
  );
}
