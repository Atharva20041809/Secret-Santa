let next_turn=document.querySelector(".next")
let hide=document.querySelector(".hide")
let text=document.querySelector(".text")
let present=0;
let n=prompt("enter the number of members")
let members=[];
let gift_receivers=[];
let i=0;
while(i<n){
    a=prompt("Enter the names");
    members.push(a.toUpperCase());
    i+=1
}
let array=JSON.parse(JSON.stringify(members));
function over(){
    document.querySelector(".container").style.display="none";
    document.querySelector(".show").style.display="block";
}
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
text.innerText=`${array[present]}'s Turn`
next_turn.addEventListener("click",()=>{
    console.log(present)
    if(present>=n){
        text.innerText="Done";
        over();
    }else{
    let eligible=shuffleArray(members).filter((ele)=>{
        if(ele!=array[present] && ! gift_receivers.includes(ele)){
            return true
        }else{
            return false
        }
    })
    console.log("clicked")
    text.innerText=`${array[present]} will gift to ${eligible[0]}`
    gift_receivers.push(eligible[0])
    present+=1
    }

})
hide.addEventListener("click",()=>{
    if(present>=n){
        text.innerText="Done";
        over();
    }else{
        let previous=text.innerText;
        text.innerText=`${array[present]}'s Turn`
    }
})
