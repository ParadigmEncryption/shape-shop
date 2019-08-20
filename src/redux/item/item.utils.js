export const rotateItem = (currentItem) => {
  let rotateStr = '';
  let rotateAmount = 0;
 
  if (currentItem.rotate) {
    currentItem.rotate.replace(/(\d+)deg/, match => { // match is the number before 'deg'
      rotateAmount = parseInt(match) + 45;
      if (rotateAmount === 360) {
        rotateAmount = 0;
      }
    rotateStr = ' rotate(' + rotateAmount.toString() + 'deg)';
    return { ...currentItem, rotate: rotateStr };
    })
  } else { // initial rotate set
    rotateStr = ' rotate(45deg)'
  }
  return { ...currentItem, rotate: rotateStr }
}

export const flipXItem = (currentItem) => {
  let scaleX = '';
  let scaleXNum = 0;

  if (currentItem.scale) {
    currentItem.scale.replace(/([-+]?\d+), ([-+]?\d+)/, (xy, x, y) => { 
      scaleXNum = parseInt(x) * -(1);
      scaleX = ' scale(' + scaleXNum.toString() + ', ' + y + ')';
      return { ...currentItem, scale: scaleX }
    })
  } else { // initial scale set
    scaleX = ' scale(-1, 1)'
  }
  return { ...currentItem, scale: scaleX }
}

export const flipYItem = (currentItem) => {
  let scaleY = '';
  let scaleYNum = 0;

  if (currentItem.scale) {
    currentItem.scale.replace(/([-+]?\d+), ([-+]?\d+)/, (xy, x, y) => {
      scaleYNum = parseInt(y) * -(1);
      scaleY = ' scale(' + x + ', ' + scaleYNum.toString() + ')';
      return { ...currentItem, scale: scaleY }
    })
  } else { // initial scale set
    scaleY = ' scale(1, -1)'
  }
  return { ...currentItem, scale: scaleY }
}