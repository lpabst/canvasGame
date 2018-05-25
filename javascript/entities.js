var Entities = {
    init: function(data){
        var background = {
            sprite: new Entities.helpers.Sprite(data.backgroundSprite, 0, 0, 1520, 1130),
            x: 0,
            y: 0,
            w: 1000,
            h: 800,
        };

        var jack = new Entities.helpers.Jack(data.spriteSheet, 100, 20, 80, 65);
        var exitPipe = new Entities.helpers.ExitPipe(50, 100, 30, 80);

        var coinLocations = [[250, 350], [250, 250], [350, 250], [350, 350], [450, 250], [450, 350], [550, 250], [550, 350], [650, 250], [650, 350]];
        var wallLocations = [[0, 0, 1000, 0], [0, 0, 0, 1000], [0, 1000, 1000, 0], [1000, 0, 0, 1000], [80, 450, 920, 0]];
         
        data.entities = {};
        data.entities.background = background;
        data.entities.jack = jack;
        data.entities.exitPipe = exitPipe;
        data.entities.coinsArray = [];
        data.entities.wallsArray = [];

        coinLocations.forEach(function(coinLocation){
            data.entities.coinsArray.push(new Entities.helpers.Coin(data.coinSprite, coinLocation[0], coinLocation[1], 45, 35));
        })
        wallLocations.forEach( function(wall) {
            data.entities.wallsArray.push(new Entities.helpers.Wall(wall[0], wall[1], wall[2], wall[3]))
        })
    },

    helpers: {
        Sprite: function(img, srcX, srcY, srcW, srcH){
            this.img = img;
            this.srcX = srcX;
            this.srcY = srcY;
            this.srcW = srcW;
            this.srcH = srcH;
        },

        Coin: function(img, x, y, w, h){
            var self = this;
            this.type = 'coin';
            // this.sound = new Audio('./../audio/coinSound.mp3');
            this.sprite = new Entities.helpers.Sprite(img, 0, 0, 224, 224);
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        },

        Jack: function(img, x, y, w, h){
            var self = this;
            this.type = 'player';
            this.sprite = new Entities.helpers.Sprite(img, 0, 0, 80, 60);
            this.spriteAnimations = {
                walkRight: {
                    frames: [
                        new Entities.helpers.Sprite(img, 0, 0, 40, 40), 
                        new Entities.helpers.Sprite(img, 50, 0, 40, 40), 
                        new Entities.helpers.Sprite(img, 0, 0, 40, 40)
                    ],
                    currentFrame: 0,
                },
                walkLeft: {
                    frames: [
                        new Entities.helpers.Sprite(img, 0, 0, 40, 40), 
                        new Entities.helpers.Sprite(img, 50, 0, 40, 40), 
                        new Entities.helpers.Sprite(img, 0, 0, 40, 40)
                    ],
                    currentFrame: 0,
                },
                standRight: new Entities.helpers.Sprite(img, 0, 0, 40, 40),
                standLeft: new Entities.helpers.Sprite(img, 0, 0, 40, 40),
                jumpLeft: new Entities.helpers.Sprite(img, 50, 50, 40, 40),
                jumpRight: new Entities.helpers.Sprite(img, 50, 50, 40, 40),
            }
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;

            this.direction = 'right';
            this.velY = 0;
            this.velX = 3.8;
            this.coins = 0;
        },

        Wall: function(x, y, w, h){
            this.type = 'wall';
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        },
        
        ExitPipe: function(x, y, w, h){
            this.type = 'exitPipe';
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        },
    }
}