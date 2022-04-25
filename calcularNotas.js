const num1=document.getElementById("numero1");
const num2=document.getElementById("numero2");
const num3=document.getElementById("numero3");
const btnPromedio=document.getElementById("btn-promedio");
const btnNombre=document.getElementById("btn-nombre");
const nombre=document.getElementById("nombreEstudiante");
const resultado=document.getElementById("result");
const validacion=document.getElementById("validacion");
const rango=document.getElementById("rango");
const clasificacion=document.getElementById("clasificacion");
let result=0;


btnPromedio.addEventListener("click", ValidarCampo);
function ValidarCampo(){
    if ((num1.value=== null || num1.value==="")|| (num2.value=== null || num2.value==="")){
        validacion.textContent="el campo está vacio";
    }else {
        Promedio()
    }
}
function Promedio() { 
    if (num1.value>5 || num1.value<1 || num2.value>5 || num2.value<1){
        rango.textContent="se excede de los limites del rango permitido";
    }else {
        const n1 = parseFloat(num1.value)
        const n2 = parseFloat(num2.value)
        let porcentaje1 = n1 * 0.3
        let notalFinal1 = n1 - porcentaje1
        let porcentaje2 = n2 * 0.3
        let notaFinal2 = n2 - porcentaje2
        let terceraNota = (notalFinal1 + notaFinal2) / 2
        let porcentaje3 = terceraNota * 0.4
        let finalNote3 = terceraNota - porcentaje3
        num3.textContent=finalNote3;
        let notaFinalFinal = porcentaje1 + porcentaje2 + porcentaje3;
        resultado.textContent="el promedio es: "+notaFinalFinal;
    if (result>=4 && result<=5){
        document.getElementById("clasificacion").style.color = "blue";
        clasificacion.textContent="obtuvo cuadro de honor";
        
    }if (result>=2 && result<=3.4){
        document.getElementById("clasificacion").style.color = "#008000";
        clasificacion.textContent="puede recuperar";
    }if (result<2){
        document.getElementById("clasificacion").style.color = "#FF0000";
        clasificacion.textContent="friki";
    }}
    $(document).ready(function() {
        setTimeout(function() {
            $("#clasificacion").fadeOut(1500);
        },300000);
    });
    }
    
btnNombre.addEventListener("click", Nombre);
function Nombre(){
    resultado.textContent="el nombre del estudiante es: "+nombre.value;
}

