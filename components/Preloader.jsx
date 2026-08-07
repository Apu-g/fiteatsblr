export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-progress">
        <div className="preloader-progress-bar"></div>
        <div className="preloader-logo">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="FitEats Logo"
              className="preloader-logo-img h-9 w-9 rounded-lg object-contain"
            />
            <h1 id="js-preloader-logo">FitEatsBLR</h1>
          </div>
        </div>
      </div>

      <div className="preloader-mask"></div>

      <div className="preloader-content">
        <div className="preloader-footer">
          <p id="js-preloader-footer">
            Meet FitEats®—personalized and sustainable<br />
            meal roadmaps, built for your real life.
          </p>
        </div>
      </div>
    </div>
  );
}
