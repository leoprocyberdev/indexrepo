function setVisible(id) {
  ["home", "services", "about", "contact"].forEach(section => {
    const el = document.getElementById(section);
    const navLink = document.querySelector(`nav a[onclick="show${section.charAt(0).toUpperCase() + section.slice(1)}()"]`);
    
    if (section === id) {
      el.style.display = "block";
      el.style.visibility = "visible";
      el.style.height = "auto";
      navLink.classList.add("active");
    } else {
      el.style.display = "none";
      el.style.visibility = "hidden";
      el.style.height = "0";
      navLink.classList.remove("active");
    }
  });
}

function showHome() { setVisible("home"); }
function showServices() { setVisible("services"); }
function showAbout() { setVisible("about"); }
function showContact() { setVisible("contact"); }
// Default view
showHome();
