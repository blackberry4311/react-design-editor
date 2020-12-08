class PlotPlanData {
  public id: string;
  public name: string;
  public title?: string;
  public svgData: string;

  constructor(data: PlotPlanData) {
    Object.assign(this, data);
  }
}

export default PlotPlanData;
