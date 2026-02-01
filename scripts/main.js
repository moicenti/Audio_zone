import { AudioZoneApp } from './zone-app.js';

console.log('Audio Zones | main.js cargado');

Hooks.on('renderSidebar', (sidebar, html) => {
try{
  console.log('Audio Zones | renderSidebar disparado');

  if (html.find('#audio-zones-button').length){ 
    console.log('Audio Zones | se encontro el boton ya creado');
    return;}
console.log("d'Audio Zones | El boton no estbaa creado'")
  const button = $(`
    <button id="audio-zones-button" class="audio-zones-btn">
      <i class="fas fa-volume-up"></i>
    </button>
  `);

  console.log('Audio Zones | boton creado');

  button.click(() => {
    console.log('Audio Zones | boton pulsado');
    new AudioZoneApp().render(true);
  });

  html.find('#sidebar-tabs').append(button);
  console.log('Audio Zones | boton insertado');
}catch(error){
    console.log("Audio zone | valio verga "+error)
}

});
