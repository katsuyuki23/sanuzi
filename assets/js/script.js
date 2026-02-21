﻿/* ===== SCRIPT.JS - UZI Portfolio ===== */
console.log("Script v2.1 loaded (ThesisMiner Update)");

/* ---- Project Data ---- */
const PROJECTS = [
  {
    id: 1,
    title: "NeuroWeave",
    subtitle: "AI Personal Knowledge Navigator",
    category: "AI / Web App",
    year: "2024",
    filename: "NeuroWeave_TA.docx",
    image: "assets/img/project-neuroweave.png",
    tools: ["Python", "NLP", "React", "FastAPI", "MongoDB"],
    accentColor: "#60a5fa",
    desc: "Sistem navigasi pengetahuan personal berbasis AI yang membantu pengguna mengelola dan menghubungkan informasi secara cerdas.",
    caseStudy: {
      overview: "NeuroWeave dikembangkan sebagai solusi cerdas untuk mengatasi fenomena *information overload* pada manajemen pengetahuan personal. Penelitian ini mengintegrasikan teknologi *Natural Language Processing* (NLP) dengan representasi data berbasis graf untuk menciptakan ekosistem pengetahuan yang mampu memahami konteks dan keterkaitan antar ide secara otonom.",
      sections: [
        {
          title: "Platform & Bidang",
          content: "**Platform:** Aplikasi Web berbasis browser (Web App) — dapat diakses dari perangkat apa pun tanpa instalasi.\n\n**Bidang:** Produktivitas Personal & Manajemen Pengetahuan (*Personal Knowledge Management / PKM*). Ditujukan untuk peneliti, mahasiswa, dan profesional yang bekerja dengan volume informasi tinggi.\n\n**Berbasis:** Kecerdasan Buatan (AI) dengan pendekatan **Semantic Graph** — informasi direpresentasikan sebagai jaringan node yang saling terhubung berdasarkan makna, bukan sekadar folder atau tag.\n\n**Metode:**\n\n- **Graph-Based Knowledge Representation** — memodelkan pengetahuan sebagai graf semantik non-linear.\n- **Sentence Transformers** — mengonversi teks menjadi vektor makna (embeddings) untuk pemahaman konteks.\n- **NER (Named Entity Recognition)** — ekstraksi otomatis entitas penting dari teks.\n- **Topic Modeling (LDA)** — pengelompokan konsep berbasis kemiripan tematik tanpa pelabelan manual."
        },
        {
          title: "1. Latar Belakang & Rumusan Masalah",
          content: "Paradoks informasi modern menunjukkan bahwa peningkatan volume data seringkali berbanding terbalik dengan kemudahan akses pengetahuan. Aplikasi pencatatan konvensional umumnya terbatas pada penyimpanan linear atau berbasis folder yang statis. Masalah utamanya adalah **kurangnya pemahaman semantik** pada sistem, sehingga hubungan implisit antar informasi yang berbeda seringkali terputus.\n\nNeuroWeave menjawab tantangan ini: Bagaimana membangun sistem yang mampu melakukan manajemen pengetahuan non-linear dengan meniru cara kerja asosiatif otak manusia?"
        },
        {
          title: "2. Metodologi Penelitian",
          content: "Penelitian ini menggunakan pendekatan **Graph-Based Knowledge Representation**. Metodologi inti mencakup:\n\n- **Semantic Extraction**: Menggunakan *Sentence Transformers* untuk mengonversi teks mentah menjadi vektor padat (embeddings).\n- **Automated Entity Relationship**: Algoritma NER (*Named Entity Recognition*) digunakan untuk mengekstraksi entitas kunci yang kemudian dimodelkan sebagai *nodes*.\n- **Unsupervised Learning**: Penerapan algoritma *Topic Modeling* (LDA) untuk mengelompokkan konsep-konsep berdasarkan kemiripan tematik secara otomatis tanpa intervensi manual."
        },
        {
          title: "3. Implementasi Sistem (Web App)",
          content: "Arsitektur aplikasi dibangun dengan fokus pada performa dan skalabilitas:\n\n- **Backend**: *FastAPI* dipilih karena kemampuannya menangani operasi asinkron dengan latensi rendah (< 240ms).\n- **Database**: Kombinasi *MongoDB* untuk penyimpanan dokumen dan *Vector Database* untuk pencarian semantik.\n- **Frontend**: *React.js* yang diintegrasikan dengan *Three.js* untuk menghasilkan visualisasi graf 3D interaktif yang memungkinkan pengguna melakukan eksplorasi pengetahuan secara spasial."
        },
        {
          title: "4. Evaluasi & Kontribusi",
          content: "Hasil pengujian sistem terhadap dataset 10.000+ dokumen menunjukkan:\n\n- **Akurasi Retrieval 94%**: Melampaui metode pencarian berbasis *keyword* tradisional dalam hal pemahaman konteks.\n- **Efisiensi Navigasi**: Reduksi waktu pencarian informasi hingga **67%** pada uji coba tingkat pengguna.\n\nPenelitian ini memberikan kontribusi pada pengembangan sistem *Digital Brain* yang lebih intuitif dan adaptif terhadap kebutuhan riset maupun produktivitas profesional."
        },
        {
          title: "5. Rancangan Website NeuroWeave",
          content: "Website NeuroWeave dirancang sebagai **platform Web App** interaktif berbasis AI dengan tampilan futuristik:\n\n- **Landing Page**: Hero section dengan animasi neural network, tagline utama, dan CTA untuk memulai.\n- **Dashboard Utama**: Interface graf 3D interaktif menggunakan Three.js — pengguna bisa drag, zoom, dan klik node pengetahuan.\n- **Editor Note**: Rich-text editor bertenaga AI yang secara otomatis mengidentifikasi entitas dan membuat koneksi ke catatan lain.\n- **Search Intelligence**: Pencarian semantik dengan hasil berupa kartu koneksi, bukan sekadar list teks.\n- **Tech Stack Frontend**: React.js, TailwindCSS, Three.js.\n- **Tech Stack Backend**: FastAPI (Python), MongoDB, Vector Database (pgvector/Qdrant)."
        }
      ],
      resources: [
        { label: "View on GitHub", url: "#" }
      ]
    }
  },
  {
    id: 2,
    title: "BizPilot",
    subtitle: "Autonomous Micro Business AI",
    category: "AI / Automation",
    year: "2024",
    filename: "BizPilot_TA.docx",
    image: "assets/img/project-bizpilot.png",
    tools: ["Python", "Machine Learning", "Node.js", "MongoDB", "Docker"],
    accentColor: "#a78bfa",
    desc: "Platform AI otonom untuk bisnis mikro yang mengautomasi perencanaan, operasional, dan pengambilan keputusan bisnis.",
    caseStudy: {
      overview: "BizPilot merupakan proyek penelitian yang mengeksplorasi potensi **Autonomous AI Agents** dalam mendukung keberlanjutan sektor UMKM. Melalui implementasi sistem cerdas yang mampu melakukan analisis prediktif dan automasi operasional, BizPilot bertujuan untuk mengurangi dependensi pelaku bisnis mikro terhadap tim ahli manusia yang mahal.",
      sections: [
        {
          title: "Platform & Bidang",
          content: "**Platform:** Aplikasi Web berbasis SaaS (*Software as a Service*) — diakses via browser, tanpa instalasi, berbasis subscription.\n\n**Bidang:** Kewirausahaan Mikro & UMKM (*Micro Business / SME Automation*). Ditujukan untuk pemilik usaha kecil, pedagang, dan pelaku UMKM yang tidak memiliki tim analis bisnis.\n\n**Berbasis:** Kecerdasan Buatan (AI) dengan pendekatan **Multi-Agent System** — setiap fungsi bisnis dijalankan oleh agen AI yang bekerja secara otonom dan terspesialisasi, layaknya sebuah tim konsultan digital.\n\n**Metode:**\n\n- **LSTM (Long Short-Term Memory)** — prediksi tren penjualan dan kebutuhan stok berdasarkan data historis.\n- **Multi-Agent AI Architecture** — agen terpisah untuk forecasting, keuangan, dan rekomendasi.\n- **Reinforcement Learning (Contextual Bandits)** — sistem belajar dan beradaptasi dari keputusan nyata pemilik bisnis.\n- **RabbitMQ Message Queue** — sinkronisasi data real-time antar agen tanpa jeda."
        },
        {
          title: "1. Identifikasi Masalah",
          content: "Sektor bisnis mikro seringkali gagal naik kelas karena keterbatasan akses terhadap analisis pasar yang akurat dan pengelolaan stok yang tidak efisien. Pengambilan keputusan yang hanya mengandalkan intuisi pemilik tanpa dukungan data empiris sering menyebabkan *deadstock* dan ketidakstabilan arus kas (cash flow).\n\nRumusan masalah yang diangkat: Sejauh mana sistem AI otonom dapat menggantikan fungsi konsultan bisnis tradisional dalam mengelola strategi operasional harian bisnis mikro?"
        },
        {
          title: "2. Pendekatan Algoritmik",
          content: "Sistem ini dibangun menggunakan arsitektur **Multi-Agent AI**. Setiap agen memiliki spesialisasi:\n\n- **Forecasting Agent**: Menggunakan model *Long Short-Term Memory* (LSTM) untuk memprediksi tren penjualan dan permintaan stok.\n- **Financial Intelligence Agent**: Melakukan optimasi alokasi dana secara otomatis berdasarkan data historis dan proyeksi pengeluaran.\n- **Adaptive Learning**: Penerapan *Reinforcement Learning* (Contextual Bandits) untuk menyesuaikan rekomendasi sistem berdasarkan umpan balik langsung dari pemilik bisnis."
        },
        {
          title: "3. Pengembangan Aplikasi Web",
          content: "Aplikasi ini dirancang sebagai platform *Enterprise-Grade* untuk skala mikro:\n\n- **Scalability**: Seluruh modul sistem dikemas dalam *Docker containers* untuk memastikan kemudahan *deployment*.\n- **Real-time Processing**: Integrasi *RabbitMQ* sebagai perantara pesan (*message queue*) antar agen AI untuk memastikan sinkronisasi data tanpa jeda.\n- **Interface**: Dashboard berbasis web yang responsif dengan visualisasi metrik bisnis yang mudah diinterpretasikan."
        },
        {
          title: "4. Hasil & Analisis Dampak",
          content: "Uji coba selama 6 bulan pada 15 pilot UMKM menunjukkan hasil signifikan:\n\n- **Peningkatan Efisiensi**: Automasi laporan dan pengingat stok hingga **85%**.\n- **Akurasi Prediksi**: Meningkat secara gradual hingga mencapai **87%** setelah fase *fine-tuning* model.\n- **Kesehatan Finansial**: Pengurangan insiden *deadstock* sebesar **43%**, meningkatkan profitabilitas bersih secara keseluruhan."
        },
        {
          title: "5. Rancangan Website BizPilot",
          content: "Website BizPilot dirancang sebagai **platform SaaS Web App** yang clean dan data-centric:\n\n- **Landing Page**: Hero dengan animasi grafik real-time bergerak, value proposition singkat, dan tombol 'Mulai Gratis'.\n- **Dashboard Bisnis**: Overview KPI harian (Pendapatan, Stok, Prediksi) dalam card metrics dengan grafik line/bar interaktif (Chart.js).\n- **AI Advisor Panel**: Chat-interface dengan AI yang memberi rekomendasi bisnis harian berdasarkan data terkini.\n- **Laporan Otomatis**: Halaman report yang auto-generate PDF ringkasan mingguan.\n- **Tech Stack Frontend**: React.js, Chart.js, TailwindCSS.\n- **Tech Stack Backend**: Node.js, Python (LSTM), MongoDB, Docker, RabbitMQ."
        }
      ],
      resources: [
        { label: "View on GitHub", url: "#" }
      ]
    }
  },
  {
    id: 3,
    title: "ThesisMiner",
    subtitle: "AI Research Gap & Topic Discovery",
    category: "AI / EdTech",
    year: "2024",
    filename: "ThesisMiner_AI_Research_Gap_Finder_TA.docx",
    image: "assets/img/project-thesisminer.png",
    tools: ["Python", "Transformers", "NLP", "Scrapy", "React"],
    accentColor: "#f59e0b",
    desc: "Platform cerdas untuk menemukan gap penelitian dan inspirasi judul skripsi secara otomatis dari ribuan jurnal ilmiah.",
    caseStudy: {
      overview: "ThesisMiner dirancang sebagai alat bantu akademik transformatif yang memanfaatkan kecerdasan buatan untuk mempercepat proses **Penemuan Celah Penelitian** (*Research Gap Discovery*). Fokus utama penelitian ini adalah mengintegrasikan teknik pengambilan data otomatis dengan analisis semantik tingkat lanjut untuk memberikan navigasi strategis bagi peneliti muda dalam menentukan arah riset mereka.",
      sections: [
        {
          title: "Platform & Bidang",
          content: "**Platform:** Aplikasi Web berbasis browser (Web App) + sistem scraping otomatis di backend — dapat diakses langsung dari browser tanpa instalasi.\n\n**Bidang:** Teknologi Pendidikan (*EdTech*) & Riset Akademik. Ditujukan untuk mahasiswa tingkat akhir (S1/S2/S3), dosen pembimbing, dan peneliti yang kesulitan menemukan gap penelitian yang belum dieksplorasi.\n\n**Berbasis:** Kecerdasan Buatan (AI) dengan pendekatan **NLP & Topic Modeling** — sistem secara otomatis memetakan lanskap riset dari ribuan jurnal dan mengidentifikasi 'ruang kosong' yang berpotensi menjadi topik baru.\n\n**Metode:**\n\n- **BERTopic + Sentence-BERT (Transformers)** — representasi semantik abstrak jurnal ke dalam ruang vektor berdimensi tinggi.\n- **HDBSCAN Clustering** — pengelompokan topik secara dinamis dan otomatis tanpa pelabelan manual (*Unsupervised Learning*).\n- **Scrapy Web Scraping** — ekstraksi data metadata dan abstrak secara legal dari SINTA, IEEE, dan repositori akademik lainnya.\n- **Knowledge Graph Visualization** — pemetaan visual 2D distribusi riset untuk mengidentifikasi area kosong secara intuitif."
        },
        {
          title: "1. Latar Belakang & Urgensi Penelitian",
          content: "Salah satu hambatan utama mahasiswa dalam tahap awal Tugas Akhir (TA) adalah sulitnya menemukan kebaruan (*novelty*) penelitian di tengah jutaan publikasi ilmiah yang sudah ada. Proses peninjauan literatur secara manual membutuhkan waktu berbulan-bulan dan sangat rentan terhadap residu informasi yang tidak relevan.\n\nPenelitian ini mengusulkan solusi: Sistem otomasi pencarian gap riset yang mampu memproses ribuan abstrak jurnal dalam hitungan menit untuk mengidentifikasi topik yang belum dieksplorasi namun memiliki potensi signifikansi tinggi."
        },
        {
          title: "2. Metodologi 'Gap Discovery' Berbasis AI",
          content: "Alur kerja utama sistem mengandalkan sinergi antara beberapa teknologi NLP:\n\n- **Automated Data Acquisition**: Menggunakan *Scrapy context-aware spiders* untuk melakukan ekstraksi metadata dan abstrak secara legal dari repositori bereputasi (SINTA, IEEE, dll).\n- **Topic Mapping**: Implementasi algoritma **BERTopic** dan **NLP Transformers (Sentence-BERT)** untuk membedah ribuan abstrak menjadi klaster topik pada ruang latensi tinggi.\n- **Clustering Analysis**: Penerapan algoritma HDBSCAN untuk mengidentifikasi topik baru secara dinamis tanpa memerlukan pelabelan data manual (*Unsupervised Learning*)."
        },
        {
          title: "3. Pengembangan Aplikasi & Visualisasi",
          content: "Sebagai sebuah aplikasi web, ThesisMiner menawarkan pengalaman pengguna yang intuitif:\n\n- **Knowledge Graph Visualization**: Pengguna dapat melihat persebaran riset melalui peta visual 2D. Area yang kosong secara visual menandakan potensi celah penelitian (*Research Gap*).\n- **Judul Recommendation Engine**: AI memberikan saran judul skripsi dengan menghubungkan kata kunci dari klaster topik yang memiliki kepadatan rendah namun relevansi tinggi terhadap tren riset global.\n- **Interactive Dashboard**: Dibangun menggunakan *React.js* dan visualisasi data dinamis untuk mempermudah pemetaan arah studi literatur."
        },
        {
          title: "4. Hasil Uji Coba & Validasi Akademik",
          content: "Melalui serangkaian pengujian terhadap dataset ribuan abstrak jurnal dan feedback dari mahasiswa akhir, diperoleh hasil:\n\n- **Efisiensi Waktu Literatur**: Mempercepat fase awal pencarian literatur review hingga **75%**.\n- **Akurasi Klasifikasi**: Model mencapai akurasi **88%** dalam menentukan klasifikasi topik secara otomatis.\n- **Akselerasi Judul**: Memungkinkan mahasiswa menemukan judul penelitian yang solid dan memiliki *novelty* dalam waktu kurang dari satu jam."
        },
        {
          title: "5. Rancangan Website ThesisMiner",
          content: "Website ThesisMiner dirancang sebagai **platform EdTech Web App** berbasis AI yang ramah mahasiswa:\n\n- **Landing Page**: Hero dengan ilustrasi peta topik dinamis, klaim utama 'Temukan Celah Riset dalam 60 Detik', dan tombol 'Coba Gratis'.\n- **Topic Explorer**: Input pencarian jurnal → sistem menampilkan bubble chart interaktif dari klaster topik yang dipetakan oleh BERTopic.\n- **Gap Detector**: Panel hasil yang menampilkan area kosong (research gap) dengan confidence score dan rekomendasi judul TA.\n- **History & Saved**: Pengguna bisa simpan sesi pencarian dan ekspor hasil ke PDF/Word.\n- **Tech Stack Frontend**: React.js, D3.js (visualisasi bubble chart & knowledge graph).\n- **Tech Stack Backend**: Python, BERTopic, Sentence-BERT, Scrapy, FastAPI."
        }
      ],
      resources: [
        { label: "View on GitHub", url: "#" }
      ]
    }
  }
];

