class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML =  `
<section id="header">
    <header>
        <span class="image avatar"><img src="images/profile-pic.png" alt="" /></span>
        <h1 id="logo"><a href="#">Pedro Dornas</a></h1>
        <p>I got reprogrammed by a rogue AI<br />
        and now I'm totally cray</p>
    </header>
    <nav id="nav">
        <ul>
            <li><a href="index.html#one">Who am I</a></li>
            <li><a href="index.html#two">Skills</a></li>
            <li><a href="index.html#three">Featured Projects</a></li>
            <li><a href="index.html#four">Hands-on labs</a></li>
            <li><a href="index.html#five">Contact</a></li>
        </ul>
    </nav>
    <footer>
        <ul class="icons">
            <li><a href="https://www.linkedin.com/in/pedrodornas" class="icon brands fa-linkedin"><span class="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/pedrodornas" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a href="https://instagram.com/pedrodornas" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="https://github.com/phd208" class="icon brands fa-github"><span class="label">Github</span></a></li>
            <li><a href="mailto:pedrodornas@live.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
        </ul>
    </footer>
</section>
`
    }
}


customElements.define('custom-header', Header);
