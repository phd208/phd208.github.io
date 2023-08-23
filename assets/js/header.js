class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML =  `
<section id="header">
    <header>
        <span class="image avatar"><img src="../images/profile-pic.png" alt="" /></span>
        <h1 id="logo"><a href="../index.html">Pedro Dornas</a></h1>
        <p></p>
    </header>
    <nav id="nav">
        <ul>
            <li><a href="#one">Who am I</a></li>
            <li><a href="#two">Skills</a></li>
            <li><a href="#three">Featured Projects</a></li>
             <li><a href="#four">Additional works</a></li>
            <li><a href="#five">Contact</a></li>
    
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


class HeaderProject extends HTMLElement {
    connectedCallback() {
      this.innerHTML =  `
<section id="header">
    <header>
        <span class="image avatar"><img src="../images/profile-pic.png" alt="" /></span>
        <h1 id="logo"><a href="#">Pedro Dornas</a></h1>
        <p></p>
    </header>
    <nav id="nav">
        <ul>
            <li><a href="../index.html#three" class="scrolly active"><i class="fas fa-arrow-left"></i>&nbsp&nbsp&nbsp Return to Projects</a></li>
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


class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML =  `
      <section id="footer">
      <div class="container">
          <ul class="copyright">
              <li>Copyright &copy; 2023 Pedro H Dornas. All rights reserved.</li>
          </ul>
      </div>
      </section>
`
    }
}


// class Scriptor extends HTMLElement {
//     connectedCallback() {
//       this.innerHTML =  `
//       <script src="../assets/js/jquery.min.js"></script>
//       <script src="../assets/js/jquery.scrollex.min.js"></script>
//       <script src="../assets/js/jquery.scrolly.min.js"></script>
//       <script src="../assets/js/browser.min.js"></script>
//       <script src="../assets/js/breakpoints.min.js"></script>
//       <script src="../assets/js/util.js"></script>
//       <script src="../assets/js/main.js"></script>
//       <script src="../assets/js/prism.js"></script>
//       <script src="../assets/js/mermaid.min.js"></script>
//       <script type="module">
//           mermaid.initialize({ 
//               startOnLoad: true,
//               htmlLabels: true,
//               theme: 'base',
//               themeVariables: {
                  
//               }
//           });
//           await mermaid.run({
//           querySelector: '.someOtherClass',
//           });
//       </script>
// `
//     }
// }





customElements.define('custom-header', Header);
customElements.define('custom-project', HeaderProject);
customElements.define('custom-footer', Footer);
// customElements.define('custom-scriptor', Scriptor);
