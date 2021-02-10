import 'scss/_index.scss'


// the delay before inserting next frame, in ms
const DELAY = 200

// maximum number of <iframe> insertions
const MAX_ITERATIONS = 100


try {
  // derive index from the pathname
  const idx = parseInt(location.pathname.split('/')[1] || 0)

  // stopping conditions, come up with your own if necessary
  if ((window.innerWidth <= 1 && window.innerHeight <= 1) || idx >= MAX_ITERATIONS) {
    throw new Error() // exit
  }

  // get data from previous frame ?
  // const lastData = idx === 0 ? 'INITIAL_VALUE' : localStorage.getItem('my-data')



  // ! This is where feedback effects can be done
  // ! Some effects may require a specific design (for instance, using a canvas to draw requires a trick to have the canvas
  // ! be drawn transparent over the iframe so that they blend), that's up to you

  // set a random color to the body background,  x|0 removed the decimal part of x
  document.body.style.backgroundColor = `rgba(${(Math.random()*255)|0}, ${(Math.random()*255)|0}, ${(Math.random()*255)|0}, 1)`



  // set data for the next frame
  // localStorage.setItem('my-data', 'custom-data-here')

  // insert <iframe> after 200 ms
  setTimeout(() => {
    const iframe = document.createElement('iframe')
    iframe.src = location.origin + '/' + (idx+1)
    document.body.append(iframe)
  }, DELAY)

}
catch (error) {}  // exit