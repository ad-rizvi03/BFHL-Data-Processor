import React, { useState } from 'react';

interface InputFormProps {
  onSubmit: (data: string[]) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (error) {
      setError(null);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setError('⚠️ Please enter at least one value.');
      return;
    }
    // Parse the comma-separated string into an array of strings
    const dataArray = inputValue.split(',').map(item => item.trim()).filter(item => item);
    onSubmit(dataArray);
  };

  return (
    <form onSubmit={handleFormSubmit} className="bg-black/30 backdrop-blur-md border border-slate-800 p-6 rounded-lg shadow-xl">
      <label htmlFor="data-input" className="block text-sm font-medium text-slate-300 mb-2">
        Input Data Array
      </label>
      <textarea
        id="data-input"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="e.g., a, 1, 334, 4, R, $"
        rows={4}
        className={`w-full bg-slate-900 border ${error ? 'border-red-500' : 'border-slate-700'} rounded-md p-3 text-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200`}
        disabled={isLoading}
        aria-invalid={!!error}
        aria-describedby={error ? "input-error" : undefined}
      />
      {error && <p id="input-error" className="text-red-400 text-sm mt-2">{error}</p>}
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75 disabled:bg-slate-600 disabled:from-slate-600 disabled:cursor-not-allowed disabled:scale-100 transition-all duration-300 flex items-center"
        >
          {isLoading ? 'Processing...' : 'Process Array'}
        </button>
      </div>
    </form>
  );
};

export default InputForm;