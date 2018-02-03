const portrait = document.getElementById('profilePic');
const info = document.getElementById('info');
portrait.addEventListener('click', shakeShake, false);
portrait.classList.add('animated', 'infinite', 'pulse');

function shakePic(){
    portrait.classList.remove('infinite');
    portrait.classList.add('animated', 'shake');
    setTimeout(() => {
        info.classList.add('animated', 'fadeInUp');
        info.innerHTML = `<p class='ouch'>Ouch, my head! </p></br>
                        <p>Well, hello there!</p>
                        <p>My name is Bogdan Cadar,</p> 
                        <p>I'm from Romania,</p>
                        <p>born and raised in Cluj-Napoca.</p></br>
                        <p style="font-weight: bold">I'm a:</p>
                        <ul>
                            <li>Web enthusiast,</li>
                            <li>Music lover,</li>
                            <li>Cyclist,</li>
                            <li>Snowboarder,</li>
                            <li>Hiker</li>
                        </ul>`;
    },1000);    
}
function shakeShake(e){
    e.preventDefault;
    portrait.classList.remove('animated', 'shake');
    void portrait.offsetWidth;
    portrait.classList.add('animated', 'shake');
}
