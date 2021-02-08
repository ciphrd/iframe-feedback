import 'scss/_index.scss';


try {
  if (window.innerWidth <= 1 && window.innerHeight <= 1) {
    throw new Error() // exit
  }


  // ! This is where feedback effects can be done
  // ! Some effects may require a specific design (for instance, using a canvas to draw requires a trick to have the canvas
  // ! be drawn transparent over the iframe so that they blend)

  // derive the 'frame' index by analyzing the location of the document
  const path = location.pathname
  const idx = (path.match(/\//g) || []).length - 1
  console.log(idx)

  // infinite loop break condition
  if (idx > 100) {
    throw new Error() // exit
  }

  // set a random color to the body background
  document.body.style.backgroundColor = `rgba(${(Math.random()*255)|0}, ${(Math.random()*255)|0}, ${(Math.random()*255)|0}, 1)`
  
  // ! This is where the feedback settings are, ie. where the iframe insertion will be done
  // calls itself after a random delay
  setTimeout(() => {
    const iframe = document.createElement('iframe')
    // this is where data can be sent to the next 'frame' (ahah)
    iframe.src = location.href + '/' + 'you'
    document.body.append(iframe)
  }, 50)
}
catch (e) {}   // exit