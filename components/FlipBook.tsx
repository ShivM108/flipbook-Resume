import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Printer } from 'lucide-react';

interface FlipBookProps {
  children: React.ReactNode[];
}

export const FlipBook: React.FC<FlipBookProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Animation States
  const [hasLoaded, setHasLoaded] = useState(false);
  const [animationsDone, setAnimationsDone] = useState(false);

  // Mobile State: Single Page Stack
  const [singlePageIndex, setSinglePageIndex] = useState(0);
  
  // Desktop State: Sheet Index (Spread)
  const [sheetIndex, setSheetIndex] = useState(0);

  // Group children into sheets for Desktop Mode
  const pairs = React.useMemo(() => {
    const p = [];
    for (let i = 0; i < children.length; i += 2) {
      p.push([children[i], children[i+1] || null]);
    }
    return p;
  }, [children]);

  const totalSheets = pairs.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Trigger entrance animation
    const t1 = setTimeout(() => setHasLoaded(true), 100);
    // Remove stagger delays after animation completes so flipping is instant
    const t2 = setTimeout(() => setAnimationsDone(true), 2500);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Sync state when switching modes
  useEffect(() => {
    if (isMobile) {
      setSinglePageIndex(Math.min(sheetIndex * 2, children.length - 1));
    } else {
      setSheetIndex(Math.floor(singlePageIndex / 2));
    }
  }, [isMobile]);

  // --- Navigation Handlers ---
  const next = () => {
    if (!animationsDone) setAnimationsDone(true);
    if (isMobile) {
      if (singlePageIndex < children.length - 1) setSinglePageIndex(p => p + 1);
    } else {
      if (sheetIndex < totalSheets) setSheetIndex(p => p + 1);
    }
  };

  const prev = () => {
    if (!animationsDone) setAnimationsDone(true);
    if (isMobile) {
      if (singlePageIndex > 0) setSinglePageIndex(p => p - 1);
    } else {
      if (sheetIndex > 0) setSheetIndex(p => p - 1);
    }
  };

  const reset = () => {
    if (!animationsDone) setAnimationsDone(true);
    if (isMobile) setSinglePageIndex(0);
    else setSheetIndex(0);
  };

  const handlePrint = () => {
    window.print();
  };

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobile, singlePageIndex, sheetIndex, animationsDone]);


  // --- Print View (Hidden on Screen) ---
  const PrintView = () => (
    <div className="hidden print:block print:absolute print:inset-0 print:z-[9999] print:bg-white print:w-full print:h-auto text-slate-900">
      <style>{`
        @media print {
          @page { margin: 1.0cm; size: auto; }
          html, body, #root { 
            height: auto !important; 
            overflow: visible !important; 
            background: white !important; 
          }
          .print\\:hidden { display: none !important; }
          .print\\:block { display: block !important; position: static !important; }
          
          /* Override animations and hidden states for resume content */
          .opacity-0 { opacity: 1 !important; }
          .translate-y-8, .translate-y-4, .translate-y-2 { transform: none !important; }
          
          /* Force expand collapsed sections (projects) */
          .max-h-0 { max-height: none !important; opacity: 1 !important; display: block !important; }
          
          /* Disable transitions for instant rendering */
          * { transition: none !important; animation: none !important; }
          
          /* Link styling for print */
          a { text-decoration: none !important; color: #000 !important; }
          a[href^="http"]:after { content: " (" attr(href) ")"; font-size: 0.8em; color: #555; }
        }
      `}</style>
      <div className="max-w-4xl mx-auto p-0">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="mb-6 pb-6 border-b border-slate-200 last:border-0 break-inside-avoid page-break-after-auto">
             {/* Pass isPageActive=true to trigger any entrance logic, CSS overrides handle the rest */}
             {React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { isPageActive: true }) : child}
          </div>
        ))}
      </div>
    </div>
  );

  // --- Render Mobile (Single Stack) ---
  if (isMobile) {
    return (
      <>
        <div className="print:hidden flex flex-col items-center justify-center min-h-[100dvh] bg-slate-200 p-4 overflow-hidden">
          {/* Controls */}
          <div className="mb-4 flex items-center gap-3 z-50">
            <button onClick={prev} disabled={singlePageIndex === 0} className={`p-2 rounded-full bg-white shadow-lg transition-all ${singlePageIndex === 0 ? 'opacity-50' : 'text-blue-600'}`}>
              <ChevronLeft size={20} />
            </button>
            <div className="text-xs font-medium text-slate-600 bg-white px-3 py-1.5 rounded-full shadow-sm">
              Page {singlePageIndex + 1} / {children.length}
            </div>
            <button onClick={next} disabled={singlePageIndex === children.length - 1} className={`p-2 rounded-full bg-white shadow-lg transition-all ${singlePageIndex === children.length - 1 ? 'opacity-50' : 'text-blue-600'}`}>
              <ChevronRight size={20} />
            </button>
            <div className="w-px h-6 bg-slate-300 mx-1"></div>
            <button 
              onClick={handlePrint} 
              className="p-2 rounded-full bg-white shadow-lg text-slate-600 hover:text-blue-600 transition-colors" 
              title="Print Resume (Single Page)"
            >
              <Printer size={20} />
            </button>
          </div>

          {/* 3D Stack */}
          <div 
            className="relative perspective-container shadow-2xl rounded-r-md"
            style={{
              width: 'min(90vw, 500px)',
              aspectRatio: '1 / 1.414',
            }}
          >
            {React.Children.map(children, (child, index) => {
              const zIndex = index < singlePageIndex ? index : children.length - index;
              const isFlipped = index < singlePageIndex;
              
              // Animation Logic
              const staggerDelay = animationsDone ? '0ms' : `${index * 100}ms`;
              const entranceTransform = !hasLoaded ? 'translateY(50px)' : 'translateY(0)';
              const opacityClass = !hasLoaded ? 'opacity-0' : 'opacity-100';

              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform-style-3d origin-left rounded-r-md bg-paper border-l border-slate-200/50 ${opacityClass}`}
                  style={{
                    zIndex,
                    transform: `${isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)'} ${entranceTransform}`,
                    transitionDelay: staggerDelay
                  }}
                  onClick={() => isFlipped ? prev() : next()}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-white rounded-r-md overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-200/50 to-transparent z-10 pointer-events-none" />
                    <div className="h-full w-full p-4 sm:p-8 overflow-y-auto custom-scrollbar">
                      {React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { isPageActive: index === singlePageIndex }) : child}
                    </div>
                    <div className="absolute bottom-2 right-4 text-[10px] text-slate-400">{index + 1}</div>
                  </div>
                  {/* Back (Empty) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-50 rounded-l-md border-r border-slate-200">
                     <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-slate-200/50 to-transparent z-10" />
                  </div>
                </div>
              );
            })}
          </div>
          <style>{`
            .perspective-container { perspective: 1500px; }
            .transform-style-3d { transform-style: preserve-3d; }
            .backface-hidden { backface-visibility: hidden; }
            .rotate-y-180 { transform: rotateY(180deg); }
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
          `}</style>
        </div>
        <PrintView />
      </>
    );
  }

  // --- Render Desktop (Double Spread) ---
  return (
    <>
      <div className="print:hidden flex flex-col items-center justify-center min-h-screen bg-slate-200 p-8 overflow-hidden">
        
        {/* Controls */}
        <div className="mb-8 flex items-center gap-6 z-50">
          <button onClick={prev} disabled={sheetIndex === 0} className={`p-4 rounded-full bg-white shadow-xl hover:scale-105 transition-all ${sheetIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="text-sm font-bold text-slate-700 bg-white px-6 py-2.5 rounded-full shadow-md tracking-wide">
             {sheetIndex === 0 ? "Cover" : sheetIndex === totalSheets ? "End" : `Spread ${sheetIndex} / ${totalSheets}`}
          </div>

          <button onClick={next} disabled={sheetIndex === totalSheets} className={`p-4 rounded-full bg-white shadow-xl hover:scale-105 transition-all ${sheetIndex === totalSheets ? 'opacity-50 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}>
            <ChevronRight size={24} />
          </button>

          <div className="w-px h-8 bg-slate-300 mx-2"></div>

          <button 
            onClick={handlePrint} 
            className="p-4 rounded-full bg-white shadow-xl hover:scale-105 transition-all text-slate-600 hover:text-blue-600 hover:bg-slate-50" 
            title="Print Resume (Single Page)"
          >
            <Printer size={24} />
          </button>
        </div>

        {/* Book Spine Center Container */}
        <div 
          className="relative transform-style-3d transition-transform duration-700 ease-in-out"
          style={{
            width: 'min(45vw, 550px)',
            aspectRatio: '1 / 1.414',
            perspective: '2000px',
          }}
        >
           {/* Render Sheets */}
           {pairs.map((pair, index) => {
             const isFlipped = index < sheetIndex;
             const zIndex = isFlipped ? index : totalSheets - index;
             const [FrontComponent, BackComponent] = pair;
             const isFrontActive = !isFlipped && index === sheetIndex;
             const isBackActive = isFlipped && index === sheetIndex - 1;

             // Animation Logic for Sheets
             const staggerDelay = animationsDone ? '0ms' : `${index * 120}ms`; // Slower stagger for sheets
             const entranceTransform = !hasLoaded ? 'translateY(60px)' : 'translateY(0)';
             const opacityClass = !hasLoaded ? 'opacity-0' : 'opacity-100';

             return (
               <div
                 key={index}
                 className={`absolute inset-0 origin-left transition-all duration-1000 cubic-bezier(0.645, 0.045, 0.355, 1) transform-style-3d cursor-pointer ${opacityClass}`}
                 style={{
                   zIndex: zIndex,
                   transform: `${isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)'} ${entranceTransform}`,
                   transitionDelay: staggerDelay
                 }}
                 onClick={() => isFlipped ? prev() : next()}
               >
                 {/* FRONT FACE (Right Page) */}
                 <div className="absolute inset-0 backface-hidden bg-paper rounded-r-lg shadow-2xl border-l border-slate-200/50 overflow-hidden">
                   <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-400/20 to-transparent z-20 pointer-events-none" />
                   <div className="h-full w-full p-8 lg:p-12 overflow-y-auto custom-scrollbar relative z-10">
                      {React.isValidElement(FrontComponent) ? React.cloneElement(FrontComponent as React.ReactElement<any>, { isPageActive: isFrontActive }) : FrontComponent}
                   </div>
                   <div className="absolute bottom-4 right-6 text-xs font-serif text-slate-400 z-20">{index * 2 + 1}</div>
                 </div>

                 {/* BACK FACE (Left Page) */}
                 <div className="absolute inset-0 backface-hidden rotate-y-180 bg-paper rounded-l-lg shadow-2xl border-r border-slate-200/50 overflow-hidden">
                   <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-400/20 to-transparent z-20 pointer-events-none" />
                   <div className="h-full w-full p-8 lg:p-12 overflow-y-auto custom-scrollbar relative z-10">
                     {BackComponent ? (
                       React.isValidElement(BackComponent) ? React.cloneElement(BackComponent as React.ReactElement<any>, { isPageActive: isBackActive }) : BackComponent
                     ) : (
                       <div className="h-full flex items-center justify-center text-slate-300 italic">End of Resume</div>
                     )}
                   </div>
                   <div className="absolute bottom-4 left-6 text-xs font-serif text-slate-400 z-20">{index * 2 + 2}</div>
                 </div>
               </div>
             );
           })}
        </div>

        {sheetIndex > 0 && (
          <button 
            onClick={reset}
            className="fixed bottom-8 right-8 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur text-slate-600 hover:text-slate-900 rounded-full shadow-lg transition-all hover:scale-105 z-50 text-sm font-medium"
          >
            <RotateCcw size={16} />
            <span>Reset</span>
          </button>
        )}

        <style>{`
          .transform-style-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
          .cubic-bezier { transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1); }
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
        `}</style>
      </div>
      <PrintView />
    </>
  );
};