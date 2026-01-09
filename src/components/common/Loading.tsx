import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(95), 5);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full grid place-items-center flex-1">
      <div className="w-40 md:w-50">
        <Progress value={progress} className="h-1 md:h-1.5" />
      </div>
    </div>
  );
}
