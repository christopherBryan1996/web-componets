class HeaderRaM extends HTMLElement{
    constructor(){
        super();
        this.shadow=this.attachShadow({mode:'open'})

        this.globalContainer=document.createElement('div')
        this.ruteIndex=document.createElement('a')
        this.ruteCharacter=document.createElement('a')
        this.ruteEpisode=document.createElement('a')
        this.image=document.createElement('img')
        this.divButton=document.createElement('div')
        
        this.divButton.appendChild(this.ruteCharacter)
        this.divButton.appendChild(this.ruteEpisode)
        this.ruteIndex.appendChild(this.image)
        this.globalContainer.appendChild(this.ruteIndex)
        this.globalContainer.appendChild(this.divButton)
        this.shadow.appendChild(this.globalContainer)
    }
    connectedCallback(){
        const stylesButton=`
            padding: 0px 23px 0px 0px;
            text-decoration: none;
            color: black;
            font-family: cursive;
        `
        this.ruteIndex.href='../../index.html'
        
        this.ruteCharacter.href='../../templates/character.html'
        this.ruteCharacter.innerText='Character'
        this.ruteCharacter.style.cssText=stylesButton

        this.ruteEpisode.href='../../templates/episode.html'
        this.ruteEpisode.innerText='Episode'
        this.ruteEpisode.style.cssText=stylesButton

        this.globalContainer.style.cssText=`
            background: rgb(0,0,0,.5);
            height: 85px;
            display: flex;
            justify-content: space-between;
        `

        this.image.style.cssText=`
            width: 190px;
            border-radius: 100%;
            margin: 10px 0px 10px 24px;`
        this.image.src='../../img/descarga.jfif'

        
        this.divButton.style.cssText=`
            width: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
        `
    }
}

customElements.define('header-ram', HeaderRaM)