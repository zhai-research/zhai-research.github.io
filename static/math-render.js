(function () {
  function renderMath() {
    if (typeof window.renderMathInElement !== "function") return;

    const roots = Array.from(document.querySelectorAll("[data-render-math]"));
    if (!roots.length) return;

    roots.forEach((root) => {
      window.renderMathInElement(root, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
        ignoredClasses: ["katex", "no-math"],
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderMath, { once: true });
    return;
  }

  renderMath();
})();
