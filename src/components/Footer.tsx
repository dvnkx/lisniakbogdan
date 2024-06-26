import { motion } from "framer-motion";
import { fadeOutY } from "../utils/animations";
import { footerLinks } from "../../data/index";

export const Footer = () => {
  return (
    <footer className="container flex flex-col justify-center gap-10 py-16 md:flex-row md:justify-between text-words-100">
      <motion.section
        variants={fadeOutY}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={50}
        className="flex flex-wrap gap-10 max-md:w-[50%] text-xl [&>*]:cursor-pointer "
      >
        {footerLinks.map((link, i) => {
          return (
            <a
              key={i}
              className="relative text-light hover:text-primary dark:hover:text-words-200 before:content-[''] before:w-[0%] before:h-px before:bg-secondary-100 dark:before:bg-secondary-400 before:absolute before:transition-all before:top-[27px] hover:before:w-[100%] max-md:before:h-[2px] max-md:before:top-[39px]"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          );
        })}
      </motion.section>
      <motion.p
        variants={fadeOutY}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={50}
        className="font-light text-primary"
      >
        &#169; Bogdan Lisniak
      </motion.p>
    </footer>
  );
};
