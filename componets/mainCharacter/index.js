class MainCharacter extends HTMLElement{
    constructor(){
        super();
        this.shadow= this.attachShadow({mode:'open'})
        
        this.globalConteiner=document.createElement('div')
        
        this.shadow.appendChild(this.globalConteiner)
    }
    connectedCallback(){
        this.globalConteiner.style.cssText=`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding-top: 80px;
            padding-bottom: 80px;
            font-family: cursive;
        `
        fetch('https://rickandmortyapi.com/api/character')
        .then(res=>res.json())
        .then(json=>{
            json.results.map((e)=>{
                this.globalConteiner.innerHTML+=`
                    <div style='
                        border: 1px solid;
                        width: 205px;
                        height: 348px;
                        border-radius: 14px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin: 10px 10px 10px 10px;
                        background: black;
                        color: white;
                        box-shadow: 0px 0px 10px 0 #ff7203;
                    '>
                        <img src='${e.image}' alt='Character' width=180/>
                        <p>Name: ${e.name}</p>
                        <p>Species: ${e.species}</p>
                        <button onClick="seeCharacter(${e.id})" style='
                            background-color: #f1f1f1;
                            color: black;
                            font-size: 16px;
                            padding: 3px 10px;
                            border: none;
                            cursor: pointer;
                            border-radius: 5px;
                            text-align: center;
                        '>Watch</button>
                    </div>
                `
            })
        })
    }
}
const seeCharacter = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res=>res.json())
    .then(json=>{
        document.querySelector('body').innerHTML+=`
            <style>
                .modal{
                    position: fixed;
                    top: 0;
                    left: 0;
                    background: rgb(0,0,0,.2);
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column
                }
                .content-modal{
                    background: white;
                    width: 414px;
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: cursive;
                    border-radius: 10px;
                }
            </style>
            <div class='modal'>
                <div style='margin: 0 0px 2px 377px;'>
                    <img src='../../img/cancelar.png' alt='close' class='close' style='cursor: pointer; width: 25px;'/>
                </div>
                <div class='content-modal'>
                    <img src='${json.image}' alt='Character' style='width: 239px; border-radius: 13px;'/>
                    <p>Name: ${json.name}</p>
                    <p>Status: ${json.status}</p>
                    <p>Gender: ${json.gender}</p>
                    <p>Origin: ${json.origin.name}</p>
                    <p>Species: ${json.species}</p>
                    <p>Location: ${json.location.name}</p>
                </div>
            </div>
        `
        document.querySelector('.close').addEventListener('click',()=>document.querySelector('.modal').remove())
    })
};
customElements.define('main-character',MainCharacter)