
gsap.to('#box',{
 
  x: 500,
  duration: 2,
   rotate:360,
  delay: 1,


})

gsap.from("#box2",{
  x:500,
  rotate:360,
  duration:2,
  delay:1,
  backgroundColor : 'yellow',
  borderRadius: '50%',
  repeat: -1,  //for unlimited
  yoyo: true, // start to end to start  to end
  

})