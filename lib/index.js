let darkmodebtn = document.getElementById("darkmodebtn");
let backgroundstate = 0;

darkmodebtn.addEventListener('click', function(){
    if(backgroundstate != 0){
        document.getElementById('dark-mode');
        backgroundstate++
    }else{
        backgroundstate--
    }
})