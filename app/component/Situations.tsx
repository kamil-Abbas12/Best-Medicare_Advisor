export default function Situations() {
  return (
    <section className="situations" id="how-we-help">
      <div className="situations-inner">
        <div className="section-head">
          <div className="eyebrow">How We Help</div>
          <h2>Whatever brought you here, we&apos;ll help you find your way.</h2>
        </div>

        <div className="situation-grid">
          <div className="situation">
            <div className="situation-icon">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.8" />
                <path d="M12 7v5l3 2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Turning 65</h3>
            <p>Understand your options as you become eligible.</p>
          </div>

          <div className="situation">
            <div className="situation-icon">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12l7-8 7 8M6 10v9h4v-5h4v5h4v-9"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Moving</h3>
            <p>Make sure your coverage moves with you.</p>
          </div>

          <div className="situation">
            <div className="situation-icon">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s-7-4.5-9-9.3C1.4 7.4 4 4 7.5 4c1.9 0 3.4 1 4.5 2.4C13.1 5 14.6 4 16.5 4 20 4 22.6 7.4 21 11.7 19 16.5 12 21 12 21Z"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Lost Coverage</h3>
            <p>Find a new plan quickly, with no coverage gap.</p>
          </div>

          <div className="situation">
            <div className="situation-icon">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
                <path d="M4 5h16v14H4V5Z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M8 9h8M8 13h5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Reviewing Options</h3>
            <p>See if a better plan is available in your area.</p>
          </div>
        </div>
      </div>
    </section>
  );
}