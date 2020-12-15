import React, { Component } from 'react';

import ImageMapEditor from '../components/imagemap/ImageMapEditor';
import FlowContainer from './FlowContainer';
import { LocaleProvider } from 'antd';
import koKR from 'antd/lib/locale-provider/ko_KR';
import enUS from 'antd/lib/locale-provider/en_US';
import { i18nClient } from '../i18n';
import PropTypes from 'prop-types';
import { EditMode } from '../contexts/FlowContext';

const antResources = {
  ko: koKR,
  'ko-KR': koKR,
  en: enUS,
  'en-US': enUS,
};
type EditorType = 'imagemap' | 'workflow' | 'flow' | 'hexgrid';

interface IState {
  activeEditor?: EditorType;
  editMode?: EditMode;
}

class App extends Component<any, IState> {
  static propTypes = {
    onSave: PropTypes.func,
    onUpload: PropTypes.func,
    editMode: PropTypes.oneOf([EditMode.EDITING, EditMode.LINKING]),
    objectOptions: PropTypes.object,
    tabsDefinition: PropTypes.object,
  };

  state: IState = {
    activeEditor: 'imagemap',
    editMode: EditMode.EDITING,
  };

  componentDidUpdate(prevProps: any) {
    if (prevProps.editMode !== this.props.editMode) {
      this.setState(old => ({ ...old, editMode: this.props.editMode }));
    }
  }

  render() {
    const { onSave, onUpload, editMode, objectOptions, tabsDefinition } = this.props;
    // @ts-ignore
    const locale: any = antResources[i18nClient.language];
    return (
      <LocaleProvider locale={locale}>
        <div className="rde-main">
          <FlowContainer editMode={editMode ?? EditMode.EDITING}>
            <div className="rde-content">
              <ImageMapEditor
                onSave={onSave}
                onUpload={onUpload}
                objectOptions={objectOptions}
                tabsDefinition={tabsDefinition}
              />
            </div>
          </FlowContainer>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
