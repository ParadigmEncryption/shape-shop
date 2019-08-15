import { svgPaths } from './svg-paths';

export const TOOLBAR_SVG_DATA = [
  {
    id: 'strokeColor',
    svg: svgPaths.colorPalette,
    title: 'Stroke Color'
  },
  {
    id: 'fillColor',
    svg: svgPaths.paintRoller,
    title: 'Fill Color'
  },
  {
    id: 'strokeWidth',
    svg: svgPaths.linesThickThin,
    type: 'Stroke Size'
  },
  {
    id: 'zoom',
    svg: svgPaths.magnifyingGlass,
    type: 'Zoom'
  },
  {
    id: 'flipX',
    svg: svgPaths.arrowsOppositeX,
    type: 'Flip Horizontally'
  },
  {
    id: 'flipY',
    svg: svgPaths.arrowsOppositeY,
    type: 'Flip Vertically'
  },
  {
    id: 'rotate',
    svg: svgPaths.rotateClockwise,
    title: 'Rotate Clockwise'
  }
]
