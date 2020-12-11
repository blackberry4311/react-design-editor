import React, { useState } from 'react';
import { FlowContext } from '../contexts';

const FlowContainer: React.FC = (props: React.PropsWithChildren<{}>) => {
  const { children } = props;
  const [selectedFlowNode, setSelectedFlowNode] = useState(null);
  return (
    <FlowContext.Provider
      value={{
        selectedFlowNode,
        setSelectedFlowNode,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export default FlowContainer;
