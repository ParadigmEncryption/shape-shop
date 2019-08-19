export const rotateItem = (currentItem, rotate = '') => {
  let rotateStr = '';
  let rotateAmount = 0;
 
    if (currentItem.rotate) {
    currentItem.rotate.replace(/(\d+)deg/, match => { // match is the number before 'deg'
      rotateAmount = parseInt(match) + 45;
      
      if (rotateAmount === 360) {
        rotateAmount = 0;
      }
    rotateStr = ' rotate(' + rotateAmount.toString() + 'deg)';

    return { ...currentItem, rotate: rotateStr }
    })
  } else {
    rotateStr = ' rotate(45deg)'
  }
  return { ...currentItem, rotate: rotateStr }
}

export const flipXItem = (currentItem, scale = '') => {
  let scaleX = '';
  let scaleXNum = 1;

  if (currentItem.hasOwnProperty(scale)) {
    // if (scale.includes('scale(1,')) {
      if (scale.includes('scale(1,')) {
        scaleX = ' scale(-1, 1)' // 2nd '1' is for scaleY
      } else if (scale.includes('scale(-1,')) {
        scaleX = ' scale(1, 1)'
      }
      console.log(scale)
  } else {
    scaleX = ' scale(-1, 1)'
  }

  return { ...currentItem, scale: scaleX }
}




