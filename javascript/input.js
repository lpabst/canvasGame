var Input = {
    init: function(data){
        var self = this;

        $(window).on('keydown', function(){
            Input.helpers.down[event.keyCode] = true;
        });

        $(window).keyup(function(){
            delete Input.helpers.down[event.keyCode];
            delete Input.helpers.pressed[event.keyCode];
        })
    },

    update: function(data){
        var jack = data.entities.jack;
        var leftArrowDown = Input.helpers.isDown(37);
        var rightArrowDown = Input.helpers.isDown(39);
        var upArrowDown = Input.helpers.isDown(38);

        if (leftArrowDown){
            if (jack.velY === 0){
                jack.currentState = jack.states.walking;
            }else{
                jack.x -= jack.velX;
            }
            
            jack.direction = 'left';
        }
        
        if (rightArrowDown){
            if (jack.velY === 0){
                jack.currentState = jack.states.walking;
            }else{
                jack.x += jack.velX;
            }

            jack.direction = 'right';
        }

        if (upArrowDown){
            jack.currentState = jack.states.jumping;
        }

        // Otherwise he's just standing there
        if(!leftArrowDown && !rightArrowDown && !upArrowDown){
            jack.currentState = jack.states.standing;
        }
    },

    helpers: {
        isDown: function(code){
            return Input.helpers.down[code];
        },

        isPressed: function(code){
            if (Input.helpers.pressed[code]){
                return false;
            }else if (Input.helpers.down[code]){
                return Input.helpers.pressed[code] = true;
            }else{
                return false;
            }
        },

        down: {},
        pressed: {},
    },
    
}