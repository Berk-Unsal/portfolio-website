const LANGUAGE_STORAGE_KEY = "siteLanguage";
const SUPPORTED_LANGUAGES = ["en", "tr"];

const I18N = {
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    heroEyebrow: "Portfolio",
    heroLede: "Welcome to my portfolio. My name is Berk Unsal, and I am a computer engineer. I have a passion for software development and a strong background in computer engineering. This portfolio showcases my projects, skills, and experience in the field. Feel free to explore and learn more about my work.",
    heroViewProjects: "View projects",
    heroContact: "Contact",
    aboutEyebrow: "About",
    aboutHeading: "Intentional, focused, and built around scalable systems.",
    aboutCard1Title: "Cloud Specialization",
    aboutCard1Body: "Throughout my academic journey, I have developed a strong focus on cloud computing, gaining expertise in designing and managing cloud-based solutions.",
    aboutCard2Title: "Backend Development",
    aboutCard2Body: "I have a solid foundation in backend development, with experience in building scalable and efficient server-side applications using various programming languages and frameworks.",
    aboutCard3Title: "DevOps Path",
    aboutCard3Body: "I am actively pursuing a career in DevOps, where I can leverage my skills in cloud computing and backend development to streamline software delivery and infrastructure management processes.",
    projectsEyebrow: "Projects",
    projectsHeading: "GitHub Repositories, showcased.",
    projectsNote: "Open source projects that I contributed to or created.",
    contactEyebrow: "Contact",
    contactHeading: "Built around GitHub presence.",
    contactBody: "I hope to expand these projects, also there are more in my GitHub profile. Connect with me from the icons down below.",
    backToTop: "Back to top",
    footerCopy: "Connect with me",
    showcaseBadge: "Showcase project",
    updated: "Updated",
    viewRepo: "View repo",
    rolePrefix: "Role",
    outcomePrefix: "Outcome",
    labelFallback: "Label",
    noDescription: "No description provided.",
    visibility: {
      public: "public",
      private: "private",
      repo: "repo",
    },
    pageTitle: "Berk | Portfolio",
    pageDescription: "Minimalist portfolio showcasing GitHub projects in an Apple-inspired layout.",
  },
  tr: {
    navAbout: "Hakkımda",
    navProjects: "Projeler",
    navContact: "İletişim",
    heroEyebrow: "Portföy",
    heroLede: "Portföyüme hoş geldiniz. Ben Berk Ünsal, bilgisayar mühendisiyim. Yazılım geliştirmeye büyük ilgi duyuyor ve bilgisayar mühendisliği alanında güçlü bir altyapıya sahibim. Bu portföy; projelerimi, yeteneklerimi ve deneyimlerimi sergiler. İnceleyebilir ve çalışmalarım hakkında daha fazla bilgi edinebilirsiniz.",
    heroViewProjects: "Projeleri gör",
    heroContact: "İletişim",
    aboutEyebrow: "Hakkımda",
    aboutHeading: "Amaç odaklı, net ve ölçeklenebilir sistemler üzerine kurulu.",
    aboutCard1Title: "Bulut Uzmanlığı",
    aboutCard1Body: "Akademik yolculuğum boyunca bulut bilişim alanına güçlü bir odak geliştirdim; bulut tabanlı çözümlerin tasarımı ve yönetimi konusunda deneyim kazandım.",
    aboutCard2Title: "Backend Geliştirme",
    aboutCard2Body: "Farklı diller ve frameworklerle ölçeklenebilir ve verimli sunucu tarafı uygulamalar geliştirme konusunda sağlam bir backend altyapısına sahibim.",
    aboutCard3Title: "DevOps Yolu",
    aboutCard3Body: "Bulut ve backend yetkinliklerimi yazılım dağıtımını ve altyapı yönetimini iyileştirmek için kullanabileceğim bir DevOps kariyerini aktif olarak hedefliyorum.",
    projectsEyebrow: "Projeler",
    projectsHeading: "GitHub depoları, vitrin halinde.",
    projectsNote: "Katkıda bulunduğum veya geliştirdiğim açık kaynak projeler.",
    contactEyebrow: "İletişim",
    contactHeading: "GitHub varlığı etrafında şekillendi.",
    contactBody: "Bu projeleri daha da büyütmeyi hedefliyorum. GitHub profilimde daha fazlası var. Aşağıdaki ikonlardan bana ulaşabilirsiniz.",
    backToTop: "Yukarıya dön",
    footerCopy: "Bana ulaşın",
    showcaseBadge: "Vitrin projesi",
    updated: "Güncellendi",
    viewRepo: "Repoyu gör",
    rolePrefix: "Rol",
    outcomePrefix: "Çıktı",
    labelFallback: "Etiket",
    noDescription: "Açıklama bulunmuyor.",
    visibility: {
      public: "açık",
      private: "özel",
      repo: "repo",
    },
    pageTitle: "Berk | Portföy",
    pageDescription: "Apple esintili minimal bir tasarımla GitHub projelerini sergileyen portföy sitesi.",
  },
};

