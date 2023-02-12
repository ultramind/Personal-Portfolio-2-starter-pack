import React from "react";
import css from "./hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There, <br /> I'm AkaGod
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondaryText"
          >
            i design and develope beautiful <br /> things, i love what i do
          </motion.span>
        </div>

        {/* person image */}

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.2, 1)}
            src="./person.png"
            alt=""
          />
        </motion.div>

        {/* Email */}
        <motion.a
          variants={fadeIn("right", "tween", 0.2, 1)}
          href="mailto:udechukwuakachukwu@gmail.com"
          className={css.email}
        >
          udechukwuakachukwu@gmail.com
        </motion.a>
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.experience}
          >
            <div className="primaryText">5</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>CERIFIED PROFESSIONAL</span>
            <span>FULLSTACK DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
