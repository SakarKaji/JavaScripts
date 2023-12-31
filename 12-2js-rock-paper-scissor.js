       //const score = JSON.parse(localStorage.getItem('score'));

       let score = JSON.parse(localStorage.getItem('score')) || {
        wins : 0,
        losses : 0,
        ties : 0
      } ; 
       /*this code means if score is null up code not work so we make default null value so code worksss    (please use this while suing local storage else wont work)*/ 

      updateScoreElement();

              let isAutoplaying = false;//isAutoplaying  keeps track of whther or not we are playing
              
              let intervalId ; //setInterval returns a number(like an id) which we can use to stop interval
             
            //  can be wriiten as arrow function this but below is preffered
            //  const autoplay = () => {

            //  };
             
             
            //  legit code commented because to use arrow function
            //   function autoplay(){
            //   if(!isAutoplaying){
            //     intervalId = setInterval(function(){
            //       const playerMove = pickComputermove();//pickcomputermove() gives random move
            //       playGame(playerMove);
            //     },1000)//after playing (this) we are going to set the value to true
            //     isAutoplaying = true;
            //   }
            //   else{
            //     clearInterval(intervalId);//clearInterval stops an interval,gk so we give intervalId to stop it
            //     isAutoplaying = false; //beacuse we just stop playing(ie, stop interval)

            //   }
            //  }

            //  arrow function 
             function autoplay(){
              if(!isAutoplaying){
                intervalId = setInterval(() => {
                  const playerMove = pickComputermove();//pickcomputermove() gives random move
                  playGame(playerMove);
                },1000)//after playing (this) we are going to set the value to true
                isAutoplaying = true;
              }
              else{
                clearInterval(intervalId);//clearInterval stops an interval,gk so we give intervalId to stop it
                isAutoplaying = false; //beacuse we just stop playing(ie, stop interval)

              }
             }

              
            //  eventlisterner instead of onclick
             document.querySelector('.js-rock-button')
             .addEventListener('click',() => {
              playGame('rock');
             });

             document.querySelector('.js-paper-button')
             .addEventListener('click',() => {
              playGame('paper');
             });


             document.querySelector('.js-scissors-button')
             .addEventListener('click',() => {
              playGame('scissors');
             });


             document.querySelector('.js-reset-button')
             .addEventListener('click',() => {
              playGame('reset');
             });


             document.querySelector('.js-auto-play-button')
             .addEventListener('click',() => {
              autoplay();
             });

            

             document.body.addEventListener('keydown',(event) => {
               // easy function only gk console.log("keydown");
              // console.log(event.key);//lets us know which key was pressed  
              if(event.key ==  'r') {
                playGame('rock');
              
              }else if(event.key == 'p'){
                playGame('paper');
             
              }else if(event.key == 's'){
                playGame('scissors');
            }});

             


            function playGame(playerMove)
            {
              let computerMove = pickComputermove(); //eventhough (gk const or let)we use computerMove here it is diff from down inside scope because scope is diff
              
              let result = '';

              if (playerMove === 'scissors')
              {
              if(computerMove === 'rock')
              {
              result = 'You lose';
              }else if (computerMove === 'paper')
              {
                result = 'You win';
              }else if(computerMove === 'scissors')
              {
                result = 'tie';
              }

            }else if (playerMove === 'paper')
            {
              if(computerMove === 'rock')
              {
                result = 'You win';
              }else if (computerMove === 'paper')
              {
                result = 'tie';
              }else if(computerMove === 'scissors')
              {
                result = 'You lose';
              }
             
            }else if (playerMove === 'rock')
            {
                if(computerMove === 'rock')
              {
                  result = 'tie';
                }else if (computerMove === 'paper')
                {
                  result = 'You lose';
                }else if(computerMove === 'scissors')
                {
                  result = 'You win';
                }
            }

            //update the score
            if (result === 'You win')
            {
              score.wins++; //use +=1

            }else if (result === 'You lose')
            {
              score.losses += 1 ;
           
            }else if ( result === 'tie')
            {
              score.ties +=1  ;
            }
          
            //update score->reset-my code best code
           if (playerMove === 'reset')
           {
            score.wins = 0;
            score.losses = 0;
            score.ties =0;
            //localStorage.removeItem('score');
            //updateScoreElement();
           }
            // \n was not used to display next line because interrpolation allows to use multiline strins but \n can be used so i used for easyness and neatness

            localStorage.setItem('score', JSON.stringify(score)); //local storage only supports strings so we convert it to strings

            updateScoreElement();

           /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}. \n wins :${score.wins} losses : ${score.losses} ties : ${score.ties} `)
            */     

            document.querySelector('.js-result').innerHTML = result; //variable so

            document.querySelector('.js-moves').innerHTML =` You <img src="images/${playerMove}-emoji.png" class="move-icon">  <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer `;

          }

          function updateScoreElement(){
          document.querySelector('.js-score')
            .innerHTML =` wins :${score.wins} losses : ${score.losses} ties : ${score.ties}`;

            }
             
           
            function pickComputermove () {
              const randomNumber = Math.random();

            let computerMove = '';

            if(randomNumber >= 0 && randomNumber < 1 / 3)
            {
              computerMove='rock';
            }else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3)
            {
            computerMove = 'paper';
            }else if(randomNumber >= 2 / 3 && randomNumber < 1)
            {
            computerMove = 'scissors';
            }
            return computerMove; //return statement -> it will get this value out of the funciton (anything that results value eg; return 2+3; variable1; math.round();)

            //after return statement it ends function immediately like below will nnot run
            console.log(computerMove);
            }
           