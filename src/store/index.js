import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDeCal: "./threejs.png",
  fulDeCal: "./threejs.png",
});

export default state;
