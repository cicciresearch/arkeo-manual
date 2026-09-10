function initCitations() {
  const paragraphs = document.querySelectorAll("p.citeable[id]");

  paragraphs.forEach((paragraph) => {
    if (paragraph.dataset.citeReady === "true") return;
    paragraph.dataset.citeReady = "true";

    const sectionTitle = paragraph.dataset.citeTitle || "Referenced section";
    const year = paragraph.dataset.citeYear || "2026";
    const pageTitle = document.querySelector("article h1")?.textContent?.trim() || document.title;
    const url = `${window.location.origin}${window.location.pathname}#${paragraph.id}`;
    const citation = `Cicci Research s.r.l. (${year}). “${sectionTitle}.” ${pageTitle}. ARKEO All-in-One Manual. ${url}`;
    const keyPart = paragraph.id.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "").toLowerCase();
    const bibtex = `@online{cicci_${year}_${keyPart},\n  author = {{Cicci Research s.r.l.}},\n  title = {${sectionTitle}},\n  year = {${year}},\n  organization = {Cicci Research s.r.l.},\n  note = {${pageTitle}, ARKEO All-in-One Manual},\n  url = {${url}}\n}`;

    const container = document.createElement("div");
    container.className = "cite-block";

    const citeButton = document.createElement("button");
    citeButton.type = "button";
    citeButton.className = "cite-toggle";
    citeButton.setAttribute("aria-expanded", "false");
    citeButton.innerHTML = '<span aria-hidden="true">❞</span> Cite this paragraph';

    const panel = document.createElement("div");
    panel.className = "cite-panel";
    panel.hidden = true;
    panel.innerHTML = `
      <div class="cite-panel-title">Cite this paragraph</div>
      <div class="cite-text"></div>
      <div class="cite-actions">
        <button type="button" data-copy="citation">Copy citation</button>
        <button type="button" data-copy="link">Copy link</button>
      </div>
      <details class="cite-bibtex">
        <summary>BibTeX</summary>
        <pre><code></code></pre>
        <button type="button" data-copy="bibtex">Copy BibTeX</button>
      </details>
    `;
    panel.querySelector(".cite-text").textContent = citation;
    panel.querySelector("code").textContent = bibtex;

    citeButton.addEventListener("click", () => {
      const opening = panel.hidden;
      panel.hidden = !opening;
      citeButton.setAttribute("aria-expanded", String(opening));
    });

    panel.querySelectorAll("[data-copy]").forEach((button) => {
      button.addEventListener("click", async () => {
        const type = button.dataset.copy;
        const value = type === "citation" ? citation : type === "bibtex" ? bibtex : url;
        await navigator.clipboard.writeText(value);
        const original = button.textContent;
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = original;
        }, 1400);
      });
    });

    container.append(citeButton, panel);
    paragraph.insertAdjacentElement("afterend", container);
  });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(initCitations);
} else if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCitations);
} else {
  initCitations();
}
