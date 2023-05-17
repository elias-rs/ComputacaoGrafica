# Computação Gráfica
Apresentação do código para a disciplina de Computação Gráfica
<br>

  * Apresentando o game "Snake"

<br>
  <figure>
    <img src = "https://i.imgur.com/T559Hzs.png" alt = "Snake" heidth = "360" width = "360">
    <figcaption>Captura do jogo</figcaption>
  <figure/>
 <h2>
  Funcionamento jogo e trechos do código.
 </h2>
 <br>
  <figure>
    <img src = "https://i.imgur.com/4WajjMi.gif" alt = "Snake" heidth = "360" width = "360">
    <figcaption>Captura do jogo em funcionamento</figcaption>
  <figure/>
   <br>
   
   * Conforme a serpente passa pelo objeto maça sua cauda é incrementada em +1. Vide o código a seguir:
   <br>
   
   ```
   if(macax == px && macay == py){
    cauda++;
    macax = Math.floor(Math.random()*quant);
    macay = Math.floor(Math.random()*quant);
   }
   ```
   <br>
