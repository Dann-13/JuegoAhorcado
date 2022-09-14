function obtenerRamdom(num_min, mun_max){
    var amplitud_valores = mun_max - num_min;
    var valor_al_azar = Math.floor( Math.random() * amplitud_valores) + num_min;
    return valor_al_azar;
};
function id(str){
    return document.getElementById(str);
}
