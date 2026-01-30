import React from 'react';

interface TechBadgeProps {
  label: string;
  value: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-1 border-l border-[#333333] pl-4">
      <span className="font-mono text-[9px] text-[#FF5C00] uppercase tracking-widest">{label}</span>
      <span className="font-mono text-[10px] text-white uppercase font-bold tracking-tight">{value}</span>
    </div>
  );
};

interface TechSpecsProps {
  specs: { label: string; value: string }[];
  className?: string;
}

export const TechSpecs: React.FC<TechSpecsProps> = ({ specs, className = "" }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
      {specs.map((spec, index) => (
        <TechBadge key={index} label={spec.label} value={spec.value} />
      ))}
    </div>
  );
};
