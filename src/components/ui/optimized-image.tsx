
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  priority?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  skeletonClassName = "",
  priority = false,
  ...props
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative">
      {!loaded && (
        <Skeleton 
          className={`absolute inset-0 ${skeletonClassName}`} 
        />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0 }}
        {...props}
      />
    </div>
  );
};

export { OptimizedImage };
