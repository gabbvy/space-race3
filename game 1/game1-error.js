class Player{
    constructor(){
    this.positionX=0;
    this.positionY=0;
    this.index;
    
    }
    addPlayer (){
       var PlayerIndex = "players/player"+this.index;
       
    database.ref(PlayerIndex).set({
        positionX:this.positionX,
        positionY:this.positionY,
        
    })
    }

    getCount(){
    var playerCountRef=database.ref("playerCount");
    playerCountRef.on("value",function(data){
        playerCount=data.val();
    });

    }
    UpdateCount(count){
      database.ref("/").update({
      playerCount:count
      
      })
      
      
    }
}