const SHOWCASE_PROJECTS = [
  {
    name: "OpsCommand",
    description: {
      en: "Operational command workflows presented with a minimal, premium interface.",
      tr: "Operasyonel komut akışlarını minimal ve premium bir arayüzle sunar.",
    },
    thumbnail: "assets/opscommand.png",
    labels: {
      en: ["DevOps", "Kubernetes", "CLI"],
      tr: ["DevOps", "Kubernetes", "CLI"],
    },
    role: {
      en: "Architect + Backend",
      tr: "Mimar + Backend",
    },
    outcome: {
      en: "Command-centered operations workflow",
      tr: "Komut merkezli operasyon akışı",
    },
    language: "JavaScript",
    updatedAt: "2026-04-01",
    visibility: "public",
    url: "https://github.com/Berk-Unsal/OpsCommand",
  },
  {
    name: "Python Algorithmic Trading Bot",
    description: {
      en: "Automated trading experiments and signal logic built in Python.",
      tr: "Python ile geliştirilmiş otomatik işlem denemeleri ve sinyal mantığı.",
    },
    thumbnail: "assets/python-algorithmic-trading.png",
    labels: {
      en: ["Trading", "Backtesting", "Automation"],
      tr: ["Alım-Satım", "Geri Test", "Otomasyon"],
    },
    role: {
      en: "Quant Dev + Python Engineer",
      tr: "Kuant Geliştirici + Python Mühendisi",
    },
    outcome: {
      en: "Backtesting and live paper-trading pipeline",
      tr: "Geri test ve canlı paper-trading hattı",
    },
    language: "Python",
    updatedAt: "2025-11-01",
    visibility: "public",
    url: "https://github.com/Berk-Unsal/Python-Algorithmic-Trading-Bot",
  },
  {
    name: "crossview",
    description: {
      en: "Crossplane ecosystem exploration with a compact, developer-friendly view.",
      tr: "Crossplane ekosistemini kompakt ve geliştirici dostu bir görünümle inceleme.",
    },
    thumbnail: "assets/crossview.png",
    labels: {
      en: ["Crossplane", "Platform Engineering", "UI"],
      tr: ["Crossplane", "Platform Mühendisliği", "Arayüz"],
    },
    role: {
      en: "Open-source Contributor",
      tr: "Açık kaynak katkı sağlayıcı",
    },
    outcome: {
      en: "Platform visibility and operability enhancements",
      tr: "Platform görünürlüğü ve işletilebilirlik iyileştirmeleri",
    },
    language: "JavaScript",
    updatedAt: "2026-04-01",
    visibility: "public",
    url: "https://github.com/crossplane-contrib/crossview",
  },
  {
    name: "url health sentinel",
    description: {
      en: "A lightweight monitoring project for checking URL availability and health.",
      tr: "URL erişilebilirliğini ve sağlığını kontrol eden hafif bir izleme projesi.",
    },
    thumbnail: "assets/url-health-sentinel.png",
    labels: {
      en: ["Monitoring", "Uptime", "Web"],
      tr: ["İzleme", "Çalışma Süresi", "Web"],
    },
    role: {
      en: "Full-stack Builder",
      tr: "Full-stack geliştirici",
    },
    outcome: {
      en: "Simple endpoint health signal dashboard",
      tr: "Basit endpoint sağlık sinyali paneli",
    },
    language: "HTML",
    updatedAt: "2026-02-01",
    visibility: "public",
    url: "https://github.com/Berk-Unsal/url-health-sentinel",
  },
];

const projectsGrid = document.getElementById("projects-grid");
let revealObserver = null;
let currentLanguage = "en";

function t(key) {
  return I18N[currentLanguage]?.[key] ?? I18N.en[key] ?? key;
}

function getLocalizedField(field) {
  if (field && typeof field === "object" && !Array.isArray(field)) {
    return field[currentLanguage] ?? field.en ?? "";
  }
  return field ?? "";
}

function humanizeDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat(currentLanguage, { month: "short", year: "numeric" }).format(date);
}

function appendTextElement(parent, tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  element.textContent = text;
  parent.appendChild(element);
  return element;
}

function updateLanguageControls() {
  const buttons = document.querySelectorAll(".lang-btn");
  buttons.forEach((button) => {
    const isCurrent = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-current", isCurrent);
    button.setAttribute("aria-pressed", isCurrent ? "true" : "false");
  });
}

