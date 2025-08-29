import React from 'react';

interface ResultCardProps {
  title: string;
  data: string[];
}

const ResultCard: React.FC<ResultCardProps> = ({ title, data }) => {
  return (
    <div className="bg-slate-900/50 p-5 rounded-lg h-full">
      <h3 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2 mb-3">{title}</h3>
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.map((item, index) => (
            <span key={index} className="bg-slate-700 text-amber-300 text-sm font-mono px-3 py-1 rounded-full">
              "{item}"
            </span>
          ))}
        </div>
      ) : (
        <p className="text-slate-500 italic text-sm">No items in this category.</p>
      )}
    </div>
  );
};

export default ResultCard;