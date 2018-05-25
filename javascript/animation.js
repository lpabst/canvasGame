var Animation = {
    update: function(data){
        // animate the coin here (I didn't build the spinning coin functions in so I commented this out)
        // Animation.coins(data);
        Animation.jack(data);
    },

    jack: function(data){
        data.entities.jack.currentState.animation(data);
    },

    coins: function(data){
        data.entities.coinsArray.forEach( function(coin) {
            coin.currentState.animation(data);
        });
    }
}