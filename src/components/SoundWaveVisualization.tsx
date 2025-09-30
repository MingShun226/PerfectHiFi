import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SoundWaveVisualizationProps {
  barCount?: number;
  className?: string;
}

const SoundWaveVisualization = ({
  barCount = 20,
  className = ""
}: SoundWaveVisualizationProps) => {
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const generateHeights = () => {
      const newHeights = Array.from({ length: barCount }, () =>
        Math.random() * 100 + 20
      );
      setHeights(newHeights);
    };

    generateHeights();
    const interval = setInterval(generateHeights, 200);

    return () => clearInterval(interval);
  }, [barCount]);

  return (
    <div className={`flex items-end space-x-1 ${className}`}>
      {heights.map((height, index) => (
        <motion.div
          key={index}
          className="bg-primary/60 rounded-full"
          style={{
            width: `${Math.max(2, barCount > 15 ? 3 : 4)}px`,
          }}
          animate={{
            height: `${height}%`,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default SoundWaveVisualization;