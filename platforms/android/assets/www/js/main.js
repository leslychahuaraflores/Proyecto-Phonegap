var db;
$(document).ready(function(){
    $("#tomarFoto").click(function(){
        navigator.camera.getPicture(exitoFoto,errorFoto,{quality:50});
    });
});
function exitoFoto(url){
    $("#contenedorFoto").attr("src",url);
    $("#contenedorFoto").show();
}
function errorFoto(){
    window.alert("error");
}
function errorDB(){
    window.alert("error bd");
}
function exitoDB(){
    window.alert("exito bd");
}
