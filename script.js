setInterval(()=>{
    const currentElement = document.querySelector('.current')
    let nextElement = document.querySelector('.current+.pub-image')

    if(nextElement == null ){
        nextElement = document.querySelector('.pub-image')
    }

    nextElement.classList.add('current')
    currentElement.classList.remove('current')
   
},5000)
