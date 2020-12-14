import React, { Component } from 'react';

import ImageMapEditor from '../components/imagemap/ImageMapEditor';
import FlowContainer from './FlowContainer';
import { LocaleProvider } from 'antd';
import koKR from 'antd/lib/locale-provider/ko_KR';
import enUS from 'antd/lib/locale-provider/en_US';
import { i18nClient } from '../i18n';
import PropTypes from 'prop-types';

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
  static propTypes = {
    onSave: PropTypes.func,
    onUpload: PropTypes.func,
  };

  state: IState = {
    activeEditor: 'imagemap',
  };

  render() {
    const { onSave, onUpload } = this.props;
    // @ts-ignore
    const locale: any = antResources[i18nClient.language];
    return (
      <LocaleProvider locale={locale}>
        <div className="rde-main">
          <FlowContainer>
            <div className="rde-content">
              <ImageMapEditor onSave={onSave} onUpload={onUpload} />
            </div>
          </FlowContainer>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
