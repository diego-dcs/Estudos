var home = document.getElementsByTagName("a")[0]
var espe = document.getElementsByTagName("a")[1]
var foto = document.getElementsByTagName("a")[2]
var mult = document.getElementsByTagName("a")[3]
var fale = document.getElementsByTagName("a")[4]
home.setAttribute("onmouseenter","mudaicone(0)")
espe.setAttribute("onmouseenter","mudaicone(1)")
foto.setAttribute("onmouseenter","mudaicone(2)")
mult.setAttribute("onmouseenter","mudaicone(3)")
fale.setAttribute("onmouseenter","mudaicone(4)")

home.setAttribute("onmouseout","reseticone(0)")
espe.setAttribute("onmouseout","reseticone(1)")
foto.setAttribute("onmouseout","reseticone(2)")
mult.setAttribute("onmouseout","reseticone(3)")
fale.setAttribute("onmouseout","reseticone(4)")

function mudaicone(botao) {
    if  (botao == 0) {
        icone.src = "imagens/home.png"
    } else if (botao == 1) {
        icone.src = "imagens/especificacoes.png"
    } else if (botao == 2) {
        icone.src = "imagens/fotos.png"
    } else if (botao == 3) {
        icone.src = "imagens/multimidia.png"
    } else if (botao == 4) {
        icone.src = "imagens/contato.png"
    }
}
function reseticone() {
    icone.src="imagens/glass-oculos-preto-peq.png"
}