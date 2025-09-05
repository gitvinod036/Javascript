function ONIncrement(){
    let count_ele=document.getElementById("count")
      let number=parseInt(count_ele.textContent)
      count_ele.textContent=number+1

      let val=parseInt(count_ele.textContent)
      if (val>0){
        count_ele.style.color="green"
      }else if (val<0){
        count_ele.style.color="red"
      }
      else{
        count_ele.style.color="black"   
      }
}

function ONDecrement(){
  let count_ele=document.getElementById("count")
  let number=parseInt(count_ele.textContent)
  count_ele.textContent=number-1    

  let val=parseInt(count_ele.textContent)
       if (val>0){
        count_ele.style.color="green"
      }else if (val<0){
        count_ele.style.color="red"
       } else{
        count_ele.style.color="black"   
      }
}
