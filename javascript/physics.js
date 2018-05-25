var Physics = {
    update: function(data){
        Physics.helpers.gravity(data.entities.jack);
        Physics.collisionDetection(data);
    },

    collisionDetection: function(data){
        var jack = data.entities.jack;

        var entityCollisionCheck = function(entity){
            if (jack.x < entity.x +entity.w && 
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

        }else if (entity.type === 'coin'){

        }
    },

    helpers: {
        gravity: function(entity){
            entity.velY += 1.2;
            entity.y += entity.velY;
        }
    }
}