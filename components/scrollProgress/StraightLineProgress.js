import styles from './style.module.scss';
import { motion, useScroll } from 'framer-motion';

export default function StraightLineProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles.straightProgressBar}
      style={{ scaleX: scrollYProgress }}
    />
  );
}
