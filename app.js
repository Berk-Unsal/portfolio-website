const LANGUAGE_STORAGE_KEY = "siteLanguage";
const SUPPORTED_LANGUAGES = ["en", "tr"];

const SKILLS = [
  { name: "aws", label: "AWS" },
  { name: "bash", label: "Bash" },
  { name: "docker", label: "Docker" },
  { name: "git", label: "Git" },
  { name: "javascript", label: "JavaScript" },
  { name: "kubernetes", label: "Kubernetes" },
  { name: "linux", label: "Linux" },
  { name: "mongodb", label: "MongoDB" },
  { name: "open-stack", label: "OpenStack" },
  { name: "python", label: "Python" },
  { name: "redis", label: "Redis" },
  { name: "terraform", label: "Terraform" },
];

const I18N = {
  en: {
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
    heroEyebrow: "Portfolio",
    heroLede: "Computer Engineering student focused on cloud-native systems and backend development. I build scalable, fault-tolerant infrastructure with Kubernetes, OpenStack, and CI/CD pipelines.",
    heroViewProjects: "View projects",
    heroContact: "Contact",
    heroVisualTitle: "profile.snapshot",
    heroVisualFocusLabel: "Focus:",
    heroVisualFocusValue: "Cloud Engineering",
    heroVisualStackLabel: "Stack:",
    heroVisualStackValue: "Kubernetes, OpenStack, Docker",
    heroVisualLocationLabel: "Location:",
    heroVisualLocationValue: "Turkey (Remote-friendly)",
    heroVisualAvailabilityLabel: "Availability:",
    heroVisualAvailabilityValue: "Open to internships and junior roles",
    aboutEyebrow: "About",
    aboutHeading: "Cloud engineering and backend delivery, grounded in production practice.",
    aboutCard1Title: "Cloud and Platform",
    aboutCard1Body: "Hands-on with Kubernetes, OpenStack, Docker, and AWS EC2 to design and operate resilient systems.",
    aboutCard2Title: "Backend Engineering",
    aboutCard2Body: "Building RESTful APIs with Python, improving latency with Redis, and maintaining reliable SQL-backed services.",
    aboutCard3Title: "Delivery and Tooling",
    aboutCard3Body: "Automating releases with GitHub Actions and standardizing infrastructure workflows across Dev, Test, and Production.",
    experienceEyebrow: "Experience",
    experienceHeading: "Internships with measurable backend and cloud impact.",
    experienceBadge: "Internship",
    experienceHighlightsTitle: "Highlights",
    projectsEyebrow: "Projects",
    projectsHeading: "Selected projects and open-source work.",
    projectsNote: "A focused set of repositories aligned with cloud, backend, and platform engineering.",
    contactEyebrow: "Contact",
    contactHeading: "Open to cloud and backend opportunities.",
    contactBody: "You can review my repositories and connect with me through the social links below.",
    cvEyebrow: "Request my CV",
    cvHeading: "Need my full CV for a role or collaboration?",
    cvBody: "Share a few details below and I will send it to your email.",
    cvLabelName: "Name",
    cvLabelCompany: "Company/Organization",
    cvLabelEmail: "Email",
    cvLabelMessage: "Message",
    cvPlaceholderName: "Your name",
    cvPlaceholderCompany: "Company or organization",
    cvPlaceholderEmail: "you@company.com",
    cvPlaceholderMessage: "Tell me why you want my CV and any role context.",
    cvSubmit: "Request my CV",
    cvSubmitting: "Submitting your request...",
    cvSubmitError: "Submission failed. Please try again or reach out via social links.",
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
    pageDescription: "Minimalist portfolio focused on cloud engineering, backend work, and selected GitHub projects.",
  },
  tr: {
    navAbout: "Hakkımda",
    navExperience: "Deneyim",
    navProjects: "Projeler",
    navContact: "İletişim",
    heroEyebrow: "Portföy",
    heroLede: "Bulut-yerel sistemler ve backend geliştirme odaklı bir Bilgisayar Mühendisliği öğrencisiyim. Kubernetes, OpenStack ve CI/CD hatlarıyla ölçeklenebilir, hataya dayanıklı altyapılar geliştiriyorum.",
    heroViewProjects: "Projeleri gör",
    heroContact: "İletişim",
    heroVisualTitle: "profile.snapshot",
    heroVisualFocusLabel: "Odak:",
    heroVisualFocusValue: "Bulut Mühendisliği",
    heroVisualStackLabel: "Yığın:",
    heroVisualStackValue: "Kubernetes, OpenStack, Docker",
    heroVisualLocationLabel: "Konum:",
    heroVisualLocationValue: "Türkiye (Uzaktan çalışmaya uygun)",
    heroVisualAvailabilityLabel: "Uygunluk:",
    heroVisualAvailabilityValue: "Staj ve junior roller için açığım",
    aboutEyebrow: "Hakkımda",
    aboutHeading: "Üretim pratiğiyle şekillenen bulut mühendisliği ve backend teslimatı.",
    aboutCard1Title: "Bulut ve Platform",
    aboutCard1Body: "Kubernetes, OpenStack, Docker ve AWS EC2 ile dayanıklı sistemler tasarlayıp işletme deneyimi.",
    aboutCard2Title: "Backend Mühendisliği",
    aboutCard2Body: "Python ile RESTful API geliştirme, Redis ile gecikme azaltma ve SQL tabanlı servislerin güvenilir şekilde sürdürülmesi.",
    aboutCard3Title: "Teslimat ve Araçlar",
    aboutCard3Body: "GitHub Actions ile sürüm süreçlerini otomatikleştirme ve Dev, Test, Production akışlarında standart altyapı süreçleri kurma.",
    experienceEyebrow: "Deneyim",
    experienceHeading: "Backend ve bulut alanında ölçülebilir etki oluşturan stajlar.",
    experienceBadge: "Staj",
    experienceHighlightsTitle: "Öne çıkanlar",
    projectsEyebrow: "Projeler",
    projectsHeading: "Seçili projeler ve açık kaynak katkıları.",
    projectsNote: "Bulut, backend ve platform mühendisliği odağıyla seçilmiş depolar.",
    contactEyebrow: "İletişim",
    contactHeading: "Bulut ve backend fırsatlarına açığım.",
    contactBody: "Depolarımı inceleyebilir ve aşağıdaki sosyal bağlantılardan bana ulaşabilirsiniz.",
    cvEyebrow: "CV Talebi",
    cvHeading: "Bir pozisyon veya iş birliği için detaylı CV mi istiyor musunuz?",
    cvBody: "Aşağıdaki formu doldurun, CV mi e-posta ile paylaşayım.",
    cvLabelName: "Ad Soyad",
    cvLabelCompany: "Şirket/Kurum",
    cvLabelEmail: "E-posta",
    cvLabelMessage: "Mesaj",
    cvPlaceholderName: "Adınız soyadınız",
    cvPlaceholderCompany: "Şirket veya kurum adı",
    cvPlaceholderEmail: "ornek@sirket.com",
    cvPlaceholderMessage: "CV talebinizin nedenini ve varsa rol detayını paylaşın.",
    cvSubmit: "CV talep et",
    cvSubmitting: "Talebiniz gonderiliyor...",
    cvSubmitError: "Gonderim basarisiz oldu. Lutfen tekrar deneyin veya sosyal baglantilardan iletisim kurun.",
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
    pageDescription: "Bulut mühendisliği, backend çalışmaları ve seçili GitHub projelerine odaklanan minimal portföy sitesi.",
  },
};

