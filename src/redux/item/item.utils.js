export const rotateItem = (currentItem) => {
  const rotate = "rotate(45)"


  return { ...currentItem, transform: rotate };

}