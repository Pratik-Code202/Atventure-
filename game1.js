var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
alert("Go infront of the teachers' desk to collect your assignment")
document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            if (Checkifalive()){
                move("left")
            }
            break;
        case 38:
            if (Checkifalive()){
                move("up")
            }
            break;
        case 39:
            if (Checkifalive()){
                move("right")
            }
            break;
        case 40:
            if (Checkifalive()){
                move("down")
            }
            break;
        case 65:
            if (Checkifalive()){
                move("left")
            }
            break;
        case 87:
            if (Checkifalive()){
                move("up")
            }
            break;
        case 68:
            if (Checkifalive()){
                move("right")
            }
            break;
        case 83:
            if (Checkifalive()){
                move("down")
            }
            break;
    }
});

function Checkifalive(){
    playa = document.getElementById("player")
    if (window.getComputedStyle(playa).visibility === "hidden") {
        return false
    } else {
        return true
    }
}

function cleanup(tochange,ish){
    if (ish){
        var tonumber = tochange.replace('vh', '')
        var no = parseInt(tonumber, 10)
        //if (no > 0) {
            //tochange = `${no - 10}px`
        //}
        return no
    } else {
        var tonumber = tochange.replace('vw', '')
        var no = parseInt(tonumber, 10)
        //if (no > 0) {
            //tochange = `${no - 10}px`
        //}
        return no
    }
}

function checkmap(dir){
    playa = document.getElementById("player")
    left = cleanup(playa.style.left,false)
    up = cleanup(playa.style.top,true)
    if (dir == "up"){   
        if ((up == 28)&&(left == 7 || left == 14)){
            var a = document.createElement('a');
            a.setAttribute('href', "image/jpeg");
            a.setAttribute('download', "worksheet.jpeg");

            var aj = $(a);
            aj.appendTo('body');
            aj[0].click();
            aj.remove();
        }     
    }
    if (dir == "down"){
        if ((up == 28)&&(left == 7 || left == 14)){
            var a = document.createElement('a');
            a.setAttribute('href', "image/jpeg");
            a.setAttribute('download', "worksheet.jpeg");

            var aj = $(a);
            aj.appendTo('body');
            aj[0].click();
            aj.remove();
        }    
    }
    if (dir == "right"){
        if ((up == 28)&&(left == 7 || left == 14)){
            var a = document.createElement('a');
            a.setAttribute('href', "image/jpeg");
            a.setAttribute('download', "worksheet.jpeg");

            var aj = $(a);
            aj.appendTo('body');
            aj[0].click();
            aj.remove();
        }    
    }
    if (dir == "left"){
        if ((up == 28)&&(left == 7 || left == 14)){
            var a = document.createElement('a');
            a.setAttribute('href', "image/jpeg");
            a.setAttribute('download', "worksheet.jpeg");

            var aj = $(a);
            aj.appendTo('body');
            aj[0].click();
            aj.remove();
        }    
    }
    return true
}
function move(direction){
    playa = document.getElementById("player")
    switch (direction){
        case "left":
            left = cleanup(playa.style.left,false)
            console.log("before left",left)
            if (left >= 10) {
                if(checkmap('left')){
                    playa.style.left = `${left - 7}vw`
                }   
            } else {
                playa.style.left = `0px`
            }
            break;
        case "up":
            up = cleanup(playa.style.top,true)
            console.log("before top",up)
            if (up <= 0) {
                playa.style.top = `0px`
            } else {
                if (checkmap("up")){
                    playa.style.top = `${up - 7}vh`
                }
            }
            break;
        case "right":
            right = cleanup(playa.style.left,false)
            console.log("before left",right)
            if (right/7 >= 9) {
                 //pass
            } else {
                if (checkmap('right')){
                    playa.style.left = `${right + 7}vw`
                }
                
            }
            break;
        case "down":
            down = cleanup(playa.style.top,true)
            console.log("before top",down)
            if (down/7 >= 9) {
                 //pass
            } else {
                if (checkmap("down")){
                    playa.style.top = `${down + 7}vh`
                }
            }
            break;

    }
}

once = 1
function clickk(event) {
    playa = document.getElementById("player")
    if (event.button == 0){
        if (once){
            if (Math.random() > 0.5){
                playa.style.left = "35vw"
            } else {
                playa.style.left = "28vw"
            }
            if (!(Checkifalive())){
                playa.style.visibility = "visible";
            }
            once = 0
        }
    }
}