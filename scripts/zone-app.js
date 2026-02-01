export class AudioZoneApp extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: 'audio-zones-menu',
      title: 'Audio Zones',
      template: 'modules/audio-zones/templates/zone-menu.html',
      width: 300,
      height: 'auto',
      resizable: false,
    });
  }

  activateListeners(html) {
    super.activateListeners(html);

    html.find('#add-zone').click(() => {
      ui.notifications.info('Agregar Zona próximamente');
    });
  }
}
