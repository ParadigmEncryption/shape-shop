import { svgPaths } from './svg-paths';

export const TOOLBAR_SVG_DATA = [
  {
    id: 'paint',
    svg: svgPaths.paintRoller,
    title: 'Pick Color',
  },
  {
    id: 'rotate',
    svg: svgPaths.rotateClockwise,
    title: 'Rotate Clockwise',
  },
  {
    id: 'zoom',
    svg: svgPaths.magnifyingGlass,
    type: 'Zoom',
  }
]