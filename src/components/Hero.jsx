import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation(["hero"]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t("hi")} <span className="text-[#915EFF]">{t("ramtin")}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t("I develop")} <br className="sm:block hidden" />
            {t("interfaces")}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-evenly items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
        <div className=" w-40 flex justify-center items-center">
          <motion.svg
            animate={{
              x: [0, 24, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#aaa6c3"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#aaa6c3"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </motion.svg>
          <motion.svg
            animate={{
              x: [0, 24, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#aaa6c3"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#aaa6c3"
              class="w-4 h-4 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </motion.svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
