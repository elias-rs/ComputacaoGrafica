# Computação Gráfica
Apresentação do código para a disciplina de Computação Gráfica
<br>

  * Apresentando o game "Snake"

<br>
  <figure>
    <img src = "https://i.imgur.com/T559Hzs.png" alt = "Snake" heidth = "360" width = "360">
  <figure/>
 <h2>
  Funcionamento jogo e trechos do código.
 </h2>
 <br>
  <figure>
    <img src = "https://i.imgur.com/4WajjMi.gif" alt = "Snake" heidth = "360" width = "360">
  <figure/>
   <br>
   
   * Conforme a serpente passa pelo objeto maçã sua cauda é incrementada em +1. Vide o código a seguir:
   <br>
   
   ```
   if(macax == px && macay == py){
    cauda++;
    macax = Math.floor(Math.random()*quant);
    macay = Math.floor(Math.random()*quant);
   }
   ```
   <br>
   <img src = "https://i.imgur.com/9bryTy5.gif" alt = "Maçã" heidth = "360" width = "360">
* Transformações Geométricas
   <br> Rotação, Translação e Escala:
   
   ```
        ctx.fillStyle = "red";
        macaAngulo += 10.0;
        var scale = 0.25 + Math.abs(Math.sin(rtod(macaAngulo))) * 0.75;
        ctx.translate(  (macax * tamanho) + (tamanho * 0.5), (macay * tamanho) + (tamanho * 0.5));
        ctx.rotate( rtod(macaAngulo));
        ctx.scale(scale, scale);
        ctx.fillRect(-tamanho / 2.0, -tamanho / 2.0, tamanho, tamanho);
        ctx.scale(1.0 / scale, 1.0 / scale);
        ctx.rotate(-rtod(macaAngulo));
        ctx.translate(-((macax * tamanho) + (tamanho * 0.5)), -((macay * tamanho) + (tamanho * 0.5)));
   ```
   
