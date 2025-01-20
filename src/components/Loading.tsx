const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
    <div className="flex items-center space-x-2 text-green-700">
      <div className="w-8 h-8 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-2xl font-medium">Loading...</span>
    </div>
  </div>
  );
};

export default Loading;