const MARQUEE_ITEMS = ["Web Developer", "AI Engineer", "Full Stack", "UI / UX Designer", "Problem Solver"];
const TECH_LOGOS = ["React", "Python", "Node.js", "Docker", "TensorFlow", "MongoDB", "MySQL", "Figma", "Git", "Next.js", "FastAPI", "PostgreSQL"];

/* ---- Global State ---- */
let lenis;

/* ---- DOM Ready ---- */
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  initLenis();
  initNavbar();
  initMenuOverlay();
  renderProjects();
  initMarquees();
  initContactForm();

  // Animation sequences
  initGSAPAnimations();
});

/* ---- Smooth Scroll (Lenis) ---- */
function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Connect Lenis to ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
}

/* ---- Navbar scroll effect ---- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });
}

/* ---- Menu Overlay ---- */
function initMenuOverlay() {
  const menuBtn = document.getElementById("menuBtn");
  const menuClose = document.getElementById("menuClose");
  const overlay = document.getElementById("menuOverlay");
  const overlayLinks = document.querySelectorAll(".overlay-link");

  menuBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    if (lenis) lenis.stop();
  });

  const closeMenu = () => {
    overlay.classList.remove("active");
    if (lenis) lenis.start();
  };

  menuClose.addEventListener("click", closeMenu);
  overlayLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      closeMenu();
      if (target) {
        lenis.scrollTo(target, { offset: 0, duration: 1.5 });
      }
    });
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
}

