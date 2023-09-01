class Form {
    constructor (){
    this.input=createInput("").attribute("placeholder","Insert Name");
    this.playButton=createButton("play");
    this.titleImg=createImg("./spacerace/spacebattles-removebg.png");
    this.text= createElement("h2")
    
    }
    setElementPosition(){
    this.titleImg.position(550,20);
    this.playButton.position(700,600)
    this.input.position(690,500)
    this.text.position(590,500)
    }
    elementStyle(){
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.titleImg.class("gametitle");
    this.text.class("greeting");

    }
    hide(){
    this.text.hide();
    this.playButton.hide();
    this.titleImg.hide();
    this.input.hide();
    }
    handleMousePressed(){
    this.playButton.mousePressed(()=>{
        this.input.hide();
        this.playButton.hide();
        var messeges=`hello ${this.input.value()} 
            </br> wait until next player joins`;
            this.text.html(messeges);
        })
        playerCount+=1;
        player.name=this.input.value();
        player.index=playerCount();
        player.addPlayer();
        player.UpdateCount(playerCount);
    }   
    display(){
        this.elementStyle();
        this.handleMousePressed();
        this.setElementPosition();
    }
}  
    

