import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CamerRig from "./CameraRig";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <canvas>
      <ambientLight intensity="0.5" />
      <Environment preset="city" />

      {/* <CameraRig> */}
      {/* <Backdrop> */}
      <center>
        <Shirt />
      </center>
      {/* </Backdrop> */}
      {/* </CameraRig> */}
    </canvas>
  );
};

export default CanvasModel;