const SHOWCASE_PROJECTS = [
  {
    name: "OpsCommand",
    description: {
      en: "Collaborative DevOps and Kubernetes management platform with real-time operational workflows.",
      tr: "Gerçek zamanlı operasyon akışları sunan iş birlikçi DevOps ve Kubernetes yönetim platformu.",
    },
    thumbnail: "assets/opscommand.png",
    labels: {
      en: ["DevOps", "Kubernetes", "CLI"],
      tr: ["DevOps", "Kubernetes", "CLI"],
    },
    role: {
      en: "Full-stack Architect",
      tr: "Full-stack Mimar",
    },
    outcome: {
      en: "Ops terminal and collaborative cluster operations",
      tr: "Operasyon terminali ve iş birlikçi küme yönetimi",
    },
    language: "JavaScript",
    updatedAt: "2026-04-01",
    visibility: "public",
    url: "https://github.com/Berk-Unsal/OpsCommand",
  },
  {
    name: "Python Algorithmic Trading Bot",
    description: {
      en: "Python-based algorithmic trading experimentation focused on strategy logic and automation.",
      tr: "Strateji mantığı ve otomasyona odaklanan Python tabanlı algoritmik işlem denemeleri.",
    },
    thumbnail: "assets/python-algorithmic-trading.png",
    labels: {
      en: ["Trading", "Backtesting", "Automation"],
      tr: ["Alım-Satım", "Geri Test", "Otomasyon"],
    },
    role: {
      en: "Python Engineer",
      tr: "Python Mühendisi",
    },
    outcome: {
      en: "Automated signal and strategy testing workflow",
      tr: "Otomatik sinyal ve strateji test akışı",
    },
    language: "Python",
    updatedAt: "2025-11-01",
    visibility: "public",
    url: "https://github.com/Berk-Unsal/Python-Algorithmic-Trading-Bot",
  },
  {
    name: "crossview",
    description: {
      en: "Open-source contribution to Crossplane ecosystem, improving server-side search and test coverage.",
      tr: "Crossplane ekosistemine sunucu tarafı arama ve test kapsamını iyileştiren açık kaynak katkısı.",
    },
    thumbnail: "assets/crossview.png",
    labels: {
      en: ["Crossplane", "Platform Engineering", "UI"],
      tr: ["Crossplane", "Platform Mühendisliği", "Arayüz"],
    },
    role: {
      en: "Open-source Contributor",
      tr: "Açık Kaynak Katkıcısı",
    },
    outcome: {
      en: "Included in v3.8.0-rc.4 release scope",
      tr: "v3.8.0-rc.4 sürüm kapsamına dahil edildi",
    },
    language: "JavaScript",
    updatedAt: "2026-04-01",
    visibility: "public",
    url: "https://github.com/crossplane-contrib/crossview",
  },
  {
    name: "url health sentinel",
    description: {
      en: "A lightweight monitoring project for URL availability and health checks.",
      tr: "URL erişilebilirliği ve sağlık kontrolleri için hafif bir izleme projesi.",
    },
    thumbnail: "assets/url-health-sentinel.png",
    labels: {
      en: ["Monitoring", "Uptime", "Web"],
      tr: ["İzleme", "Çalışma Süresi", "Web"],
    },
    role: {
      en: "Builder",
      tr: "Geliştirici",
    },
    outcome: {
      en: "Simple endpoint health status visibility",
      tr: "Basit endpoint sağlık görünürlüğü",
    },
    language: "HTML",
    updatedAt: "2026-02-01",
    visibility: "public",
    url: "https://github.com/Berk-Unsal/url-health-sentinel",
  },
];