function applyStaticTranslations() {
  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  };

  setText("nav-about", t("navAbout"));
  setText("nav-projects", t("navProjects"));
  setText("nav-contact", t("navContact"));
  setText("hero-eyebrow", t("heroEyebrow"));
  setText("hero-lede", t("heroLede"));
  setText("hero-view-projects", t("heroViewProjects"));
  setText("hero-contact", t("heroContact"));
  setText("about-eyebrow", t("aboutEyebrow"));
  setText("about-heading", t("aboutHeading"));
  setText("about-card-1-title", t("aboutCard1Title"));
  setText("about-card-1-body", t("aboutCard1Body"));
  setText("about-card-2-title", t("aboutCard2Title"));
  setText("about-card-2-body", t("aboutCard2Body"));
  setText("about-card-3-title", t("aboutCard3Title"));
  setText("about-card-3-body", t("aboutCard3Body"));
  setText("projects-eyebrow", t("projectsEyebrow"));
  setText("projects-heading", t("projectsHeading"));
  setText("projects-note", t("projectsNote"));
  setText("contact-eyebrow", t("contactEyebrow"));
  setText("contact-heading", t("contactHeading"));
  setText("contact-body", t("contactBody"));
  setText("contact-back-to-top", t("backToTop"));
  setText("footer-copy", t("footerCopy"));

  document.title = t("pageTitle");
  document.documentElement.lang = currentLanguage;

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", t("pageDescription"));
  }
}

function buildProjectCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card glass reveal";
  card.style.setProperty("--reveal-delay", `${index * 140}ms`);

  const image = document.createElement("div");
  image.className = "project-image";

  if (project.thumbnail) {
    const thumbnail = document.createElement("img");
    thumbnail.src = project.thumbnail;
    thumbnail.alt = `${project.name} thumbnail`;
    thumbnail.loading = index === 0 ? "eager" : "lazy";
    thumbnail.fetchPriority = index === 0 ? "high" : "auto";
    thumbnail.decoding = "async";
    image.appendChild(thumbnail);
  }

  const header = document.createElement("div");
  header.className = "project-header";

  const headingGroup = document.createElement("div");
  appendTextElement(headingGroup, "p", "project-badge", t("showcaseBadge"));
  appendTextElement(headingGroup, "h3", "project-title", project.name);
  header.appendChild(headingGroup);
  appendTextElement(header, "span", "project-badge", t("visibility")[project.visibility ?? "repo"]);

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = getLocalizedField(project.description) || t("noDescription");

  const meta = document.createElement("div");
  meta.className = "project-meta";
  appendTextElement(meta, "span", "", project.language || "Code");
  appendTextElement(meta, "span", "", `${t("updated")} ${humanizeDate(project.updatedAt || new Date().toISOString())}`);

  const labels = getLocalizedField(project.labels);
  const labelsRow = document.createElement("div");
  labelsRow.className = "project-labels";
  (Array.isArray(labels) && labels.length ? labels : [t("labelFallback")]).forEach((label) => {
    appendTextElement(labelsRow, "span", "project-label", label);
  });

  const highlights = document.createElement("div");
  highlights.className = "project-highlights";
  const roleText = getLocalizedField(project.role);
  if (roleText) {
    appendTextElement(highlights, "p", "project-highlight", `${t("rolePrefix")}: ${roleText}`);
  }
  const outcomeText = getLocalizedField(project.outcome);
  if (outcomeText) {
    appendTextElement(highlights, "p", "project-highlight", `${t("outcomePrefix")}: ${outcomeText}`);
  }

  const links = document.createElement("div");
  links.className = "project-links";
  const repoLink = document.createElement("a");
  repoLink.href = project.url;
  repoLink.target = "_blank";
  repoLink.rel = "noreferrer";
  repoLink.textContent = t("viewRepo");
  links.appendChild(repoLink);

  card.append(image, header, description, meta, labelsRow, highlights, links);

  return card;
}

function loadShowcaseProjects() {
  projectsGrid.innerHTML = "";

  SHOWCASE_PROJECTS.forEach((project, index) => {
    projectsGrid.appendChild(buildProjectCard(project, index));
  });

  observeReveals();
}

function setLanguage(nextLanguage, persist = true) {
  currentLanguage = SUPPORTED_LANGUAGES.includes(nextLanguage) ? nextLanguage : "en";
  applyStaticTranslations();
  updateLanguageControls();
  loadShowcaseProjects();

  if (persist) {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  }
}

function detectInitialLanguage() {
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguages = Array.isArray(window.navigator.languages)
    ? window.navigator.languages
    : [window.navigator.language || "en"];

  const hasTurkish = browserLanguages.some((language) => String(language).toLowerCase().startsWith("tr"));
  return hasTurkish ? "tr" : "en";
}

function initLanguageSwitcher() {
  const buttons = document.querySelectorAll(".lang-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang || "en", true);
    });
  });

  setLanguage(detectInitialLanguage(), false);
}

