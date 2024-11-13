"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center text-4xl text-red-500 mb-4">
        <h1>Something went wrong......!</h1>
        <p className="text-xl mt-2">{error.message}</p>
      </div>
      <button
        onClick={reset}
        className="mt-4 px-6 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
