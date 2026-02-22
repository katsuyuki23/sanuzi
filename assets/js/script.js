/* ===== SCRIPT.JS - UZI Portfolio ===== */
console.log("Script v3.0 loaded (Portfolio Update)");

/* ---- Project Data ---- */
const PROJECTS = [
  {
    id: 1,
    title: "Micromodeling Artisan",
    subtitle: "Platform Parametrik Produk Lokal",
    category: "Platform / E-Commerce",
    year: "2025",
    image: "assets/img/project-micromodeling.jpg",
    tools: ["React", "Node.js", "PostgreSQL", "WebXR", "Three.js"],
    accentColor: "#8b5cf6",
    desc: "Platform yang mengubah produk kerajinan tangan menjadi entitas digital parametrik dengan pricing engine real-time berbasis kapasitas produksi.",
    caseStudy: {
      overview: "Platform Micromodeling Artisan memperkenalkan cara baru yang belum lazim dipakai di ekosistem marketplace Indonesia: mengubah produk kerajinan tangan dari sekadar foto+harga statis menjadi entitas digital yang bisa dikonfigurasi, dihitung harganya secara real-time, dan dikelola kapasitas produksinya secara otomatis.",
      sections: [
        {
          title: "Inovasi Kunci",
          content: "1. **Parametric Product Engine** — Formula Harga Berbasis Variabel Produksi: **P = B + (M × α) + (L × β) + (C × γ)**. \n\n2. **Capacity-Linked Dynamic Pricing** — Harga naik otomatis saat slot pesanan hampir penuh untuk melindungi kualitas & beban kerja artisan.\n\n3. **WebXR / AR Preview** — Fitur preview produk 3D langsung di ruangan Anda menggunakan kamera HP untuk mengurangi keraguan visual."
        },
        {
          title: "Perbandingan vs Marketplace Biasa",
          content: "- **Harga kustomisasi real-time:** Ada (formula otomatis) vs Tidak ada.\n- **Manajemen kapasitas:** Ada (slot-based) vs Tidak ada.\n- **Preview AR:** Ada (WebXR) vs Tidak ada.\n- **Metrics Industri:** Lead Time Score & Complexity Index vs Tanpa data."
        }
      ],
      resources: [
        { label: "View on GitHub", url: "#" }
      ]
    }
  },
  {
    id: 2,
    title: "Validasi Ide Bisnis",
    subtitle: "Micro-Market Testing & Decision Engine",
    category: "Platform / Analytics",
    year: "2025",
    image: "assets/img/project-validasi.jpg",
    tools: ["React", "Node.js", "Statistics", "AI Copywriting", "MongoDB"],
    accentColor: "#10b981",
    desc: "Platform 'rem cerdas' yang menggabungkan landing page eksperimen dengan statistical decision engine untuk keputusan GO / ITERATE / KILL.",
    caseStudy: {
      overview: "Platform ini menggabungkan eksperimen landing page sebagai instrumen riset dengan statistical decision engine yang memberi verdict berbasis data. Di Indonesia, hampir tidak ada tool validasi yang menggunakan pendekatan statistik inferensial untuk segmen pre-product founder.",
      sections: [
        {
          title: "Inovasi Kunci",
          content: "1. **Quantitative Decision Engine** — Interpretasi angka melalui Confidence Interval, Expected Profit Model, dan Bayesian stopping rules.\n\n2. **Bias Mitigation Framework** — Mekanisme anti-bias (Pre-commitment threshold, Blind result reveal, Devil's Advocate mode).\n\n3. **Sequential Testing Protocol** — Menghemat anggaran iklan 40–60% dengan fixed-horizon testing yang cerdas."
        },
        {
          title: "Fitur Eksklusif",
          content: "- **Risk Index:** Mengukur tingkat spekulasi keputusan secara kuantitatif.\n- **Idea Genealogy:** Menyimpan setiap ide dalam graph nodes untuk mempelajari pola kegagalan historis.\n- **Counterfactual Scenario:** Mensimulasikan skenario 'bagaimana jika' pada model bisnis."
        }
      ],
      resources: [
        { label: "View on GitHub", url: "#" }
      ]
    }
  },
  {
    id: 3,
    title: "Dana Sosial Masjid",
    subtitle: "Transparansi Real-Time · QR Donasi · Laporan Otomatis",
    category: "Platform / FinTech",
    year: "2025",
    image: "assets/img/project-danamasjid.jpg",
    tools: ["React", "Laravel", "MySQL", "Midtrans", "OpenAI API"],
    accentColor: "#f59e0b",
    desc: "Infrastruktur kepercayaan digital hyperlocal masjid/komunitas dengan transparansi radikal, QR per program, dan laporan keuangan AI.",
    caseStudy: {
      overview: "Platform ini mengisi ceruk yang diabaikan oleh fintech besar: manajemen keuangan hyperlocal untuk komunitas terkecil. Solusi ini tentang membangun infrastruktur kepercayaan digital di level paling akar rumput.",
      sections: [
        {
          title: "Inovasi Kunci",
          content: "1. **Radical Transparency Dashboard** — Public-First: Semua orang bisa melihat saldo dan riwayat transaksi tanpa login untuk membangun Trust Loop.\n\n2. **Program-Linked QR Code** — 'Earmarked giving' yang meningkatkan jumlah donasi melalui kejelasan tujuan spesifik.\n\n3. **Natural Language AI Report** — Mengubah angka kaku menjadi narasi Bahasa Indonesia yang hangat dan shareable menggunakan NLG."
        },
        {
          title: "Keunikan vs Platform Besar",
          content: "- **Trust Score:** Reputasi komunitas berdasarkan konsistensi pelaporan.\n- **Micro-endowment Simulation:** Simulasi rencana dampak sosial jangka panjang.\n- **Hyperlocal Focus:** Dirancang khusus untuk masjid RT/RW dan yayasan lokal kecil."
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
  initSkillCountUp();

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

  // Skills icon marquee — clickable icons → official sites
  const SKILL_ICONS = [
    { name: "Figma", icon: "figma", url: "https://figma.com" },
    { name: "HTML5", icon: "html5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: "css3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "typescript", url: "https://www.typescriptlang.org" },
    { name: "React", icon: "react", url: "https://react.dev" },
    { name: "Next.js", icon: "nextjs", url: "https://nextjs.org" },
    { name: "Tailwind", icon: "tailwindcss", url: "https://tailwindcss.com" },
    { name: "NestJS", icon: "nestjs", url: "https://nestjs.com" },
    { name: "Django", icon: "django", url: "https://www.djangoproject.com" },
    { name: "Laravel", icon: "laravel", url: "https://laravel.com" },
    { name: "Node.js", icon: "nodejs", url: "https://nodejs.org" },
    { name: "MySQL", icon: "mysql", url: "https://www.mysql.com" },
    { name: "PostgreSQL", icon: "postgresql", url: "https://www.postgresql.org" },
    { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com" },
    { name: "GitHub", icon: "github", url: "https://github.com" },
    { name: "GitLab", icon: "gitlab", url: "https://gitlab.com" },
    { name: "Postman", icon: "postman", url: "https://www.postman.com" },
    { name: "Vite", icon: "vitejs", url: "https://vitejs.dev" },
    { name: "Docker", icon: "docker", url: "https://www.docker.com" },
    { name: "Unity", icon: "unity", url: "https://unity.com" },
    { name: "Python", icon: "python", url: "https://www.python.org" },
  ];

  const skillsMarquee = document.getElementById("skillsMarqueeContent");
  if (skillsMarquee) {
    const buildItems = () => SKILL_ICONS.map(s => `
      <a class="sm-item" href="${s.url}" target="_blank" rel="noopener" title="${s.name}">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}/${s.icon}-original.svg"
             onerror="this.src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}/${s.icon}-plain.svg'"
             alt="${s.name}" width="32" height="32" loading="lazy">
        <span>${s.name}</span>
      </a>`).join("");
    skillsMarquee.innerHTML = buildItems() + buildItems();
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
  gsap.to(".hero-video", {
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

  // 4. About Reveal — scroll-scrubbed word reveal (nyala seiring scroll)
  const aboutHeading = document.getElementById("aboutRevealTitle");
  if (aboutHeading) {
    const rawText = aboutHeading.innerText.trim();
    aboutHeading.innerHTML = rawText
      .split(/\s+/)
      .map(w => `<span class="about-word">${w}</span>`)
      .join(" ");

    const wordSpans = aboutHeading.querySelectorAll(".about-word");
    const total = wordSpans.length;

    // Each word animates at its own scroll progress point
    wordSpans.forEach((span, i) => {
      gsap.fromTo(span,
        { color: "rgba(255,255,255,0.12)" },
        {
          color: "rgba(255,255,255,1)",
          ease: "none",
          scrollTrigger: {
            trigger: ".about",
            start: `top+=${(i / total) * 60}% 70%`,
            end: `top+=${((i + 1) / total) * 60}% 60%`,
            scrub: 0.5,
          }
        }
      );
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

/* ---- Skill Percentage Count-Up Animation ---- */
function initSkillCountUp() {
  const pctEls = document.querySelectorAll(".skill-pct");
  if (!pctEls.length) return;

  // Store original values and reset to 0
  pctEls.forEach(el => {
    const target = parseInt(el.textContent, 10);
    el.dataset.target = target;
    el.textContent = "0%";
  });

  const easeOut = (t) => 1 - Math.pow(1 - t, 3); // cubic ease-out

  const animateCount = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1200; // ms
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      el.textContent = value + "%";
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate all .skill-pct when the skills section enters view
        pctEls.forEach((el, i) => {
          setTimeout(() => animateCount(el), i * 60); // stagger 60ms per card
        });
        observer.disconnect(); // run once
      }
    });
  }, { threshold: 0.2 });

  const skillsSection = document.querySelector(".skills");
  if (skillsSection) observer.observe(skillsSection);
}