const EXPERIENCE_ITEMS = [
  {
    role: {
      en: "Cloud Engineering Intern",
      tr: "Bulut Mühendisliği Stajyeri",
    },
    company: "Better Life Communication",
    period: {
      en: "Jan 2026 - Feb 2026",
      tr: "Oca 2026 - Şub 2026",
    },
    highlights: {
      en: [
        "Standardized IP address management and device documentation with NetBox for a 5-server cluster.",
        "Architected a private cloud environment with OpenStack across 3 hypervisors and 7 virtual machines.",
        "Engineered Docker deployments across Dev, Test, and Production, improving uptime to 99.3%.",
      ],
      tr: [
        "5 sunuculu kümede NetBox ile IP adres yönetimi ve cihaz dokümantasyonunu standartlaştırdı.",
        "OpenStack kullanarak 3 hypervisor ve 7 sanal makineden oluşan özel bulut ortamını tasarladı.",
        "Dev, Test ve Production ortamlarında Docker dağıtımlarıyla çalışma süresini %99,3 seviyesine çıkardı.",
      ],
    },
  },
  {
    role: {
      en: "Backend Engineering Intern",
      tr: "Backend Mühendisliği Stajyeri",
    },
    company: "Tüzün Kardeşler A.Ş.",
    period: {
      en: "Jun 2024 - Sep 2024",
      tr: "Haz 2024 - Eyl 2024",
    },
    highlights: {
      en: [
        "Developed and maintained 10+ RESTful API endpoints with Python and Dockerized deployments across environments.",
        "Automated backend delivery with GitHub Actions, reducing manual release time by 40%.",
        "Implemented Redis caching for frequently accessed data, reducing API latency by 30%.",
      ],
      tr: [
        "Python ile 10+ RESTful API endpointi geliştirdi ve Docker ile ortamlar arası tutarlı dağıtım sağladı.",
        "GitHub Actions ile backend teslimat sürecini otomatikleştirerek manuel yayın süresini %40 azalttı.",
        "Sık erişilen veriler için Redis önbelleklemesi uygulayarak API gecikmesini %30 düşürdü.",
      ],
    },
  },
];

