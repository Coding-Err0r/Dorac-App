import MembersCard from "./MembersCard";
import { Members, advisors } from "./Data";

import { motion } from "framer-motion";
import BG5 from "../assets/bg/bg5.png";

const Team = () => {
  return (
    <motion.div className="pb-16" style={{ backgroundImage: `url(${BG5})` }}>
      <div className="wrapper" id="team">
        <h2 className="title w-full text-center">TEam members</h2>
        <motion.div className="max-w-[1080px] mx-auto mt-10  grid md:grid-cols-2 xl:grid-cols-3 gap-y-10">
          {Members.map((data) => (
            <MembersCard key={data.id} data={data} />
          ))}
        </motion.div>
      </div>
      <div className="mb-[100px]">
        <h2 className="title w-full text-center">ADVISORS</h2>
        <div className="max-w-[700px] mx-auto flex flex-col md:flex-row gap-6 mt-10">
          {advisors.map((val) => (
            <MembersCard data={val} key={val.id} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
