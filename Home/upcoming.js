const array = [
    '../Images/back/missionIm2025.webm','../Images/back/2025Con.webm','../Images/back/minecraft2025.webm'
]

let current = 0;

const video = document.getElementById('triles');
video.addEventListener('ended',triles);

function triles()
{
    current++;
    
    
    if(current < array.length)
    {
        video.src = array[current];
        video.load();
        video.play();
    }
    else
    {
        current = 0;
        video.src = array[current];
        video.load();
        video.play();
    }
    
}

video.addEventListener('loadeddata', function() {
    video.play();
});