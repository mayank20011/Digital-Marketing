export default function ServiceBanner() {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
      <div className="absolute left-0 h-[400px] w-2/5">
        <div className="absolute aspect-1 left-0 bg-orange-400 h-[1350px] w-[1350px] animate-pulse" style={{clipPath:"circle(25% at 0 0)"}}></div>
        <div className="absolute aspect-1 left-0 bg-orange-300 h-[1000px] w-[1000px] animate-pulse" style={{clipPath:"circle(25% at 0 0)"}}></div>
        <div className="absolute aspect-1 left-0 bg-orange-200 h-[650px] w-[650px] animate-pulse" style={{clipPath:"circle(25% at 0 0)"}}></div>
        <div className="absolute aspect-1 left-0 bg-orange-100 h-[350px] w-[350px] animate-pulse" style={{clipPath:"circle(25% at 0 0)"}}></div>
        <div className="absolute aspect-1 left-0 bg-orange-50 h-[150px] w-[150px] animate-pulse" style={{clipPath:"circle(25% at 0 0)"}}></div>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center drop-shadow-sm shadow-slate-100 custom-container">Explore Our Services</h1>
    </div>
  );
}
