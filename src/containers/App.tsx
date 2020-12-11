import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import ImageMapEditor from '../components/imagemap/ImageMapEditor';
import WorkflowEditor from '../components/workflow/WorkflowEditor';
import FlowEditor from '../components/flow/FlowEditor';
import FlowContainer from './FlowContainer';
import HexGrid from '../components/hexgrid/HexGrid';

type EditorType = 'imagemap' | 'workflow' | 'flow' | 'hexgrid';

interface IState {
  activeEditor?: EditorType;
}

class App extends Component<any, IState> {
  state: IState = {
    activeEditor: 'imagemap',
  };

  onChangeMenu = ({ key }) => {
    this.setState({
      activeEditor: key,
    });
  };

  renderEditor = (activeEditor: EditorType) => {
    switch (activeEditor) {
      case 'imagemap':
        return <ImageMapEditor />;
      case 'workflow':
        return <WorkflowEditor />;
      case 'flow':
        return <FlowEditor />;
      case 'hexgrid':
        return <HexGrid />;
    }
  };

  render() {
    const { activeEditor } = this.state;
    return (
      <div className="rde-main">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="" />
          <link rel="manifest" href="./manifest.json" />
          <link rel="shortcut icon" href="./favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
          <title>React Design Editor</title>
        </Helmet>
        {/* <div className="rde-title"> */}
        {/*	<Title onChangeMenu={this.onChangeMenu} current={activeEditor} /> */}
        {/* </div> */}
        <FlowContainer>
          <div className="rde-content">{this.renderEditor(activeEditor)}</div>
        </FlowContainer>
      </div>
    );
  }
}

export default App;
