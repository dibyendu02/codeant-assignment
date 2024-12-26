import React from "react";
import { Badge } from "../components/ui/badge";
import { Database } from "lucide-react";
import { motion } from "framer-motion";

type RepoCardProps = {
  repo: {
    name: string;
    isPublic: boolean;
    language: string;
    size: string;
    updatedAgo: string;
  };
  index: number; // Add index prop for staggered animation
};

const RepoCard: React.FC<RepoCardProps> = ({ repo, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1, // Stagger effect
        ease: "easeOut",
      }}
      className="p-4 hover:bg-[#F5F5F5] cursor-pointer"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-normal text-lg text-[20px] text-gray-900">
              {repo.name}
            </h3>
            <Badge
              variant={repo.isPublic ? "secondary" : "outline"}
              className={`text-sm px-2 py-0.5 font-normal text-blue-600 bg-blue-50 border-blue-300 rounded-full`}
            >
              {repo.isPublic ? "Public" : "Private"}
            </Badge>
          </div>
          <div className="flex items-center gap-4 md:gap-10 text-sm text-[16px] font-normal whitespace-nowrap">
            <div className="flex items-center gap-1.5">
              {repo.language}
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
            </div>
            <div className="flex items-center gap-1.5">
              <Database className="h-3 w-3" />
              {repo.size}
            </div>
            <p>Updated {repo.updatedAgo}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RepoCard;
