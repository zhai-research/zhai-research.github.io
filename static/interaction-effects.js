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

  initViewportAnimations();
  initCountUp();
  initParallax();
})();
