// nammaweb — site interactions
// 1) mobile nav toggle
// 2) WhatsApp popup (floating button) wired to +91 72042 48002
// 3) per-plan WhatsApp links carry the plan name in the prefilled message
// 4) footer year

(function () {
  var WHATSAPP_NUMBER = "917204248002"; // +91 72042 48002, international format for wa.me

  function waLink(message) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }

  document.addEventListener("DOMContentLoaded", function () {
    // footer year
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // mobile nav
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("main-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // default whatsapp links (no plan context)
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      var msg = el.getAttribute("data-wa") || "Hi nammaweb, I'd like to know more about the AI for Civil Services & KAS program.";
      el.setAttribute("href", waLink(msg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });

    // WhatsApp popup
    var floatBtn = document.getElementById("wa-float-btn");
    var popup = document.getElementById("wa-popup");
    var closeBtn = document.getElementById("wa-close");
    var openLink = document.getElementById("wa-popup-open");

    if (floatBtn && popup) {
      floatBtn.addEventListener("click", function () {
        popup.classList.toggle("is-open");
      });
    }
    if (closeBtn && popup) {
      closeBtn.addEventListener("click", function () {
        popup.classList.remove("is-open");
      });
    }
    if (openLink) {
      openLink.setAttribute("href", waLink("Hi nammaweb, I'd like to talk to a mentor about the AI for Civil Services & KAS program."));
      openLink.setAttribute("target", "_blank");
      openLink.setAttribute("rel", "noopener");
    }

    document.addEventListener("click", function (e) {
      if (!popup || !popup.classList.contains("is-open")) return;
      if (popup.contains(e.target) || (floatBtn && floatBtn.contains(e.target))) return;
      popup.classList.remove("is-open");
    });
  });
})();
