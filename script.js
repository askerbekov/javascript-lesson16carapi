const pageVote =  document.querySelector('#pageVote')
const contentBar = document.querySelector('.content-bar')
const pageBreeds = document.querySelector('#pageBreeds')




const changeContent = () => {
    console.log(1)
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            contentBar.innerHTML = `
             <div class="next">
                    <button id="nextSlide">NEXT</button>
                </div>
                <div id="slidercats">

                </div>
                <button>FAV IT</button>
            `
            const sliderCats = document.querySelector('#slidercats')
            sliderCats.innerHTML = `
                            <img src="${data[0].url}" alt="zdes kartina otvechayu">

            `
            const nextSlide = document.querySelector('#nextSlide')
            nextSlide.addEventListener('click', () => {
                changeContent()
            })
            // console.log(ne)
        })
    const nextBtn =  () =>{
        console.log(1)
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        nextSlide.addEventListener('click', () => {
            nextBtn()
        })
    }
    nextBtn()
}

pageVote.addEventListener("click",  () => {
    changeContent()
})

changeContentToBreeds = () => {
    console.log(2)
    contentBar.innerHTML = `<select name="" id="breed">
                
            </select>`
    fetch('https://api.thecatapi.com/v1/breeds')
        .then(res => res.json())
        .then(docData =>  {
            const a = document.querySelector('#breed')
            a.innerHTML += `docData.map(el => (
                <option>${el.name}</option>
            ))`
        })

}


pageBreeds.addEventListener('click', () =>{
    changeContentToBreeds()
})
