var Physics = {
    update: function(data){
        Physics.helpers.gravity(data.entities.jack);
        Physics.collisionDetection(data);
    },

    collisionDetection: function(data){
        var jack = data.entities.jack;

        var entityCollisionCheck = function(entity){
            if (jack.x < entity.x + entity.w && 
                jack.x + jack.w > entity.x && 
                jack.y < entity.y + entity.h && 
                jack.y + jack.h > entity.y){
                    // Collision occurred
                    Physics.handleCollision(data, entity);
                }
        }

        data.entities.wallsArray.forEach(function(wall){
            entityCollisionCheck(wall);
        })

        data.entities.coinsArray.forEach(function(coin){
            entityCollisionCheck(coin);
        })

        entityCollisionCheck(data.entities.exitPipe);
    },

    handleCollision(data, entity){
        var jack = data.entities.jack;

        if (entity.type === 'wall'){

            // left side wall collision
            if (jack.x < entity.x && jack.y >= entity.y){
                jack.x = entity.x - jack.w;
            }

            // right side wall collision
            if (jack.x > entity.x && jack.y >= entity.y){
                jack.x = entity.x + entity.w;
            }

            // top of wall collision
            if (jack.y < entity.y && (jack.x + jack.w) > entity.x + 10 && jack.x < (entity.x + entity.w) - 10 && jack.velY >= 0){
                jack.velY = 0;
            }

        }else if (entity.type === 'exitPipe'){
            // exit pipe code
        }else if (entity.type === 'coin'){
            var coinsArray = data.entities.coinsArray;
            var index = coinsArray.indexOf(entity);

            var newCoin = coinsArray.splice(index, 1)[0];
            data.entities.score.value++;
            jack.coins++;

            // Add a new coin to the screen to replace the old one
            console.log(newCoin);
            newCoin.x = Math.floor(Math.random() * 1000);
            newCoin.y = Math.floor(Math.random() * 200) + 200;
            coinsArray.push(newCoin);
        }
    },

    helpers: {
        gravity: function(entity){
            entity.y += entity.velY;
            entity.velY += 1.2;
        }
    }
}