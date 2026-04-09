const SHOWCASE_PROJECTS = [
  {
    name: "OpsCommand",
    description: "Operational command workflows presented with a minimal, premium interface.",
    thumbnail: "assets/opscommand.png",
    labels: ["DevOps", "Kubernetes", "CLI"],
    language: "JavaScript",
    updatedAt: "2026-04-01",
    visibility: "public",
    url: "https://github.com/Berk-Unsal/OpsCommand",
  },
  {
    name: "Python Algorithmic Trading Bot",
    description: "Automated trading experiments and signal logic built in Python.",
    thumbnail: "assets/python-algorithmic-trading.png",
    labels: ["Trading", "Backtesting", "Automation"],
    language: "Python",
    updatedAt: "2025-11-01",
    visibility: "public",
    url: "https://github.com/Berk-Unsal/Python-Algorithmic-Trading-Bot",
  },
  {
    name: "crossview",
    description: "Crossplane ecosystem exploration with a compact, developer-friendly view.",
    thumbnail: "assets/crossview.png",
    labels: ["Crossplane", "Platform Engineering", "UI"],
    language: "JavaScript",
    updatedAt: "2026-04-01",
    visibility: "public",
    url: "https://github.com/crossplane-contrib/crossview",
  },
  {
    name: "url health sentinel",
    description: "A lightweight monitoring project for checking URL availability and health.",
    thumbnail: "assets/url-health-sentinel.png",
    labels: ["Monitoring", "Uptime", "Web"],
    language: "HTML",
    updatedAt: "2026-02-01",
    visibility: "public",
    url: "https://github.com/Berk-Unsal/url-health-sentinel",
  },
];

const projectsGrid = document.getElementById("projects-grid");
const projectsNote = document.getElementById("projects-note");
let revealObserver = null;

function humanizeDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat(undefined, { month: "short", year: "numeric" }).format(date);
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

function buildProjectCard(project, index, accentLabel) {
  const card = document.createElement("article");
  card.className = "project-card glass reveal";
  card.style.setProperty("--reveal-delay", `${index * 140}ms`);

  const image = document.createElement("div");
  image.className = "project-image";

  if (project.thumbnail) {
    const thumbnail = document.createElement("img");
    thumbnail.src = project.thumbnail;
    thumbnail.alt = `${project.name} thumbnail`;
    thumbnail.loading = "lazy";
    image.appendChild(thumbnail);
  }

  const header = document.createElement("div");
  header.className = "project-header";

  const headingGroup = document.createElement("div");
  appendTextElement(headingGroup, "p", "project-badge", accentLabel);
  appendTextElement(headingGroup, "h3", "project-title", project.name);
  header.appendChild(headingGroup);
  appendTextElement(header, "span", "project-badge", project.visibility ?? "repo");

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description || "No description provided.";

  const meta = document.createElement("div");
  meta.className = "project-meta";
  appendTextElement(meta, "span", "", project.language || "Code");
  appendTextElement(meta, "span", "", `Updated ${humanizeDate(project.updatedAt || new Date().toISOString())}`);

  const labels = Array.isArray(project.labels) ? project.labels : [];
  const labelsRow = document.createElement("div");
  labelsRow.className = "project-labels";
  (labels.length ? labels : ["Label"]).forEach((label) => {
    appendTextElement(labelsRow, "span", "project-label", label);
  });

  const links = document.createElement("div");
  links.className = "project-links";
  const repoLink = document.createElement("a");
  repoLink.href = project.url;
  repoLink.target = "_blank";
  repoLink.rel = "noreferrer";
  repoLink.textContent = "View repo";
  links.appendChild(repoLink);

  card.append(image, header, description, meta, labelsRow, links);

  return card;
}

function setProjectsNote(message) {
  if (projectsNote) {
    projectsNote.textContent = message;
  }
}

function loadShowcaseProjects() {
  projectsGrid.innerHTML = "";

  SHOWCASE_PROJECTS.forEach((project, index) => {
    projectsGrid.appendChild(buildProjectCard(project, index, "Showcase project"));
  });

  setProjectsNote("Pinned repositories with source-defined labels.");

  observeReveals();
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
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

  if (prefersReducedMotion || !hasFinePointer) {
    return;
  }

  const cursor = document.createElement("div");
  cursor.className = "liquid-cursor";
  document.body.append(cursor);
  document.body.classList.add("cursor-enhanced");

  const interactiveSelector = "a, button, .button, .social-link";
  const magnifySelector = ".project-image img, .social-link img, .project-label, .project-title";
  let pointerVisible = false;
  let magnifiedTarget = null;

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
    cursor.style.opacity = isVisible ? "1" : "0";
  };

  window.addEventListener("pointermove", (event) => {
    cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;

    const target = event.target;
    const nextMagnifiedTarget = target instanceof Element ? target.closest(magnifySelector) : null;
    setMagnifiedTarget(nextMagnifiedTarget);

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
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const isInteractive = target.closest(interactiveSelector);
    cursor.classList.toggle("is-active", Boolean(isInteractive));
  });

  document.addEventListener("pointerdown", () => {
    cursor.classList.add("is-pressed");
  });

  document.addEventListener("pointerup", () => {
    cursor.classList.remove("is-pressed");
  });
}

loadShowcaseProjects();
observeReveals();
initLiquidCursor();
