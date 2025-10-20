// bt-boot — loader idempotente e agnóstico
if (!window.__btInit) {
  window.__btInit = true;
  (async () => {
    try {
      const host = location.hostname;

      // ↓ Gate leve; em produção prefira manifesto no Edge
      const ALLOW = [ "localhost", "127.0.0.1", "www.mizz.com.br", "mizz.com.br" ];
      if (!ALLOW.includes(host)) {
        console.warn("[bt-core] Domínio não autorizado:", host);
        return;
      }

      // Aplique marcador de tenant (ajuste via manifesto no futuro)
      document.documentElement.setAttribute("data-bt", "mizz");

      // Carregar CSS base (tema base opcional)
      const baseCss = new URL("../../src/theme/base.css", import.meta.url).href;
      const pre = Object.assign(document.createElement("link"), { rel: "preload", as: "style", href: baseCss });
      const link = Object.assign(document.createElement("link"), { rel: "stylesheet", href: baseCss });
      document.head.append(pre, link);

      // Montar blocos por âncoras
      document.querySelectorAll("[data-bt-block]").forEach(async (el) => {
        const kind = el.getAttribute("data-bt-block");
        let modUrl = null;
        if (kind === "faq") {
          modUrl = new URL("../../src/blocks/faq.js", import.meta.url).href;
        } else if (kind === "carousel") {
          modUrl = new URL("../../src/blocks/carousel.js", import.meta.url).href;
        } else {
          console.warn("[bt-core] Bloco desconhecido:", kind);
          return;
        }
        const mod = await import(modUrl);
        if (typeof mod.mount === "function") mod.mount(el, { tenant: "mizz", host });
      });
    } catch (err) {
      console.error("[bt-core] boot error:", err);
    }
  })();
}
