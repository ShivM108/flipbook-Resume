import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface FlipBookProps {
  children: React.ReactNode[];
}

export const FlipBook: React.FC<FlipBookProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = children.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const resetBook = () => setCurrentPage(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200 p-4 md:p-8 overflow-hidden">
      
      {/* Controls Container */}
      <div className="mb-6 flex items-center gap-4 z-50">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`p-3 rounded-full bg-white shadow-lg transition-all ${
            currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50 text-blue-600'
          }`}
          aria-label="Previous Page"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="text-sm font-medium text-slate-600 bg-white px-4 py-2 rounded-full shadow-sm">
          Page {currentPage + 1} of {totalPages}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`p-3 rounded-full bg-white shadow-lg transition-all ${
            currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50 text-blue-600'
          }`}
          aria-label="Next Page"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* 3D Book Container */}
      <div className="relative w-full max-w-[500px] aspect-[1/1.414] perspective-container">
        {React.Children.map(children, (child, index) => {
          // Z-index logic: 
          // If page is not flipped (index >= currentPage), higher index should be BEHIND.
          // If page IS flipped (index < currentPage), higher index should be ON TOP of other flipped pages.
          
          let zIndex = 0;
          if (index < currentPage) {
             // Flipped pages: Stacked on left. 0 is bottom, currentPage-1 is top.
             zIndex = index;
          } else {
             // Unflipped pages: Stacked on right. currentPage is top, last is bottom.
             zIndex = totalPages - index;
          }

          // Rotation Logic
          const isFlipped = index < currentPage;
          const isPageActive = index === currentPage;
          
          return (
            <div
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out transform-style-3d cursor-pointer origin-left shadow-xl rounded-r-md border-l border-slate-200/50 bg-paper`}
              style={{
                zIndex: zIndex,
                transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
              }}
              onClick={() => {
                if (isFlipped) prevPage();
                else nextPage();
              }}
            >
              {/* Front Face (Visible when not flipped) */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden overflow-hidden bg-white rounded-r-md"
              >
                {/* Visual binding effect on left */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-200/50 to-transparent z-10 pointer-events-none" />
                <div className="h-full w-full p-6 md:p-10 overflow-y-auto custom-scrollbar">
                  {React.isValidElement(child) 
                    ? React.cloneElement(child as React.ReactElement<any>, { isPageActive }) 
                    : child}
                </div>
                
                {/* Page Number */}
                <div className="absolute bottom-4 right-6 text-xs text-slate-400">
                  {index + 1}
                </div>
              </div>

              {/* Back Face (Visible when flipped) - Purely decorative/white for this single-sided stack effect */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-slate-50 rounded-l-md border-r border-slate-200 shadow-inner"
              >
                 <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-200/50 to-transparent z-10" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset Hint */}
      {currentPage > 0 && (
        <button 
          onClick={resetBook}
          className="mt-8 flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm"
        >
          <RotateCcw size={16} />
          <span>Reset to Cover</span>
        </button>
      )}

      {/* Global CSS for 3D helpers */}
      <style>{`
        .perspective-container {
          perspective: 1500px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .origin-left {
          transform-origin: left center;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};