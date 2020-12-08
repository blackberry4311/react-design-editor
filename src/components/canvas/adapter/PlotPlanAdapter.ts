import Handler from '../handlers/Handler';
import SvgPlotPlan from './data-objects/SvgPlotPlan';
import PlotPlanData from './data-objects/PlotPlanData';

class PlotPlanAdapter {
  handler?: Handler;

  constructor(handler: Handler) {
    this.handler = handler;
  }

  exportPlotPlanData = (): Partial<SvgPlotPlan> => {
    const { src: plotplanImage, left: x, top: y, workareaHeight: height, workareaWidth: width } = this.handler.workarea;

    const data: PlotPlanData[] = [];
    const canvasObjects: any[] = this.handler.canvas.getObjects();
    canvasObjects.forEach(canvasObject => {
      const { id, name } = canvasObject;
      // manual ignore workarea
      if (id !== 'workarea' && typeof canvasObject.toSVG === 'function') {
        try {
          const svgData = canvasObject.toSVG();
          data.push(new PlotPlanData({ id, name, svgData }));
        } catch (e) {
          // do nothing
        }
      }
    });
    const objects: { overlay_id: string, svgplotplan_data: PlotPlanData }[] = [];
    data.forEach(value => objects.push({ overlay_id: value.id, svgplotplan_data: value }));
    return { objects, plotplan_image: plotplanImage, view_box: { x, y, width, height } };
  };
}

export default PlotPlanAdapter;
