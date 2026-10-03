
const menu=document.querySelector(".menu");
const links=document.querySelector(".nav-links");
if(menu) menu.addEventListener("click",()=>links.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links?.classList.remove("open")));

const lightbox=document.querySelector(".lightbox");
const lightboxImg=lightbox?.querySelector("img");
document.querySelectorAll("[data-lightbox]").forEach(item=>{
 item.addEventListener("click",e=>{
   e.preventDefault();
   if(lightbox && lightboxImg){lightboxImg.src=item.dataset.src || item.querySelector("img").src;lightbox.classList.add("show")}
 });
});
document.querySelector(".close")?.addEventListener("click",()=>lightbox.classList.remove("show"));
lightbox?.addEventListener("click",e=>{if(e.target===lightbox) lightbox.classList.remove("show")});
document.addEventListener("keydown",e=>{if(e.key==="Escape") lightbox?.classList.remove("show")});

const form=document.querySelector("#bookingForm");
form?.addEventListener("submit",e=>{
 e.preventDefault();
 alert("Thank you. Your booking enquiry has been received. Please connect this form to your email/PHP backend when you are ready.");
 form.reset();
});
