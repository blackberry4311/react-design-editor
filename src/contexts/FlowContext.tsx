import React from 'react';

import { NodeObject } from '../components/canvas/objects/Node';

export enum EditMode {
  EDITING = 'EDITING',
  LINKING = 'LINKING'
}

export interface IFlowContext {
  selectedFlowNode: NodeObject;
  setSelectedFlowNode: (selectedFlowNode: NodeObject) => void;
  editMode: EditMode;
  setEditMode: (editMode: EditMode) => void;
}

const FlowContext = React.createContext<IFlowContext>(undefined);

export default FlowContext;
