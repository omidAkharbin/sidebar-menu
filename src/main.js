const sidebar = document.getElementById("sidebar"),
  sidebarCloseIcon = document.getElementById("sidebar-close-icon"),
  sidebarOpenIcon = document.getElementById("sidebar-open-icon"),
  overlay = document.getElementById("maskOverlay");

function openSidebar() {
  sidebar.classList.add("absolute", "z-50", "flex", "flex-row-reverse");
  sidebar.classList.remove("hidden");

  sidebarCloseIcon.classList.remove("hidden");
  sidebarCloseIcon.classList.add("flex");

  document.body.classList.add("overflow-hidden");

  overlay.classList.remove("hidden");
}

function closeSidebar() {
  sidebar.classList.remove("absolute", "z-50", "flex", "flex-row-reverse");
  sidebar.classList.add("hidden");

  sidebarCloseIcon.classList.add("hidden");
  sidebarCloseIcon.classList.remove("flex");

  document.body.classList.remove("overflow-hidden");

  overlay.classList.add("hidden");
}


sidebarOpenIcon.addEventListener("click", () => openSidebar());
sidebarCloseIcon.addEventListener("click", () => closeSidebar());
overlay.addEventListener("click", () => closeSidebar());
window.addEventListener("resize", () => closeSidebar());
// dark:
let mydarkswitch = document.getElementById("darkswitch");
mydarkswitch.addEventListener("click", () => {
  if (document.documentElement.classlist.contains("dark")) {
    localstorage.theme = "light";
    document.documentElement.classlist.remove("dark");
  } else {
    localstorage.theme = "dark";
    document.documentElement.classlist.add("dark");
  }
  location.reload();
});

// 2

// const body = document.querySelector('body'),
//       sidebar = body.querySelector('nav'),
//       toggle = body.querySelector(".toggle"),
//       searchBtn = body.querySelector(".search-box"),
//       modeSwitch = body.querySelector(".toggle-switch"),
//       modeText = body.querySelector(".mode-text");

// toggle.addEventListener("click" , () =>{
//     sidebar.classList.toggle("close");
// })

// searchBtn.addEventListener("click" , () =>{
//     sidebar.classList.remove("close");
// })

// modeSwitch.addEventListener("click" , () =>{
//     body.classList.toggle("dark");

//     if(body.classList.contains("dark")){
//         modeText.innerText = "Light mode";
//     }else{
//         modeText.innerText = "Dark mode";

//     }
// });
