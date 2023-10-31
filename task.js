var countdown=document.getElementById("countdown");


var numbers = (count) => {
    if(count>0){
        
        countdown.innerText=count;
        
        console.log(count)
        count--;
        
            
    
        if(count==0)
               {
                countdown.innerText="";
                var text=document.getElementById("text")
            text.innerText="Happy Independence Day";
           }
        
          
setTimeout(()=> 
{
    // console.log(count);
    numbers(count);
    
    },1000);
    }
}
numbers(10);