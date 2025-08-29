import React, { useState } from 'react';
import { ApiResponse } from '../types';
import ResultCard from './ResultCard';

interface ResponseDisplayProps {
  response: ApiResponse;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response }) => {
  const [showRaw, setShowRaw] = useState(false);

  return (
    <div className="bg-black/30 backdrop-blur-md border border-slate-800 p-6 rounded-lg shadow-xl mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">API Response</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Info Card */}
        <div className="bg-slate-900/50 p-5 rounded-lg col-span-1 md:col-span-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
           <h3 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2 mb-3">User Information</h3>
           <div className="space-y-2 text-sm">
              <p><span className="font-medium text-slate-400">Success Status:</span> <span className="text-green-400 font-bold">{String(response.is_success)}</span></p>
              <p><span className="font-medium text-slate-400">User ID:</span> {response.user_id}</p>
              <p><span className="font-medium text-slate-400">Email:</span> {response.email}</p>
              <p><span className="font-medium text-slate-400">Roll Number:</span> {response.roll_number}</p>
           </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <ResultCard title="Even Numbers" data={response.even_numbers} />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <ResultCard title="Odd Numbers" data={response.odd_numbers} />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <ResultCard title="Alphabets (Uppercase)" data={response.alphabets} />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <ResultCard title="Special Characters" data={response.special_characters} />
        </div>

        {/* Calculations Card */}
        <div className="bg-slate-900/50 p-5 rounded-lg col-span-1 md:col-span-2 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h3 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2 mb-3">Calculations</h3>
            <div className="space-y-2 text-sm">
                <p><span className="font-medium text-slate-400">Sum of Numbers:</span> <span className="font-mono text-lg text-amber-300">{response.sum}</span></p>
                <p><span className="font-medium text-slate-400">Reversed Alternating Caps String:</span> <span className="font-mono text-lg text-amber-300">{response.concat_string}</span></p>
            </div>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-700 pt-4 col-span-1 md:col-span-2">
        <button
          onClick={() => setShowRaw(!showRaw)}
          className="text-sm text-amber-400 hover:text-amber-300"
        >
          {showRaw ? 'Hide' : 'Show'} Raw API Response
        </button>
        {showRaw && (
          <pre className="bg-slate-900 text-slate-300 text-xs p-4 rounded-md mt-2 overflow-x-auto">
            <code>
              {JSON.stringify(response, null, 2)}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default ResponseDisplay;