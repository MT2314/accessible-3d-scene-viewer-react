/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/assets/gltf/donutv4.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Donut.geometry}
        material={materials["Material.002"]}
        rotation={[Math.PI / 3, 0, 0]}
      >
        <mesh
          geometry={nodes.Icing.geometry}
          material={materials["Material.001"]}
        />
      </mesh>
      <mesh
        geometry={nodes.Sprinkle.geometry}
        material={materials.Sprinkles}
        position={[-0.05, 0.05, 0.09]}
      />
      <mesh
        geometry={nodes.Sprinkle001.geometry}
        material={materials.Sprinkles}
        position={[-0.05, 0.06, 0.09]}
      />
      <mesh
        geometry={nodes.Sprinkle002.geometry}
        material={materials.Sprinkles}
        position={[-0.06, 0.05, 0.1]}
      />
      <mesh
        geometry={nodes.Sprinkle003.geometry}
        material={materials.Sprinkles}
        position={[-0.05, 0.06, 0.09]}
      />
      <mesh
        geometry={nodes.Sprinkle004.geometry}
        material={materials.Sprinkles}
        position={[-0.06, 0.05, 0.09]}
      />
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials.Material}
        position={[-0.07, 0.05, 0.09]}
      />
    </group>
  );
}

useGLTF.preload("/assets/gltf/donutv4.gltf");
