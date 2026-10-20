const timelineMilestones = [
  {
    year: "1976",
    title: "Apple begins in a garage",
    summary: "Jobs, Wozniak, and Ronald Wayne form Apple Computer Company.",
    detail:
      "The three co-founders started Apple as a partnership. Steve Wozniak designed the Apple I; Jobs helped turn the early computer into a product and business. Ronald Wayne left the partnership shortly afterward.",
    sourceLabel: "Computer History Museum",
    sourceUrl: "https://computerhistory.org/apple-timeline/",
  },
  {
    year: "1985",
    title: "A departure from Apple",
    summary: "Following a conflict over the company's direction, Jobs leaves Apple.",
    detail:
      "After a power struggle with Apple's leadership, Jobs departed the company. He soon began building a new computer company with a different focus and smaller team.",
    sourceLabel: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/money/Steve-Jobs",
  },
  {
    year: "1985",
    title: "NeXT is founded",
    summary: "Jobs starts a company focused on computers for higher education.",
    detail:
      "NeXT set out to make powerful workstations for universities and researchers. Its software and operating system later became central to Apple's next chapter.",
    sourceLabel: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/money/Steve-Jobs",
  },
  {
    year: "1986",
    title: "A new chapter in computer animation",
    summary: "Jobs acquires Lucasfilm's Computer Division, which becomes Pixar.",
    detail:
      "Jobs acquired the computer graphics group from Lucasfilm and became its principal investor and owner. The group became an independent company called Pixar; Jobs did not found Pixar as a standalone animation studio.",
    sourceLabel: "Pixar: Our Story",
    sourceUrl: "https://www.pixar.com/our-story",
  },
  {
    year: "1996",
    title: "Apple announces a NeXT deal",
    summary: "Apple announces an agreement to acquire NeXT in December.",
    detail:
      "The agreement was announced in December 1996, but the acquisition closed in February 1997. NeXT's technology would provide a new foundation for Apple's software.",
    sourceLabel: "Apple filing with the SEC",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/320193/000032019396000027/0000320193-96-000027.txt",
  },
  {
    year: "1997",
    title: "Jobs returns to Apple",
    summary: "After the NeXT acquisition, Jobs returns as an adviser and later interim CEO.",
    detail:
      "Apple completed its NeXT acquisition in February 1997. Jobs initially returned as an adviser and was named interim CEO later that year, as the company began a broad turnaround.",
    sourceLabel: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/money/Steve-Jobs",
  },
  {
    year: "2001",
    title: "The iPod arrives",
    summary: "Apple introduces a portable music player built around a digital music library.",
    detail:
      "Apple presented the iPod in October 2001. The device became part of a larger music experience that connected hardware, software, and the iTunes store.",
    sourceLabel: "Apple Newsroom",
    sourceUrl: "https://www.apple.com/newsroom/2001/10/23Apple-Presents-iPod/",
  },
  {
    year: "2007",
    title: "The iPhone is introduced",
    summary: "Apple presents a phone that combines calling, music, and internet features.",
    detail:
      "Jobs introduced the iPhone at Macworld in January 2007. The original announcement described it as three products in one: a phone, a widescreen iPod, and an internet communications device.",
    sourceLabel: "Apple Newsroom",
    sourceUrl: "https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/",
  },
  {
    year: "2010",
    title: "The iPad expands the idea",
    summary: "Apple introduces a multi-touch tablet between the phone and the laptop.",
    detail:
      "Apple introduced the iPad in January 2010. Its larger touch display created a new format for browsing, reading, watching video, and using apps.",
    sourceLabel: "Apple Newsroom",
    sourceUrl: "https://www.apple.com/newsroom/2010/01/27Apple-Launches-iPad/",
  },
];

