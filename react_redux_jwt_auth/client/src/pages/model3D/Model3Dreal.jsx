import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useParams } from "react-router-dom";
import { useGLTF } from "@react-three/drei";

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef();
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// }

function Model3D({ ...props }) {
  const params = useParams();

  console.log(params);

  const group = useRef();
  const { nodes, materials } = useGLTF("localhost:5000/detail/scene.gltf");
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[81.95, 18.58, -143.28]}
              rotation={[0.22, 0, Math.PI]}
              scale={103.08}
            >
              <mesh
                geometry={nodes.object036_Material014_0.geometry}
                material={materials["Material.014"]}
              />
            </group>
            <group
              position={[81.95, 18.58, -143.28]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={103.08}
            >
              <mesh
                geometry={nodes.object035_Material020_0.geometry}
                material={materials["Material.020"]}
              />
              <mesh
                geometry={nodes.object035_Material019_0.geometry}
                material={materials["Material.019"]}
              />
              <mesh
                geometry={nodes.object035_Material018_0.geometry}
                material={materials["Material.018"]}
              />
              <mesh
                geometry={nodes.object035_Material017_0.geometry}
                material={materials["Material.017"]}
              />
              <mesh
                geometry={nodes.object035_Material016_0.geometry}
                material={materials["Material.016"]}
              />
              <mesh
                geometry={nodes.object035_Material015_0.geometry}
                material={materials["Material.015"]}
              />
            </group>
            <group position={[-81.95, 18.58, -143.28]} scale={103.08}>
              <mesh
                geometry={nodes.object034_Material020_0.geometry}
                material={materials["Material.020"]}
              />
              <mesh
                geometry={nodes.object034_Material019_0.geometry}
                material={materials["Material.019"]}
              />
              <mesh
                geometry={nodes.object034_Material018_0.geometry}
                material={materials["Material.018"]}
              />
              <mesh
                geometry={nodes.object034_Material017_0.geometry}
                material={materials["Material.017"]}
              />
              <mesh
                geometry={nodes.object034_Material016_0.geometry}
                material={materials["Material.016"]}
              />
              <mesh
                geometry={nodes.object034_Material015_0.geometry}
                material={materials["Material.015"]}
              />
            </group>
            <group
              position={[-81.95, 18.58, -143.28]}
              rotation={[0.07, 0, 0]}
              scale={103.08}
            >
              <mesh
                geometry={nodes.object033_Material014_0.geometry}
                material={materials["Material.014"]}
              />
            </group>
            <group
              position={[-81.95, 18.58, 121.55]}
              rotation={[2.99, 0, 0]}
              scale={103.08}
            >
              <mesh
                geometry={nodes.object032_Material014_0.geometry}
                material={materials["Material.014"]}
              />
            </group>
            <group position={[-81.95, 18.58, 121.55]} scale={103.08}>
              <mesh
                geometry={nodes.object031_Material020_0.geometry}
                material={materials["Material.020"]}
              />
              <mesh
                geometry={nodes.object031_Material019_0.geometry}
                material={materials["Material.019"]}
              />
              <mesh
                geometry={nodes.object031_Material018_0.geometry}
                material={materials["Material.018"]}
              />
              <mesh
                geometry={nodes.object031_Material017_0.geometry}
                material={materials["Material.017"]}
              />
              <mesh
                geometry={nodes.object031_Material016_0.geometry}
                material={materials["Material.016"]}
              />
              <mesh
                geometry={nodes.object031_Material015_0.geometry}
                material={materials["Material.015"]}
              />
            </group>
            <group position={[0, 56.02, 0.02]} scale={100}>
              <mesh
                geometry={nodes.object030_Material008_0.geometry}
                material={materials["Material.008"]}
              />
              <mesh
                geometry={nodes.object030_Material032_0.geometry}
                material={materials["Material.032"]}
              />
            </group>
            <group position={[0, 56.84, 0.24]} scale={100}>
              <mesh
                geometry={nodes.object029_Material024_0.geometry}
                material={materials["Material.024"]}
              />
            </group>
            <group position={[0, 86.83, -24.09]} scale={100}>
              <mesh
                geometry={nodes.object028_Material009_0.geometry}
                material={materials["Material.009"]}
              />
            </group>
            <group position={[0, 51.04, 0.33]} scale={100}>
              <mesh
                geometry={nodes.object027_Material001_0.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group position={[0, 84.41, -20.4]} scale={100}>
              <mesh
                geometry={nodes.object026_Material013_0.geometry}
                material={materials["Material.013"]}
              />
            </group>
            <group position={[0, 55.98, -66.59]} scale={100}>
              <mesh
                geometry={nodes.object025_yugimuigftyumfi_0.geometry}
                material={materials.yugimuigftyumfi}
              />
            </group>
            <group position={[0, 75.43, 58.73]} scale={100}>
              <mesh
                geometry={nodes.object023_bnfgndgfndfgm_0.geometry}
                material={materials.bnfgndgfndfgm}
              />
            </group>
            <group position={[0, 42.71, 160.45]} scale={100}>
              <mesh
                geometry={nodes.object022_tyunfryufdrymn_0.geometry}
                material={materials.tyunfryufdrymn}
              />
            </group>
            <group position={[0, 48.8, -178.76]} scale={100}>
              <mesh
                geometry={nodes.object021_yjmcdftyurd6j5rj_0.geometry}
                material={materials.yjmcdftyurd6j5rj}
              />
            </group>
            <group position={[-70.97, 81.38, -80.35]} scale={100}>
              <mesh
                geometry={nodes.object020_Material004_0.geometry}
                material={materials["Material.004"]}
              />
            </group>
            <group position={[0, 21.91, -199.37]} scale={100}>
              <mesh
                geometry={nodes.object019_rtydtrydrbdhnher_0.geometry}
                material={materials.rtydtrydrbdhnher}
              />
            </group>
            <group position={[0, 60.48, -191.79]} scale={100}>
              <mesh
                geometry={nodes.object018_Material027_0.geometry}
                material={materials["Material.027"]}
              />
            </group>
            <group position={[0, 59.75, -188.22]} scale={100}>
              <mesh
                geometry={nodes.object017_Material003_0.geometry}
                material={materials["Material.003"]}
              />
            </group>
            <group position={[0, 41.7, 186.31]} scale={100}>
              <mesh
                geometry={nodes.object016_Material031_0.geometry}
                material={materials["Material.031"]}
              />
            </group>
            <group position={[0, 43.18, 172.41]} scale={100}>
              <mesh
                geometry={nodes["object015_kitukif,uify6f_0"].geometry}
                material={materials.kitukifuify6f}
              />
            </group>
            <group position={[0, 82.44, -132.92]} scale={100}>
              <mesh
                geometry={nodes.object014_Material006_0.geometry}
                material={materials["Material.006"]}
              />
            </group>
            <group position={[0, 61.31, -195.94]} scale={100}>
              <mesh
                geometry={nodes.object013_Material011_0.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group position={[0, 52.42, 2.39]} scale={100}>
              <mesh
                geometry={nodes.object012_grill_0.geometry}
                material={materials.grill}
              />
            </group>
            <group position={[0, 41.98, 0]} scale={100}>
              <mesh
                geometry={nodes.object011_Material022_0.geometry}
                material={materials["Material.022"]}
              />
            </group>
            <group position={[0, 64.86, -135.25]} scale={100}>
              <mesh
                geometry={nodes.object010_Material026_0.geometry}
                material={materials["Material.026"]}
              />
            </group>
            <group position={[0, 68.21, -101.82]} scale={100}>
              <mesh
                geometry={nodes.object009_Material025_0.geometry}
                material={materials["Material.025"]}
              />
            </group>
            <group position={[0, 21.84, -198.87]} scale={100}>
              <mesh
                geometry={nodes.object007_Material023_0.geometry}
                material={materials["Material.023"]}
              />
            </group>
            <group position={[0, 61.21, -196.77]} scale={100}>
              <mesh
                geometry={nodes.object005_Material028_0.geometry}
                material={materials["Material.028"]}
              />
            </group>
            <group position={[0, 46.58, -0.71]} scale={100}>
              <mesh
                geometry={nodes.object004_Material029_0.geometry}
                material={materials["Material.029"]}
              />
            </group>
            <group position={[0, 42.85, 183.23]} scale={100}>
              <mesh
                geometry={nodes.object003_POLCHROME_0.geometry}
                material={materials.POLCHROME}
              />
            </group>
            <group position={[0, 40.82, 174.43]} scale={100}>
              <mesh
                geometry={nodes.object001_Material030_0.geometry}
                material={materials["Material.030"]}
              />
            </group>
            <group position={[0, 31.5, 14.14]} scale={100}>
              <mesh
                geometry={nodes.object000_Material021_0.geometry}
                material={materials["Material.021"]}
              />
            </group>
            <group position={[0.38, 55.85, 21.38]} scale={100}>
              <mesh
                geometry={nodes.object002_int_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[81.95, 18.58, 121.55]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={103.08}
            >
              <mesh
                geometry={nodes.object008_Material020_0.geometry}
                material={materials["Material.020"]}
              />
              <mesh
                geometry={nodes.object008_Material019_0.geometry}
                material={materials["Material.019"]}
              />
              <mesh
                geometry={nodes.object008_Material018_0.geometry}
                material={materials["Material.018"]}
              />
              <mesh
                geometry={nodes.object008_Material017_0.geometry}
                material={materials["Material.017"]}
              />
              <mesh
                geometry={nodes.object008_Material016_0.geometry}
                material={materials["Material.016"]}
              />
              <mesh
                geometry={nodes.object008_Material015_0.geometry}
                material={materials["Material.015"]}
              />
            </group>
            <group
              position={[81.95, 18.58, 121.55]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={103.08}
            >
              <mesh
                geometry={nodes.object006_Material014_0.geometry}
                material={materials["Material.014"]}
              />
            </group>
          </group>
        </group>
      </group>
    </Canvas>
  );
}

// localhost:3000/model3D/real/

export default function Model({ ...props }) {}

useGLTF.preload("/scene.gltf");
