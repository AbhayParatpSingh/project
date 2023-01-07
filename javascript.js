console.log('welcome to spotify clone');

// initalise the variable
let songIndex=0;
let audioElement=new Audio("um poco loco.mp3");
let masterplay= document.getElementById('masterplay');
let progressBar= document.getElementById('progressBar');
let gif= document.getElementById('gif');

let songs =[
    
       { song:"Um Poco Loco", filepath:"um poco loco.mp3"},
        {song:"Illzam", filepath:"A:\Music\Ilzaam - Arjun Kanungo.mp3"},
        {song:"Ankho Se Batana", filepath:"A:\New folder (2)\Aankhon Se Batana(PagalWorld.com.se).mp3"},
        {song:"radha rani", filepath:"A:\New folder (2)\Radha-Rani(PagalWorld).mp3"},
        {song:"Shri Raghunath", filepath:"A:\New folder (2)\Hamare-Sath-Shri-Raghunath(PagalWorldl).mp3"},
        {song:"8 parche", filepath:"A:\New folder (2)\8-Parche(PagalWorldl).mp3"}


    
]


//audioElement.play();
//playbutton
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;

    }
}
)

//listen to events
audioElement.addEventListener('timeupdate',()=>{console.log('timeupdate');

progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
progressBar.value =progress;

})
progressBar.addEventListener('change',()=>
{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})
 Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        

    })
    
});
