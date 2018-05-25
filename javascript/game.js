var Game = {
    init: function(){
        var fgCanvas = document.getElementById('fgCanvas');
        var bgCanvas = document.getElementById('bgCanvas');

        var canvas = {
            bgCanvas: bgCanvas,
            fgCanvas: fgCanvas,
            bgCtx: bgCanvas.getContext('2d'),
            fgCtx: fgCanvas.getContext('2d'),
        }

        var spriteSheet = new Image();
        var backgroundSprite = new Image();
        var coinSprite = new Image();
        
        spriteSheet.src = 'img/spriteSheet.png';
        backgroundSprite.src = 'img/background.png';
        coinSprite.src = 'img/coin.png';

        var spriteSheetLoaded = false;
        var backgroundSpriteLoaded = false;
        var coinSpriteLoaded = false;

        spriteSheet.addEventListener('load', function(){
            spriteSheetLoaded = true;
            imagesLoaded();
        });
        backgroundSprite.addEventListener('load', function(){
            backgroundSpriteLoaded = true;
            imagesLoaded();
        });
        backgroundSprite.addEventListener('load', function(){
            coinSpriteLoaded = true;
            imagesLoaded();
        });

        function imagesLoaded(){
            if (!spriteSheetLoaded || !backgroundSpriteLoaded || !coinSpriteLoaded){
                return;
            }

            var data = {
                animationFrame: 0,
                spriteSheet: spriteSheet,
                backgroundSprite: backgroundSprite,
                coinSprite: coinSprite,
                canvas: canvas
            }

            Input.init(data);
            Entities.init(data);
            Render.init(data);
            Game.run(data);
        }
    },

    run: function(data){
        var loop = function(){
            Game.input(data);
            Game.update(data);
            Game.render(data);

            data.animationFrame++;

            window.requestAnimationFrame(loop);
        }

        loop();
    },

    input: function(data){

    },

    update: function(data){
        Animation.update(data);
    },

    render: function(data){
        Render.update(data);
    },
}

Game.init();