//// Display countown from 10 to 1 and then display Happy independence day- Days17-Task////
       /////using Hell call back function////
       function one (cb = () =>{}) {
        countdown("10")
        cb();
    }
    function two (cb = () =>{}) {
        countdown("9")
        cb();
    }
    function three (cb = () =>{}) {
        countdown("8")
        cb();
    }
    function four (cb = () =>{}) {
        countdown("7")
        cb();
    }
    function five (cb = () =>{}) {
        countdown("6")
        cb();
    }
    function six (cb = () =>{}) {
        countdown("5")
        cb();
    }
    function seven (cb = () =>{}) {
        countdown("4")
        cb();
    }
    function eight (cb = () =>{}) {
        countdown("3")
        cb();
    }
    function nine (cb = () =>{}) {
        countdown("2")
        cb();
    }
    function ten (cb = () =>{}) {
        countdown("1")
        cb();
    }
    function wishes (cb = () =>{}) {
        countdown("Happy independence day")
        cb();
    }
    
    function countdown(message) {
        const p = document.getElementById("start");
        p.innerText = message
       
    }
    
    function greet () {
    one(()=>setTimeout(()=>{
    two(()=>setTimeout(()=>{
    three(()=>setTimeout(()=>{
    four(()=>setTimeout(()=>{
    five(()=>setTimeout(()=>{
    six(()=>setTimeout(()=>{
    seven(()=>setTimeout(()=>{
    eight(()=>setTimeout(()=>{
    nine(()=>setTimeout(()=>{
    ten(()=>setTimeout(()=>{
    wishes(()=>setTimeout(()=>{},1000))
    },1000))
    },1000))
    },1000))
    },1000))
    },1000))
    },1000))
    },1000))
    },1000))
    },1000))
    },1000))
    }
    
    greet ()
    