const projectsGrid = document.getElementById("projects-grid");
const experienceGrid = document.getElementById("experience-grid");
let revealObserver = null;
let currentLanguage = "en";
const dateFormatterByLanguage = new Map();

function getStoredValue(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setStoredValue(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage failures (private mode or blocked storage).
  }
}

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
  let formatter = dateFormatterByLanguage.get(currentLanguage);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(currentLanguage, { month: "short", year: "numeric" });
    dateFormatterByLanguage.set(currentLanguage, formatter);
  }

  return Number.isNaN(date.getTime())
    ? value
    : formatter.format(date);
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
  setText("nav-experience", t("navExperience"));
  setText("nav-projects", t("navProjects"));
  setText("nav-contact", t("navContact"));
  setText("hero-eyebrow", t("heroEyebrow"));
  setText("hero-lede", t("heroLede"));
  setText("hero-view-projects", t("heroViewProjects"));
  setText("hero-contact", t("heroContact"));
  setText("hero-visual-title", t("heroVisualTitle"));
  setText("hero-visual-focus-label", t("heroVisualFocusLabel"));
  setText("hero-visual-focus-value", t("heroVisualFocusValue"));
  setText("hero-visual-stack-label", t("heroVisualStackLabel"));
  setText("hero-visual-stack-value", t("heroVisualStackValue"));
  setText("hero-visual-location-label", t("heroVisualLocationLabel"));
  setText("hero-visual-location-value", t("heroVisualLocationValue"));
  setText("hero-visual-availability-label", t("heroVisualAvailabilityLabel"));
  setText("hero-visual-availability-value", t("heroVisualAvailabilityValue"));
  setText("about-eyebrow", t("aboutEyebrow"));
  setText("about-heading", t("aboutHeading"));
  setText("about-card-1-title", t("aboutCard1Title"));
  setText("about-card-1-body", t("aboutCard1Body"));
  setText("about-card-2-title", t("aboutCard2Title"));
  setText("about-card-2-body", t("aboutCard2Body"));
  setText("about-card-3-title", t("aboutCard3Title"));
  setText("about-card-3-body", t("aboutCard3Body"));
  setText("experience-eyebrow", t("experienceEyebrow"));
  setText("experience-heading", t("experienceHeading"));
  setText("projects-eyebrow", t("projectsEyebrow"));
  setText("projects-heading", t("projectsHeading"));
  setText("projects-note", t("projectsNote"));
  setText("contact-eyebrow", t("contactEyebrow"));
  setText("contact-heading", t("contactHeading"));
  setText("contact-body", t("contactBody"));
  setText("cv-eyebrow", t("cvEyebrow"));
  setText("cv-heading", t("cvHeading"));
  setText("cv-body", t("cvBody"));
  setText("cv-label-name", t("cvLabelName"));
  setText("cv-label-company", t("cvLabelCompany"));
  setText("cv-label-email", t("cvLabelEmail"));
  setText("cv-label-message", t("cvLabelMessage"));
  setText("cv-submit", t("cvSubmit"));
  setText("contact-back-to-top", t("backToTop"));
  setText("footer-copy", t("footerCopy"));

  const setPlaceholder = (id, value) => {
    const element = document.getElementById(id);
    if (element) {
      element.setAttribute("placeholder", value);
    }
  };

  setPlaceholder("cv-name", t("cvPlaceholderName"));
  setPlaceholder("cv-company", t("cvPlaceholderCompany"));
  setPlaceholder("cv-email", t("cvPlaceholderEmail"));
  setPlaceholder("cv-message", t("cvPlaceholderMessage"));

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
    thumbnail.width = 1600;
    thumbnail.height = 1000;
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

