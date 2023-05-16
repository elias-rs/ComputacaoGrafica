window.onLoad = function(){
    console.log('Game inited');
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 110);
    const vel = 1;
    var vx = vy = 0;
    var px = 10;
    var py = 25;
    var tamanho = 30;
    var quant = 20;
    var macax = 5;
    var macay = 5;
    var rastro = [];
    var cauda = 5;
    var macaAngulo = 0;

    function rtod(radian){
        return radian * Math.PI / 180;
    }

    function game(){
        px += vx;
        py += vy;
        if(px < 0){
            px = quant - 1;
        }
        if(px > quant - 1){
            px = 0;
        }
        if(py < 0){
            py = quant - 1;
        }
        if(py > quant - 1){
            py = 0;
        }
        
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, stage.width, stage.height);
        // translacão, rotacão e escala da maçã \\
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
        ///////\\\\\\

        ctx.fillStyle = "yellow";
        for (var i = 0; i < rastro.length; i++){
            ctx.fillRect(rastro[i].x*tamanho, rastro[i].y*tamanho, tamanho-1,tamanho-1);
            if(rastro[i].x == px && rastro[i].py == py){
                vx = vy = 0;
                cauda = 5;
            }
        }
        rastro.push({x:px, y:py})
        while(rastro.length > cauda){
            rastro.shift();
        }
        if(macax == px && macay == py){
            cauda++;
            macax = Math.floor(Math.random()*quant);
            macay = Math.floor(Math.random()*quant);
            
        }
    }
    function keyPush(event){
        switch(event.keyCode){
            // esquerda, cima, direita, baixo
            // 37 , 38  , 39 , 40
            case 37:
                if(vx <= 0){
                vx = -vel;
                vy = 0;
                }
                break;
            case 38:
                if(vy <= 0){
                vx = 0;
                vy = -vel;
                }
                break;
            case 39:
                if(vx >= 0){
                vx = vel;
                vy = 0;
                }
                break;
            case 40:
                if(vy >= 0){
                vx = 0;
                vy = vel;
                }
                break;
            default:
                break;
        }
    }
    
}