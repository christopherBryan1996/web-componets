class MainEpisode extends HTMLElement{
    constructor(){
        super();
        this.shadow= this.attachShadow({mode:'open'})

        this.globalConteint= document.createElement('div')
        this.divlist=document.createElement('div')
        //this.divlist.className('div-list')

        this.shadow.appendChild(this.globalConteint)
        this.globalConteint.appendChild(this.divlist)
    }
    connectedCallback(){
        this.globalConteint.style.marginTop='85px'
        fetch('https://rickandmortyapi.com/api/episode',{
            method:'GET'
        }).then(res=>res.json())
        .then(json=>json.results.map(e=>{
            this.divlist.innerHTML+=`
                
            `
            this.divlist.innerHTML+=`
            
            <div style='
                font-family: cursive;
                display: flex;
                flex-direction: column;
                align-items: center;
            '>
                <p>Name: ${e.name}</p>
                <p>Date create: ${e.air_date}</p>
                <p>Episode: ${e.episode}</p>
            </div>
            `
            
        }))
        
    }
}


customElements.define('main-episode',MainEpisode)