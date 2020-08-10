document.addEventListener('DOMContentLoaded',()=>{
    const cardArray=[
        {
            name:'fries',
            image:'images/fries.png'
        } ,
        {
            name:'fries',
            image:'images/fries.png'
        }
        ,
        {
            name:'cheeseburger',
            image:'images/cheeseburger.png'
        }
        ,
        {
            name:'cheeseburger',
            image:'images/cheeseburger.png'
        }
        ,
        {
            name:'hotdog',
            image:'images/hotdog.png'
        },
        {
            name:'hotdog',
            image:'images/hotdog.png'
        },
        {
            name:'ice-cream',
            image:'images/ice-cream.png'
        },
        {
            name:'ice-cream',
            image:'images/ice-cream.png'
        },
        {
            name:'milkshake',
            image:'images/milkshake.png'
        },
        {
            name:'milkshake',
            image:'images/milkshake.png'
        }
        ,
        {
            name:'pizza',
            image:'images/pizza.png'
        },
        {
            name:'pizza',
            image:'images/pizza.png'
        }
    ]


cardArray.sort(()=> 0.5-Math.random());
    const grid=document.querySelector('.grid')
    const resultDisplay=document.querySelector('#result')
    let cardsChosen=[];
    let cardChosenId=[];
    let score=0;
    const cardsMatches=[];

    function createBoard(){
        for (let i=0 ;i< cardArray.length;i++){
            var card =document.createElement('img');

            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipcard);

            grid.appendChild(card);

        }
    }
    //fliping the cards 

    function flipcard(){
      var dataId=this.getAttribute('data-id');
      cardsChosen.push(cardArray[dataId].name);
      cardChosenId.push(dataId);
      this.setAttribute('src',cardArray[dataId].image);
      if (cardsChosen.length==2)
      {
        setTimeout(CheckForMatch,500)
      }

    }
    
    function CheckForMatch(){
        var cards= document.querySelectorAll('img');
  
        const optionOneId= cardChosenId[0];
        const optionTwoId= cardChosenId[1];
        if (cardsChosen[0]===cardsChosen[1])
        {
          score++;
          cards[optionOneId].setAttribute('src','images/white.png');
          cards[optionTwoId].setAttribute('src','images/white.png');
          cardsMatches.push(cardsChosen);
        }
        else{
          cards[optionOneId].setAttribute('src','images/blank.png');
          cards[optionTwoId].setAttribute('src','images/blank.png');
        }
        cardsChosen=[];
        cardChosenId=[];
        resultDisplay.textContent=cardsMatches.length;
        if (cardsMatches.length==cardArray.length/2)
        {
          resultDisplay.textContent="Congratulation! You Got it all."
  
        }
      }
  

    createBoard();

})