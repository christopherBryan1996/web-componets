class IndexContent extends HTMLElement{
    constructor(){
        super();
        this.shadow=this.attachShadow({mode:'open'})

        this.globalConteiner=document.createElement('div')

        this.shadow.appendChild(this.globalConteiner)
    }
    connectedCallback(){
        this.globalConteiner.style.cssText='font-family: cursive;'
        this.globalConteiner.innerHTML+=`
        <h1 style="padding: 65px 0px 10px 20px;">Web componets</h1>
        <div style="padding: 0px 0px 10px 20px;">
            <p>This proyect is created with pure Web components</p>
            <p>The header part is done like this</p>
        </div>
        <div style="margin: 0 50px 40px 50px;">
            <pre style="background: aliceblue;
                border-radius: 23px;
                box-shadow: 0px 0px 31px 0px black;">
                <code>
                    //created class
                    class HeaderRaM extends HTMLElement{
                        //start of variables
                        constructor(){
                            super();
                            //we open Shadow to be able to integrate the other elements
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
                        //functions to be able to make a style like hover in css
                        _hoverA(e){
                            e.target.style.color='red'
                        }
                        _hoverb(e){
                            e.target.style.color='black'
                        }
                        //render elements
                        connectedCallback(){
                            const stylesButton='
                                padding: 0px 23px 0px 0px;
                                text-decoration: none;
                                color: black;
                                font-family: cursive;
                            '
                            this.ruteIndex.href='../../index.html'
                            
                            this.ruteCharacter.href='../../templates/character.html'
                            this.ruteCharacter.innerText='Character'
                            this.ruteCharacter.style.cssText=stylesButton
                            this.ruteCharacter.onmouseleave=this._hoverb
                            this.ruteCharacter.onmouseenter=this._hoverA
                    
                            this.ruteEpisode.href='../../templates/episode.html'
                            this.ruteEpisode.innerText='Episode'
                            this.ruteEpisode.style.cssText=stylesButton
                            this.ruteEpisode.onmouseleave=this._hoverb
                            this.ruteEpisode.onmouseenter=this._hoverA
                    
                            this.globalContainer.style.cssText='
                                background: rgb(0,0,0,.5);
                                height: 85px;
                                display: flex;
                                justify-content: space-between;
                            '
                    
                            this.image.style.cssText='
                                width: 190px;
                                border-radius: 100%;
                                margin: 10px 0px 10px 24px;'
                            this.image.src='../../img/descarga.jfif'
                    
                            
                            this.divButton.style.cssText='
                                width: 300px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            '
                        }
                    }
                    //we give our component a name and tell it what class it is
                    customElements.define('header-ram', HeaderRaM)
                </code>
            </pre>
        </div>
        `
    }
}
customElements.define('index-content',IndexContent)