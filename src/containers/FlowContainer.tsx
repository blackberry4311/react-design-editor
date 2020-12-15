import React, { useEffect, useState } from 'react';
import { FlowContext } from '../contexts';
import { EditMode } from '../contexts/FlowContext';

const FlowContainer: React.FC<{ editMode: EditMode }> = (props) => {
  const { children, editMode: propMode } = props;
  const [selectedFlowNode, setSelectedFlowNode] = useState(null);
  const [editMode, setEditMode] = useState(propMode);
  useEffect(() => setEditMode(propMode), [propMode]);
  return (
    <FlowContext.Provider
      value={{
        selectedFlowNode,
        setSelectedFlowNode,
        editMode,
        setEditMode,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export default FlowContainer;
