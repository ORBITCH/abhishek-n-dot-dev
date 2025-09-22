import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 200); // Small delay before completing
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
          Abhishek N
        </h1>
        
        <div className="w-64 mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">Loading...</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full bg-muted rounded-full h-1">
            <div 
              className="bg-foreground h-1 rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;