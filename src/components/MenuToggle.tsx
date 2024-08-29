import { motion } from "framer-motion";

const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  return (
    <button onClick={toggle}>
      <motion.div
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          width: "30px",
          height: "4px",
          backgroundColor: "#fff",
          borderRadius: "2px",
        }}
      />
      <motion.div
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          width: "30px",
          height: "4px",
          backgroundColor: "#fff",
          margin: "6px 0",
          borderRadius: "2px",
        }}
      />
      <motion.div
        animate={isOpen ? { rotate: -45, y: -14 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          width: "30px",
          height: "4px",
          backgroundColor: "#fff",
          borderRadius: "2px",
        }}
      />
    </button>
  );
};

export default MenuToggle;
