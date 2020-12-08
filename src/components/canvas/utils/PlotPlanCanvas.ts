import { fabric } from 'fabric';

export class PlotPlanCanvas extends fabric.Canvas {
  // toPlotPlanSVG(options?: IToSVGOptions, reviver?: () => void): any {
  //   const opts: any = options || {};
  //   opts.reviver = reviver;
  //   const markup: string[] = [];
  //
  //   this._setSVGPreamble(markup, options);
  //   this._setSVGHeader(markup, options);
  //   if (this.clipPath) {
  //     markup.push('<g clip-path="url(#' + this.clipPath.clipPathId + ')" >\n');
  //   }
  //   const layoutData: PlotPlanData[] = [];
  //   this._setSVGObjects(layoutData, reviver);
  //   if (this.clipPath) {
  //     markup.push('</g>\n');
  //   }
  //   this._setSVGBgOverlayColor(layoutData, 'overlay');
  //   this._setSVGBgOverlayImage(layoutData, 'overlayImage', reviver);
  //
  //   // markup.push('</svg>');
  //
  //   const result: PlotPlanData[] = [];
  //   layoutData.forEach((value: PlotPlanData) => {
  //     if (value instanceof PlotPlanData) {
  //       const { id, name, title, svgData } = value;
  //       const svgForOneLayer: string[] = [].concat(markup, [svgData, '</svg>']);
  //       result.push({ id, name, title, svgData: svgForOneLayer.join('') });
  //     }
  //   });
  //   return result;
  // }
}
