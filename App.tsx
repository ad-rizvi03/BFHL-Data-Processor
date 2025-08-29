import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';
import Spinner from './components/Spinner';
import { processArrayData } from './services/apiService';
import { ApiResponse } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (inputData: string[]) => {
    setIsLoading(true);
    setApiResponse(null);
    setError(null);

    try {
      const response = await processArrayData(inputData);
      setApiResponse(response);
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen text-slate-100 font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <p className="text-center text-slate-400 mb-8">
          Enter a comma-separated list of values. The application will process the array and return a structured response, simulating a backend API call.
        </p>
        <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
        
        {isLoading && (
          <div className="flex justify-center mt-8">
            <Spinner />
          </div>
        )}

        {error && (
          <div className="mt-8 text-center bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg">
            <p>{error}</p>
          </div>
        )}

        {apiResponse && !isLoading && (
          <div className="mt-8">
            <ResponseDisplay response={apiResponse} />
          </div>
        )}
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Built with ❤️ by Adnan Rizvi</p>
      </footer>
    </div>
  );
};

export default App;