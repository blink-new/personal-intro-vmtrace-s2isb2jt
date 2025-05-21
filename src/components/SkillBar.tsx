import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillBar = ({ name, percentage, color }: SkillBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-lg font-medium text-white">{name}</span>
        <span className="text-sm font-semibold text-white">{percentage}%</span>
      </div>
      <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;