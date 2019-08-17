export const rotateItem = (currentItem, transform = '') => {
  let rotate = '';
  let index = 0;


  if (transform.includes('rotate')) {
    // rotate = transform.replace(/rotate(\d+)deg/, '$1');
    const rotation = transform.replace(/\d+/, match => {
      let rotateAmount = parseInt(match) + 45;
      rotate = ' rotate(' + rotateAmount.toString() + 'deg)'
      console.log(rotate);
    })
  } else {
    rotate = ' rotate(45deg)'
  }
  
  return { ...currentItem, transform: transform + rotate }

  

}

export const flipXItem = (currentItem, transform = '') => {
let scaleX = ''

  if (transform.includes('scale(1,')) {
    scaleX = ' scale(-1, 1)'
  } else if (transform.includes('scale(-1,')) {
    scaleX = ' scale(1, 1)'
  } else {
    scaleX = ' scale(-1, 1)'
  }

  return { ...currentItem, transform: transform + scaleX }
}




