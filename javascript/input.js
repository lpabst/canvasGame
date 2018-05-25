var Input = {
    init: function(data){
        var self = this;

        $(window).on('keydown', function(){
            self.helpers.down[event.keyCode] = true;
        });

        $(window).on('keyup', function(){
            delete self.helpers.down[event.keycode];
            delete self.helpers.pressed[event.keyCode];
        })
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

    },
    
    down: {},
    pressed: {},
}