
class FooterRaM extends HTMLElement{
    constructor(){
        super();
        this.shadow= this.attachShadow({mode:'open'})
        this.globalConteiner=document.createElement('div')
        this.redes=[['https://github.com/christopherBryan1996','../../img/unnamed.png'],['https://www.linkedin.com/in/christopher-bryan-suarez-mancilla','../../img/LinkedIn-Logotipo.jpg'],]


        this.shadow.appendChild(this.globalConteiner)
    }
    connectedCallback(){
        this.globalConteiner.style.cssText=`
            background: rgb(0,0,0);
            color: rgb(255,255,255);
            font-family: cursive;
            display: flex;
            flex-direction: column;
            align-items: center;
        `
        this.redes.map((e)=>this.globalConteiner.innerHTML+=`
            <div style='display: flex;
                align-items: center;'>
                <img src='${e[1]}' alt='logo' height=33/>
                <a href='${e[0]}' style='text-decoration: none; color: white;'>click here</a>
            </div>
        `)
        this.globalConteiner.innerHTML+=`
            <p>Created by Christopher Bryan Suarez Mancilla 2022</p>
        `
    }
}

customElements.define('footer-ram',FooterRaM)