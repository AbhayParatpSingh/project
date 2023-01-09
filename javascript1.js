console.log('welcome to spotify clone');

let songIndex=0;
let audioElement=new Audio('esongs/1.mp3');
let masterplay= document.getElementById('masterplay');
let progressBar= document.getElementById('progressBar');
let gif= document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =[
    
       { songName:"Ghungroo:Arijit Singh",filePath:"esongs/1.mp3"},
        {songName:"Dil Diyan Gallan:Atif Aslam",filePath:"esongs/2.mp3"},
        {songName:"Drau Desi:Benny Dayal",filePath:"esongs/3.mp3"},
        {songName:"Pehli Nazar Me:Pritam",filePath:"esongs/4.mp3"},
        {songName:"Khudaya Khair:Soham ",filePath:"esongs/5.mp3"},
        {songName:"Lehra Do:Arijit Singh",filePath:"esongs/6.mp3"},
        {songName:"Srivali:Javed Ali",filePath:"esongs/7.mp3"},


    
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
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
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
        audioElement.src = `esongs/${songIndex+1}.mp3`;
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
    audioElement.src = `esongs/${songIndex+1}.mp3`;
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
    audioElement.src = `esongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

