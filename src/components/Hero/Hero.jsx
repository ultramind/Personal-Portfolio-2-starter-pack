import React from "react";
import css from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={`paddings innerWidth ${css.wrapper}`}>
      <div className={css.container}>
        <div className={css.upperElements}>
          <span className="primaryText">
            Hey There, <br /> I'm AkaGod
          </span>
          <span className="secondaryText">
            i design and develope beautiful <br /> things, i love what i do
          </span>
        </div>

        {/* person image */}

        <div className={css.person}>
          <img src="./person.png" alt="" />
        </div>

        {/* Email */}
        <a href="mailto:udechukwuakachukwu@gmail.com" className={css.email}>
          udechukwuakachukwu@gmail.com
        </a>
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">5</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERIFIED PROFESSIONAL</span>
            <span>FULLSTACK DEVELOPER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
