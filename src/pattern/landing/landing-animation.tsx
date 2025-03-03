import { motion } from "framer-motion";
import Image from "next/image";
import globe from "../../../public/world.png";
import { LeftUpwardsArrow } from "../shared/animation/leftupwardsarrow";
import CategoryIcon1 from "../shared/icons/category-icon1";
import CategoryIcon2 from "../shared/icons/category-icon2";
import CategoryIcon3 from "../shared/icons/category-icon3";
import CategoryIcon4 from "../shared/icons/category-icon4";

const GlobeVisualization = () => {
  return (
    <div className="relative flex items-center justify-center h-[400px] w-[400px] mx-auto">
      {/* Animated Outer Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute w-[338px] h-[338px] border border-[#6C757D] rounded-full"
        style={{
          borderStyle: "dashed",
          borderWidth: "2px",
          borderSpacing: "10px",
        }}
      ></motion.div>

      {/* Animated Inner Orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute w-[262px] h-[262px] border-[1.5px] border-[#6C757D] rounded-full"
        style={{
          borderStyle: "dashed",
          borderWidth: "2px",
          borderSpacing: "10px",
        }}
      ></motion.div>

      <LeftUpwardsArrow className="z-50 absolute left-[13%] top-[28%] w-[6.3rem] h-[5.4rem] -rotate-[5deg] " />
      <LeftUpwardsArrow className="z-50 absolute left-[62.5%] top-[49%] w-[6.3rem] h-[5.4rem] rotate-[174deg] " />
      <LeftUpwardsArrow className="z-50 absolute left-[68%] top-[20%] w-[6.3rem] h-[5.4rem] rotate-[0deg] rotate-y-1" />
      <LeftUpwardsArrow className="z-50 absolute left-[10%] top-[63%] w-[6.3rem] h-[5.4rem] -rotate-[70deg]" />
      <LeftUpwardsArrow className="z-50 absolute left-[35%] -top-[6%] w-[6.3rem] h-[7.4rem] -rotate-[70deg] rotate-y-2" />
      <LeftUpwardsArrow className="z-50 absolute left-[10%] top-[63%] w-[6.3rem] h-[6.4rem] -rotate-[70deg] rotate-y-3" />
      <LeftUpwardsArrow className="z-50 absolute left-[50%] top-[18%] w-[6.3rem] h-[3.4rem] rotate-[0deg] rotate-y-4" />

      <CategoryIcon1 className="absolute z-50 top-[14%] left-[44%]" />
      <CategoryIcon2 className="absolute z-50 top-[27%] left-[72%]" />
      <CategoryIcon3 className="absolute z-50 top-[77%] left-[56%]" />
      <CategoryIcon4 className="absolute z-50 top-[69%] left-[23%]" />

      {/* Globe Image */}
      <Image
        src={globe}
        alt="Globe"
        width={200}
        height={200}
        className="z-10"
      />
    </div>
  );
};

export default GlobeVisualization;
