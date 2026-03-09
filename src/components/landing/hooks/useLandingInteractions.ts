import { useEffect } from 'react';

export function useLandingInteractions() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('vis');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll<HTMLElement>('.rv').forEach((el) => revealObserver.observe(el));

    const countersObserver = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.querySelectorAll<HTMLElement>('[data-target]').forEach((el) => {
            const target = Number(el.dataset.target ?? '0');
            const prefix = el.dataset.prefix ?? '';
            let current = 0;
            const step = target / 50;

            const timer = window.setInterval(() => {
              current = Math.min(current + step, target);
              el.textContent = `${prefix}${Math.round(current)}%`;
              if (current >= target) window.clearInterval(timer);
            }, 28);
          });

          io.unobserve(entry.target);
        });
      },
      { threshold: 0.3 },
    );

    const counters = document.querySelector<HTMLElement>('.counters');
    if (counters) countersObserver.observe(counters);

    const faqHandlers: Array<{ element: HTMLElement; listener: () => void }> = [];
    document.querySelectorAll<HTMLElement>('.fq').forEach((q) => {
      const listener = () => {
        const item = q.parentElement;
        if (!item) return;
        const open = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));
        if (!open) item.classList.add('open');
      };
      faqHandlers.push({ element: q, listener });
      q.addEventListener('click', listener);
    });

    const bars = document.querySelectorAll<HTMLElement>('.pc-bar');
    const timeout = window.setTimeout(() => {
      bars.forEach((bar, i) => {
        const height = bar.style.height;
        bar.style.height = '0';
        window.setTimeout(() => {
          bar.style.transition = 'height .8s ease';
          bar.style.height = height;
        }, i * 80);
      });
    }, 700);

    return () => {
      revealObserver.disconnect();
      countersObserver.disconnect();
      faqHandlers.forEach(({ element, listener }) => element.removeEventListener('click', listener));
      window.clearTimeout(timeout);
    };
  }, []);
}
