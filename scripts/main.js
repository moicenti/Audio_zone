import { AudioZoneApp } from './zone-app.js';

console.log('Audio Zones | main.js cargado');

Hooks.on('renderSidebar', (sidebar, html) => {
  console.log('renderSidebar hook disparado');

  if (html.find('#audio-zones-button').length) return;

  const button = $(`
    <button id="audio-zones-button" class="audio-zones-btn">
      <i class="fas fa-volume-up"></i>
    </button>
  `);

  console.log('botón creado');

  button.click(() => {
    console.log('botón clickeado');
    new AudioZoneApp().render(true);
  });

  html.find('#sidebar-tabs').append(button);
  console.log('botón insertado en sidebar');
});
