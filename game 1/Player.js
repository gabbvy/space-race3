class Player{
    constructor(){
    this.positionX=0;
    this.positionY=0;
    this.index= null;
    this.name=null;
    
    }
    addPlayer (){
       var PlayerIndex = "players/player"+this.index;
       if(this.index==1){
       this.positionX=width/2-100;

       }else{
        this.positionX=width/2+100
       }
    database.ref(PlayerIndex).set({
        name:this.name,
        positionX:this.positionX,
        positionY:this.positionY,
        
    })
    }

    getCount(){
    var playerCountRef=database.ref("playerCount");
    playerCountRef.on("value",data=>{
        playerCount=data.val();
    });

    }
    UpdateCount(count){
      database.ref("/").update({
      playerCount:count
      
      })
      
      
    }
}