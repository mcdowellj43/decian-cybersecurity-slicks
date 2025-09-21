import React from 'react';

const DecianSATWhitepaper: React.FC = () => {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    @media print {
      * {
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    }

    .slick {
      width: 1200px;
      min-height: 800px;
      background: #ffffff !important;
      position: relative;
      font-family: 'Inter', sans-serif;
      color: #333333;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="slick">
        {/* Header section with blue background */}
        <div style={{
          background: '#2E86C1 !important',
          padding: '40px 60px 30px 60px',
          color: 'white !important',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '40px',
          alignItems: 'center',
          WebkitPrintColorAdjust: 'exact !important',
          printColorAdjust: 'exact !important'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '60px',
              width: '120px',
              height: '4px',
              background: '#87CEEB !important'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '30px',
              right: '200px'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                background: '#87CEEB !important',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '8px'
              }}></span>
              <span style={{
                width: '8px',
                height: '8px',
                background: '#87CEEB !important',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '8px'
              }}></span>
              <span style={{
                width: '8px',
                height: '8px',
                background: '#87CEEB !important',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '8px'
              }}></span>
            </div>

            <div style={{
              fontSize: '28px',
              fontWeight: '800',
              color: '#ffffff !important',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>Decian Inc</div>
            <h1 style={{
              fontSize: '52px',
              fontWeight: '900',
              lineHeight: '0.95',
              marginBottom: '12px',
              color: '#ffffff !important'
            }}>Security Awareness<br />Training</h1>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#ffffff !important',
              marginBottom: '15px'
            }}>Human Firewall Protection for All Businesses</h2>
            <p style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#87CEEB !important',
              marginBottom: '18px',
              fontStyle: 'italic'
            }}>"Your employees are your strongest defense against cyber threats."</p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              background: '#1B4F72 !important',
              border: '3px solid #87CEEB !important',
              borderRadius: '25px',
              padding: '20px 30px',
              textAlign: 'center',
              WebkitPrintColorAdjust: 'exact !important',
              printColorAdjust: 'exact !important'
            }}>
              <div style={{
                fontSize: '22px',
                fontWeight: '800',
                color: '#ffffff !important',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Human Firewall</div>
              <div style={{
                fontSize: '14px',
                color: '#87CEEB !important',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Employee Education</div>
            </div>
          </div>
        </div>

        {/* Main content section */}
        <div style={{
          padding: '40px 60px',
          background: '#ffffff !important',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '40px',
          minHeight: '500px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '800',
              color: '#1B4F72 !important',
              marginBottom: '20px'
            }}>Expert-Backed. Headache-Free.</h2>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#333333 !important',
              marginBottom: '35px'
            }}>
              We provide comprehensive security awareness training programs that transform your employees from potential security risks into your strongest defense against cyber threats through engaging, interactive education and simulated attack scenarios.
            </p>

            <h2 style={{
              fontSize: '26px',
              fontWeight: '800',
              color: '#1B4F72 !important',
              marginBottom: '25px'
            }}>Key Features</h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto auto',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                padding: '18px',
                background: '#F8F9FA !important',
                borderRadius: '8px',
                borderLeft: '4px solid #2E86C1 !important',
                WebkitPrintColorAdjust: 'exact !important',
                printColorAdjust: 'exact !important'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  background: '#2E86C1 !important',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
                  marginTop: '2px',
                  color: 'white !important',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>●</div>
                <div>
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#1B4F72 !important',
                    marginBottom: '6px'
                  }}>Interactive Training Modules</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666666 !important',
                    lineHeight: '1.4'
                  }}>Engaging, scenario-based learning modules covering phishing, social engineering, password security, and safe browsing practices.</p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                padding: '18px',
                background: '#F8F9FA !important',
                borderRadius: '8px',
                borderLeft: '4px solid #2E86C1 !important',
                WebkitPrintColorAdjust: 'exact !important',
                printColorAdjust: 'exact !important'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  background: '#2E86C1 !important',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
                  marginTop: '2px',
                  color: 'white !important',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>●</div>
                <div>
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#1B4F72 !important',
                    marginBottom: '6px'
                  }}>Simulated Phishing Campaigns</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666666 !important',
                    lineHeight: '1.4'
                  }}>Real-world phishing simulations that test employee awareness and provide immediate feedback and additional training for those who need it.</p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                padding: '18px',
                background: '#F8F9FA !important',
                borderRadius: '8px',
                borderLeft: '4px solid #2E86C1 !important',
                WebkitPrintColorAdjust: 'exact !important',
                printColorAdjust: 'exact !important'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  background: '#2E86C1 !important',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
                  marginTop: '2px',
                  color: 'white !important',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>●</div>
                <div>
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#1B4F72 !important',
                    marginBottom: '6px'
                  }}>Progress Tracking & Reporting</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666666 !important',
                    lineHeight: '1.4'
                  }}>Comprehensive dashboards showing training completion rates, phishing test results, and areas requiring additional attention.</p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                padding: '18px',
                background: '#F8F9FA !important',
                borderRadius: '8px',
                borderLeft: '4px solid #2E86C1 !important',
                WebkitPrintColorAdjust: 'exact !important',
                printColorAdjust: 'exact !important'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  background: '#2E86C1 !important',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
                  marginTop: '2px',
                  color: 'white !important',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>●</div>
                <div>
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#1B4F72 !important',
                    marginBottom: '6px'
                  }}>Customizable Content</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666666 !important',
                    lineHeight: '1.4'
                  }}>Training materials tailored to your industry, company policies, and specific security challenges to maximize relevance and effectiveness.</p>
                </div>
              </div>

              <div style={{
                gridColumn: '1 / -1',
                maxWidth: '50%',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                padding: '18px',
                background: '#F8F9FA !important',
                borderRadius: '8px',
                borderLeft: '4px solid #2E86C1 !important',
                WebkitPrintColorAdjust: 'exact !important',
                printColorAdjust: 'exact !important'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  background: '#2E86C1 !important',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
                  marginTop: '2px',
                  color: 'white !important',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>●</div>
                <div>
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#1B4F72 !important',
                    marginBottom: '6px'
                  }}>Ongoing Reinforcement</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666666 !important',
                    lineHeight: '1.4'
                  }}>Regular security tips, updates on emerging threats, and refresher training to keep security awareness top-of-mind for all employees.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side outcomes box */}
          <div style={{
            background: '#2C3E50 !important',
            borderRadius: '12px',
            padding: '25px',
            color: 'white !important',
            alignSelf: 'start',
            WebkitPrintColorAdjust: 'exact !important',
            printColorAdjust: 'exact !important'
          }}>
            <h2 style={{
              fontSize: '22px',
              fontWeight: '800',
              color: '#ffffff !important',
              marginBottom: '20px'
            }}>Strategic Advantages</h2>

            <div style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff !important',
                marginBottom: '8px'
              }}>Reduce Human Error Risk</div>
              <div style={{
                fontSize: '13px',
                lineHeight: '1.5',
                color: '#ffffff !important'
              }}>Transform employees from security vulnerabilities into your first line of defense through comprehensive education on current threats and best practices.</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff !important',
                marginBottom: '8px'
              }}>Build Security Culture</div>
              <div style={{
                fontSize: '13px',
                lineHeight: '1.5',
                color: '#ffffff !important'
              }}>Foster a company-wide security mindset where every employee understands their role in protecting organizational assets and data.</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff !important',
                marginBottom: '8px'
              }}>Compliance & Regulatory Support</div>
              <div style={{
                fontSize: '13px',
                lineHeight: '1.5',
                color: '#ffffff !important'
              }}>Meet industry requirements for security training while demonstrating due diligence to auditors, insurers, and regulatory bodies.</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff !important',
                marginBottom: '8px'
              }}>Measurable Security Improvement</div>
              <div style={{
                fontSize: '13px',
                lineHeight: '1.5',
                color: '#ffffff !important'
              }}>Track and measure the effectiveness of your security awareness program with detailed analytics and reporting on employee behavior changes.</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff !important',
                marginBottom: '8px'
              }}>Cost-Effective Protection</div>
              <div style={{
                fontSize: '13px',
                lineHeight: '1.5',
                color: '#ffffff !important'
              }}>Prevent costly security incidents through proactive employee education that costs significantly less than breach response and recovery.</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #2E86C1 0%, #1B4F72 100%) !important',
          color: 'white !important',
          padding: '14.4px 25.2px',
          textAlign: 'center',
          marginTop: '10.8px',
          WebkitPrintColorAdjust: 'exact !important',
          printColorAdjust: 'exact !important'
        }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '700',
            marginBottom: '5.4px',
            color: 'white !important'
          }}>Build Your Human Firewall Today</h2>
          <p style={{
            fontSize: '12px',
            marginBottom: '8.1px',
            opacity: '0.9',
            color: 'white !important'
          }}>Comprehensive security awareness training to strengthen your defense against cyber threats</p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '14.4px',
            flexWrap: 'wrap',
            marginBottom: '5.4px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '11px',
              color: 'white !important'
            }}>
              <span style={{
                width: '12px',
                height: '12px',
                marginRight: '3.6px',
                opacity: '0.8'
              }}>📞</span>
              <span>203.265.3356</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '11px',
              color: 'white !important'
            }}>
              <span style={{
                width: '12px',
                height: '12px',
                marginRight: '3.6px',
                opacity: '0.8'
              }}>✉️</span>
              <span>sales@decian.com</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '11px',
              color: 'white !important'
            }}>
              <span style={{
                width: '12px',
                height: '12px',
                marginRight: '3.6px',
                opacity: '0.8'
              }}>🌐</span>
              <span>www.decian.com</span>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '14.4px',
            flexWrap: 'wrap',
            marginBottom: '5.4px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '11px',
              color: 'white !important'
            }}>
              <span style={{
                width: '12px',
                height: '12px',
                marginRight: '3.6px',
                opacity: '0.8'
              }}>📍</span>
              <span>259 Main Street, Portland, CT 06480</span>
            </div>
          </div>

          <div style={{
            fontSize: '13px',
            fontWeight: '700',
            marginTop: '5.4px',
            color: 'white !important'
          }}>DECIAN INC</div>
        </div>
      </div>
    </>
  );
};

export default DecianSATWhitepaper;