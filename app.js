const pages=document.querySelectorAll(".page");
const navItems=document.querySelectorAll("[data-page]");
const mobileNavItems=document.querySelectorAll(".mobile-nav-item");
const sidebar=document.getElementById("sidebar");
const mobileMenuButton=document.getElementById("mobileMenuButton");
const globalSearch=document.getElementById("globalSearch");

function showPage(name){
  pages.forEach(p=>p.classList.toggle("active-page",p.id===`page-${name}`));
  navItems.forEach(i=>i.classList.toggle("active",i.dataset.page===name));
  mobileNavItems.forEach(i=>i.classList.toggle("active",i.dataset.page===name));
  sidebar?.classList.remove("mobile-open");
  window.scrollTo({top:0,behavior:"smooth"});
}

navItems.forEach(item=>item.addEventListener("click",()=>item.dataset.page&&showPage(item.dataset.page)));
mobileNavItems.forEach(item=>item.addEventListener("click",()=>item.dataset.page&&showPage(item.dataset.page)));

document.querySelectorAll(".filter-button").forEach(button=>{
  button.addEventListener("click",()=>{
    document.querySelectorAll(".filter-button").forEach(b=>b.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelectorAll(".text-button,.full-width-button").forEach(button=>{
  button.addEventListener("click",()=>button.dataset.page&&showPage(button.dataset.page));
});

document.getElementById("exploreButton")?.addEventListener("click",()=>showPage("discover"));
document.getElementById("profileButton")?.addEventListener("click",()=>showPage("profile"));
document.getElementById("notificationButton")?.addEventListener("click",()=>showPage("notifications"));
mobileMenuButton?.addEventListener("click",()=>sidebar?.classList.toggle("mobile-open"));
document.getElementById("signOutButton")?.addEventListener("click",()=>alert("Sign out will be connected to Firebase Authentication later."));

globalSearch?.addEventListener("input",event=>{
  const query=event.target.value.trim().toLowerCase();
  const cards=document.querySelectorAll(".community-card,.large-community-card,.post-card,.event-card,.trend-item");
  cards.forEach(card=>card.style.display=!query||card.textContent.toLowerCase().includes(query)?"":"none");
});
