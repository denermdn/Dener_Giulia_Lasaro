function calc_Velocidade(vx_y, cORs_angulo) {
    return vx_y / cORs_angulo;
}
function calc_Vx(vo, angulo) {
    return vo * Math.cos(angulo);
}
function calc_Vy(vo, angulo) {
    return vo * Math.sin(angulo);
}
function calc_Gravidade(vy, hmax) {
    return (vy * vy) / (2 * hmax);
}
function calc_TempoVoo(vy, g) {
    return 2 * (vy / g);
}
function calc_Angulo(v, vx) {
    return Math.acos(vx / v);
}
function calc_Alcance(vx, tempo) {
    return vx * tempo;
}
function calc_AlturaMax(vy, g) {
    return (vy * vy) / (2 * g);
}