/* ---- Dynamic Marquees ---- */
function initMarquees() {
  const marqueeContent = document.getElementById("marqueeContent");
  if (marqueeContent) {
    const content = MARQUEE_ITEMS.map(item => `<span>${item}</span><span class="dot-sep">✦</span>`).join("");
    marqueeContent.innerHTML = content + content + content + content;
  }

  const techMarqueeContent = document.getElementById("techMarqueeContent");
  if (techMarqueeContent) {
    const techContent = TECH_LOGOS.map(logo => `<span>${logo}</span>`).join("");
    techMarqueeContent.innerHTML = techContent + techContent + techContent;
  }
}

/* ---- GSAP Animation Engine ---- */
function initGSAPAnimations() {
  // 1. Hero Entrance
  const heroTl = gsap.timeline();
  heroTl
    .to(".hero-last-name", { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" })
    .to(".hero-first-name", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
    .to(".hero-role, .hero-role-italic", { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=0.6")
    .from(".navbar", { y: -50, opacity: 0, duration: 1, ease: "power2.out" }, "-=1");

  // 2. Parallax Hero
  gsap.to(".hero-bg", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // 3. Staggered reveal for skills — repeatable
  const skillCards = document.querySelectorAll(".skill-card");

  function revealSkills(fromEnd = false) {
    const cards = fromEnd ? [...skillCards].reverse() : [...skillCards];
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.transition = `opacity 0.45s ease, transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)`;
        card.classList.add("revealed");
      }, i * 35);
    });
  }

  function hideSkills() {
    skillCards.forEach(card => {
      card.style.transition = "none";
      card.classList.remove("revealed");
    });
  }

  ScrollTrigger.create({
    trigger: ".skills-wrap",
    start: "top 82%",
    onEnter: () => revealSkills(false),
    onLeaveBack: () => hideSkills(),
    onEnterBack: () => revealSkills(true),
    onLeave: () => hideSkills()
  });

  // 4. About Reveal (ifalf.com Style — color-based word reveal)
  const aboutHeading = document.getElementById("aboutRevealTitle");
  if (aboutHeading) {
    const rawText = aboutHeading.innerText.trim();
    aboutHeading.innerHTML = rawText
      .split(/\s+/)
      .map(w => `<span class="about-word">${w}</span>`)
      .join(" ");

    const wordSpans = aboutHeading.querySelectorAll(".about-word");

    // Repeatable: plays each time section enters, resets when section leaves
    ScrollTrigger.create({
      trigger: ".about",
      start: "top 65%",
      onEnter: () => {
        gsap.to(wordSpans, {
          color: "rgba(255,255,255,1)",
          duration: 0.5,
          stagger: { each: 0.07, from: "start" },
          ease: "power1.out",
          overwrite: true
        });
      },
      onLeave: () => {
        gsap.set(wordSpans, { color: "rgba(255,255,255,0.12)" });
      },
      onEnterBack: () => {
        gsap.to(wordSpans, {
          color: "rgba(255,255,255,1)",
          duration: 0.5,
          stagger: { each: 0.07, from: "end" },
          ease: "power1.out",
          overwrite: true
        });
      },
      onLeaveBack: () => {
        gsap.set(wordSpans, { color: "rgba(255,255,255,0.12)" });
      }
    });
  }

  // Parallax photo backdrop
  const aboutBg = document.getElementById("aboutPhotoBg");
  if (aboutBg) {
    gsap.to(aboutBg, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }

  // 4b. Fade in desc + button — repeatable
  gsap.from(".about-desc, .about-footer", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-bottom",
      start: "top 90%",
      toggleActions: "play none none reverse",
    }
  });

  // 5. Timeline staggered entrance
  gsap.to(".timeline-item", {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 80%",
    }
  });

  // 6. Section Headers
  gsap.utils.toArray(".section-header").forEach(header => {
    gsap.to(header.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: header,
        start: "top 90%",
      }
    });
  });

}

