home=document.getElementById("home")
profile=document.getElementById("profile")
intro=document.getElementById("intro")
about=document.getElementById("about")
ab=document.getElementById("ab")
ski=document.getElementById("ski")
skill=document.getElementById("skill")
education=document.getElementById("educations")
edu=document.getElementById("edu")
certificate=document.getElementById("certificate")
cer=document.getElementById("cer")
// mobile function document //
too=document.getElementById("too")
tog=document.getElementById("tog")
xmark=document.getElementById("xmark")


// home //

home.addEventListener("click",()=>{
    profile.style.display="flex"
    profile.style.zIndex="6"
    intro.style.display="none"
    ab.style.display="none"
    ski.style.display="none"
    home.style.color="red"
    about.style.color="white"
    skill.style.color="white"
    edu.style.display="none"
    education.style.color="white"
    certificate.style.color="white"
    cer.style.display="none"
    tog.style.left="-200%"


  


})


    

// about //
about.addEventListener("click",()=>{
    profile.style.display="none"
    profile.style.zIndex="6"
    intro.style.display="none"
    ab.style.display="block"
    ski.style.display="none"
    home.style.color="white"
    about.style.color="red"
    skill.style.color="white"
    education.style.color="white"
    edu.style.display="none"
    cer.style.display="none"
    certificate.style.color="white"







  



})
// skill//

skill.addEventListener("click",()=>{
    profile.style.display="none"
    profile.style.zIndex="6"
    intro.style.display="none"
    ab.style.display="none"
    ski.style.display="block"
    home.style.color="white"
    about.style.color="white"
    skill.style.color="red"
    edu.style.display="none"
    education.style.color="white"
    certificate.style.color="white"
    cer.style.display="none"





   


})
// education //
education.addEventListener("click",()=>{
    profile.style.display="none"
    intro.style.display="none"
    ab.style.display="none"
    ski.style.display="none"
    edu.style.display="grid"
    home.style.color="white"
    about.style.color="white"
    skill.style.color="white"
    education.style.color="red"
    certificate.style.color="white"
    cer.style.display="none"



    

   


})
// certificate//
certificate.addEventListener("click",()=>{
    profile.style.display="none"
    intro.style.display="none"
    ab.style.display="none"
    ski.style.display="none"
    edu.style.display="none"
    home.style.color="white"
    about.style.color="white"
    skill.style.color="white"
    education.style.color="white"
    certificate.style.color="red"
    cer.style.display="flex"


})




// mobile functions all //
// toggle mobile functions// 
too.addEventListener("click",()=>{
    tog.style.left=0
    tog.style.zIndex=7
})
// close button//
xmark.addEventListener("click",()=>{
    tog.style.left="-200%"


})
// profile -mobile//
home1=document.getElementById("home1")
home1.addEventListener("click",()=>{
    profile.style.display="flex"
    profile.style.zIndex="6"
    intro.style.display="none"
    ab.style.display="none"
    ski.style.display="none"
    home.style.color="red"
    about.style.color="white"
    skill.style.color="white"
    edu.style.display="none"
    certificate.style.color="white"
    tog.style.left="-200%"
    cer.style.display="none"




  


})

//  mobile-about //
about1=document.getElementById("about1")
about1.addEventListener("click",()=>{
    profile.style.display="none"
    profile.style.zIndex="6"
    intro.style.display="none"
    ab.style.display="block"
    ski.style.display="none"
    home.style.color="white"
    about.style.color="red"
    skill.style.color="white"
    education.style.color="white"
    edu.style.display="none"
    certificate.style.color="white"
    tog.style.left="-200%"
    cer.style.display="none"

})

// skill -mobile//
skill1=document.getElementById("skill1")
skill1.addEventListener("click",()=>{
    profile.style.display="none"
    profile.style.zIndex="6"
    intro.style.display="none"
    ab.style.display="none"
    ski.style.display="block"
    home.style.color="white"
    about.style.color="white"
    skill.style.color="red"
    edu.style.display="none"
    education.style.color="white"
    certificate.style.color="white"
    tog.style.left="-200%"
    cer.style.display="none"

})


// education -mobile//
education1=document.getElementById("educations1")
education1.addEventListener("click",()=>{
    profile.style.display="none"
    intro.style.display="none"
    ab.style.display="none"
    ski.style.display="none"
    edu.style.display="grid"
    home.style.color="white"
    about.style.color="white"
    skill.style.color="white"
    education.style.color="red"
    certificate.style.color="white"
    tog.style.left="-200%"
    cer.style.display="none"

})

// certificate//
certificate1=document.getElementById("certificate1")
certificate1.addEventListener("click",()=>{
    profile.style.display="none"
    intro.style.display="none"
    ab.style.display="none"
    ski.style.display="none"
    edu.style.display="none"
    home.style.color="white"
    about.style.color="white"
    skill.style.color="white"
    education.style.color="white"
    certificate.style.color="red"
    cer.style.display="block"
    tog.style.left="-200%"



})




