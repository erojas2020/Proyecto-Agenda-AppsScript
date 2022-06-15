function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google App Script');

}

function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1-9xr0aXMmVlbucOR77GxJuOeNoXXzT5lponcQrhFrro').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}