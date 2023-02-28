/*==================== MOSTRAR MENU ====================*/
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)
	
	if (toggle && nav){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show-menu')
		})
	}
}

showMenu('nav-toggle', 'nav-menu')


/*==================== QUITAR MENU MOVIL ====================*/

const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
	const navMenu = document.getElementById("nav-menu")
	//funcion para esconder el menu al hacer click en un icono
	navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click", linkAction))

/*==================== LINKS ACTIVOS ====================*/

const sections = document.querySelectorAll("section[id]")

function scrollActive(){
	const scrollY = window.pageYoffset
	
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute("id")
		
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
		}else{
			document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
		}
	})
}

window.addEventListener("scroll", scrollActive)

/*==================== MOSTRAR ICONO SCROLL TOP ====================*/ 

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)
