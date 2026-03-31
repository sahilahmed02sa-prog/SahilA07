let myform=document.querySelector('form')
console.log(myform)

myform.onsubmit=(e)=>{
    e.preventDefault()

    let inputBox=document.querySelectorAll('input')
    console.log(inputBox)

    let userData={};
    inputBox.forEach((input)=>{
        console.log(input.value)
        userData[input.name]=input.value;
    })
    console.log(userData)
    let jsonObj=JSON.stringify(userData)
    console.log(jsonObj)
    localStorage.setItem("userDetails",jsonObj)
    alert("user register successfully")
    window.location.href="./Login.html"
}   
