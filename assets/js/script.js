/* ===== SCRIPT.JS - UZI Portfolio ===== */

/* ---- Project Data ---- */
const PROJECTS = [
  {
    id: 1,
    title: "NeuroWeave",
    subtitle: "AI Personal Knowledge Navigator",
    category: "AI / Web App",
    year: "2024",
    filename: "NeuroWeave_TA.docx",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    tools: ["Python", "NLP", "React", "FastAPI", "MongoDB"],
    accentColor: "#60a5fa",
    desc: "Sistem navigasi pengetahuan personal berbasis AI yang membantu pengguna mengelola dan menghubungkan informasi secara cerdas.",
    caseStudy: {
      overview: "NeuroWeave lahir dari frustrasi nyata: semakin banyak informasi yang dikumpulkan, semakin sulit untuk menemukan dan menghubungkan pengetahuan yang relevan. Proyek ini menggabungkan teknologi Natural Language Processing mutakhir dengan desain yang berpusat pada pengguna untuk menciptakan \"otak digital\" pribadi.",
      sections: [
        {
          title: "Tantangan & Latar Belakang",
          content: "Dalam era informasi ini, kita dihadapkan pada paradoks yang ironis: semakin banyak data yang tersedia, semakin sulit menemukan apa yang kita butuhkan. Google Keep, Notion, dan Obsidian fantastis—namun mereka hanya menyimpan teks. Mereka tidak *memahami* konteks atau hubungan antar ide.\n\nNeuroWeave dirancang untuk menjawab: bagaimana jika sistem manajemen pengetahuan bisa berpikir seperti otak manusia—menghubungkan konsep yang tampaknya tidak berkaitan?"
        },
        {
          title: "Pendekatan Teknis",
          content: "Inti dari NeuroWeave adalah **Graph-Based Knowledge Representation**. Setiap catatan, dokumen, atau ide dimodelkan sebagai *node* dalam knowledge graph. Relasi semantik antar node dibangun secara otomatis menggunakan:\n\n- **Sentence Transformers** untuk embedding teks dense\n- **Named Entity Recognition (NER)** untuk ekstraksi entitas kunci\n- **Topic Modeling (LDA)** untuk clustering konsep tematik\n- **FastAPI** sebagai backbone REST API dengan response time < 240ms\n\nFrontend dibangun dengan React, menampilkan visualisasi graph 3D interaktif menggunakan Three.js."
        },
        {
          title: "Implementasi & Pembelajaran",
          content: "Tantangan terbesar adalah merancang sistem retrieval yang terasa *natural*. Pendekatan tradisional keyword search terlalu kaku—pengguna harus tahu persis kata yang dipakai. Solusinya: **Hybrid Retrieval** yang menggabungkan sparse search (BM25) dan dense search (vector similarity).\n\nHasil: sistem mampu menjawab query seperti 'ide yang berhubungan dengan proyek kuliah kemarin' dengan akurasi 94%, bahkan ketika catatan tidak mengandung kata kunci tersebut secara eksplisit."
        },
        {
          title: "Hasil & Dampak",
          content: "NeuroWeave berhasil memproses lebih dari 10.000 dokumen dalam pengujian, dengan:\n\n- Waktu respons rata-rata **240ms** per query semantik\n- Akurasi retrieval **94%** berdasarkan human evaluation\n- Pengurangan waktu pencarian informasi hingga **67%** dalam uji pengguna\n\nProyek ini membawa pemahaman mendalam tentang trade-off antara akurasi model dan latensi sistem—pelajaran yang sangat berharga untuk karier di bidang AI Engineering."
        }
      ],
      resources: [
        { label: "Baca Dokumen Lengkap", url: "docs/NeuroWeave_TA.docx" },
        { label: "Paper NLP Reference", url: "#" }
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tools: ["Python", "Machine Learning", "Node.js", "MongoDB", "Docker"],
    accentColor: "#a78bfa",
    desc: "Platform AI otonom untuk bisnis mikro yang mengautomasi perencanaan, operasional, dan pengambilan keputusan bisnis.",
    caseStudy: {
      overview: "BizPilot hadir untuk menjawab tantangan nyata bisnis mikro di Indonesia: keterbatasan sumber daya manusia dan keahlian dalam pengambilan keputusan berbasis data. Bayangkan memiliki konsultan bisnis AI yang bekerja 24/7—itulah BizPilot.",
      sections: [
        {
          title: "Masalah yang Dipecahkan",
          content: "Lebih dari 64 juta UMKM di Indonesia beroperasi hampir sepenuhnya berdasarkan intuisi pemilik. Tidak ada sistem forecasting kas, tidak ada analisis tren penjualan, tidak ada peringatan dini ketika stok mendekati habis.\n\nBizPilot dirancang untuk mengisi gap ini: sebuah copilot AI yang memahami konteks bisnis mikro dan memberikan rekomendasi yang actionable—bukan sekadar dashboard cantik."
        },
        {
          title: "Arsitektur Sistem",
          content: "BizPilot menggunakan arsitektur **Multi-Agent AI** di mana setiap agen spesialis menangani domain tertentu:\n\n- **Market Intelligence Agent**: memantau tren harga dan kompetitor secara real-time\n- **Cash Flow Agent**: memprediksi kebutuhan kas 30-90 hari ke depan menggunakan LSTM\n- **Inventory Agent**: menghitung optimal reorder point berdasarkan demand forecasting\n- **Decision Orchestrator**: mengintegrasikan semua sinyal menjadi rekomendasi akhir\n\nSemua agen berkomunikasi via message queue (RabbitMQ) yang containerized dengan Docker."
        },
        {
          title: "Reinforcement Learning untuk Adaptasi",
          content: "Tantangan unik bisnis mikro adalah variabilitas yang tinggi—kondisi pasar lokal sangat berbeda antar daerah. Solusinya adalah **Contextual Bandits** yang terus belajar dari feedback pemilik bisnis.\n\nSetiap kali rekomendasi diikuti atau diabaikan, sistem mencatat hasilnya dan menyesuaikan model. Dalam 3 bulan pengujian, akurasi prediksi naik dari 71% ke 87%—bukti nyata pembelajaran adaptif."
        },
        {
          title: "Dampak Terukur",
          content: "Setelah 6 bulan pengujian dengan 15 UMKM pilot:\n\n- **ROI rata-rata 3.2x** dari implementasi rekomendasi sistem\n- **85% proses operasional** berhasil diotomasi (laporan, pengingat, alert)\n- Pengurangan stok deadstock hingga **43%**\n- Net Promoter Score dari pengguna pilot: **72/100**"
        }
      ],
      resources: [
        { label: "Baca Dokumen Lengkap", url: "docs/BizPilot_TA.docx" }
      ]
    }
  },
  {
    id: 3,
    title: "Methodica",
    subtitle: "AI Research & Experiment Designer",
    category: "Research / AI",
    year: "2024",
    filename: "Methodica_TA.docx",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
    tools: ["Python", "TensorFlow", "React", "PostgreSQL", "Jupyter"],
    accentColor: "#4ade80",
    desc: "Alat desain eksperimen penelitian berbasis AI yang membantu peneliti merancang dan menganalisis eksperimen ilmiah.",
    caseStudy: {
      overview: "Methodica lahir dari observasi bahwa peneliti, terutama di tingkat S1 dan S2, sering menghabiskan minggu-minggu berharga hanya untuk merancang metodologi penelitian—padahal banyak pola yang berulang dan bisa dipelajari AI.",
      sections: [
        {
          title: "Konteks & Motivasi",
          content: "Penelitian ilmiah yang baik dimulai dari metodologi yang solid. Namun bagi banyak peneliti muda, merancang eksperimen yang bebas bias adalah tantangan tersendiri. Konfounding variabel, selection bias, inadequate sample size—kesalahan ini baru terdeteksi di akhir, ketika sudah terlambat.\n\nMethodica hadir sebagai *co-researcher* AI yang membantu dari awal: dari formulasi hipotesis hingga validasi statistik hasil."
        },
        {
          title: "Fitur Kunci yang Dibangun",
          content: "**Hypothesis Generator**: mendapatkan input area penelitian, lalu menghasilkan hipotesis kandidat berdasarkan gap analysis dari literature database (Semantic Scholar API).\n\n**Experiment Template Engine**: menyarankan design eksperimen (RCT, quasi-experimental, observational) berdasarkan tujuan penelitian dan resources yang tersedia—200+ template siap pakai.\n\n**Statistical Analysis Suite**: integrasi langsung dengan Jupyter untuk menjalankan analisis statistik, lengkap dengan interpretasi hasil dalam bahasa natural.\n\n**Bias Detector**: mengevaluasi rancangan eksperimen dan menandai potensi bias dengan saran perbaikan konkret."
        },
        {
          title: "Pembelajaran Teknis",
          content: "Proyek ini adalah pertama kalinya saya bekerja serius dengan **scientific literature mining**. Menghubungkan Methodica ke Semantic Scholar API untuk paper retrieval membuka mata tentang kompleksitas knowledge graph dalam domain akademik.\n\nSalah satu insight menarik: model yang dilatih untuk mendeteksi bias eksperimen ternyata sangat sensitif terhadap framing bahasa. Kalimat yang secara semantik sama bisa menghasilkan prediksi bias yang berbeda—ini mendorong saya untuk mendalami **prompt robustness** dalam NLP."
        },
        {
          title: "Validasi & Hasil",
          content: "Pengujian dilakukan bersama 12 mahasiswa S2 dari jurusan sains dan sosial:\n\n- Efisiensi fase desain penelitian meningkat **65%** rata-rata\n- **91% akurasi** dalam mendeteksi potensi bias eksperimen\n- **200+ template** eksperimen tersedia di library\n- Rata-rata penghematan waktu: **3 minggu** per siklus penelitian"
        }
      ],
      resources: [
        { label: "Baca Dokumen Lengkap", url: "docs/Methodica_TA.docx" }
      ]
    }
  }
];

/* ---- DOM Ready ---- */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMenuOverlay();
  initScrollReveal();
  renderProjects();
  initContactForm();
  initHeroParallax();
});

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
    document.body.style.overflow = "hidden";
  });

  const closeMenu = () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  menuClose.addEventListener("click", closeMenu);
  overlayLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      closeMenu();
      setTimeout(() => target?.scrollIntoView({ behavior: "smooth" }), 400);
    });
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
}

