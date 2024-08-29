import { OrbitControls } from "@react-three/drei";
import { Avatar2 } from "./Avatar2";

export const Experience = () => {
  return (
    <>
      <group position-y={-.5}>
        <Avatar2 />
      </group>
      <ambientLight intensity={1} />
      
    </>
  );
};