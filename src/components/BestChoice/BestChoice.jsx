import { motion } from "framer-motion";
import { GrUserExpert } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiTalk } from "react-icons/gi";
import { LiaHandshake } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import "animate.css";

import "./Card.css";

const cardVariants = {
  hover: {
    scale: 1.05, // Slightly increase size
    y: -10, // Move up 10px
    transition: { type: "spring", stiffness: 300 }, // Smooth spring transition
  },
  initial: {
    scale: 1, // Normal size
    y: 0, // Original position
  },
};

const BestChoice = () => {
  return (
    <div className="my-10">
      <div>
        <h2 className="text-3xl font-semibold text-center mb-10 animate__animated animate__bounceInLeft 	animate__slower">
          Why Choose Us?
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <div>
            <h2 className="text-lg font-semibold my-4 flex items-center gap-1">
              <span>
                <GrUserExpert></GrUserExpert>
              </span>
              Expertise and Experience
            </h2>
            <p>
              With years of experience in the industry, our team brings a wealth
              of knowledge and technical expertise to every project. We have a
              proven track record of delivering successful solutions tailored to
              client needs.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <div>
            <h2 className="text-lg font-semibold my-4 flex items-center gap-1">
              <span>
                <GiProgression></GiProgression>
              </span>
              Innovative Solutions
            </h2>
            <p>
              We pride ourselves on staying at the forefront of technological
              advancements. By implementing cutting-edge tools and practices, we
              provide innovative solutions that drive efficiency, growth, and
              long-term success.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <div>
            <h2 className="text-lg font-semibold my-4 flex items-center gap-1">
              <span>
                <RiCustomerService2Fill></RiCustomerService2Fill>
              </span>
              Customer-Centric Approach
            </h2>
            <p>
              Our clients are at the heart of everything we do. We work closely
              with you to understand your unique requirements and challenges,
              ensuring personalized service and solutions that align with your
              goals.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <div>
            <h2 className="text-lg font-semibold my-4 flex items-center gap-1">
              <span>
                <GiTalk></GiTalk>
              </span>
              Transparent Communication
            </h2>
            <p>
              We believe in open and transparent communication throughout every
              phase of the project. From initial consultation to final delivery,
              we keep you informed, involved, and updated on the progress.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <div>
            <h2 className="text-lg font-semibold my-4 flex items-center gap-1">
              <span>
                <LiaHandshake></LiaHandshake>
              </span>
              Commitment to Quality
            </h2>
            <p>
              Quality is a top priority in everything we do. We adhere to
              rigorous standards, ensuring that every solution we deliver meets
              the highest levels of performance, security, and reliability.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <div>
            <h2 className="text-lg font-semibold my-4 flex items-center gap-1">
              <span>
                <TbTruckDelivery></TbTruckDelivery>
              </span>
              Timely Delivery
            </h2>
            <p>
              We understand the importance of deadlines, and our team is
              committed to delivering projects on time without compromising on
              quality. Efficient planning and execution are our key strengths.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BestChoice;
