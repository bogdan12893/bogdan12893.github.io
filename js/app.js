const portrait = document.getElementById('profilePic');
const info = document.getElementById('info');

function shakePic(){
    portrait.classList.add('animated', 'shake');
    setTimeout(() => {
        info.classList.add('animated', 'fadeInUp')
        info.innerHTML = `<p class='ouch'>Ouch, my head! </p></br>
                        <p>Well, hello there!</p>
                        <p>My name is Bogdan Cadar,</p> 
                        <p>I'm from Romania,</p>
                        <p>born and raised in Cluj-Napoca.</p></br>
                        <p>I'm a:</p>
                        <ul>
                            <li>Web enthusiast,</li>
                            <li>Music lover,</li>
                            <li>Cyclist,</li>
                            <li>Snowboarder,</li>
                            <li>Hiker</li>
                        </ul>`;
    },1000);
}

function changeInfo(){
    info.classList.add('animated', 'hinge');
}

