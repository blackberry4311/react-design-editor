import PlotPlanData from './PlotPlanData';
import { FabricObject } from '../../utils';

class SvgPlotPlan {
  public plotplan_image: string;
  public view_box: { x: number, y: number, width: number, height: number };
  public '3d_model_urn'?: string;
  public editor_data: FabricObject[];
  public objects: { overlay_id: string, svgplotplan_data: PlotPlanData }[];
}

export default SvgPlotPlan;
