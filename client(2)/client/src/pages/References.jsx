import React from 'react';
import '../styles/references.css';

const References = () => {
  const sections = [
    {
      title: "Module Sources",
      references: [
        {
          name: "OWASP Documentation",
          description: "Comprehensive resources for web security risks and best practices.",
          link: "https://owasp.org/www-project-top-ten/",
          category: "Documentation"
        },
        {
          name: "NIST Cybersecurity Framework",
          description: "Guidelines and standards to manage and reduce cybersecurity risk.",
          link: "https://www.nist.gov/cyberframework",
          category: "Framework"
        },
        {
          name: "Linux Foundation Docs",
          description: "Official documentation for open-source security and administration.",
          link: "https://docs.linuxfoundation.org/",
          category: "Documentation"
        }
      ]
    },
    {
      title: "Chapter References",
      references: [
        {
          name: "RFC Documentation",
          description: "Technical specifications and policy documents for the Internet.",
          link: "https://www.ietf.org/standards/rfcs/",
          category: "Documentation"
        },
        {
          name: "MITRE ATT&CK Framework",
          description: "Globally-accessible knowledge base of adversary tactics and techniques.",
          link: "https://attack.mitre.org/",
          category: "Framework"
        },
        {
          name: "Official Tool Documentation",
          description: "Guides for industry-standard security tools like Nmap, Metasploit, and Wireshark.",
          link: "https://nmap.org/docs.html",
          category: "Documentation"
        }
      ]
    },
    {
      title: "External Research & Learning",
      references: [
        {
          name: "Academic Research Papers",
          description: "Peer-reviewed studies on advanced cryptography and network security.",
          link: "https://scholar.google.com/",
          category: "Research"
        },
        {
          name: "Security Blogs",
          description: "Insights from leading cybersecurity researchers and industry experts.",
          link: "https://krebsonsecurity.com/",
          category: "Research"
        },
        {
          name: "Industry Whitepapers",
          description: "In-depth reports on emerging threats and security technologies.",
          link: "https://www.mandiant.com/resources",
          category: "Research"
        }
      ]
    }
  ];

  return (
    <div className="references-container">
      <div className="references-header">
        <h1 className="references-title">References</h1>
        <p className="references-subtitle">
          Explore the sources, frameworks, and research papers that power our cybersecurity learning modules.
        </p>
      </div>

      {sections.map((section, sIdx) => (
        <div key={sIdx} className="references-section">
          <h2 className="section-title">{section.title}</h2>
          <div className="references-grid">
            {section.references.map((ref, rIdx) => (
              <div key={rIdx} className="reference-card" data-testid={`card-reference-${sIdx}-${rIdx}`}>
                <div className="card-content">
                  <div className="card-header-row">
                    <h3 className="source-name">{ref.name}</h3>
                    <span className="category-tag">{ref.category}</span>
                  </div>
                  <p className="source-description">{ref.description}</p>
                  <a 
                    href={ref.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link-button"
                    data-testid={`button-external-link-${sIdx}-${rIdx}`}
                  >
                    View Source
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default References;
