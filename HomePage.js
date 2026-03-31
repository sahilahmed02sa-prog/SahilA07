let ProfileImage=document.getElementById('Profile Image')
console.log(ProfileImage)

let storedData=JSON.parse(localStorage.getItem('userDetails'))
console.log(storedData)

let image=storedData.imageUrl
console.log(image)
ProfileImage.src=`${image}`
