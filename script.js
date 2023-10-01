const sharebutton = document.getElementById('sharebutton')
sharebutton.addEventListener('click',Event =>{
    //check for web share api support 
    if(navigator.share){
        //if browser support native sahre api
        navigator.share({
            text:'heloo viewer', //wite thus tag thus you wants to show at the share time.
            url:'wwww.example.com'//write your website link 
        }).then(()=>{
            console.log('thanks for watching!');//write ant message 
        })
        .catch((err)=>console.error(err));
    }
    else{
        //if your browser not support share action then
        alert("your browser not support share function,please share link mannualy")
    }
});
