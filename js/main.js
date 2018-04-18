$(function(){

    /*----------Enter Your Name ------------ */
    $("#EnterBtn").on("click",function(){

        if($(".name").val() == 0){
            alert("You Must Enter a Name");
        }
        else if($(".name").val().length > 16){
            alert("Your Name Must Be Less Than 15 Character");
        }
        else{
            $(".player-score h3").html($(".name").val());
            $(".your-name").remove();
            $("#startBtn").css("display","block");
        }

    });

    /* ======array for deck======== */
    var deck = [{card:"images/1_of_clubs.png",value:"1"},{card:"images/1_of_diamonds.png",value:"1"},{card:"images/1_of_hearts.png",value:"1"},{card:"images/1_of_spades.png",value:"1"},{card:"images/2_of_clubs.png",value:"2"},{card:"images/2_of_diamonds.png",value:"2"},{card:"images/2_of_hearts.png",value:"2"},{card:"images/2_of_spades.png",value:"2"},{card:"images/3_of_clubs.png",value:"3"},{card:"images/3_of_diamonds.png",value:"3"},{card:"images/3_of_hearts.png",value:"3"},{card:"images/3_of_spades.png",value:"3"},{card:"images/4_of_clubs.png",value:"4"},{card:"images/4_of_diamonds.png",value:"4"},{card:"images/4_of_hearts.png",value:"4"},{card:"images/4_of_spades.png",value:"4"},{card:"images/5_of_clubs.png",value:"5"},{card:"images/5_of_diamonds.png",value:"5"},{card:"images/5_of_hearts.png",value:"5"},{card:"images/5_of_spades.png",value:"5"},{card:"images/6_of_clubs.png",value:"6"},{card:"images/6_of_diamonds.png",value:"6"},{card:"images/6_of_hearts.png",value:"6"},{card:"images/6_of_spades.png",value:"6"},{card:"images/7_of_clubs.png",value:"7"},{card:"images/7_of_diamonds.png",value:"7"},{card:"images/7_of_hearts.png",value:"7"},{card:"images/7_of_spades.png",value:"7"},{card:"images/8_of_clubs.png",value:"8"},{card:"images/8_of_diamonds.png",value:"8"},{card:"images/8_of_hearts.png",value:"8"},{card:"images/8_of_spades.png",value:"8"},{card:"images/9_of_clubs.png",value:"9"},{card:"images/9_of_diamonds.png",value:"9"},{card:"images/9_of_hearts.png",value:"9"},{card:"images/9_of_spades.png",value:"9"},{card:"images/10_of_clubs.png",value:"10"},{card:"images/10_of_diamonds.png",value:"10"},{card:"images/10_of_hearts.png",value:"10"},{card:"images/10_of_spades.png",value:"10"},{card:"images/jack_of_clubs.png",value:"jack"},{card:"images/jack_of_diamonds.png",value:"jack"},{card:"images/jack_of_hearts.png",value:"jack"},{card:"images/jack_of_spades.png",value:"jack"},{card:"images/king_of_clubs.png",value:"king"},{card:"images/king_of_diamonds.png",value:"king"},{card:"images/king_of_hearts.png",value:"king"},{card:"images/king_of_spades.png",value:"king"},{card:"images/queen_of_clubs.png",value:"queen"},{card:"images/queen_of_diamonds.png",value:"queen"},{card:"images/queen_of_hearts.png",value:"queen"},{card:"images/queen_of_spades.png",value:"queen"}]
    
    /*================= on click start ====================*/
    
    var flagRandom ;
    
    function randomCardFunc(){
        
            var randomCard = Math.floor(Math.random() * deck.length);
    
            if(randomCard == -1){
                randomCard = 0;
            }
    
            flagRandom = randomCard;
            
            return flagRandom;
    
    }
    var playerArr = []; /*-----array for player cards that he taken-----*/ 
    var computerArr = [];
    var compCard;
    
    $("#startBtn").on("click",startFunc);
    
    function startFunc(){
    
        for(var i =0; i< $(".comp-g").length; i++){
    
            $(".comp-g").eq(i).append($("<img>").attr("src","images/facedown.png"));
            
            computerArr[i] = deck[randomCardFunc()];
            // delete computer cards from the array            
            deck.splice($.inArray(deck[flagRandom],deck),1);

            $(".player-g").eq(i).append($("<img>").attr("src",deck[randomCardFunc()].card).attr("data-value",deck[flagRandom].value));
            
            playerArr[i] = deck[flagRandom];
            // delete player cards from the array
            deck.splice($.inArray(deck[flagRandom],deck),1);
            
        }
        for(var i =0; i< $(".card").length; i++){
            
            $(".card").eq(i).append($("<img>").attr("src",deck[randomCardFunc()].card).attr("data-value",deck[flagRandom].value));
            
            // Try to put setTimeout function here
            while($(".card img").eq(i).attr("src") == "images/jack_of_clubs.png" || $(".card img").eq(i).attr("src") == "images/jack_of_diamonds.png" || $(".card img").eq(i).attr("src") == "images/jack_of_hearts.png" || $(".card img").eq(i).attr("src") == "images/jack_of_spades.png"){
                
                $(".card img").eq(i).attr("src",deck[randomCardFunc()].card).attr("data-value",deck[flagRandom].value);
                
            }
            
            deck.splice($.inArray(deck[flagRandom],deck),1);
            
        }

        $("#startBtn").attr("disabled","disabled");
        
    }
    
    /*============ playerWillPlay function ===============*/
    var countScore=0;

    var countScoreComp =0;

    var g;

    var flagValueEqual = false;

    
    $(document).on("click",".player-card img",playerWillPlay);
    
    function playerWillPlay(event){
        
        var flagTable = false;    
        
        for(var i=0; i<$(".card img").length; i++){
            
                if($(event.target).attr("data-value") != $(".card img").eq(i).attr("data-value")){
                    
                    flagValueEqual = true;
                }else{
                    flagValueEqual = false;
                    countScore++;
                    break;
                }
            }
                
            if(flagValueEqual == true || $(".card img").length == 0){
               
                $(".card").eq(3).append($("<img>").attr("src",$(event.target).attr("src")).attr("data-value",$(event.target).attr("data-value")));
                
                $(event.target).remove();
                
            }else{

                for(var i=0; i<$(".card img").length; i++){
                    /* ----------- basra check -------------- */
                    if($(".card img").length == 1 && $(event.target).attr("data-value") == $(".card img").eq(0).attr("data-value") && $(event.target).attr("data-value") != "jack" && $(event.target).attr("src") != "images/7_of_diamonds.png"){

                        countScore += 10;
                        $(".player-score p").html(countScore);  
                        $(".card img").eq(0).remove();
                        $(event.target).remove();                             
                        
                    }else{
                        
                    }
                    
                    while($(event.target).attr("data-value") == $(".card img").eq(i).attr("data-value")){
                        flagTable=true;
                        countScore++;
                        $(".card img").eq(i).remove();
                        $(event.target).remove();
                        $(".player-score p").html(countScore);               
                        
                    }
                }
            }
            
            if($(".card img").length == 1){

            }else{
                /* if is's a 7 comy or jack */
                if( $(event.target).attr("src") == "images/7_of_diamonds.png" || $(event.target).attr("src") == "images/jack_of_clubs.png" || $(event.target).attr("src") == "images/jack_of_diamonds.png" || $(event.target).attr("src") == "images/jack_of_hearts.png" || $(event.target).attr("src") == "images/jack_of_spades.png"){
                    var tableCardCount = $(".card img").length;
                    for(var i=0; i<tableCardCount; i++){
                        countScore++;
                        $(".card img").remove();   
                        $(".player-score p").html(countScore);                               
                
                    }
                }
            }

            /*-------------------- THE SUM ----------------------- */
            var flagSum = false;
            function sumCards(arr, S) {

                var sums = [];
              
                for (var i = 0; i < arr.length; i++) { 
                  for (var j = i + 1; j < arr.length; j++) {
                    if (arr[i] + arr[j] === S) {
                        flagSum = true;
                      sums.push([arr[i], arr[j]]);  
                                     
                    }
              
                  }
              
                }
              
                // return all pairs of integers that sum to S
                return sums;
              
              }
              var tableArr = [];
              for(var i=0; i<$(".card img").length; i++){
                  if($(".card img").eq(i).attr("data-value") == "queen" || $(".card img").eq(i).attr("data-value") == "king" || $(".card img").eq(i).attr("data-value") == "jack"){
                        continue;
                    }else{
                        
                        tableArr.push(parseInt($(".card img").eq(i).attr("data-value")));
                        
                    }
                }

                var sumCard = parseInt($(event.target).attr("data-value"));
                
                var sumFunc = sumCards(tableArr,sumCard);
                var jo = sumFunc.join();
                var sumArr = jo.split(",");
                
                if(flagSum == true){
                    for(var i=0; i<tableArr.length; i++){
                        for(var g=0; g<sumArr.length; g++){
                            while($(".card img").eq(i).attr("data-value") == sumArr[g]){
                                $(".card img").eq(i).remove();
                                countScore++;
                            }
                        }

                    }
                    
                    if(flagTable){
        
                    }else{
                        var index = ($(".card img").length)-1;
                        $(".card img").eq(index).remove();
                        countScore++;
                    }
                    

                    if($(".card img").length == 0){
                        countScore += 9;
                    }

                    $(".player-score p").html(countScore);                                                   
            }
                
            /*------------ sum three cards -------------- */
            var flagThreeCard = false;
            function sumThreeCards(ar,Sum) {
                var sumsThree = [];
                for (var i = 0; i < ar.length; i++) {
                    for (var j = i + 1; j < ar.length; j++) {
                        for (var k = j + 1; k < ar.length; k++) {
                            if (ar[i] + ar[j] + ar[k] == Sum) {
                                flagThreeCard = true;
                                sumsThree.push([ar[i],ar[j],ar[k]]);
                            }
                        }
                    }
                }
                return sumsThree;
            }
                
                var sumFuncThree = sumThreeCards(tableArr,sumCard);
                var jo = sumFuncThree.join();
                var sumFuncThree = jo.split(",");
                function removeDuplicate(threearr){
                    var newThreeArr = Array.from(new Set(threearr))
                    return newThreeArr;
                }
                sumFuncThree = removeDuplicate(sumFuncThree);
                
                
                if(flagThreeCard == true){
                    for(var i=0; i<tableArr.length; i++){
                        for(var g=0; g<sumFuncThree.length; g++){
                            while($(".card img").eq(i).attr("data-value") == sumFuncThree[g]){
                                $(".card img").eq(i).remove();
                                countScore++;
                            }
                        }

                    }                    

                    if($(".card img").length == 0){
                        countScore += 9;
                    }

                    $(".player-score p").html(countScore);                                                   
            }

            /* ---------- computer start playing ------------ */
            $(document).off("click",".player-card img",playerWillPlay);
            setTimeout(function(){

            var flagRandomComp;
            var flagTable2 = false;
            function randomComp(){
        
                var randomComp = Math.floor(Math.random() * computerArr.length);
        
                if(randomComp == -1){
                    randomComp = 0;
                }

                flagRandomComp = randomComp;
                
                return flagRandomComp;
        
            }

            compCard = computerArr[randomComp()];
            console.log(computerArr);

            /* delete from comp card backface */
            g =0;
            while(g<$(".comp-card").length){
                $(".comp-card img").eq(g).remove();
                g++;
            }

            var flagValueEqualComp = false;

            for(var i=0; i<$(".card img").length; i++){

                if(compCard.value != $(".card img").eq(i).attr("data-value")){
                    flagValueEqualComp = true;
                }else{
                    flagValueEqualComp = false;
                    countScoreComp++;
                    break;
                }

            }

            if(flagValueEqualComp == true || $(".card img").length == 0){

                $(".card").eq(2).append($("<img>").attr("src",computerArr[flagRandomComp].card).attr("data-value",computerArr[flagRandomComp].value));

                /*----------- Delete computer arr ------------- */
                computerArr.splice($.inArray(computerArr[flagRandomComp],computerArr),1);

            }else{

                for(var i=0; i<$(".card img").length; i++){
                    
                    while(compCard.value == $(".card img").eq(i).attr("data-value")){
                        flagTable2 = true;
                        countScoreComp++;
                        $(".card img").eq(i).remove();
                       
                        $(".comp-score p").html(countScoreComp);               
                        
                    }
                }
            }

            if($(".card img").length == 1){

            }else{
                /* if is's a 7 comy or jack */
                if( compCard.card == "images/7_of_diamonds.png" || compCard.card == "images/jack_of_clubs.png" || compCard.card == "images/jack_of_diamonds.png" || compCard.card == "images/jack_of_hearts.png" || compCard.card == "images/jack_of_spades.png"){
                    var tableCardCount = $(".card img").length;
                    for(var i=0; i<tableCardCount; i++){
                        countScoreComp++;
                        $(".card img").remove();   
                        $(".comp-score p").html(countScoreComp);                               
                
                    }
                }
            }
           /*--------------- basra ----------------*/

            if($(".card img").length == 1){

            }else{
                if(compCard.value == "jack" || compCard.card == "images/7_of_diamonds.png"){
    
                }
                else if($(".card img").length == 0){
                    countScoreComp += (9 - $(".card img").length);
                    $(".comp-score p").html(countScoreComp);                               
                    
                }
            }

            /*------------ sum for 2 cards for computer----------*/
              flagSum = false;
              var tableArr2 = [];
              for(var i=0; i<$(".card img").length; i++){
                  if($(".card img").eq(i).attr("data-value") == "queen" || $(".card img").eq(i).attr("data-value") == "king" || $(".card img").eq(i).attr("data-value") == "jack"){
                        continue;
                    }else{
                        
                        tableArr2.push(parseInt($(".card img").eq(i).attr("data-value")));
                        
                    }
                }
                
                var sumCompCard = parseInt(compCard.value);
                
                var sumFunc = sumCards(tableArr2,sumCompCard);
                var jo = sumFunc.join();
                var sumArr = jo.split(",");

                
                if(flagSum == true){
                    for(var i=0; i<tableArr2.length; i++){
                        for(var g=0; g<sumArr.length; g++){
                            while($(".card img").eq(i).attr("data-value") == sumArr[g]){
                                $(".card img").eq(i).remove();
                                countScoreComp++;
                            }
                        }

                    }
                    
                    if(flagTable2){
        
                    }else{
                        for(var i=0; i<$(".card img").length; i++){
                            if($(".card img").eq(i).attr("data-value")==compCard.value){
                                $(".card img").eq(i).remove();
                                countScoreComp++; 
                            }
                        }
                    }

                    if($(".card img").length == 0){
                        countScoreComp += 9;
                    }

                    $(".comp-score p").html(countScoreComp);                                                   
            }

            /*------------ sum three cards -------------- */
                flagThreeCard = false;
                var sumFuncThree = sumThreeCards(tableArr2,sumCompCard);
                var jo = sumFuncThree.join();
                var sumFuncThree = jo.split(",");
                function removeDuplicate(threearr){
                    var newThreeArr = Array.from(new Set(threearr))
                    return newThreeArr;
                }
                sumFuncThree = removeDuplicate(sumFuncThree);
                
                
                if(flagThreeCard == true){
                    for(var i=0; i<tableArr.length; i++){
                        for(var g=0; g<sumFuncThree.length; g++){
                            while($(".card img").eq(i).attr("data-value") == sumFuncThree[g]){
                                $(".card img").eq(i).remove();
                                countScoreComp++;
                            }
                        }

                    }   
                    if(flagTable2){
        
                    }else{
                        for(var i=0; i<$(".card img").length; i++){
                            if($(".card img").eq(i).attr("data-value")==compCard.value){
                                $(".card img").eq(i).remove();
                                countScoreComp++; 
                            }
                        }
                    }                

                    if($(".card img").length == 0){
                        countScoreComp += 9;
                    }

                    $(".comp-score p").html(countScoreComp);                                                   
            }

            $(document).on("click",".player-card img",playerWillPlay);

            /* --------- check if players has no cards -----------*/
            setTimeout(function(){
            if($(".comp-card img").length == 0){
            
                 function nextRound(){
                    for(var i =0; i< $(".comp-g").length; i++){
    
                        $(".comp-g").eq(i).append($("<img>").attr("src","images/facedown.png"));
                        
                        computerArr[i] = deck[randomCardFunc()];
                        // delete computer cards from the array            
                        deck.splice($.inArray(deck[flagRandom],deck),1);
            
                        $(".player-g").eq(i).append($("<img>").attr("src",deck[randomCardFunc()].card).attr("data-value",deck[flagRandom].value));
                        
                        playerArr[i] = deck[flagRandom];
                        // delete player cards from the array
                        deck.splice($.inArray(deck[flagRandom],deck),1);
                        
                    }
                    
                 }
                 if(deck.length == 0){
                    $(".card img").remove();
                    $(".deck-card img").remove();
                    /*--------- Who's win?! ---------- */
                    if(parseInt($(".comp-score p").html()) > parseInt($(".player-score p").html())){
                        $("#winner").html("Ya loooooser!");
                        $("#winner").attr("open","open");
                        $(".play-againDiv").css("display","block");
                        var audio = $("<audio class='lose' autoplay><source src='audio/lose.mp3'></audio>");
                        $("body").append(audio);
                    }else{
                        if(parseInt($(".comp-score p").html()) == parseInt($(".player-score p").html())){
                            $("#winner").html("T3adol :)");
                            $("#winner").attr("open","open");
                            $(".play-againDiv").css("display","block");
                            
                        }else{
                        $("#winner").html("You Won");
                        $("#winner").attr("open","open"); 
                        $(".play-againDiv").css("display","block");
                        var audio = $("<audio class='win' autoplay><source src='audio/win.mp3'></audio>");
                        $("body").append(audio);
                    }
                                  
                    }
                 }else{

                    nextRound();
                     
                 }
            
            }
            },800);
},800);
        }/*end of click function*/

        // to play again
        $(".play-againDiv").on("click",function(){

            window.location.reload();
            
        });   
    });