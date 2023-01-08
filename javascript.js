console.log('welcome to spotify clone');

let songIndex=0;
let audioElement=new Audio('songs/um poco loco.mp3');
let masterplay= document.getElementById('masterplay');
let progressBar= document.getElementById('progressBar');
let gif= document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =[
    
       { songName:"Um Poco Loco",filePath:"songs/um poco loco.mp3"},
        {songName:"Illzam",filePath:"songs/Ilzaam - Arjun Kanungo.mp3"},
        {songName:"Ankho Se Batana",filePath:"songs/Aankhon Se Batana(PagalWorld.com.se).mp3"},
        {songName:"radha rani",filePath:"songs/Radha-Rani(PagalWorld).mp3"},
        {songName:"Shri Raghunath",filePath:"songs/Hamare-Sath-Shri-Raghunath(PagalWorldl).mp3"},
        {songName:"8 parche",filePath:"songs/8-Parche(PagalWorldl).mp3"},
        {songName:"Teri ankho ka kajal",filePath:"songs/new_192_Teri Aakhya Ka Yo Kajal - D C Madana.mp3"},


    
]
songItems.forEach((element, i)=>{ 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})



masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
       
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
}
)

//listen to events
audioElement.addEventListener('timeupdate',()=>{

progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
progressBar.value =progress;

})
progressBar.addEventListener('change',()=>
{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})
const makeAllPlays= ()=>{
   
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) =>{
     element.classList.remove('fa-pause-circle');
     element.classList.add('fa-play-circle');
    })
}
   
Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
       
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    
        
        

    })
    
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

