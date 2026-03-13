(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initDailyDetailIndex() {
    const body = document.querySelector("[data-daily-detail-body]");
    const indexList = document.querySelector("[data-daily-detail-index]");
    if (!body || !indexList) return;

    const headings = Array.from(body.querySelectorAll("h2[id]"));
    if (!headings.length) return;
    let currentId = "";
    let scrollLockUntil = 0;
    let lockedId = "";
    let ticking = false;

    const setCurrent = (id) => {
      if (!id || currentId === id) return;
      currentId = id;
      Array.from(indexList.querySelectorAll("[data-daily-detail-link]")).forEach((link) => {
        const isCurrent = link.getAttribute("data-daily-detail-link") === id;
        link.classList.toggle("is-current", isCurrent);
        link.setAttribute("aria-current", isCurrent ? "true" : "false");
      });
    };

    const getScrollTarget = (heading) => {
      const scrollMarginTop = Number.parseFloat(window.getComputedStyle(heading).scrollMarginTop) || 0;
      return Math.max(0, heading.getBoundingClientRect().top + window.scrollY - scrollMarginTop);
    };

    const updateCurrentFromViewport = () => {
      if (!headings.length) return;

      if (scrollLockUntil > performance.now() && lockedId) {
        setCurrent(lockedId);
        return;
      }

      const threshold = Math.max(140, window.innerHeight * 0.24);
      let active = headings[0];

      headings.forEach((heading) => {
        if (heading.getBoundingClientRect().top <= threshold) active = heading;
      });

      setCurrent(active.id);
      lockedId = "";
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
        scrollLockUntil = performance.now() + (prefersReducedMotion ? 120 : 520);
        lockedId = heading.id;
        setCurrent(heading.id);
        window.scrollTo({
          top: getScrollTarget(heading),
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
        history.replaceState(null, "", "#" + heading.id);
      });
      item.appendChild(link);
      indexList.appendChild(item);
    });

    const initialId = window.location.hash ? window.location.hash.slice(1) : "";
    const initialHeading = headings.find((heading) => heading.id === initialId) || headings[0];
    setCurrent(initialHeading.id);

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        updateCurrentFromViewport();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.requestAnimationFrame(updateCurrentFromViewport);
  }

  function initDailyIndexTimeline() {
    const cards = Array.from(document.querySelectorAll("[data-daily-index-card]"));
    const links = Array.from(document.querySelectorAll("[data-daily-index-link]"));
    const monthToggles = Array.from(document.querySelectorAll("[data-daily-index-group-toggle]"));
    const monthItems = Array.from(document.querySelectorAll("[data-daily-index-month-item]"));
    const scrollRegion = document.querySelector(".daily-index-timeline-scroll");
    const timelineCard = document.querySelector(".daily-index-timeline-card");
    if (!cards.length || !links.length) return;

    const expandedMonths = new Set(
      monthToggles
        .filter((toggle) => toggle.getAttribute("aria-expanded") === "true")
        .map((toggle) => toggle.getAttribute("data-daily-index-group-toggle"))
    );
    let currentId = "";
    let scrollLockUntil = 0;
    let lockedId = "";

    const setMonthExpanded = (month, expanded) => {
      if (!month) return;
      if (expanded) expandedMonths.add(month);
      else expandedMonths.delete(month);

      monthToggles.forEach((toggle) => {
        if (toggle.getAttribute("data-daily-index-group-toggle") !== month) return;
        toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
        const indicator = toggle.querySelector(".daily-index-timeline-group-indicator");
        if (indicator) indicator.textContent = expanded ? "−" : "+";
      });
      monthItems.forEach((item) => {
        if (item.getAttribute("data-daily-index-month-item") !== month) return;
        item.hidden = !expanded;
      });
    };

    const setCurrent = (id, options = {}) => {
      if (!id || id === currentId) return;
      currentId = id;

      links.forEach((link) => {
        const isCurrent = link.getAttribute("data-daily-index-link") === id;
        link.classList.toggle("is-current", isCurrent);
        link.setAttribute("aria-current", isCurrent ? "true" : "false");
        if (isCurrent) {
          const month = link.getAttribute("data-daily-index-month");
          if (month && !expandedMonths.has(month)) setMonthExpanded(month, true);

          monthToggles.forEach((toggle) => {
            const isCurrentMonth = toggle.getAttribute("data-daily-index-group-toggle") === month;
            toggle.classList.toggle("is-current-month", isCurrentMonth);
          });

          const shouldSyncScroll =
            options.syncTimelineScroll !== false &&
            scrollRegion &&
            (scrollRegion.matches(":focus-within") ||
              (timelineCard && timelineCard.matches(":hover")));
          if (shouldSyncScroll) {
            link.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest" });
          }
        }
      });
    };

    monthToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const month = toggle.getAttribute("data-daily-index-group-toggle");
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        setMonthExpanded(month, !expanded);
      });
    });

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = link.getAttribute("data-daily-index-link");
        const target = id ? document.getElementById(id) : null;
        if (!target) return;
        const topOffset = Math.max(104, window.innerHeight * 0.11);
        const targetTop = window.scrollY + target.getBoundingClientRect().top - topOffset;
        scrollLockUntil = performance.now() + (prefersReducedMotion ? 120 : 520);
        lockedId = id;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
        history.replaceState(null, "", "#" + id);
        setCurrent(id, { syncTimelineScroll: false });
      });
    });

    const initialId = window.location.hash ? window.location.hash.slice(1) : cards[0].id;
    if (initialId) setCurrent(initialId);

    let ticking = false;
    const updateCurrentFromViewport = () => {
      if (lockedId && performance.now() < scrollLockUntil) {
        setCurrent(lockedId, { syncTimelineScroll: false });
        ticking = false;
        return;
      }

      lockedId = "";
      const threshold = Math.max(140, window.innerHeight * 0.24);
      let active = cards[0];

      cards.forEach((card) => {
        if (card.getBoundingClientRect().top <= threshold) active = card;
      });

      if (active) setCurrent(active.id);
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(updateCurrentFromViewport);
      },
      { passive: true }
    );
  }
  initDailyIndexTimeline();
  initDailyDetailIndex();
})();
