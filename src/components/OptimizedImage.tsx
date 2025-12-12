import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt = '',
  className = '',
  style = {},
  width,
  height,
  loading = 'lazy',
  placeholder,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setHasError(true);
    if (onError) onError();
  };

  const imageStyle: React.CSSProperties = {
    ...style,
    width: width || style.width,
    height: height || style.height,
    objectFit: style.objectFit || 'cover',
    transition: 'opacity 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0,
  };

  const placeholderStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#1a1a1a',
    display: isLoaded ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontSize: '0.875rem',
  };

  if (hasError) {
    return (
      <div
        style={{
          ...style,
          width: width || style.width,
          height: height || style.height,
          backgroundColor: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
        }}
        className={className}
      >
        <span>Failed to load image</span>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
        overflow: 'hidden',
        ...(style.position === 'absolute' ? {} : {}),
      }}
      className={className}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div style={placeholderStyle}>
          {placeholder ? (
            <img
              src={placeholder}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(10px)',
                opacity: 0.5,
              }}
            />
          ) : (
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '3px solid #333',
                borderTopColor: '#666',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
          )}
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          style={imageStyle}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
        />
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;

