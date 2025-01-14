import { useEffect, useState } from "react";
import MainLayout from "./layout/MainLayout";
import LoadingUI from "./components/LoadingUI";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout to match your data loading time

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {isLoading && <LoadingUI />} {/* Show Loading Component */}
      <div style={{ filter: isLoading ? "blur(5px)" : "none" }}>
        <MainLayout />
        
      </div>
    </>
    // <div className=' max-w-8xl mx-auto global-bg'>
    //
    // </div>
  );
}

export default App;