/* ============================================================
   RENDER PROJECTS — ifalf.com card style
   3-column grid | image top | title + desc + tags + 2 buttons
============================================================ */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  PROJECTS.forEach((proj, i) => {
    const card = document.createElement("div");
    card.className = "if-card";
    card.style.setProperty("--ca", proj.accentColor);

    card.innerHTML = `
      <div class="if-card-img-wrap">
        <img class="if-card-img" src="${proj.image}" alt="${proj.title}" loading="lazy">
        <div class="if-card-img-overlay"></div>
        <span class="if-card-year">${proj.year}</span>
      </div>
      <div class="if-card-body">
        <div class="if-card-top">
          <span class="if-card-cat">${proj.category}</span>
        </div>
        <h3 class="if-card-title">${proj.title}</h3>
        <p class="if-card-desc">${proj.desc}</p>
        <div class="if-card-actions">
          <button class="if-btn-secondary" onclick="event.stopPropagation(); openProjectDetail(${i})">
            Read More
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  /* GSAP staggered observe cards */
  gsap.to(".if-card", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#projectsGrid",
      start: "top 85%",
    }
  });
}

/* ============================================================
   PROJECT DETAIL PAGE — ifalf.com/projects/aern style
   Full-screen overlay with case-study layout
============================================================ */
function openProjectDetail(index) {
  const proj = PROJECTS[index];
  if (!proj) return;

  const existing = document.getElementById("projectDetailPage");
  if (existing) existing.remove();

  /* Convert markdown-like bold **text** to <strong>text</strong> */
  const parseMarkdown = (text) =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .split("\n\n").map(para => {
        if (para.trim().startsWith("-")) {
          const items = para.trim().split("\n").filter(l => l.trim().startsWith("-"));
          return `<ul>${items.map(l => `<li>${l.replace(/^-\s*/, "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")}</li>`).join("")}</ul>`;
        }
        return `<p>${para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")}</p>`;
      }).join("");

  const page = document.createElement("div");
  page.id = "projectDetailPage";
  page.className = "pd-page";
  page.setAttribute("data-lenis-prevent", "true");

  const sectionsHtml = proj.caseStudy.sections.map((sec, si) => `
    <section class="pd-section">
      <h3 class="pd-section-title">${sec.title}</h3>
      <div class="pd-section-body">${parseMarkdown(sec.content)}</div>
    </section>
  `).join("");


  page.innerHTML = `
    <div class="pd-inner">

      <!-- Sticky top bar -->
      <div class="pd-topbar">
        <button class="pd-back" id="pdBackBtn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back to Projects
        </button>
        <div class="pd-breadcrumb">
          <span>Projects</span>
          <span class="pd-bc-sep">/</span>
          <span class="pd-bc-active">${proj.title}</span>
        </div>
      </div>

      <!-- Hero image -->
      <div class="pd-hero">
        <img src="${proj.image}" alt="${proj.title}" class="pd-hero-img">
        <div class="pd-hero-overlay"></div>
      </div>

      <!-- Article -->
      <article class="pd-article">

        <!-- Meta row -->
        <div class="pd-meta">
          <span class="pd-meta-cat" style="color:${proj.accentColor}">${proj.category}</span>
          <span class="pd-meta-dot">·</span>
          <span class="pd-meta-year">${proj.year}</span>
        </div>

        <!-- Title -->
        <h1 class="pd-title">${proj.title}</h1>
        <p class="pd-tagline">${proj.subtitle}</p>


        <!-- Overview -->
        <div class="pd-overview">
          <p>${proj.caseStudy.overview}</p>
        </div>

        <!-- Divider -->
        <hr class="pd-divider">

        <!-- Sections -->
        <div class="pd-sections">
          ${sectionsHtml}
        </div>


      </article>
    </div>
  `;

  document.body.appendChild(page);

  lenis.stop(); // Stop global Lenis scroll

  gsap.to(page, { opacity: 1, duration: 0.5, pointerEvents: "all" });

  const close = () => {
    gsap.to(page, {
      opacity: 0,
      duration: 0.4,
      pointerEvents: "none",
      onComplete: () => {
        page.remove();
        if (lenis) lenis.start(); // Resume global Lenis scroll
      }
    });
  };

  document.getElementById("pdBackBtn").addEventListener("click", close);

  document.addEventListener("keydown", function handler(e) {
    if (e.key === "Escape") { close(); document.removeEventListener("keydown", handler); }
  });
}

/* ---- Contact Form ---- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector(".btn-send");
    const orig = btn.textContent;
    btn.textContent = "Sending...";
    btn.style.opacity = "0.7";
    btn.style.pointerEvents = "none";
    setTimeout(() => {
      btn.textContent = "Message Sent! ✓";
      btn.style.background = "#22c55e";
      btn.style.color = "#000";
      btn.style.opacity = "1";
      form.reset();
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = "";
        btn.style.color = "";
        btn.style.pointerEvents = "";
      }, 3000);
    }, 1200);
  });
}