function buildExperienceCard(item, index) {
  const card = document.createElement("article");
  card.className = "experience-card glass reveal";
  card.style.setProperty("--reveal-delay", `${index * 120}ms`);

  const header = document.createElement("div");
  header.className = "experience-header";

  appendTextElement(header, "p", "experience-badge", t("experienceBadge"));
  appendTextElement(header, "h3", "experience-title", getLocalizedField(item.role));
  appendTextElement(header, "p", "experience-company", item.company);
  appendTextElement(header, "p", "experience-period", getLocalizedField(item.period));

  const highlightsTitle = appendTextElement(card, "p", "experience-highlights-title", t("experienceHighlightsTitle"));
  const highlights = document.createElement("ul");
  highlights.className = "experience-highlights";

  const items = getLocalizedField(item.highlights);
  (Array.isArray(items) ? items : []).forEach((highlight) => {
    const listItem = document.createElement("li");
    listItem.textContent = highlight;
    highlights.appendChild(listItem);
  });

  card.append(header, highlightsTitle, highlights);

  return card;
}

function loadExperienceEntries() {
  if (!experienceGrid) {
    return;
  }

  experienceGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();
  EXPERIENCE_ITEMS.forEach((item, index) => {
    fragment.appendChild(buildExperienceCard(item, index));
  });
  experienceGrid.appendChild(fragment);
}

function loadShowcaseProjects() {
  if (!projectsGrid) {
    return;
  }

  projectsGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();

  SHOWCASE_PROJECTS.forEach((project, index) => {
    fragment.appendChild(buildProjectCard(project, index));
  });

  projectsGrid.appendChild(fragment);

  observeReveals();
}

function setLanguage(nextLanguage, persist = true, force = false) {
  const resolvedLanguage = SUPPORTED_LANGUAGES.includes(nextLanguage) ? nextLanguage : "en";
  if (!force && resolvedLanguage === currentLanguage) {
    updateLanguageControls();
    return;
  }

  currentLanguage = resolvedLanguage;
  applyStaticTranslations();
  window.dispatchEvent(new Event("languagechange"));
  updateLanguageControls();
  loadExperienceEntries();
  loadShowcaseProjects();

  if (persist) {
    setStoredValue(LANGUAGE_STORAGE_KEY, currentLanguage);
  }
}

function detectInitialLanguage() {
  const storedLanguage = getStoredValue(LANGUAGE_STORAGE_KEY);
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

  setLanguage(detectInitialLanguage(), false, true);
}

