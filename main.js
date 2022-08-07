const music = new Audio('NoiTinhYeuKetThuc.mp3');


const songs =[
    {
        id:'1',
        songName:`TenBaiHat1 <br>
        <div class="subtitle">Bui Anh Tuan</div>`,
        poster:"./IMG/anh1.jpg",
    },
    {
        id:'2',
        songName:`TenBaiHat2 <br>
        <div class="subtitle">Bui Anh Tuan</div>`,
        poster:"./IMG/anh1.jpg",
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src =songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML =songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay'); 
let wave=document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    }else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) =>{
        element.classList.add('bi-play-circle-fill');
        element.classList.add('bi-play-circle-fill');
    })
}

let index = 0;

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        index = e.target.id;
        e.target.classList.remove('bi-play-circle-full');
        e.target.classList.add('bi-pause-circle-full');
    })
})