const ventures = [
  {
    name: "Apple",
    years: "1976—1985 · 1997—2011",
    role: "Co-founder · product leader · CEO",
    summary:
      "From the Apple II to the Mac, iPod, iPhone, and iPad, Jobs helped guide the company's product direction across two separate periods.",
    detail:
      "Apple was built by teams of engineers, designers, and business leaders. Jobs's contribution was unusually visible, but the products were collaborative work.",
    label: "Personal computing",
    visual: "imac",
    image: "./apple.jpg",
    imageAlt: "apple",
    href: "https://www.apple.com/",
    linkLabel: "Visit Apple",
  },
  {
    name: "NeXT",
    years: "1985—1997",
    role: "Founder · chairman · CEO",
    summary:
      "A computer company Jobs founded after leaving Apple, built around powerful workstations and an advanced operating system.",
    detail:
      "Apple acquired NeXT in 1997. NeXT's software became the foundation for Apple's later operating systems and brought Jobs back to the company.",
    label: "A different computer",
    visual: "cube",
    image: "./next.jpg",
    imageAlt: "next",
    href: "https://www.britannica.com/money/Steve-Jobs",
    linkLabel: "Read the biography",
  },
  {
    name: "Pixar",
    years: "1986—2006",
    role: "Investor · owner · board leader",
    summary:
      "Jobs acquired the Lucasfilm graphics division that became Pixar and supported its evolution into a feature-animation studio.",
    detail:
      "Pixar's artists, animators, engineers, and storytellers made the films. Jobs was a significant investor and owner, not the studio's founder.",
    label: "Computer animation",
    visual: "lamp",
    image: "./pixar.jpg",
    imageAlt: "pixar",
    href: "https://www.pixar.com/our-story",
    linkLabel: "Explore Pixar's history",
  },
  {
    name: "iTunes & iPod",
    years: "2001 onward",
    role: "Executive sponsor · product storyteller",
    summary:
      "The iPod, iTunes software, and music store helped make digital music feel like a connected everyday experience.",
    detail:
      "It was an ecosystem, not a single invention: devices, software, music licensing, and retail all had to work together.",
    label: "Music in motion",
    visual: "wheel",
    image: "./itunes-ipod.jpg",
    imageAlt: "itunes-ipod",
    href: "https://www.apple.com/itunes/",
    linkLabel: "Explore iTunes",
  },
];

function renderTimeline() {
  const timeline = document.querySelector("#timeline");

  if (!timeline) return;

  timeline.innerHTML = timelineMilestones
    .map((milestone, index) => {
      const detailId = `milestone-detail-${index}`;
      return `
        <article class="timeline-item">
          <span class="timeline-year">${milestone.year}</span>
          <div class="timeline-content">
            <button class="milestone-trigger" type="button" aria-expanded="false" aria-controls="${detailId}">
              <span>
                <span class="milestone-title">${milestone.title}</span>
                <span class="milestone-summary">${milestone.summary}</span>
              </span>
              <span class="milestone-indicator" aria-hidden="true">+</span>
            </button>
            <div class="milestone-detail" id="${detailId}" hidden>
              <p>${milestone.detail}</p>
              <a class="detail-source" href="${milestone.sourceUrl}" target="_blank" rel="noopener noreferrer">Source: ${milestone.sourceLabel} ↗</a>
            </div>
          </div>
        </article>`;
    })
    .join("");

  timeline.addEventListener("click", (event) => {
    const trigger = event.target.closest(".milestone-trigger");
    if (!trigger) return;

    const detail = document.getElementById(trigger.getAttribute("aria-controls"));
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!isExpanded));
    if (detail) detail.hidden = isExpanded;
    const indicator = trigger.querySelector(".milestone-indicator");
    if (indicator) indicator.textContent = isExpanded ? "+" : "−";
  });
}

function renderVentures() {
  const grid = document.querySelector("#venture-grid");

  if (!grid) return;

  grid.innerHTML = ventures
    .map((venture, index) => {
      const detailId = `venture-detail-${index}`;
      return `
        <article class="venture-item">
          <div class="venture-art ${venture.visual}" aria-hidden="true">
            <img src="${venture.image}" alt="" loading="lazy" />
            <span class="venture-art-label">${venture.label}</span>
          </div>
          <div class="venture-copy">
            <div class="venture-meta"><span>Venture ${String(index + 1).padStart(2, "0")}</span><span>${venture.years}</span></div>
            <div class="venture-title-row">
              <h3>${venture.name}</h3>
              <button class="venture-toggle" type="button" aria-label="More about ${venture.name}" aria-expanded="false" aria-controls="${detailId}">+</button>
            </div>
            <p class="venture-role">${venture.role}</p>
            <p class="venture-summary">${venture.summary}</p>
            <p class="venture-detail" id="${detailId}" hidden>${venture.detail}</p>
            <a class="venture-link" href="${venture.href}" target="_blank" rel="noopener noreferrer">${venture.linkLabel} ↗</a>
          </div>
        </article>`;
    })
    .join("");

  grid.addEventListener("click", (event) => {
    const button = event.target.closest(".venture-toggle");
    if (!button) return;

    const detail = document.getElementById(button.getAttribute("aria-controls"));
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    button.textContent = isExpanded ? "+" : "−";
    if (detail) detail.hidden = isExpanded;
  });
}

function markActiveNavigation() {
  const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter((section) => section instanceof HTMLElement);

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      links.forEach((link) => {
        if (link.getAttribute("href") === `#${visible.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.2, 0.5, 0.8] },
  );

  sections.forEach((section) => observer.observe(section));
}

renderTimeline();
renderVentures();
markActiveNavigation();