import React, { Component } from 'react';

import ImageMapEditor from '../components/imagemap/ImageMapEditor';
import FlowContainer from './FlowContainer';
import { LocaleProvider } from 'antd';
import koKR from 'antd/lib/locale-provider/ko_KR';
import enUS from 'antd/lib/locale-provider/en_US';
import { i18nClient } from '../i18n';

const antResources = {
  ko: koKR,
  'ko-KR': koKR,
  en: enUS,
  'en-US': enUS,
};
type EditorType = 'imagemap' | 'workflow' | 'flow' | 'hexgrid';

interface IState {
  activeEditor?: EditorType;
}

class App extends Component<any, IState> {
  state: IState = {
    activeEditor: 'imagemap',
  };

  // @ts-ignore
  onChangeMenu = ({ key }) => {
    this.setState({
      activeEditor: key,
    });
  };

  // renderEditor = (activeEditor: EditorType) => {
  //   switch (activeEditor) {
  //     case 'imagemap':
  //       return <ImageMapEditor />;
  //     case 'workflow':
  //       return <WorkflowEditor />;
  //     case 'flow':
  //       return <FlowEditor />;
  //     case 'hexgrid':
  //       return <HexGrid />;
  //   }
  // };

  render() {
    // const { activeEditor } = this.state;
    // @ts-ignore
    const locale: any = antResources[i18nClient.language];
    return (
      <LocaleProvider locale={locale}>
        <div className="rde-main">
          {/* <div className="rde-title"> */}
          {/*	<Title onChangeMenu={this.onChangeMenu} current={activeEditor} /> */}
          {/* </div> */}
          <FlowContainer>
            <div className="rde-content">
              <ImageMapEditor />
            </div>
          </FlowContainer>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
