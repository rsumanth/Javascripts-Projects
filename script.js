const syntaxContainer=document.getElementById('Syntax-Container');
const syntaxText=document.getElementById('syntax');
const Concept=document.getElementById('concept');
const twitterBtn=document.getElementById('twitter');
const loopBtn=document.getElementById('Loop');
const loader=document.getElementById('loader')





function newSyntax(){
    
    const sintax= localsyntax[Math.floor(Math.random()* localsyntax.length)];
    
    
    syntaxText.textContent=sintax.syntax;
    Concept.textContent=sintax.concept;


  


}



/*why we using this `` (template string) back quote is for we want to pass a variable and it converts in to a string $ it is for passing a variable*/
function tweetsyntax(){
    
    const twitterUrl=`https://twitter.com/intent/tweet?text=${syntaxText.textcontent}-${Concept.textContent}`;
    window.open(twitterUrl,'_blank');

}

//Event listeners

twitterBtn.addEventListener('click',tweetsyntax);
loopBtn.addEventListener('click',newSyntax);



newSyntax();