/* ---- Scroll Reveal ---- */
function initScrollReveal() {
  const els = document.querySelectorAll(
    ".about-inner, .section-header, .skills-grid, .timeline-item, .service-item, .contact-left, .contact-form, .skill-card"
  );
  els.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach(el => observer.observe(el));
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
        <div class="if-card-tags">
          ${proj.tools.slice(0, 4).map(t => `<span class="if-tag">${t}</span>`).join("")}
        </div>
        <div class="if-card-actions">
          <a href="docs/${proj.filename}" target="_blank" class="if-btn-primary" onclick="event.stopPropagation()">
            Visit Site <span class="if-btn-arrow">↗</span>
          </a>
          <button class="if-btn-secondary" onclick="event.stopPropagation(); openProjectDetail(${i})">
            Read More
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  /* Stagger observe cards */
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), idx * 120);
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll(".if-card").forEach(c => observer.observe(c));
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

  const sectionsHtml = proj.caseStudy.sections.map((sec, si) => `
    <section class="pd-section" style="animation-delay:${0.2 + si * 0.08}s">
      <h3 class="pd-section-title">${sec.title}</h3>
      <div class="pd-section-body">${parseMarkdown(sec.content)}</div>
    </section>
  `).join("");

  const resourcesHtml = proj.caseStudy.resources.map(r => `
    <a href="${r.url}" target="_blank" class="pd-resource-link">
      <span class="pd-resource-icon">↗</span>
      ${r.label}
    </a>
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
          <a href="docs/${proj.filename}" target="_blank" class="pd-meta-visit">
            Open Document <span>↗</span>
          </a>
        </div>

        <!-- Title -->
        <h1 class="pd-title">${proj.title}</h1>
        <p class="pd-tagline">${proj.subtitle}</p>

        <!-- Tech tags -->
        <div class="pd-tags">
          ${proj.tools.map(t => `<span class="pd-tag" style="border-color:${proj.accentColor}33;color:${proj.accentColor}">${t}</span>`).join("")}
        </div>

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

        <!-- Resources -->
        <hr class="pd-divider">
        <div class="pd-resources">
          <h4 class="pd-resources-title">Resources</h4>
          <div class="pd-resources-list">
            ${resourcesHtml}
          </div>
        </div>

      </article>
    </div>
  `;

  document.body.appendChild(page);
  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => requestAnimationFrame(() => {
    page.classList.add("active");
  }));

  const close = () => {
    page.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => page.remove(), 400);
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

/* ---- Hero Parallax ---- */
function initHeroParallax() {
  const heroBg = document.querySelector(".hero-bg");
  if (!heroBg) return;
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY <= document.querySelector(".hero").offsetHeight)
      heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.25}px)`;
  }, { passive: true });
}