function initSectionNavState() {
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  if (!navLinks.length || !sections.length) {
    return;
  }

  const sectionVisibility = new Map(sections.map((section) => [section.id, 0]));

  const applyActiveLink = (sectionId) => {
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${sectionId}`;
      link.classList.toggle("is-current", isCurrent);
      link.setAttribute("aria-current", isCurrent ? "page" : "false");
    });
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      sectionVisibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
    });

    let bestSectionId = sections[0].id;
    let bestRatio = -1;

    sectionVisibility.forEach((ratio, sectionId) => {
      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestSectionId = sectionId;
      }
    });

    applyActiveLink(bestSectionId);
  }, {
    rootMargin: "-35% 0px -45% 0px",
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  sections.forEach((section) => navObserver.observe(section));

  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && sectionVisibility.has(initialHash)) {
    applyActiveLink(initialHash);
  } else {
    applyActiveLink(sections[0].id);
  }
}

function observeReveals() {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  const elements = document.querySelectorAll(".reveal");
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  }, { threshold: 0.15 });

  elements.forEach((element) => revealObserver.observe(element));
}

function initLiquidCursor() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const isHighContrast = window.matchMedia("(forced-colors: active)").matches;
  const isCursorDisabledByUser = window.localStorage.getItem("disableCustomCursor") === "true";

  if (prefersReducedMotion || !hasFinePointer || isHighContrast || isCursorDisabledByUser) {
    return;
  }

  const cursor = document.createElement("div");
  cursor.className = "liquid-cursor";
  document.body.append(cursor);
  document.body.classList.add("cursor-enhanced");

  const interactiveSelector = "a, button, .button, .social-link";
  const magnifySelector = ".project-image img, .social-link img";
  let pointerVisible = false;
  let magnifiedTarget = null;
  let cursorEnabled = true;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;

  const isCandidateVisible = (candidate) => {
    if (!(candidate instanceof Element)) {
      return false;
    }

    const revealHost = candidate.closest(".reveal");
    if (!revealHost) {
      return true;
    }

    return revealHost.classList.contains("is-visible");
  };

  const syncHoverStateFromPoint = () => {
    if (!cursorEnabled || !pointerVisible) {
      return;
    }

    const hovered = document.elementFromPoint(pointerX, pointerY);
    const interactive = hovered instanceof Element ? hovered.closest(interactiveSelector) : null;
    cursor.classList.toggle("is-active", Boolean(interactive));

    const candidate = hovered instanceof Element ? hovered.closest(magnifySelector) : null;
    setMagnifiedTarget(isCandidateVisible(candidate) ? candidate : null);
  };

  const setMagnifiedTarget = (nextTarget) => {
    if (magnifiedTarget === nextTarget) {
      return;
    }

    if (magnifiedTarget) {
      magnifiedTarget.classList.remove("cursor-magnify-target");
    }

    magnifiedTarget = nextTarget;

    if (magnifiedTarget) {
      magnifiedTarget.classList.add("cursor-magnify-target");
    }
  };

  const toggleOpacity = (isVisible) => {
    cursor.style.opacity = isVisible && cursorEnabled ? "1" : "0";
  };

  window.addEventListener("pointermove", (event) => {
    if (!cursorEnabled) {
      return;
    }

    pointerX = event.clientX;
    pointerY = event.clientY;

    cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;

    const target = event.target;
    const nextMagnifiedTarget = target instanceof Element ? target.closest(magnifySelector) : null;
    setMagnifiedTarget(isCandidateVisible(nextMagnifiedTarget) ? nextMagnifiedTarget : null);

    if (!pointerVisible) {
      pointerVisible = true;
      toggleOpacity(true);
    }
  }, { passive: true });

  document.addEventListener("pointerleave", () => {
    pointerVisible = false;
    toggleOpacity(false);
    setMagnifiedTarget(null);
  });

  document.addEventListener("pointerover", (event) => {
    if (!cursorEnabled) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const isInteractive = target.closest(interactiveSelector);
    cursor.classList.toggle("is-active", Boolean(isInteractive));
  });

  window.addEventListener("scroll", syncHoverStateFromPoint, { passive: true });
  window.addEventListener("resize", syncHoverStateFromPoint, { passive: true });

  document.addEventListener("pointerdown", () => {
    if (!cursorEnabled) {
      return;
    }
    cursor.classList.add("is-pressed");
  });

  document.addEventListener("pointerup", () => {
    cursor.classList.remove("is-pressed");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    cursorEnabled = false;
    pointerVisible = false;
    cursor.classList.remove("is-active", "is-pressed");
    setMagnifiedTarget(null);
    toggleOpacity(false);
    document.body.classList.remove("cursor-enhanced");
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      pointerVisible = false;
      toggleOpacity(false);
      setMagnifiedTarget(null);
    }
  });
}

initLanguageSwitcher();
initSectionNavState();
initLiquidCursor();
