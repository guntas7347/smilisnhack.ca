import { Star } from "lucide-react";

const StarRating = ({ score }: { score: number }) => {
  const clamped = Math.max(0, Math.min(5, score));
  const percent = (clamped / 5) * 100;

  return (
    <div className="relative inline-block text-[20px] leading-none">
      <Star className="  text-gray-300" />

      <div
        className="absolute left-0 top-0 overflow-hidden"
        style={{ width: `${percent}%` }}
      >
        <Star className="  text-secondary fill-current" />
      </div>
    </div>
  );
};

export default StarRating;
