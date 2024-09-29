// ModelEditor.jsx
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { saveAs } from "file-saver";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

function EditableModel({ url, fileType, editingState }) {
  const meshRef = useRef();
  const model = useLoader(fileType, url);

  // Apply transformations
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = editingState.rotation.x;
      meshRef.current.rotation.y = editingState.rotation.y;
      meshRef.current.rotation.z = editingState.rotation.z;
      meshRef.current.scale.set(
        editingState.scale,
        editingState.scale,
        editingState.scale
      );
      meshRef.current.position.set(
        editingState.position.x,
        editingState.position.y,
        editingState.position.z
      );
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={model.geometry || model}>
        <meshStandardMaterial color="orange" />
      </mesh>
    </group>
  );
}

export default function ModelEditor({ modelUrl, fileType }) {
  // Handlers to update editing state (can be sliders, buttons, etc.)
  const [state, setState] = useState({
    scale: 0.1,
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 0, y: 0, z: 0 },
  });

  const exportModel = () => {
    // Handle model export if needed
  };

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls />
        <EditableModel
          url={modelUrl}
          fileType={fileType}
          editingState={state}
        />
      </Canvas>
    </div>
  );
}
