



setInterval(()=>{
    const currentElement = document.querySelector('.current')
    let nextElement = document.querySelector('.current+.pub-image')

    if(nextElement == null ){
        nextElement = document.querySelector('.pub-image')
    }

    nextElement.classList.add('current')
    currentElement.classList.remove('current')
   
},5000)

//=============================================pagination

function hideoffers{
    const offreVisible = document.querySelectorAll('.offre-visible')
    offreVisible.forEach((offre)=>{
        offre.classList.remove('offre-visible')
    })

}

function loadOffers(start, amount){
   const offres = document.querySelectorAll('presentation-offres-entreprise')
   const offer = offersList[start + i]
      offer.classList.add('offer-visible')
}


// ========================================== Handle pagination

function hideOffers() {
    const offersList = document.querySelectorAll('.offer-on-page')
    offersList.forEach(item => {
      item.classList.remove('offer-on-page')
      console.log(item)
    })
  }
  
  function loadOffers(start, amount) {
    console.log('start on load: ', start)
    const offersList = document.querySelectorAll('.internship-card')
    for(let i = 0; i < amount; i++) {
      const offer = offersList[start + i]
      offer.classList.add('offer-on-page')
      console.log('offer: ', i)
    }
  }
  
  // first load the first 12 offers
  window.addEventListener('load', () => {
    console.log('hey')
    loadOffers(start=0, amount=12)
  })
  
  // what happens when a button is clicked
  const buttons = document.querySelectorAll('.page-button')
  buttons.forEach( button => button.addEventListener('click', () => {
    const nextPage = parseInt(button.value)
    
    hideOffers()
    loadOffers(12 * (nextPage - 1), 12)
    document.querySelector('.active-page-btn').classList.remove('active-page-btn')
  }))