import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

type Language = 'en' | 'id';

type Translations = {
  navbar: {
    home: string;
    manifesto: string;
    security: string;
    requestProtocol: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    titlePart3: string;
    subtitle: string;
    cta: string;
    dashboard: {
      probabilisticTruth: string;
      zeroHallucinations: string;
      systemOperational: string;
    };
  };
  problem: {
    sectionTitle: string;
    sectionTitleHighlight: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  features: {
    title: string;
    titleHighlight: string;
    description: string;
    status: string;
    cards: {
      discovery: {
        title: string;
        description: string;
        module: string;
        scanning: string;
      };
      harmonization: {
        title: string;
        description: string;
        stats: { label: string; value: string }[];
      };
      drafting: {
        title: string;
        description: string;
      };
      risk: {
        title: string;
        description: string;
        metric: string;
      };
      compliance: {
        title: string;
        description: string;
      };
      repository: {
        title: string;
        description: string;
        encrypted: string;
        secure: string;
      };
    };
  };
  discoveryModal: {
    badge: string;
    headlineStart: string;
    headlineHighlight: string;
    subheadline: string;
    features: {
      title: string;
      library: { title: string; desc: string; };
      vectorization: { title: string; desc: string; };
      bridge: { title: string; desc: string; };
    };
    cta: string;
    staticArchive: {
      title: string;
      subtitle: string;
      card1: { title: string; desc: string; };
      card2: { title: string; desc: string; };
    };
    footer: string;
  };
  harmonizationModal: {
    badge: string;
    headlineStart: string;
    headlineHighlight: string;
    subheadline: string;
    cta: string;
    logicStack: {
      title: string;
      subtitle: string;
      publicShield: {
        title: string;
        tag: string;
        items: string[];
      };
      corporateShield: {
        title: string;
        tag: string;
        items: string[];
      };
      protocol: {
        prefix: string;
        highlight: string;
        suffix: string;
      };
    };
    comparison: {
      badge: string;
      title: string;
      scenario: string;
      scenarioTitle: string;
      generic: {
        title: string;
        status: string;
        description: string;
        result: string;
      };
      lexa: {
        title: string;
        status: string;
        description: string;
        result: string;
      };
    };
    footer: string;
  };
  smartDraftingModal: {
    badge: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    subheadline: string;
    cta: string;
    risk: {
      badge: string;
      title: string;
      description: string;
      cards: {
        format: {
          title: string;
          description: string;
        };
        zombie: {
          title: string;
          description: string;
        };
      };
    };
    features: {
      title: string;
      subtitle: string;
      cards: {
        inputs: { title: string; desc: string; };
        bilingual: { title: string; desc: string; };
        template: { title: string; desc: string; };
        refinement: { title: string; desc: string; visual: string; };
      };
    };
    footer: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
  complianceModal: {
    badge: string;
    headlineStart: string;
    headlineHighlight: string;
    subheadline: string;
    cta: string;
    blindSpot: {
      badge: string;
      title: string;
      description: string;
    };
    tiers: {
      title: string;
      subtitle: string;
      tier1: {
        title: string;
        subtitle: string;
        items: string[];
      };
      tier2: {
        title: string;
        subtitle: string;
        items: string[];
      };
    };
    fixer: {
      badge: string;
      title: string;
      description: string;
      match: string;
    };
    footer: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
  riskModal: {
    badge: string;
    headline: string;
    subheadline: string;
    cta: string;
    problem: {
      badge: string;
      title: string;
      description: string;
      cards: {
        authority: string;
        tkdn: string;
      };
    };
    features: {
      title: string;
      subtitle: string;
      cards: {
        authority: { title: string; desc: string; check: string; };
        tkdn: { title: string; desc: string; check: string; };
        payment: { title: string; desc: string; check: string; };
      };
    };
    footer: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
  repositoryModal: {
    badge: string;
    headline: string;
    subheadline: string;
    cta: string;
    problem: {
      badge: string;
      title: string;
      description: string;
    };
    features: {
      title: string;
      subtitle: string;
      cards: {
        tagging: { title: string; desc: string; tags: string[] };
        expiry: { title: string; desc: string; alert: string };
        obligation: { title: string; desc: string; task: string; status: string };
      };
    };
    footer: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
  sovereignty: {
    title: string;
    titleHighlight: string;
    saas: {
      title: string;
      description: string;
    };
    vpc: {
      title: string;
      description: string;
    };
  };
  footer: {
    representation: string;
    redefined: string;
    legalIntelligence: string;
    privacy: string;
    terms: string;
    security: string;
  };
  registration: {
    badge: string;
    headlineStart: string;
    headlineHighlight: string;
    subheadline: string;
    benefits: {
      zeroRisk: { title: string; desc: string; };
      knowledgeGraph: { title: string; desc: string; };
      whiteGlove: { title: string; desc: string; };
    };
    form: {
      fullName: string;
      workEmail: string;
      companyName: string;
      jobTitle: string;
      phoneNumber: string;
      uploadTitle: string;
      uploadDesc: string;
      dropzoneText: string;
      dropzoneSubtext: string;
      submit: string;
      agreement: string;
    };
  };
};

const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      home: "Home",
      manifesto: "System Modules",
      security: "Security",
      requestProtocol: "Request Protocol",
    },
    hero: {
      badge: "Cognitive Intelligence",
      titlePart1: "IN LAW, A",
      titlePart2: "HALLUCINATION",
      titlePart3: "IS A LIABILITY.",
      subtitle: "With defense-grade jurisprudence regulatory intelligence, Lexia offers a database for zero hallucinations.",
      cta: "Schedule a Protocol",
      dashboard: {
        probabilisticTruth: "Probabilistic Truth: 100.0%",
        zeroHallucinations: "ZERO HALLUCINATIONS",
        systemOperational: "System Operational",
      },
    },
    problem: {
      sectionTitle: "THE PROBLEM WITH",
      sectionTitleHighlight: "GENERIC AI",
      description: "General purpose models like GPT-4 or Claude are trained on the open web, not Indonesian jurisprudence. When applied to high-stakes corporate law, they fail in three critical dimensions.",
      items: [
        {
          title: "Missing Context",
          description: "AI lacks training on Indonesian legislative regulations, court decisions, and specific jurisprudential nuances required for accurate legal work.",
        },
        {
          title: "Data Risks",
          description: "Public AI services store and train on user data, creating massive risks for client confidentiality and privilege breaches.",
        },
        {
          title: "False Confidence",
          description: "General purpose LLMs hallucinate cases and statutes that do not exist, delivering them with high confidence that can lead to liability.",
        },
      ],
    },
    features: {
      title: "System",
      titleHighlight: "Modules",
      description: "A unified operating system for Indonesian legal compliance.\nBuilt for precision, speed, and absolute sovereignty.",
      status: "ALL SYSTEMS NOMINAL",
      cards: {
        discovery: {
          title: "Discovery Engine",
          description: "Unified neural search across internal documents and national regulations (OJK, BI, MA). Context-aware retrieval augmented generation tailored for Indonesian law.",
          module: "Module 01",
          scanning: "Scanning Regulatory Database...",
        },
        harmonization: {
          title: "Harmonization",
          description: "Automated conflict checks against 12,000+ statutes.",
          stats: [
            { label: "Conflict Check", value: "85%" },
            { label: "Precedent Match", value: "60%" },
          ],
        },
        drafting: {
          title: "Smart Drafting",
          description: "AI-assisted contract generation with clause libraries.",
        },
        risk: {
          title: "Risk Scanner",
          description: "Real-time liability analysis.",
          metric: "Accuracy Rate",
        },
        compliance: {
          title: "Compliance",
          description: "Instant gap analysis report.",
        },
        repository: {
          title: "Repository",
          description: "Secure centralized vault.",
          encrypted: "ENCRYPTED",
          secure: "SECURE",
        },
      },
    },
    discoveryModal: {
      badge: "LEGAL KNOWLEDGE DISCOVERY",
      headlineStart: "Stop Searching for Keywords.\n",
      headlineHighlight: "Start Finding Answers.",
      subheadline: "Turn your static archive into a Living Intelligence. Deep semantic search across your internal legacy documents.",
      features: {
        title: "Hybrid Intelligence Capabilities",
        library: { title: "The Living Internal Library", desc: "Enterprise OCR ingests scanned deeds and messy PDFs." },
        vectorization: { title: "Semantic Vectorization", desc: "Finds concepts, not just words. Bridges language gaps." },
        bridge: { title: "The External Bridge", desc: "Safe Google Search Grounding for recent court verdicts." }
      },
      cta: "Request a Demo",
      staticArchive: {
        title: "The Static Archive Trap",
        subtitle: "Why traditional document management fails modern legal teams.",
        card1: {
          title: "The Internal Graveyard",
          desc: "Shared drives full of unsearchable PDFs. You miss critical legacy data because it's buried in scanned images and poorly named files."
        },
        card2: {
          title: "The External Wild West",
          desc: "Frantically Googling for regulations, risking reliance on unverified blogs, outdated articles, and hallucinating AI chatbots."
        }
      },
      footer: "Don't let your data gather dust."
    },
    harmonizationModal: {
      badge: "REGULATORY HARMONIZATION",
      headlineStart: "Your Rules. Your Hierarchy.\n",
      headlineHighlight: "One Single Source of Truth.",
      subheadline: "Generic AI stops at national law. Lexia customizes the logic engine to incorporate your specific internal Regulations, creating a unified compliance shield.",
      cta: "Schedule a Workshop",
      logicStack: {
        title: "The Customizable Logic Stack",
        subtitle: "Seamlessly blending public law with your private corporate governance.",
        publicShield: {
          title: "The Public Shield",
          tag: "FIXED",
          items: ["Constitution (UUD 1945)", "Statutes (UU)", "Government Regulations (PP)"]
        },
        corporateShield: {
          title: "The Corporate Shield",
          tag: "CUSTOM",
          items: ["Articles of Association", "Board Manual (SK Direksi)", "Operational SOPs"]
        },
        protocol: {
          prefix: "Lexia Protocol: If an Internal Regulation is stricter than National Law, Lexia enforces ",
          highlight: "YOUR",
          suffix: " rule automatically."
        }
      },
      comparison: {
        badge: "The Internal Blind Spot",
        title: "Why Generic AI Fails Enterprise Compliance",
        scenario: "SCENARIO",
        scenarioTitle: "\"Procurement Project worth Rp 150 Million\"",
        generic: {
          title: "Generic AI",
          status: "Approved",
          description: "*National Law (Perpres Pengadaan) allows Direct Appointment for projects under Rp 200M.*",
          result: "Result: Compliance Violation"
        },
        lexa: {
          title: "Lexia",
          status: "BLOCKED",
          description: "*Internal SK Direksi strictly caps Direct Appointment at Rp 50M.*",
          result: "Result: 100% Compliant"
        }
      },
      footer: "Build Your Custom Logic Engine."
    },
    smartDraftingModal: {
      badge: "SMART DRAFTING",
      headlineStart: "From Blank Page to\n",
      headlineHighlight: "Board-Ready Draft",
      headlineEnd: " in Minutes.",
      subheadline: "Stop copy-pasting. Satya.AI's Smart Drafting engine constructs precise, legally binding agreements using structured logic and bilingual capabilities.",
      cta: "Start Generating",
      risk: {
        badge: "The Risk Reality",
        title: "The \"Franken-Draft\" Risk",
        description: "Manually stitching together clauses from old contracts (\"Frankenstein drafts\") is the #1 cause of legal errors. It leads to conflicting definitions, forgotten names, and phantom references to laws that no longer exist.",
        cards: {
          format: {
            title: "Format Inconsistency",
            description: "Mixing fonts, numbering styles (1. vs I.), and indentations creates unprofessional, hard-to-read documents."
          },
          zombie: {
            title: "Zombie Clauses",
            description: "Accidentally keeping a \"Non-Compete\" clause from a 2018 employee contract in a 2024 vendor agreement."
          }
        }
      },
      features: {
        title: "Structured Legal Generation",
        subtitle: "Precision tools designed for legal professionals, not chat-bot prompters.",
        cards: {
          inputs: { 
            title: "Structured Inputs", 
            desc: "Form-based inputs for Parties, Scope, and Duration. No complex prompting required—just fill in the blanks." 
          },
          bilingual: { 
            title: "Bilingual by Design", 
            desc: "Seamlessly toggle between 'Indonesian Only' or 'English & Indonesian Side-by-Side' layouts instantly." 
          },
          template: { 
            title: "Template Ingestion", 
            desc: "Upload your firm's \"Golden Templates\". Satya learns your preferred clauses and style for future drafts." 
          },
          refinement: { 
            title: "AI Refinement", 
            desc: "Use natural language to refine clauses. \"Make the penalty mutual\" or \"Change jurisdiction to South Jakarta.\"",
            visual: "\"Make penalty mutual\""
          }
        }
      },
      footer: {
        title: "Standardize Your Contracts.",
        subtitle: "Eliminate errors and draft 10x faster with Satya.",
        cta: "Start Generating"
      }
    },
    complianceModal: {
      badge: "DUAL-LAYER COMPLIANCE",
      headlineStart: "Beyond Redlines: The\n",
      headlineHighlight: "Dual-Layer Compliance Engine.",
      subheadline: "Generic AI treats every contract the same. Satya.AI applies a Dual-Layer Approach: separating rapid Normative Hygiene from deep Regulatory Verification.",
      cta: "Upload a Template",
      blindSpot: {
        badge: "The Blind Spot in Drafting",
        title: "Confusing \"Clean\" with \"Compliant\"",
        description: "Legal teams waste 40% of their time fixing indentation, bolding definitions, and standardizing font sizes (\"Hygiene\"). While they focus on making the document look right, they miss the deep regulatory conflicts buried in the clauses."
      },
      tiers: {
        title: "Two Tiers of Intelligence",
        subtitle: "A specialized approach for every layer of your contract.",
        tier1: {
          title: "Tier 1",
          subtitle: "Automated Normative Analysis",
          items: [
            "Universal Hygiene: Automatically fixes numbering, indentation, and font consistency.",
            "Clarity Checks: Flags vague terms like \"reasonable efforts\" or \"promptly\".",
            "Dispute Mechanisms: Ensures standard arbitration clauses are present."
          ]
        },
        tier2: {
          title: "Tier 2",
          subtitle: "Regulatory Cross-Check",
          items: [
            "Deep Verification: Cross-references clauses against specific National Laws (UU, PP).",
            "Environmental Audit: Checks compliance with AMDAL and environmental permits.",
            "Internal Policy Align: Validates against your specific Company Regulations (PP) and SOPs."
          ]
        }
      },
      fixer: {
        badge: "INTELLIGENT TRANSFORM DRAFTING",
        title: "It's Not Just a Checker. It's a Fixer.",
        description: "Satya doesn't just list errors. It ingests your \"Golden Templates\" to understand your firm's perfect style. Then, it automatically rewrites incoming drafts to match your tone, structure, and formatting standards instantly.",
        match: "MATCH 98%"
      },
      footer: {
        title: "Standardize Your Safety.",
        subtitle: "Ensure every contract meets the Gold Standard.",
        cta: "Upload a Template"
      }
    },
    riskModal: {
      badge: "RISK MITIGATION ENGINE",
      headline: "The Gatekeeper. Your\nShield Against Tipikor.",
      subheadline: "An always-on sentry for your procurement process. Automatically detect high-risk violations—from Authority Limits to TKDN shortages—before the contract is signed.",
      cta: "Get the Scanner",
      problem: {
        badge: "The Volume Problem",
        title: "One Missed Signature = Audit Finding",
        description: "In high-volume procurement, manual checks fail. Missing a single signature requirement or overlooking a TKDN calculation error can lead to severe Audit Findings (Temuan BPK) and legal exposure.",
        cards: {
          authority: "Authority Breach\nVP signing > Rp 5M",
          tkdn: "TKDN Shortfall\nBelow mandated 40%"
        }
      },
      features: {
        title: "The Killer Checks",
        subtitle: "Three critical layers of defense for every contract.",
        cards: {
          authority: { 
            title: "Authority Limit Check", 
            desc: "Instantly flags if a signer exceeds their authorized financial limit. Knows the difference between a VP's cap and a Director's mandate.",
            check: "Checks against SK Direksi"
          },
          tkdn: { 
            title: "TKDN Sentinel", 
            desc: "Automatically parses Bills of Quantity (BoQ) to calculate Local Content percentages. Blocks contracts that fail to meet sector-specific thresholds.",
            check: "Enforces Permerin rules"
          },
          payment: { 
            title: "Payment Term Guard", 
            desc: "Prevents risky financial terms like 100% upfront payments without bank guarantees. Ensures terms align with cash flow policies.",
            check: "Validates Termin Pembayaran"
          }
        }
      },
      footer: {
        title: "Secure Your Procurement Pipeline.",
        subtitle: "Eliminate Tipikor risks with Satya.",
        cta: "Get the Scanner"
      }
    },
    repositoryModal: {
      badge: "ACTIVE INTELLIGENCE ARCHIVE",
      headline: "Turn Your Archive into an\nActive Intelligence Asset.",
      subheadline: "Don't just store files. Interrogate them. Satya.AI automatically tags, extracts metadata, and monitors your documents for critical dates and obligations.",
      cta: "Connect Your Archive",
      problem: {
        badge: "The Dead Data Graveyard",
        title: "Where Contracts Go to Die",
        description: "Most legal archives are just \"digital cemeteries\"—unorganized folders of scanned PDFs. Without active monitoring, you miss critical renewal windows, lose track of Bank Guarantees, and let obligations slip through the cracks."
      },
      features: {
        title: "Active Metadata Extraction",
        subtitle: "Satya.AI wakes up your dormant data.",
        cards: {
          tagging: {
            title: "Auto-Tagging",
            desc: "Instantly identifies and tags key data points: Contract Values, Party Names, Jurisdictions, and Governing Laws.",
            tags: ["#ServiceAgreement", "#IDR 500M"]
          },
          expiry: {
            title: "Expiry Watch",
            desc: "Never miss a renewal. Automated alerts trigger at 90, 60, and 30 days before contract expiration.",
            alert: "Next Alert: 30 Days"
          },
          obligation: {
            title: "Obligation Tracking",
            desc: "Extracts and tracks specific deliverables, such as Performance Bond submissions or Quarterly Reports.",
            task: "Performance Bond",
            status: "Due Tomorrow"
          }
        }
      },
      footer: {
        title: "Wake Up Your Data.",
        subtitle: "Transform static files into dynamic insights.",
        cta: "Connect Your Archive"
      }
    },
    sovereignty: {
      title: "BUILT FOR",
      titleHighlight: "SOVEREIGNTY.",
      saas: {
        title: "SaaS Deployment",
        description: "Rapid deployment with standard enterprise-grade encryption. Ready for general counsel support.",
      },
      vpc: {
        title: "Private VPC",
        description: "Zero-trust isolated networks (Azure/AWS/GCP) within Indonesian borders. Compliant with UU PDP.",
      },
    },
    footer: {
      representation: "REPRESENTATION",
      redefined: "Redefined",
      legalIntelligence: "Legal Intelligence",
      privacy: "Privacy Protocol",
      terms: "Terms of Service",
      security: "Security Brief",
    },
    registration: {
      badge: "Limited Availability Q4 2026",
      headlineStart: "Join the ",
      headlineHighlight: "Strategic Pilot Program",
      subheadline: "Experience the future of Indonesian legal compliance. We are currently accepting a limited number of enterprise partners for early access.",
      benefits: {
        zeroRisk: {
          title: "Zero-Risk Trial",
          desc: "Full access to all features with a dedicated sandbox environment."
        },
        knowledgeGraph: {
          title: "Custom Knowledge Graph",
          desc: "We map your specific internal regulations during onboarding."
        },
        whiteGlove: {
          title: "White-Glove Onboarding",
          desc: "Dedicated success manager and technical integration support."
        }
      },
      form: {
        fullName: "Full Name",
        workEmail: "Work Email",
        companyName: "Company Name",
        jobTitle: "Job Title",
        phoneNumber: "Phone Number (Optional)",
        uploadTitle: "Upload a Document for Demo",
        uploadDesc: "We'll process this document in your private demo environment.",
        dropzoneText: "Click to upload or drag and drop",
        dropzoneSubtext: "PDF, DOCX up to 10MB",
        submit: "Request Pilot Access",
        agreement: "By submitting, you agree to our Terms of Service and Privacy Policy."
      }
    }
  },
  id: {
    navbar: {
      home: "Beranda",
      manifesto: "Modul Sistem",
      security: "Keamanan",
      requestProtocol: "Minta Protokol",
    },
    hero: {
      badge: "Kecerdasan Kognitif",
      titlePart1: "DALAM HUKUM,",
      titlePart2: "HALUSINASI",
      titlePart3: "ADALAH LIABILITAS.",
      subtitle: "Dengan intelijen regulasi yurisprudensi berstandar pertahanan, Lexia menawarkan basis data dengan nol halusinasi.",
      cta: "Jadwalkan Protokol",
      dashboard: {
        probabilisticTruth: "Kebenaran Probabilistik: 100.0%",
        zeroHallucinations: "NOL HALUSINASI",
        systemOperational: "Sistem Beroperasi",
      },
    },
    problem: {
      sectionTitle: "MASALAH DENGAN",
      sectionTitleHighlight: "AI GENERIK",
      description: "Model serbaguna seperti GPT-4 atau Claude dilatih pada web terbuka, bukan yurisprudensi Indonesia. Ketika diterapkan pada hukum korporasi berisiko tinggi, mereka gagal dalam tiga dimensi kritis.",
      items: [
        {
          title: "Minim Konteks",
          description: "AI kurang pelatihan mengenai peraturan perundang-undangan Indonesia, putusan pengadilan, dan nuansa yurisprudensi spesifik yang diperlukan untuk pekerjaan hukum yang akurat.",
        },
        {
          title: "Risiko Data",
          description: "Layanan AI publik menyimpan dan melatih data pengguna, menciptakan risiko besar bagi kerahasiaan klien dan pelanggaran hak istimewa.",
        },
        {
          title: "Keyakinan Keliru",
          description: "LLM serbaguna menghalusinasikan kasus dan undang-undang yang tidak ada, menyampaikannya dengan keyakinan tinggi yang dapat menyebabkan liabilitas.",
        },
      ],
    },
    features: {
      title: "Modul",
      titleHighlight: "Sistem",
      description: "Sistem operasi terpadu untuk kepatuhan hukum Indonesia.\nDibangun untuk presisi, kecepatan, dan kedaulatan mutlak.",
      status: "SEMUA SISTEM NOMINAL",
      cards: {
        discovery: {
          title: "Mesin Penemuan",
          description: "Pencarian neural terpadu di seluruh dokumen internal dan peraturan nasional (OJK, BI, MA). Retrieval augmented generation sadar konteks yang disesuaikan untuk hukum Indonesia.",
          module: "Modul 01",
          scanning: "Memindai Basis Data Regulasi...",
        },
        harmonization: {
          title: "Harmonisasi",
          description: "Pemeriksaan konflik otomatis terhadap 12.000+ undang-undang.",
          stats: [
            { label: "Cek Konflik", value: "85%" },
            { label: "Pencocokan Yurisprudensi", value: "60%" },
          ],
        },
        drafting: {
          title: "Perancangan Cerdas",
          description: "Pembuatan kontrak berbantuan AI dengan pustaka klausa.",
        },
        risk: {
          title: "Pemindai Risiko",
          description: "Analisis liabilitas waktu nyata.",
          metric: "Tingkat Akurasi",
        },
        compliance: {
          title: "Kepatuhan",
          description: "Laporan analisis kesenjangan instan.",
        },
        repository: {
          title: "Repositori",
          description: "Brankas terpusat yang aman.",
          encrypted: "TERENKRIPSI",
          secure: "AMAN",
        },
      },
    },
    discoveryModal: {
      badge: "PENEMUAN PENGETAHUAN HUKUM",
      headlineStart: "Jangan Hanya Cari Kata Kunci.\n",
      headlineHighlight: "Temukan Jawaban.",
      subheadline: "Ubah arsip statis Anda menjadi Kecerdasan Hidup. Pencarian semantik mendalam di seluruh dokumen warisan internal Anda.",
      features: {
        title: "Kemampuan Intelijen Hibrida",
        library: { title: "Perpustakaan Internal Hidup", desc: "OCR Perusahaan menyerap akta yang dipindai dan PDF yang berantakan." },
        vectorization: { title: "Vektorisasi Semantik", desc: "Menemukan konsep, bukan hanya kata-kata. Menjembatani kesenjangan bahasa." },
        bridge: { title: "Jembatan Eksternal", desc: "Grounding Pencarian Google yang aman untuk putusan pengadilan terbaru." }
      },
      cta: "Minta Demo",
      staticArchive: {
        title: "Perangkap Arsip Statis",
        subtitle: "Mengapa manajemen dokumen tradisional gagal bagi tim hukum modern.",
        card1: {
          title: "Kuburan Internal",
          desc: "Drive bersama penuh dengan PDF yang tidak dapat dicari. Anda kehilangan data warisan penting karena terkubur dalam gambar pindaian dan file dengan nama yang buruk."
        },
        card2: {
          title: "\"Wild West\" Eksternal",
          desc: "Mencari peraturan secara panik di Google, mempertaruhkan ketergantungan pada blog yang tidak terverifikasi, artikel usang, dan chatbot AI yang berhalusinasi."
        }
      },
      footer: "Jangan biarkan data Anda berdebu."
    },
    harmonizationModal: {
      badge: "HARMONISASI REGULASI",
      headlineStart: "Aturan Anda. Hirarki Anda.\n",
      headlineHighlight: "Satu Sumber Kebenaran.",
      subheadline: "AI generik berhenti pada hukum nasional. Lexia menyesuaikan mesin logika untuk memasukkan Peraturan internal spesifik Anda, menciptakan perisai kepatuhan terpadu.",
      cta: "Jadwalkan Workshop",
      logicStack: {
        title: "Tumpukan Logika yang Dapat Disesuaikan",
        subtitle: "Menggabungkan hukum publik dengan tata kelola perusahaan pribadi Anda secara mulus.",
        publicShield: {
          title: "Perisai Publik",
          tag: "TETAP",
          items: ["Undang-Undang Dasar (UUD 1945)", "Undang-Undang (UU)", "Peraturan Pemerintah (PP)"]
        },
        corporateShield: {
          title: "Perisai Perusahaan",
          tag: "KHUSUS",
          items: ["Anggaran Dasar", "SK Direksi", "SOP Operasional"]
        },
        protocol: {
          prefix: "Protokol Lexia: Jika Peraturan Internal lebih ketat dari Hukum Nasional, Lexia menegakkan aturan ",
          highlight: "ANDA",
          suffix: " secara otomatis."
        }
      },
      comparison: {
        badge: "Titik Buta Internal",
        title: "Mengapa AI Generik Gagal dalam Kepatuhan Perusahaan",
        scenario: "SKENARIO",
        scenarioTitle: "\"Proyek Pengadaan senilai Rp 150 Juta\"",
        generic: {
          title: "AI Generik",
          status: "Disetujui",
          description: "*Hukum Nasional (Perpres Pengadaan) mengizinkan Penunjukan Langsung untuk proyek di bawah Rp 200 Juta.*",
          result: "Hasil: Pelanggaran Kepatuhan"
        },
        lexa: {
          title: "Lexia",
          status: "DIBLOKIR",
          description: "*SK Direksi Internal secara ketat membatasi Penunjukan Langsung pada Rp 50 Juta.*",
          result: "Hasil: 100% Patuh"
        }
      },
      footer: "Bangun Mesin Logika Kustom Anda."
    },
    smartDraftingModal: {
      badge: "PERANCANGAN CERDAS",
      headlineStart: "Dari Halaman Kosong ke\n",
      headlineHighlight: "Draf Siap Rapat Direksi",
      headlineEnd: " dalam Hitungan Menit.",
      subheadline: "Berhenti salin-tempel. Mesin Perancangan Cerdas Satya.AI menyusun perjanjian yang tepat dan mengikat secara hukum menggunakan logika terstruktur dan kemampuan dwibahasa.",
      cta: "Mulai Membuat",
      risk: {
        badge: "Realitas Risiko",
        title: "Risiko \"Draf Frankenstein\"",
        description: "Menjahit klausa secara manual dari kontrak lama (\"draf Frankenstein\") adalah penyebab utama kesalahan hukum. Ini mengarah pada definisi yang bertentangan, nama yang terlupakan, dan referensi hantu ke undang-undang yang tidak lagi berlaku.",
        cards: {
          format: {
            title: "Inkonsistensi Format",
            description: "Mencampur font, gaya penomoran (1. vs I.), dan indentasi membuat dokumen tidak profesional dan sulit dibaca."
          },
          zombie: {
            title: "Klausa Zombie",
            description: "Secara tidak sengaja menyimpan klausa \"Non-Compete\" dari kontrak karyawan 2018 dalam perjanjian vendor 2024."
          }
        }
      },
      features: {
        title: "Generasi Hukum Terstruktur",
        subtitle: "Alat presisi yang dirancang untuk profesional hukum, bukan pembisik chatbot.",
        cards: {
          inputs: { 
            title: "Input Terstruktur", 
            desc: "Input berbasis formulir untuk Pihak, Ruang Lingkup, dan Durasi. Tidak perlu prompting rumit—cukup isi bagian yang kosong." 
          },
          bilingual: { 
            title: "Desain Dwibahasa", 
            desc: "Beralih dengan mulus antara tata letak 'Hanya Indonesia' atau 'Inggris & Indonesia Berdampingan' secara instan." 
          },
          template: { 
            title: "Penyerapan Templat", 
            desc: "Unggah \"Templat Emas\" perusahaan Anda. Satya mempelajari klausa dan gaya pilihan Anda untuk draf masa depan." 
          },
          refinement: { 
            title: "Penyempurnaan AI", 
            desc: "Gunakan bahasa alami untuk menyempurnakan klausa. \"Buat penalti menjadi timbal balik\" atau \"Ubah yurisdiksi menjadi Jakarta Selatan.\"",
            visual: "\"Buat penalti menjadi timbal balik\""
          }
        }
      },
      footer: {
        title: "Standarisasi Kontrak Anda.",
        subtitle: "Hilangkan kesalahan dan buat draf 10x lebih cepat dengan Satya.",
        cta: "Mulai Membuat"
      }
    },
    complianceModal: {
      badge: "KEPATUHAN LAPIS GANDA",
      headlineStart: "Di Luar Coretan: Mesin\n",
      headlineHighlight: "Kepatuhan Lapis Ganda.",
      subheadline: "AI generik memperlakukan setiap kontrak sama. Satya.AI menerapkan Pendekatan Lapis Ganda: memisahkan Kerapian Normatif cepat dari Verifikasi Regulasi mendalam.",
      cta: "Unggah Templat",
      blindSpot: {
        badge: "Titik Buta dalam Perancangan",
        title: "Mencampuradukkan \"Bersih\" dengan \"Patuh\"",
        description: "Tim hukum membuang 40% waktu mereka memperbaiki indentasi, menebalkan definisi, dan menstandarisasi ukuran font (\"Kerapian\"). Sementara mereka fokus membuat dokumen terlihat benar, mereka melewatkan konflik regulasi mendalam yang terkubur dalam klausa."
      },
      tiers: {
        title: "Dua Tingkat Kecerdasan",
        subtitle: "Pendekatan khusus untuk setiap lapisan kontrak Anda.",
        tier1: {
          title: "Tingkat 1",
          subtitle: "Analisis Normatif Otomatis",
          items: [
            "Kerapian Universal: Secara otomatis memperbaiki penomoran, indentasi, dan konsistensi font.",
            "Pemeriksaan Kejelasan: Menandai istilah samar seperti \"usaha wajar\" atau \"segera\".",
            "Mekanisme Sengketa: Memastikan klausa arbitrase standar ada."
          ]
        },
        tier2: {
          title: "Tingkat 2",
          subtitle: "Pemeriksaan Silang Regulasi",
          items: [
            "Verifikasi Mendalam: Referensi silang klausa terhadap Hukum Nasional tertentu (UU, PP).",
            "Audit Lingkungan: Memeriksa kepatuhan dengan AMDAL dan izin lingkungan.",
            "Penyelarasan Kebijakan Internal: Memvalidasi terhadap Peraturan Perusahaan (PP) dan SOP spesifik Anda."
          ]
        }
      },
      fixer: {
        badge: "PENYUSUNAN TRANSFORMASI CERDAS",
        title: "Bukan Sekadar Pemeriksa. Ini Perbaikan.",
        description: "Satya tidak hanya mencantumkan kesalahan. Ia menyerap \"Templat Emas\" Anda untuk memahami gaya sempurna firma Anda. Kemudian, secara otomatis menulis ulang draf masuk agar sesuai dengan nada, struktur, dan standar pemformatan Anda secara instan.",
        match: "COCOK 98%"
      },
      footer: {
        title: "Standarisasi Keamanan Anda.",
        subtitle: "Pastikan setiap kontrak memenuhi Standar Emas.",
        cta: "Unggah Templat"
      }
    },
    riskModal: {
      badge: "MESIN MITIGASI RISIKO",
      headline: "Sang Penjaga. Perisai Anda\nMelawan Tipikor.",
      subheadline: "Penjaga yang selalu aktif untuk proses pengadaan Anda. Secara otomatis mendeteksi pelanggaran berisiko tinggi—dari Batas Wewenang hingga kekurangan TKDN—sebelum kontrak ditandatangani.",
      cta: "Dapatkan Pemindai",
      problem: {
        badge: "Masalah Volume",
        title: "Satu Tanda Tangan Terlewat = Temuan Audit",
        description: "Dalam pengadaan volume tinggi, pemeriksaan manual gagal. Kehilangan satu persyaratan tanda tangan atau mengabaikan kesalahan perhitungan TKDN dapat menyebabkan Temuan Audit (Temuan BPK) yang parah dan paparan hukum.",
        cards: {
          authority: "Pelanggaran Wewenang\nVP menandatangani > Rp 5M",
          tkdn: "Kekurangan TKDN\nDi bawah mandat 40%"
        }
      },
      features: {
        title: "Pemeriksaan Krusial",
        subtitle: "Tiga lapisan pertahanan kritis untuk setiap kontrak.",
        cards: {
          authority: { 
            title: "Cek Batas Wewenang", 
            desc: "Menandai secara instan jika penandatangan melebihi batas keuangan resmi mereka. Mengetahui perbedaan antara batas VP dan mandat Direktur.",
            check: "Memeriksa terhadap SK Direksi"
          },
          tkdn: { 
            title: "Sentinel TKDN", 
            desc: "Secara otomatis mengurai Bill of Quantity (BoQ) untuk menghitung persentase Tingkat Komponen Dalam Negeri. Memblokir kontrak yang gagal memenuhi ambang batas spesifik sektor.",
            check: "Menegakkan aturan Permerin"
          },
          payment: { 
            title: "Penjaga Termin Pembayaran", 
            desc: "Mencegah persyaratan keuangan berisiko seperti pembayaran di muka 100% tanpa jaminan bank. Memastikan persyaratan selaras dengan kebijakan arus kas.",
            check: "Memvalidasi Termin Pembayaran"
          }
        }
      },
      footer: {
        title: "Amankan Saluran Pengadaan Anda.",
        subtitle: "Hilangkan risiko Tipikor dengan Satya.",
        cta: "Dapatkan Pemindai"
      }
    },
    repositoryModal: {
      badge: "ARSIP INTELIJEN AKTIF",
      headline: "Ubah Arsip Anda Menjadi\nAset Intelijen Aktif.",
      subheadline: "Jangan hanya menyimpan file. Interogasi mereka. Satya.AI secara otomatis menandai, mengekstrak metadata, dan memantau dokumen Anda untuk tanggal dan kewajiban penting.",
      cta: "Hubungkan Arsip Anda",
      problem: {
        badge: "Kuburan Data Mati",
        title: "Tempat Kontrak Pergi untuk Mati",
        description: "Sebagian besar arsip hukum hanyalah \"kuburan digital\"—folder PDF pindaian yang tidak terorganisir. Tanpa pemantauan aktif, Anda melewatkan jendela pembaruan penting, kehilangan jejak Jaminan Bank, dan membiarkan kewajiban lolos dari celah."
      },
      features: {
        title: "Ekstraksi Metadata Aktif",
        subtitle: "Satya.AI membangunkan data tidur Anda.",
        cards: {
          tagging: {
            title: "Penandaan Otomatis",
            desc: "Secara instan mengidentifikasi dan menandai titik data utama: Nilai Kontrak, Nama Pihak, Yurisdiksi, dan Hukum yang Mengatur.",
            tags: ["#PerjanjianLayanan", "#IDR 500Jt"]
          },
          expiry: {
            title: "Pengawas Kedaluwarsa",
            desc: "Jangan pernah melewatkan pembaruan. Peringatan otomatis memicu pada 90, 60, dan 30 hari sebelum kedaluwarsa kontrak.",
            alert: "Peringatan Berikutnya: 30 Hari"
          },
          obligation: {
            title: "Pelacakan Kewajiban",
            desc: "Mengekstrak dan melacak kiriman tertentu, seperti penyerahan Jaminan Pelaksanaan atau Laporan Triwulanan.",
            task: "Jaminan Pelaksanaan",
            status: "Jatuh Tempo Besok"
          }
        }
      },
      footer: {
        title: "Bangunkan Data Anda.",
        subtitle: "Ubah file statis menjadi wawasan dinamis.",
        cta: "Hubungkan Arsip Anda"
      }
    },
    sovereignty: {
      title: "DIBANGUN UNTUK",
      titleHighlight: "KEDAULATAN.",
      saas: {
        title: "Penyebaran SaaS",
        description: "Penyebaran cepat dengan enkripsi tingkat perusahaan standar. Siap untuk dukungan penasihat umum.",
      },
      vpc: {
        title: "VPC Pribadi",
        description: "Jaringan terisolasi tanpa kepercayaan (Azure/AWS/GCP) di dalam perbatasan Indonesia. Patuh dengan UU PDP.",
      },
    },
    footer: {
      representation: "REPRESENTASI",
      redefined: "Didefinisikan Ulang",
      legalIntelligence: "Intelijen Hukum",
      privacy: "Protokol Privasi",
      terms: "Syarat Layanan",
      security: "Singkat Keamanan",
    },
    registration: {
      badge: "Ketersediaan Terbatas Q4 2026",
      headlineStart: "Bergabung dengan ",
      headlineHighlight: "Program Percontohan Strategis",
      subheadline: "Rasakan masa depan kepatuhan hukum Indonesia. Saat ini kami menerima mitra perusahaan dalam jumlah terbatas untuk akses awal.",
      benefits: {
        zeroRisk: {
          title: "Uji Coba Nol Risiko",
          desc: "Akses penuh ke semua fitur dengan lingkungan sandbox khusus."
        },
        knowledgeGraph: {
          title: "Grafik Pengetahuan Kustom",
          desc: "Kami memetakan peraturan internal spesifik Anda selama orientasi."
        },
        whiteGlove: {
          title: "Orientasi Layanan Penuh",
          desc: "Manajer sukses khusus dan dukungan integrasi teknis."
        }
      },
      form: {
        fullName: "Nama Lengkap",
        workEmail: "Email Kantor",
        companyName: "Nama Perusahaan",
        jobTitle: "Jabatan",
        phoneNumber: "Nomor Telepon (Opsional)",
        uploadTitle: "Unggah Dokumen untuk Demo",
        uploadDesc: "Kami akan memproses dokumen ini di lingkungan demo pribadi Anda.",
        dropzoneText: "Klik untuk mengunggah atau seret dan lepas",
        dropzoneSubtext: "PDF, DOCX hingga 10MB",
        submit: "Minta Akses Pilot",
        agreement: "Dengan mengirimkan, Anda menyetujui Ketentuan Layanan dan Kebijakan Privasi kami."
      }
    }
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: translations['en'],
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
