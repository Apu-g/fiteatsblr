const LOGO_TEXT = "FitEatsBLR";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-progress">
        <div className="preloader-progress-bar"></div>
        <div className="preloader-logo">
          <div className="flex items-center">
            <div className="preloader-logo-glow">
              <img
                src="/logo.png"
                alt="FitEatsBLR Logo"
                className="preloader-logo-img rounded-2xl object-contain"
              />
            </div>
            <h1 id="js-preloader-logo">
              {[...LOGO_TEXT].map((ch, i) => (
                <span className="inline-mask" key={i}>
                  <span className="inline-char">{ch}</span>
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      <div className="preloader-mask"></div>

      <div className="preloader-content">
        <div className="preloader-footer">
          <p id="js-preloader-footer">
            <span className="line-mask">
              <span className="reveal-line">
                Meet FitEatsBLR®—personalized and sustainable
              </span>
            </span>
            <span className="line-mask">
              <span className="reveal-line">
                meal roadmaps, built for your real life.
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
