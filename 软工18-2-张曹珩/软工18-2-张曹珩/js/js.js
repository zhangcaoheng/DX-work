var oList = document.getElementById("list");

var oMenus=oList.getElementsByClassName('listmenuson');
var oMkong=oList.getElementsByClassName('menukong');
// var onoff=0;
var timer=null;
    for(var i=0;i<oMenus.length;i++){
        oMenus[i].onoff=0;
        oMenus[i].index=i;
        oMenus[i].onclick=function (){
            var kongnum = this.index;
            var oMenuss=oMkong[kongnum].getElementsByClassName('menuson_son');
            var oMenusss=oMenuss[0].getElementsByClassName('menuson_son_son');
            
            if(this.onoff==0){
                


                oMkong[kongnum].style.display='block';
                clearTimeout( timer );
                timer =  setTimeout(function(){
                    for(var i=0;i<oMenusss.length;i++){
                        oMkong[kongnum].style.height=(oMenusss.length*50)+'px';
                        oMenusss[i].style.top=i*50 + 'px';
                        oMenusss[i].style.opacity='1';
                    }
                },0)
                this.onoff=1;
            }else{
                for(var i=0;i<oMenusss.length;i++){
                    oMkong[kongnum].style.height=0;
                    oMenusss[i].style.top=0 + 'px';
                    oMenusss[i].style.opacity='0';
                }
                clearTimeout( timer );
                timer =  setTimeout(function(){
                    oMkong[kongnum].style.display='none';
                },200)
                this.onoff=0;
                
                
            }        

        }
        
    }



// 侧边栏按钮点击
var oMenu = document.getElementById("menu");
var oSanh = document.getElementById("sanh");
var MOnoff=0;
oSanh.onclick=function(){
    var fullWindowWidth = window.innerWidth;
    
    if(fullWindowWidth<1200){
        if(MOnoff==0){
            oMenu.style.display='block';
            clearTimeout( timer );
            timer= setTimeout(function(){
                
                    oMenu.style.height=400 + 'px'; 
                
            },0)
            MOnoff=1;
        }else{
            oMenu.style.height=0;
            clearTimeout( timer );
            timer= setTimeout(function(){
                oMenu.style.display='none';
            },200)
            
            MOnoff=0;
        }
    }
    
    
}
var timer1=null;
timer1 = setInterval(judge,1);

    function  judge(){
        var fullWindowWidth = window.innerWidth;
        if(fullWindowWidth>=1200){
            oMenu.style.display='';
            oMenu.style.height='';
        }
    };


var oSearchButton =document.getElementsByClassName('search-button');
var oSearchText =document.getElementsByClassName('search-text');
var Snum=0;
oSearchButton[0].onclick=function(){
    if(Snum==0){
        oSearchText[0].style.width=50 + '%';
        oSearchText[0].style.borderWidth=1 + 'px';
        oSearchButton[0].style.borderWidth=1 + 'px';
        // oSearchButton[0].style.borderTopLeftRadius=5 + 'px';
        // oSearchButton[0].style.borderBottomLeftRadius=5 + 'px';
        Snum=1;
    }else{
        oSearchText[0].style.width=0;
        oSearchText[0].style.borderWidth=0;
        oSearchButton[0].style.borderWidth=0;
        // oSearchButton[0].style.borderTopLeftRadius=0 + 'px';
        // oSearchButton[0].style.borderBottomLeftRadius=0 + 'px';
        Snum=0;
    }
    
}