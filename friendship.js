const msg1 =document.querySelector(".msg1");
const msg2 =document.querySelector(".msg2");
const msg3 =document.querySelector(".msg3");
const msg4 =document.querySelector(".msg4");
const msg5 =document.querySelector(".msg5");
const msg6 =document.querySelector(".msg6");
const msg7 =document.querySelector(".msg7");
const msg8 =document.querySelector(".msg8");
const msg9 =document.querySelector(".msg9");
const msg10 =document.querySelector(".msg10");
const msg11 =document.querySelector(".msg11");
const msg12 =document.querySelector(".msg12");

function change(obj,text,col,time,onSuccess,onFail){

setInterval(()=>{
    if(obj){
        obj.textContent=text;
        obj.style.display="block";
        obj.style.color=col;
        if(onSuccess){
            onSuccess();
        }
    }else{
        if(onFail){
            onFail();
        }
    }
},time)
}

  change(msg1, "HAPPY FRIENDSHIP DAY TO ALL MY FRIENDS","blue",400,()=>{
   change(msg2, "Saurabh","red",400,()=>{
    change(msg3, "Kunal","green",400,() =>{
     change(msg4, "Rikki","pink",400,()=>{
      change(msg5, "Satyam","lightblue",400,()=>{
        change(msg6, "Rahul","violet",400,()=>{
            change(msg7, "Satwik Anand","yello",400,()=>{
                change(msg8, "Vijay","green",400,()=>{
                    change(msg9, "Priti","skyblue",400,()=>{
                        change(msg10, "Nidhi","liteblue",400,()=>{
                            change(msg11, "Tannu","orange",400,()=>{
                                change(msg12, "INSTA & FB FRIENDS","blue",400,()=>{

                                    console.log(`${msg12} not found`);
                                })
                        },()=>{
                            console.log(`${msg11} does't exist`);
                        })
                        console.log(`${msg10} does't exist`);
                        })
                        console.log(`${msg9} does't exist`);
                    })
                    console.log(`${msg8} does't exist`);
                })
                console.log(`${msg7} does't exist`);

            })
            console.log(`${msg6} does't exist`);

        })
        console.log(`${msg5} does't exist`);

    })
    console.log(`${msg4} does't exist`);

  })
  console.log(`${msg3} does't exist`);

  })
  console.log(`${msg2} does't exist`);

})
console.log(`${msg1} does't exist`);
})