import React from 'react';

const DecianDataCenterWhitepaper: React.FC = () => {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .data-center-body {
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      color: #333;
      background: #fff;
    }

    .container {
      max-width: 8.5in;
      margin: 0 auto;
      background: white;
      min-height: 100vh;
    }

    /* Header */
    .header {
      background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
      color: white;
      padding: 14.4px 25.2px 16.2px;
      position: relative;
      overflow: hidden;
    }

    .header::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 40%;
      height: 100%;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
      opacity: 0.3;
    }

    .logo {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 5.4px;
      position: relative;
      z-index: 2;
    }

    .title {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 3.6px;
      position: relative;
      z-index: 2;
      line-height: 1.1;
    }

    .subtitle {
      font-size: 13px;
      font-weight: 400;
      opacity: 0.9;
      position: relative;
      z-index: 2;
      margin-bottom: 3.6px;
    }

    .tagline {
      font-size: 11px;
      font-style: italic;
      opacity: 0.8;
      position: relative;
      z-index: 2;
    }

    /* Content Sections */
    .content {
      padding: 12.6px 25.2px;
    }

    .section {
      margin-bottom: 12.6px;
    }

    .section-title {
      font-size: 16px;
      font-weight: 600;
      color: #1a365d;
      margin-bottom: 7.2px;
      padding-bottom: 2.7px;
      border-bottom: 2px solid #2d5a87;
    }

    .intro-text {
      font-size: 12px;
      line-height: 1.35;
      color: #4a5568;
      margin-bottom: 10.8px;
      text-align: justify;
    }

    /* Features Grid */
    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8.1px;
      margin-bottom: 10.8px;
    }

    .feature-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 8.1px;
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      border-color: #2d5a87;
      box-shadow: 0 2px 4px rgba(45, 90, 135, 0.1);
    }

    .feature-title {
      font-size: 12px;
      font-weight: 600;
      color: #1a365d;
      margin-bottom: 3.6px;
      display: flex;
      align-items: center;
    }

    .feature-icon {
      width: 12px;
      height: 12px;
      margin-right: 4.5px;
      background: #2d5a87;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .feature-icon::before {
      content: '●';
      color: white;
      font-size: 8px;
    }

    .feature-description {
      color: #4a5568;
      line-height: 1.25;
      font-size: 10px;
    }

    /* Key Benefits */
    .benefits-list {
      background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
      border-radius: 5px;
      padding: 10.8px;
      margin: 9px 0;
    }

    .benefit-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 7.2px;
      padding: 5.4px;
      background: white;
      border-radius: 4px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.04);
    }

    .benefit-item:last-child {
      margin-bottom: 0;
    }

    .benefit-icon {
      width: 14px;
      height: 14px;
      background: #2d5a87;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 7.2px;
      flex-shrink: 0;
      margin-top: 0.9px;
    }

    .benefit-icon::before {
      content: '✓';
      color: white;
      font-size: 9px;
      font-weight: bold;
    }

    .benefit-content h4 {
      font-size: 12px;
      font-weight: 600;
      color: #1a365d;
      margin-bottom: 1.8px;
    }

    .benefit-content p {
      color: #4a5568;
      font-size: 10px;
      line-height: 1.25;
    }

    /* Use Cases */
    .use-cases {
      background: #1a365d;
      color: white;
      padding: 10.8px;
      border-radius: 5px;
      margin: 10.8px 0;
    }

    .use-cases h3 {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8.1px;
      text-align: center;
    }

    .use-case-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8.1px;
    }

    .use-case {
      text-align: center;
      padding: 7.2px;
      background: rgba(255,255,255,0.1);
      border-radius: 4px;
    }

    .use-case-icon {
      width: 20px;
      height: 20px;
      background: rgba(255,255,255,0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 5.4px;
      font-size: 12px;
    }

    .use-case h4 {
      font-size: 11px;
      font-weight: 600;
      margin-bottom: 2.7px;
    }

    .use-case p {
      font-size: 9px;
      opacity: 0.9;
      line-height: 1.2;
    }

    /* Call to Action */
    .cta-section {
      background: linear-gradient(135deg, #2d5a87 0%, #1a365d 100%);
      color: white;
      padding: 14.4px 25.2px;
      text-align: center;
      margin-top: 10.8px;
    }

    .cta-title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 5.4px;
    }

    .cta-text {
      font-size: 12px;
      margin-bottom: 8.1px;
      opacity: 0.9;
    }

    .contact-info {
      display: flex;
      justify-content: center;
      gap: 14.4px;
      flex-wrap: wrap;
      margin-bottom: 5.4px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      font-size: 11px;
    }

    .contact-icon {
      width: 12px;
      height: 12px;
      margin-right: 3.6px;
      opacity: 0.8;
    }

    .footer-logo {
      font-size: 13px;
      font-weight: 700;
      margin-top: 5.4px;
    }

    /* Print Styles - Enhanced for PDF conversion */
    @media print {
      * {
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
      }

      .data-center-body {
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
        background: white !important;
      }

      .container {
        max-width: none;
        margin: 0;
        box-shadow: none;
      }

      .header {
        background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%) !important;
        color: white !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .header::before {
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .feature-card {
        background: #f8fafc !important;
        border: 1px solid #e2e8f0 !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .benefits-list {
        background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%) !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .benefit-item {
        background: white !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .benefit-icon {
        background: #2d5a87 !important;
        color: white !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .feature-icon {
        background: #2d5a87 !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .use-cases {
        background: #1a365d !important;
        color: white !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .use-case {
        background: rgba(255,255,255,0.1) !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .use-case-icon {
        background: rgba(255,255,255,0.2) !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .cta-section {
        background: linear-gradient(135deg, #2d5a87 0%, #1a365d 100%) !important;
        color: white !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .section-title {
        color: #1a365d !important;
        border-bottom: 2px solid #2d5a87 !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .feature-title {
        color: #1a365d !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      .benefit-content h4 {
        color: #1a365d !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }
    }

    @page {
      margin: 0.45in;
      size: letter;
    }

    /* Force color preservation in all browsers */
    html {
      print-color-adjust: exact !important;
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="data-center-body">
        <div className="container">
          {/* Header */}
          <div className="header">
            <div className="logo">DECIAN INC</div>
            <h1 className="title">Decian Data Vault</h1>
            <p className="subtitle">Fortified Colocation for Mission-Critical Operations</p>
            <p className="tagline">"When the stakes are highest, your data belongs in the Vault."</p>
          </div>

          {/* Main Content */}
          <div className="content">
            {/* Introduction */}
            <div className="section">
              <h2 className="section-title">Unparalleled Security & Resilience</h2>
              <p className="intro-text">
                Built inside a registered Cold War–era nuclear bomb shelter, the <strong>Decian Data Vault</strong> offers unmatched physical security and infrastructure resilience for organizations that demand absolute uptime. Our fortified colocation facility provides enterprise-grade protection in a hardened environment designed to withstand the most extreme conditions while ensuring continuous operations for your mission-critical systems.
              </p>
            </div>

            {/* Core Features */}
            <div className="section">
              <h2 className="section-title">Core Infrastructure Features</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <h3 className="feature-title">
                    <span className="feature-icon"></span>
                    Dedicated Secure Rack Space
                  </h3>
                  <p className="feature-description">
                    Isolated, locked enclosures with controlled access ensure your equipment remains completely segregated and secure from other tenants.
                  </p>
                </div>

                <div className="feature-card">
                  <h3 className="feature-title">
                    <span className="feature-icon"></span>
                    Hardened Facility
                  </h3>
                  <p className="feature-description">
                    Reinforced concrete structure originally designed to withstand nuclear events, now protecting your data from extreme weather and security threats.
                  </p>
                </div>

                <div className="feature-card">
                  <h3 className="feature-title">
                    <span className="feature-icon"></span>
                    Underground Protection
                  </h3>
                  <p className="feature-description">
                    Naturally shielded from environmental hazards, electromagnetic interference, and unauthorized surveillance attempts.
                  </p>
                </div>

                <div className="feature-card">
                  <h3 className="feature-title">
                    <span className="feature-icon"></span>
                    Dedicated Power Feeds
                  </h3>
                  <p className="feature-description">
                    Independent electrical circuits with continuous backup from on-site generators ensure uninterrupted power supply.
                  </p>
                </div>

                <div className="feature-card">
                  <h3 className="feature-title">
                    <span className="feature-icon"></span>
                    Fiber Optic Dual Pathway
                  </h3>
                  <p className="feature-description">
                    Redundant, high-speed connectivity paths guarantee uninterrupted network operations even during infrastructure failures.
                  </p>
                </div>

                <div className="feature-card">
                  <h3 className="feature-title">
                    <span className="feature-icon"></span>
                    24/7 Monitored Security
                  </h3>
                  <p className="feature-description">
                    Layered access control, comprehensive surveillance systems, and continuous monitoring provide round-the-clock protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="section">
              <h2 className="section-title">Strategic Advantages</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon"></div>
                  <div className="benefit-content">
                    <h4>Unmatched Physical Security</h4>
                    <p>Cold War-era construction provides protection levels far exceeding standard data centers, safeguarding against both natural disasters and security threats.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon"></div>
                  <div className="benefit-content">
                    <h4>Absolute Uptime Assurance</h4>
                    <p>Redundant power, connectivity, and environmental systems ensure your critical operations continue without interruption.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon"></div>
                  <div className="benefit-content">
                    <h4>Disaster Recovery Excellence</h4>
                    <p>Underground, hardened infrastructure provides the ultimate backup location for disaster recovery and business continuity planning.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="use-cases">
              <h3>Ideal Applications</h3>
              <div className="use-case-grid">
                <div className="use-case">
                  <div className="use-case-icon">🏢</div>
                  <h4>Enterprise Infrastructure</h4>
                  <p>Mission-critical servers and network equipment requiring maximum uptime and security</p>
                </div>
                <div className="use-case">
                  <div className="use-case-icon">🔄</div>
                  <h4>Disaster Recovery</h4>
                  <p>Secondary site protection for business continuity and emergency operations</p>
                </div>
                <div className="use-case">
                  <div className="use-case-icon">🔐</div>
                  <h4>High-Security Data</h4>
                  <p>Sensitive information and systems requiring maximum physical and environmental protection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <h2 className="cta-title">Secure Your Critical Operations</h2>
            <p className="cta-text">Experience the ultimate in secure, high-availability colocation</p>

            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>203.265.3356</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>sales@decian.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <span>www.decian.com</span>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>259 Main Street, Portland, CT 06480</span>
              </div>
            </div>

            <div className="footer-logo">DECIAN INC</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DecianDataCenterWhitepaper;