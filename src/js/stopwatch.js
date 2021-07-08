
window.addEventListener("load", () =>{
    const botao = document.getElementById("botao");

    botao.addEventListener("click", () => {


            let sec = 360; 

            const countDiv = document.getElementById('timer')

            const secpass = () =>{

                let min = Math.floor(sec/60);
                let lackSec= sec % 60;

                if(lackSec < 10 ){
                    lackSec = 0 + lackSec;
                }

                if(min < 10 ){
                    min = 0 + min;
                }

                countDiv.innerHTML = min + ":" + lackSec;

                if(sec > 0){
                    sec = sec -1;
                }else{

                    countDiv.innerHTML = "Acabou!"
                }

            }

            const countDown = setInterval(()=> secpass(), 1000);

    });
});