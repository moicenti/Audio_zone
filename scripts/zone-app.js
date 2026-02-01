export class AudioZoneApp extends Aplication {
  static get defaultoptions() {
    return foundry.utils.mergeObject(super.defaultoptions, {
      id: "Audio-zones-menu",
      tittle: "Audio Zone",
      template: "modules/audio-zones/templates/zone-menu.html",
      width: 300,
      height: "auto",
      resizable: false,
    });
  }
  activateListeners(html) {
    super.activateListeners(html);
    html.find("#add-zone").click(() =>{
        ui.notifications.info("Agregar Zona proximamente");
    });
  }

}
