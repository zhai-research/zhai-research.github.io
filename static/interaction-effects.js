(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initViewportAnimations() {
    const items = Array.from(document.querySelectorAll("[data-anim]"));
    if (!items.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-inview"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((item) => observer.observe(item));
  }

  function initCountUp() {
    const counters = Array.from(document.querySelectorAll("[data-countup-target]"));
    if (!counters.length) return;

    const setFinalValue = (node) => {
      const value = Number(node.getAttribute("data-countup-target")) || 0;
      node.textContent = String(value);
      node.dataset.countupDone = "true";
    };

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      counters.forEach(setFinalValue);
      return;
    }

    const animate = (node) => {
      if (node.dataset.countupDone === "true") return;
      const target = Number(node.getAttribute("data-countup-target")) || 0;
      const duration = 900;
      const start = performance.now();

      const tick = (time) => {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
        else node.dataset.countupDone = "true";
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  function initParallax() {
    const roots = Array.from(document.querySelectorAll("[data-parallax-root]"));
    if (!roots.length || prefersReducedMotion) return;

    roots.forEach((root) => {
      const layers = Array.from(root.querySelectorAll("[data-parallax-layer]"));
      if (!layers.length) return;

      const reset = () => {
        layers.forEach((layer) => {
          layer.style.transform = "translate3d(0,0,0)";
        });
      };

      root.addEventListener("pointermove", (event) => {
        const rect = root.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        layers.forEach((layer) => {
          const strength = Number(layer.getAttribute("data-parallax-layer")) || 12;
          const tx = x * strength;
          const ty = y * strength * -1;
          layer.style.transform = "translate3d(" + tx.toFixed(2) + "px," + ty.toFixed(2) + "px,0)";
        });
      });

      root.addEventListener("pointerleave", reset);
    });
  }

  function initDailyDetailIndex() {
    const body = document.querySelector("[data-daily-detail-body]");
    const indexList = document.querySelector("[data-daily-detail-index]");
    if (!body || !indexList) return;

    const headings = Array.from(body.querySelectorAll("h2[id]"));
    if (!headings.length) return;

    const setCurrent = (id) => {
      Array.from(indexList.querySelectorAll("[data-daily-detail-link]")).forEach((link) => {
        const isCurrent = link.getAttribute("data-daily-detail-link") === id;
        link.classList.toggle("is-current", isCurrent);
        link.setAttribute("aria-current", isCurrent ? "true" : "false");
      });
    };

    headings.forEach((heading) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.className = "daily-detail-index-link";
      link.href = "#" + heading.id;
      link.textContent = heading.textContent || "";
      link.setAttribute("data-daily-detail-link", heading.id);
      link.setAttribute("aria-current", "false");
      link.addEventListener("click", (event) => {
        event.preventDefault();
        heading.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", "#" + heading.id);
        setCurrent(heading.id);
      });
      item.appendChild(link);
      indexList.appendChild(item);
    });

    const initialId = window.location.hash ? window.location.hash.slice(1) : headings[0].id;
    if (initialId) setCurrent(initialId);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        setCurrent(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    headings.forEach((heading) => observer.observe(heading));
  }

  function initDailyIndexTimeline() {
    const cards = Array.from(document.querySelectorAll("[data-daily-index-card]"));
    const links = Array.from(document.querySelectorAll("[data-daily-index-link]"));
    if (!cards.length || !links.length) return;

    const setCurrent = (id) => {
      links.forEach((link) => {
        const isCurrent = link.getAttribute("data-daily-index-link") === id;
        link.classList.toggle("is-current", isCurrent);
        link.setAttribute("aria-current", isCurrent ? "true" : "false");
      });
    };

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = link.getAttribute("data-daily-index-link");
        const target = id ? document.getElementById(id) : null;
        if (!target) return;
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", "#" + id);
        setCurrent(id);
      });
    });

    const initialId = window.location.hash ? window.location.hash.slice(1) : cards[0].id;
    if (initialId) setCurrent(initialId);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        setCurrent(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-16% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    cards.forEach((card) => observer.observe(card));
  }

  initViewportAnimations();
  initCountUp();
  initParallax();
  initDailyIndexTimeline();
  initDailyDetailIndex();
})();
