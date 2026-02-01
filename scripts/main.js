import { AudioZoneApp } from "./zone-app";

Hooks.on("renderSidebar", (sidebard,html) => {
    if(html.find("#audio-zones-button").length) return;

     const button = $(`
    <button id="audio-zones-button" class="audio-zones-btn">
      <i class="fas fa-volume-up"></i>
    </button>
  `);

  button.click(() =>{
    new AudioZoneApp.render(true);
  })

  html.find("#sidebar-tabs").append(button);
})