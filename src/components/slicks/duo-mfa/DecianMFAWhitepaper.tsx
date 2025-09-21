import React from 'react';

const DecianMFAWhitepaper: React.FC = () => {
  return (
    <div style={{
      width: '1200px',
      minHeight: '800px',
      background: '#ffffff !important',
      position: 'relative',
      fontFamily: 'Inter, sans-serif',
      color: '#333333'
    }}>
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
            fontWeight: 800,
            color: '#ffffff !important',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Decian Inc</div>
          <h1 style={{
            fontSize: '52px',
            fontWeight: 900,
            lineHeight: '0.95',
            marginBottom: '12px',
            color: '#ffffff !important'
          }}>Multi-Factor<br />Authentication</h1>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#ffffff !important',
            marginBottom: '15px'
          }}>Advanced Access Control for All Businesses</h2>
          <p style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#87CEEB !important',
            marginBottom: '18px',
            fontStyle: 'italic'
          }}>"Add layers of security beyond just passwords."</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              fontWeight: 800,
              color: '#ffffff !important',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Access Control</div>
            <div style={{
              fontSize: '14px',
              color: '#87CEEB !important',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Identity Verification</div>
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
            fontWeight: 800,
            color: '#1B4F72 !important',
            marginBottom: '20px'
          }}>Expert-Backed. Headache-Free.</h2>
          <p style={{
            fontSize: '17px',
            lineHeight: '1.6',
            color: '#333333 !important',
            marginBottom: '35px'
          }}>
            We implement robust multi-factor authentication solutions that add critical layers of security beyond traditional passwords, ensuring only authorized users can access your systems and data while maintaining user-friendly workflows.
          </p>

          <h2 style={{
            fontSize: '26px',
            fontWeight: 800,
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
                flexShrink: 0,
                marginTop: '2px',
                color: 'white !important',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>●</div>
              <div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#1B4F72 !important',
                  marginBottom: '6px'
                }}>Multiple Authentication Methods</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666666 !important',
                  lineHeight: '1.4'
                }}>Support for SMS codes, authenticator apps, hardware tokens, biometrics, and push notifications to suit different user preferences and security requirements.</p>
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
                flexShrink: 0,
                marginTop: '2px',
                color: 'white !important',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>●</div>
              <div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#1B4F72 !important',
                  marginBottom: '6px'
                }}>Single Sign-On Integration</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666666 !important',
                  lineHeight: '1.4'
                }}>Seamless integration with existing applications and systems, providing secure access across your entire technology stack with minimal user friction.</p>
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
                flexShrink: 0,
                marginTop: '2px',
                color: 'white !important',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>●</div>
              <div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#1B4F72 !important',
                  marginBottom: '6px'
                }}>Conditional Access Policies</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666666 !important',
                  lineHeight: '1.4'
                }}>Smart access controls that adapt authentication requirements based on user location, device, time, and risk level for optimal security and usability.</p>
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
                flexShrink: 0,
                marginTop: '2px',
                color: 'white !important',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>●</div>
              <div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#1B4F72 !important',
                  marginBottom: '6px'
                }}>User Self-Service Portal</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666666 !important',
                  lineHeight: '1.4'
                }}>Intuitive portal allowing users to manage their authentication methods, reset passwords, and access help resources without IT intervention.</p>
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
                flexShrink: 0,
                marginTop: '2px',
                color: 'white !important',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>●</div>
              <div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#1B4F72 !important',
                  marginBottom: '6px'
                }}>Comprehensive Monitoring</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666666 !important',
                  lineHeight: '1.4'
                }}>Real-time monitoring and alerting for authentication events, failed attempts, and suspicious activities with detailed audit trails and reporting.</p>
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
            fontWeight: 800,
            color: '#ffffff !important',
            marginBottom: '20px'
          }}>Strategic Advantages</h2>

          <div style={{ marginBottom: '16px' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff !important',
              marginBottom: '8px'
            }}>Compliance & Regulatory Support</div>
            <div style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: '#ffffff !important'
            }}>Meet industry standards and regulatory requirements for strong authentication while demonstrating commitment to data protection and security best practices.</div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff !important',
              marginBottom: '8px'
            }}>Enhanced User Experience</div>
            <div style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: '#ffffff !important'
            }}>Streamline access to applications and systems while maintaining security through intelligent authentication that adapts to user behavior and context.</div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff !important',
              marginBottom: '8px'
            }}>Reduced IT Overhead</div>
            <div style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: '#ffffff !important'
            }}>Minimize password-related help desk tickets and administrative burden through self-service capabilities and automated authentication processes.</div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff !important',
              marginBottom: '8px'
            }}>Scalable Security Framework</div>
            <div style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: '#ffffff !important'
            }}>Build a foundation for Zero Trust security architecture that scales with your business growth and evolving security requirements.</div>
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
          fontWeight: 700,
          marginBottom: '5.4px',
          color: 'white !important'
        }}>Strengthen Your Access Security Today</h2>
        <p style={{
          fontSize: '12px',
          marginBottom: '8.1px',
          opacity: 0.9,
          color: 'white !important'
        }}>Advanced multi-factor authentication to protect your business from credential-based attacks</p>

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
              opacity: 0.8
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
              opacity: 0.8
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
              opacity: 0.8
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
              opacity: 0.8
            }}>📍</span>
            <span>259 Main Street, Portland, CT 06480</span>
          </div>
        </div>

        <div style={{
          fontSize: '13px',
          fontWeight: 700,
          marginTop: '5.4px',
          color: 'white !important'
        }}>DECIAN INC</div>
      </div>
    </div>
  );
};

export default DecianMFAWhitepaper;