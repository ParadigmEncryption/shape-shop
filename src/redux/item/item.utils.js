// export const setItemName = (currentItem, event) => {
//   // const regex = new RegExp('^[a-zA-Z0-9]+$');
//   // const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
//   // if (!regex.test(key)) {
//   //   preventDefault();
//   //   return false;
//   // }


//     // let k = event.keyCode || event.which;
//     // var k = String.fromCharCode(!event.charCode ? event.which : event.charCode)
//     // if ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8   || (k >= 48 && k <= 57)) {

//     // let k = new Regex(\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s)

//     if ((k>=48 && k<=57) || k==8 || (k>=35 && k<=40)|| k==46) {
//       console.log(k);
//       return { ...currentItem, name: event }
//     } else {
//       console.log(k);
//       return currentItem;
//     }
     

    
  
// }

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