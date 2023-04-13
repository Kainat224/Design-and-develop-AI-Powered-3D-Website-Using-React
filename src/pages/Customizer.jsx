import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { config } from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIpicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";

const customizer = () => {
  return <div>customizer</div>;
};

export default customizer;
