import { motion } from 'framer-motion';

// 1. We define exactly what data this card expects to receive
interface ProjectCardProps {
  shoeImage: string;   // Expects an image URL
  sketchImage: string; // Expects an image URL
  title: string;       // Expects text
  category: string;    // Expects text
}

// 2. We apply those rules to the component here (: ProjectCardProps)
const ProjectCard = ({ shoeImage, sketchImage, title, category }: ProjectCardProps) => {
  return (
    <div className="group relative w-full max-w-md overflow-hidden rounded-3xl bg-[#f5f5f5] p-6 transition-all duration-500 hover:shadow-2xl">
      {/* Category Tag */}
      <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-orange-600">
        {category}
      </span>

      <div className="relative aspect-square w-full">
        {/* The Final Product Image */}
        <img
          src={shoeImage}
          alt={title}
          className="absolute inset-0 z-10 h-full w-full object-contain transition-opacity duration-500 group-hover:opacity-0"
        />
        
        {/* The Technical Sketch (Reveals on Hover) */}
        <img
          src={sketchImage}
          alt="Technical Sketch"
          className="absolute inset-0 z-0 h-full w-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-95 group-hover:scale-100"
        />
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 italic">View Project Specs —</p>
        </div>
        <div className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
          +
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;