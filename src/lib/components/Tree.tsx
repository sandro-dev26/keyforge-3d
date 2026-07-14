import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Tree() {
  const treeRef = useRef<THREE.Group>(null);
  const targetScale = useRef(1);

  useFrame((_, delta) => {
    if (!treeRef.current) {
      return;
    }

    if (treeRef.current?.scale.x < targetScale.current) {
      const target = treeRef.current.scale.x + delta * 1.5;
      treeRef.current.scale.setScalar(target);
    }

    if (treeRef.current?.scale.x > targetScale.current) {
      const target = treeRef.current.scale.x - delta * 1.5;
      treeRef.current.scale.setScalar(target);
    }

    const difference = Math.abs(treeRef.current.scale.x - targetScale.current);

    if (difference < 0.01) {
      treeRef.current.scale.setScalar(targetScale.current);
      return;
    }
  });

  function increaseSize() {
    targetScale.current = 1.2;
  }
  function decreaseSize() {
    targetScale.current = 1;
  }

  /*
  const direction = useRef(1);

  useFrame(() => {
    if (!treeRef.current) return;

    treeRef.current.rotation.x += 0.01;

    treeRef.current.position.x += 0.01 * direction.current;

    if (treeRef.current.position.x >= 10) {
      direction.current = -1;
    }

    if (treeRef.current.position.x <= -10) {
      direction.current = 1;
    }
  });
  */

  return (
    <group
      ref={treeRef}
      position={[2, 3, 4]}
      onPointerOver={increaseSize}
      onPointerOut={decreaseSize}
    >
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
        <meshStandardMaterial color="brown" />
      </mesh>

      <group>
        <mesh position={[0, 2, 0]}>
          <coneGeometry args={[0.75, 3, 32]} />
          <meshStandardMaterial color="green" />
        </mesh>

        <mesh position={[0, 2.5, 0]}>
          <coneGeometry args={[0.7, 2.5, 32]} />
          <meshStandardMaterial color="green" />
        </mesh>

        <mesh position={[0, 3, 0]}>
          <coneGeometry args={[0.6, 2, 32]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </group>
    </group>
  );
}
