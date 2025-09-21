import React from 'react';

const DecianIroncladSIEMWhitepaper: React.FC = () => {
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
            }}>Ironclad<br />SIEM</h1>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#ffffff !important',
              marginBottom: '15px'
            }}>Centralized Security Monitoring for All Businesses</h2>
            <p style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#87CEEB !important',
              marginBottom: '18px',
              fontStyle: 'italic'
            }}>"Hand-built rules. Expert-vetted detection. Complete visibility."</p>
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
              }}>Security Information</div>
              <div style={{
                fontSize: '14px',
                color: '#87CEEB !important',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Event Management</div>
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
              Ironclad is a comprehensive SIEM solution that provides your business with monitoring and visibility into your Windows devices, Firewalls, EDR, and Office 365 environments. Using hand-built rules that have been customized and vetted by our cybersecurity team, Ironclad delivers advanced threat detection technology to your enterprise environment so you can monitor, protect against cyber-attacks, and achieve compliance.
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
                  }}>Hand-Built Detection Rules</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666666 !important',
                    lineHeight: '1.4'
                  }}>Custom rules built and vetted by our security experts to detect Indicators of Compromise and malicious attacks specific to your environment and threat landscape.</p>
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
                  }}>Multi-Environment Coverage</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666666 !important',
                    lineHeight: '1.4'
                  }}>Comprehensive monitoring across Windows devices, network infrastructure, and Microsoft 365 cloud services with unified visibility and centralized management.</p>
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
                  }}>Real-Time Threat Detection</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666666 !important',
                    lineHeight: '1.4'
                  }}>Continuous monitoring and analysis of security events with immediate alerting through the Ironclad dashboard for rapid threat identification and response.</p>
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
                  }}>Integrated Case Management</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666666 !important',
                    lineHeight: '1.4'
                  }}>Dedicated incident response platform for tracking, managing, and documenting security cases from detection through resolution with full audit trails.</p>
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
                  }}>Executive Reporting & Analytics</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666666 !important',
                    lineHeight: '1.4'
                  }}>Automated monthly executive reports and customizable dashboards providing high-level security posture insights tailored for leadership and compliance teams.</p>
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
              }}>Expert-Vetted Intelligence</div>
              <div style={{
                fontSize: '13px',
                lineHeight: '1.5',
                color: '#ffffff !important'
              }}>Benefit from detection rules hand-built and continuously refined by our cybersecurity experts, providing superior threat detection compared to generic SIEM solutions.</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff !important',
                marginBottom: '8px'
              }}>Flexible Visibility</div>
              <div style={{
                fontSize: '13px',
                lineHeight: '1.5',
                color: '#ffffff !important'
              }}>Monitor your hybrid environment including Windows endpoints, network infrastructure, and Microsoft 365 services through a single comprehensive platform.</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff !important',
                marginBottom: '8px'
              }}>Simplified Compliance Management</div>
              <div style={{
                fontSize: '13px',
                lineHeight: '1.5',
                color: '#ffffff !important'
              }}>Meet regulatory requirements with automated 30-day log retention, detailed audit trails, and executive reporting that demonstrates security controls and incident response.</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff !important',
                marginBottom: '8px'
              }}>Rapid Threat Response</div>
              <div style={{
                fontSize: '13px',
                lineHeight: '1.5',
                color: '#ffffff !important'
              }}>Accelerate incident response with real-time detection, integrated case management, and comprehensive forensic data that enables quick threat containment and remediation.</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff !important',
                marginBottom: '8px'
              }}>Flexible Pricing Models</div>
              <div style={{
                fontSize: '13px',
                lineHeight: '1.5',
                color: '#ffffff !important'
              }}>Flexible pricing tiers (Pro, Firewall, Office 365) that scale with your business needs and provide volume-based pricing for enterprise environments.</div>
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
          }}>Monitor Your Security Landscape Today</h2>
          <p style={{
            fontSize: '12px',
            marginBottom: '8.1px',
            opacity: '0.9',
            color: 'white !important'
          }}>Comprehensive SIEM solutions for security visibility and threat management</p>

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

export default DecianIroncladSIEMWhitepaper;