window.addEventListener("load",function(){
    var screensType = document.getElementsByClassName("current");
    var current = 0;
    for(i=0;i<screensType.length;i++){
        if(i!=current){
            screensType[i].style.display="none";
        }
    }
    window.onwheel = function exp (e) {
        
        
        if(e.deltaY<0){
            if(current!=0){
                current--
                var staranimation = 0;
                var opasOldTop=0;
                var opasOl ='1';
                var opasNe =0;
                var windowheight= window.innerHeight;
                var opasOld= screensType[current+1]
                
                var opasNew= screensType[current]
                opasOld.style.position="fixed";
                opasNew.style.position="fixed";
               
                var timeanimation= setInterval(function(){
                   if(staranimation<10){
                    staranimation++;
                    opasOl=opasOl-0.1;
                    opasNew.style.zIndex='9999';
                    opasOld.style.zIndex='1';
                    opasOld.style.opacity=opasOl;
                    opasOldTop=opasOldTop-(windowheight/10)
                    opasOld.style.top=opasOldTop+"px";
                    opasNew.style.display="flex"
                    opasNe=Number(opasNe);
                    opasNe=opasNe+0.1;
                    opasNe = String(opasNe);
                    opasNew.style.opacity=opasNe;
                    opasNew.style.top=0+"px";
                    opasNew.style.height=windowheight+'px' ;
                    
                   }
                   else if(staranimation==10){
                    clearInterval(timeanimation);
                   }
                   else{
                    opasNew.style.display="flex"
                    opasNew.style.zIndex="9999";
                    opasOld.style.zIndex='1';
                    opasOld.style.display="none";
                    opasOld.style.top=0+"px";
                    opasOl.dstyle.opacity='0';
                    clearInterval(timeanimation);
                    timeanimation=1
                    
                   }
                },50)
               }
          
        }
        else{
           if(current!=screensType.length-1){
            current++
            var staranimation = 0;
            var opasOldTop=0;
            var opasOl ='1';
            var opasNe =0;
            var windowheight= window.innerHeight;
            var opasOld= screensType[current-1]
            
            var opasNew= screensType[current]
            opasOld.style.position="fixed";
            opasNew.style.position="fixed";
           
            var timeanimation= setInterval(function(){
                

               if(staranimation<10){
                staranimation++;
                opasOl=opasOl-0.1;
                opasNew.style.zIndex="9999";
                    opasOld.style.zIndex="1";
                opasOld.style.opacity=opasOl;
                opasOldTop=opasOldTop-(windowheight/10)
                opasOld.style.top=opasOldTop+"px";
                opasNew.style.display="flex"
                opasNe=Number(opasNe);
                opasNe=opasNe+0.1;
                opasNe = String(opasNe);
                opasNew.style.opacity=opasNe;
                opasNew.style.top=0+"px";
                opasNew.style.height=windowheight+'px'   
                           
               }
               else if(staranimation==10){
                clearInterval(timeanimation);
               }
               else{
                opasNew.style.display="flex"
                opasNew.style.zIndex="9999";
                opasOld.style.zIndex="1";
                opasOld.style.display="none";
                opasOld.style.top=0+"px";
                opasOl.dstyle.opacity='0';
                clearInterval(timeanimation);
               
               }
            },50)
           }

        }
        return false
    }
    window.onkeydown=function(event){
        var wHeight = window.innerHeight;
        var step=window.innerHeight*11;
        if(event.keyCode==40){
           
            if(current!=screensType.length-1){
                current++
                var staranimation = 0;
                var opasOldTop=0;
                var opasOl ='1';
                var opasNe =0;
                var windowheight= window.innerHeight;
                var opasOld= screensType[current-1]
                
                var opasNew= screensType[current]
                opasOld.style.position="fixed";
                opasNew.style.position="fixed";
               
                var timeanimation= setInterval(function(){
                    
    
                   if(staranimation<10){
                    staranimation++;
                    opasOl=opasOl-0.1;
                    opasNew.style.zIndex="9999";
                        opasOld.style.zIndex="1";
                    opasOld.style.opacity=opasOl;
                    opasOldTop=opasOldTop-(windowheight/10)
                    opasOld.style.top=opasOldTop+"px";
                    opasNew.style.display="flex"
                    opasNe=Number(opasNe);
                    opasNe=opasNe+0.1;
                    opasNe = String(opasNe);
                    opasNew.style.opacity=opasNe;
                    opasNew.style.top=0+"px";
                    opasNew.style.height=windowheight+'px'   
                               
                   }
                   else if(staranimation==10){
                    clearInterval(timeanimation);
                   }
                   else{
                    opasNew.style.display="flex"
                    opasNew.style.zIndex="9999";
                    opasOld.style.zIndex="1";
                    opasOld.style.display="none";
                    opasOld.style.top=0+"px";
                    opasOl.dstyle.opacity='0';
                    clearInterval(timeanimation);
                   
                   }
                },50)
               }
            return false
        }
        if(event.keyCode==38){
           
            if(current!=0){
                current--
                var staranimation = 0;
                var opasOldTop=0;
                var opasOl ='1';
                var opasNe =0;
                var windowheight= window.innerHeight;
                var opasOld= screensType[current+1]
                
                var opasNew= screensType[current]
                opasOld.style.position="fixed";
                opasNew.style.position="fixed";
               
                var timeanimation= setInterval(function(){
                   if(staranimation<10){
                    staranimation++;
                    opasOl=opasOl-0.1;
                    opasNew.style.zIndex='9999';
                    opasOld.style.zIndex='1';
                    opasOld.style.opacity=opasOl;
                    opasOldTop=opasOldTop-(windowheight/10)
                    opasOld.style.top=opasOldTop+"px";
                    opasNew.style.display="flex"
                    opasNe=Number(opasNe);
                    opasNe=opasNe+0.1;
                    opasNe = String(opasNe);
                    opasNew.style.opacity=opasNe;
                    opasNew.style.top=0+"px";
                    opasNew.style.height=windowheight+'px' ;
                    
                   }
                   else if(staranimation==10){
                    clearInterval(timeanimation);
                   }
                   else{
                    opasNew.style.display="flex"
                    opasNew.style.zIndex="9999";
                    opasOld.style.zIndex='1';
                    opasOld.style.display="none";
                    opasOld.style.top=0+"px";
                    opasOl.dstyle.opacity='0';
                    clearInterval(timeanimation);
                    timeanimation=1
                    
                   }
                },50)
               }
            return false
        }
        
    }
    
})