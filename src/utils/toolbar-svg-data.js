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
    title: 'Stroke Size'
  },
  {
    id: 'flipX',
    svg: svgPaths.arrowsOppositeX,
    title: 'Flip Horizontally'
  },
  {
    id: 'flipY',
    svg: svgPaths.arrowsOppositeY,
    title: 'Flip Vertically'
  },
  {
    id: 'rotate',
    svg: svgPaths.rotateClockwise,
    title: 'Rotate Clockwise'
  }
]