function initSectionNavState() {
  const nav = document.querySelector(".nav");
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  if (!nav || !navLinks.length || !sections.length) {
    return;
  }

  let indicator = nav.querySelector(".nav-indicator");
  if (!indicator) {
    indicator = document.createElement("span");
    indicator.className = "nav-indicator";
    indicator.setAttribute("aria-hidden", "true");
    nav.prepend(indicator);
  }

  const sectionVisibility = new Map(sections.map((section) => [section.id, 0]));
  let activeSectionId = sections[0].id;

  const getActiveLink = () => navLinks.find((link) => link.classList.contains("is-current"));

  const moveIndicator = (link, immediate = false) => {
    if (!(link instanceof HTMLElement)) {
      indicator.classList.remove("is-visible");
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const centerX = linkRect.left - navRect.left + linkRect.width / 2;
    const centerY = linkRect.top - navRect.top + linkRect.height / 2;
    const width = Math.max(linkRect.width - 1, 1);
    const height = Math.max(linkRect.height - 1, 1);

    if (immediate) {
      indicator.classList.add("is-instant");
    } else {
      indicator.classList.remove("is-instant");
      indicator.classList.remove("is-switching");
      // Restart keyframe animation each time the active section changes.
      void indicator.offsetWidth;
      indicator.classList.add("is-switching");
    }

    indicator.style.width = `${width}px`;
    indicator.style.height = `${height}px`;
    indicator.style.transform = `translate3d(${centerX}px, ${centerY}px, 0) translate(-50%, -50%)`;
    indicator.classList.add("is-visible");
  };

  const applyActiveLink = (sectionId) => {
    activeSectionId = sectionId;
    let activeLink = null;

    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${sectionId}`;
      link.classList.toggle("is-current", isCurrent);
      if (isCurrent) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }

      if (isCurrent) {
        activeLink = link;
      }
    });

    moveIndicator(activeLink, false);
  };

  const clamp01 = (value) => Math.max(0, Math.min(1, value));

  const updateSectionProgress = () => {
    const activeSection = sections.find((section) => section.id === activeSectionId);
    if (!activeSection) {
      nav.style.setProperty("--section-progress", "0");
      return;
    }

    const rect = activeSection.getBoundingClientRect();
    const viewportAnchor = window.innerHeight * 0.55;
    const progress = clamp01((viewportAnchor - rect.top) / Math.max(rect.height, 1));
    nav.style.setProperty("--section-progress", progress.toFixed(3));
  };

  let alignRaf = 0;
  const realignIndicator = (immediate = true) => {
    if (alignRaf) {
      window.cancelAnimationFrame(alignRaf);
    }

    alignRaf = window.requestAnimationFrame(() => {
      moveIndicator(getActiveLink(), immediate);
      alignRaf = 0;
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
    updateSectionProgress();
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
  updateSectionProgress();

  window.addEventListener("resize", () => {
    realignIndicator(true);
    updateSectionProgress();
  }, { passive: true });

  let progressTicking = false;
  const requestProgressUpdate = () => {
    if (progressTicking) {
      return;
    }
    progressTicking = true;
    window.requestAnimationFrame(() => {
      updateSectionProgress();
      progressTicking = false;
    });
  };

  window.addEventListener("scroll", requestProgressUpdate, { passive: true });

  window.addEventListener("languagechange", () => {
    realignIndicator(true);
    updateSectionProgress();
  });

  if (typeof ResizeObserver === "function") {
    const resizeObserver = new ResizeObserver(() => {
      realignIndicator(true);
    });
    resizeObserver.observe(nav);
    navLinks.forEach((link) => resizeObserver.observe(link));
  }

  const textObserver = new MutationObserver(() => {
    realignIndicator(true);
    updateSectionProgress();
  });

  textObserver.observe(nav, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      realignIndicator(true);
      updateSectionProgress();
    }).catch(() => {});
  }

  if (document.fonts?.addEventListener) {
    document.fonts.addEventListener("loadingdone", () => {
      realignIndicator(true);
      updateSectionProgress();
    });
  }
}

function observeReveals() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elements = document.querySelectorAll(".reveal");

  if (prefersReducedMotion) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver?.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach((element) => revealObserver.observe(element));
}

function initLiquidCursor() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const isHighContrast = window.matchMedia("(forced-colors: active)").matches;
  const isCursorDisabledByUser = getStoredValue("disableCustomCursor") === "true";
  const isSaveDataEnabled = window.navigator.connection?.saveData === true;

  if (prefersReducedMotion || !hasFinePointer || isHighContrast || isCursorDisabledByUser || isSaveDataEnabled) {
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

function populateCarousel() {
  const container = document.getElementById("skills-carousel-container");
  const carousel = document.getElementById("skills-carousel");
  if (!container || !carousel || carousel.dataset.initialized === "true") {
    return;
  }

  const fragment = document.createDocumentFragment();

  // Create carousel items twice for seamless infinite scroll
  for (let iteration = 0; iteration < 2; iteration++) {
    SKILLS.forEach((skill) => {
      const item = document.createElement("div");
      item.className = "skills-carousel-item";

      const iconContainer = document.createElement("div");
      iconContainer.className = "skills-carousel-icon";

      const img = document.createElement("img");
      img.src = `icons/skills/${skill.name}.png`;
      img.alt = skill.label;
      img.loading = "lazy";
      img.decoding = "async";
      img.draggable = false;

      iconContainer.appendChild(img);

      const label = document.createElement("div");
      label.className = "skills-carousel-label";
      label.textContent = skill.label;

      item.appendChild(iconContainer);
      item.appendChild(label);

      fragment.appendChild(item);
    });
  }

  carousel.appendChild(fragment);
  carousel.dataset.initialized = "true";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const baseSpeed = -28;
  const minSpeed = 10;
  const maxSpeed = 120;

  let offsetX = 0;
  let halfTrackWidth = 1;
  let lastTime = performance.now();
  let dragging = false;
  let dragLastClientX = 0;
  let dragLastTime = performance.now();
  let currentSpeed = baseSpeed;
  let targetSpeed = baseSpeed;

  const enforceSpeedBounds = (speed, directionHint = baseSpeed) => {
    const hintedDirection = Math.sign(directionHint) || -1;
    const direction = Math.sign(speed) || hintedDirection;
    const boundedMagnitude = Math.min(maxSpeed, Math.max(minSpeed, Math.abs(speed)));
    return direction * boundedMagnitude;
  };

  const clampOffset = () => {
    while (offsetX <= -halfTrackWidth) {
      offsetX += halfTrackWidth;
    }
    while (offsetX > 0) {
      offsetX -= halfTrackWidth;
    }
  };

  const applyOffset = () => {
    carousel.style.transform = `translate3d(${offsetX}px, 0, 0)`;
  };

  const recalcTrackWidth = () => {
    halfTrackWidth = Math.max(carousel.scrollWidth / 2, 1);
    clampOffset();
    applyOffset();
  };

  const animationFrame = (now) => {
    const deltaSeconds = (now - lastTime) / 1000;
    lastTime = now;

    if (!prefersReducedMotion && !document.hidden) {
      if (!dragging) {
        // Ease back toward baseline speed after interaction, while keeping limits.
        targetSpeed += (baseSpeed - targetSpeed) * Math.min(1, deltaSeconds * 0.9);
      }

      currentSpeed += (targetSpeed - currentSpeed) * Math.min(1, deltaSeconds * 7);
      currentSpeed = enforceSpeedBounds(currentSpeed, baseSpeed);

      offsetX += currentSpeed * deltaSeconds;
      clampOffset();
      applyOffset();
    }

    window.requestAnimationFrame(animationFrame);
  };

  recalcTrackWidth();
  window.requestAnimationFrame(animationFrame);

  window.addEventListener("resize", recalcTrackWidth, { passive: true });

  container.addEventListener("pointerdown", (event) => {
    dragging = true;
    dragLastClientX = event.clientX;
    dragLastTime = performance.now();
    container.classList.add("is-dragging");
    try {
      container.setPointerCapture(event.pointerId);
    } catch {
      // Ignore unsupported pointer capture edge cases.
    }
  });

  container.addEventListener("pointermove", (event) => {
    if (!dragging) {
      return;
    }

    const deltaX = event.clientX - dragLastClientX;
    const now = performance.now();
    const deltaSeconds = Math.max((now - dragLastTime) / 1000, 0.001);
    dragLastClientX = event.clientX;
    dragLastTime = now;

    offsetX += deltaX;
    clampOffset();
    applyOffset();

    // Translate drag gesture into speed change so interaction has persistent meaning.
    const gestureSpeed = deltaX / deltaSeconds;
    targetSpeed = enforceSpeedBounds(gestureSpeed, currentSpeed);
  });

  const stopDragging = () => {
    if (!dragging) {
      return;
    }
    dragging = false;
    container.classList.remove("is-dragging");
    targetSpeed = enforceSpeedBounds(currentSpeed, baseSpeed);
  };

  container.addEventListener("pointerup", stopDragging);
  container.addEventListener("pointercancel", stopDragging);
  container.addEventListener("pointerleave", stopDragging);

  container.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }

    event.preventDefault();
    const speedDelta = 16;
    const nextSpeed = event.key === "ArrowRight"
      ? targetSpeed - speedDelta
      : targetSpeed + speedDelta;
    targetSpeed = enforceSpeedBounds(nextSpeed, targetSpeed);
  });

  document.addEventListener("visibilitychange", () => {
    lastTime = performance.now();
  });
}

function initCvRequestForm() {
  const form = document.getElementById("cv-request-form");
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  const submitButton = form.querySelector("#cv-submit");
  const status = form.querySelector("#cv-form-status");
  let isSubmitting = false;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    isSubmitting = true;
    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
    }

    if (status instanceof HTMLElement) {
      status.classList.remove("is-error");
      status.textContent = t("cvSubmitting");
    }

    try {
      const response = await fetch(form.action, {
        method: form.method || "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Formspree submission failed with status ${response.status}`);
      }

      window.location.assign("success.html");
    } catch {
      if (status instanceof HTMLElement) {
        status.classList.add("is-error");
        status.textContent = t("cvSubmitError");
      }

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
      }
      isSubmitting = false;
    }
  });
}

function initApp() {
  initCvRequestForm();
  populateCarousel();
  initLanguageSwitcher();
  initSectionNavState();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp, { once: true });
} else {
  initApp();
}
