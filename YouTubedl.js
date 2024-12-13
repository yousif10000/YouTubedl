const input  = document.getElementById('input');
const lable  = document.querySelectorAll(".option");
const search = document.getElementById('search');
const btn    = document.getElementById('btn');
const btndiv = document.getElementById('btndiv');
const box    = document.getElementById('box');
const contant = document.getElementById('contant');

   document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener('change', () => {
    // قم بإلغاء تفعيل الأنماط من جميع العناصر
    document.querySelectorAll('label').forEach((label) => {
      label.style.border = ''; // إعادة الخلفية الافتراضية
    });

    // أضف النمط للعنصر المحدد فقط
    const label = radio.closest('label');
    label.style.border = '5px solid #55883B'; // تغيير اللون عند التحديد
  });
});

search.addEventListener('click',() =>{
   // contant.style.height ='1200px';
    gsap.to('.search',{
      scale:1.3,
      rotation:4,
    })
    /*gsap.to('.contant',{
      height:1200,
      duration:2,
    })
    gsap.to('.box',{
      delay:1,
      display:"flex",
      opacity:1,
    })
    gsap.to('.btn',{
      display:"flex",
      delay:1,
      opacity:1,
    })*/
    tl = gsap.timeline()
       tl.to('.contant',{
        height:1200,
        duration:1,
       })
       tl.to('.box',{
        display: "flex",
        opacity:1,
       },"-=0.8")
       tl.to('.btn',{
        display:"flex",
        opacity:1,
       },"-=0.8")
       
    
});
btn.addEventListener('click',() => {
    gsap.to('.btn',{
      scale:1.05,
    })
    
})
gsap.from('.youtube',{
  x:-50,
  opacity:0,
})
const url = input.value;