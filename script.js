var buttonclick= document.getElementById('click')
buttonclick.addEventListener('click',function(){
    console.log("Welcomt to Spotify"); 

})

// let songsIndex =0;
// let audioElement = new Audio('1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let progressbar=document.getElementById('myProgressBar')
// let songs = [
//      {songName: "song 1" , filePath: "song/1.mp3" , coverPath: "cover/1.jpg"},
//      {songName: "song 2" , filePath: "song/2.mp3" , coverPath: "cover/2.jpg"},
//      {songName: "song 3" , filePath: "song/3.mp3" , coverPath: "cover/3.jpg"},
//      {songName: "song 4" , filePath: "song/4.mp3" , coverPath: "cover/4.jpg"},
//      {songName: "song 5" , filePath: "song/5.mp3" , coverPath: "cover/5.jpg"},
//      {songName: "song 6" , filePath: "song/6.mp3" , coverPath: "cover/6.jpg"},
//      {songName: "song 7" , filePath: "song/7.mp3" , coverPath: "cover/7.jpg"},
//      {songName: "song 8" , filePath: "song/8.mp3" , coverPath: "cover/8.jpg"},
//      {songName: "song 9" , filePath: "song/9.mp3" , coverPath: "cover/9.jpg"},
//      {songName: "song 10" , filePath: "song/10.mp3" , coverPath: "cover/10.jpg"},
// ]

    
// // handle play puse
// masterPlay.addEventListener('click',() => {
//     if(audioElement.paused || audioElement.currentTime<=0) {
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     }
// })
//     //listen to event 
// document.addEventListener('timeupdate',() => {
//     console.log("timeupdate");
//     // update progress

// })