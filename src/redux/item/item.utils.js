export const rotateItem = (currentItem, rotateAmount) => {
  const rotate = `rotate(${rotateAmount})`

  return { ...currentItem, transform: rotate }
}