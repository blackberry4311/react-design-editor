import React, { Component, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import classnames from 'classnames';
import CommonButton from '../common/CommonButton';
import FlowContext, { EditMode } from '../../contexts/FlowContext';
import Icon from '../icon/Icon';
import MapProperties from './properties/MapProperties';
import NodeProperties from './properties/NodeProperties';

class ImageMapConfigurations extends Component {
  static propTypes = {
    canvasRef: PropTypes.any,
    selectedItem: PropTypes.object,
    onChange: PropTypes.func,
    onChangeAnimations: PropTypes.func,
    onChangeStyles: PropTypes.func,
    onChangeDataSources: PropTypes.func,
    animations: PropTypes.array,
    styles: PropTypes.array,
    dataSources: PropTypes.array,
    tabsDefinition: PropTypes.object,
  };

  state = {
    activeKey: 'map',
  };

  handlers = {
    onChangeTab: (activeKey) => {
      this.setState({
        activeKey,
      });
    },
    onCollapse: () => {
      this.setState({
        collapse: !this.state.collapse,
      });
    },
  };

  render() {
    const {
      onChange,
      selectedItem,
      canvasRef,
      animations,
      styles,
      dataSources,
      onChangeAnimations,
      onChangeStyles,
      onChangeDataSources,
      tabsDefinition,
    } = this.props;
    const { collapse, activeKey } = this.state;
    const { onChangeTab, onCollapse } = this.handlers;
    const className = classnames('rde-editor-configurations', {
      minimize: collapse,
    });
    return (
      <div className={className}>
        <CommonButton
          className="rde-action-btn"
          shape="circle"
          icon={collapse ? 'angle-double-left' : 'angle-double-right'}
          onClick={onCollapse}
          style={{ position: 'absolute', top: 16, right: 16, zIndex: 1000 }}
        />

        <ContextTabs activeKey={activeKey} onChangeTab={onChangeTab} onChange={onChange}
                     canvasRef={canvasRef} selectedItem={selectedItem} tabsDefinition={tabsDefinition} />
        {/*<Tabs.TabPane tab={<Icon name="vine" prefix="fab" />} key="animations">*/}
        {/*  <Animations animations={animations} onChangeAnimations={onChangeAnimations} />*/}
        {/*</Tabs.TabPane>*/}
        {/*<Tabs.TabPane tab={<Icon name="star-half-alt" />} key="styles">*/}
        {/*  <Styles styles={styles} onChangeStyles={onChangeStyles} />*/}
        {/*</Tabs.TabPane>*/}
        {/* <Tabs.TabPane tab={<Icon name="table" />} key="datasources">
          <DataSources ref={(c) => { this.dataSourcesRef = c; }} dataSources={dataSources} onChangeDataSources={onChangeDataSources} />
          </Tabs.TabPane> */}
      </div>
    );
  }
}

const ContextTabs = (props) => {
  const context = useContext(FlowContext);
  const { activeKey, onChangeTab, onChange, canvasRef, selectedItem, tabsDefinition } = props;
  useEffect(() => {
      if (tabsDefinition && tabsDefinition[context.editMode])
        onChangeTab(tabsDefinition[context.editMode]?.selectedKey);
      else
        onChangeTab('map');
    }
    , [context]);
  return (
    <Tabs
      tabPosition="right"
      style={{ height: '100%' }}
      activeKey={activeKey}
      onChange={onChangeTab}
      tabBarStyle={{ marginTop: 60 }}
    >
      {context.editMode === EditMode.EDITING && <Tabs.TabPane active tab={<Icon name="cog" />} key="map">
        <MapProperties onChange={onChange} canvasRef={canvasRef} />
      </Tabs.TabPane>}
      {context.editMode === EditMode.EDITING && <Tabs.TabPane tab={<Icon name="cogs" />} key="node">
        <NodeProperties onChange={onChange} selectedItem={selectedItem} canvasRef={canvasRef} />
      </Tabs.TabPane>}
      {
        tabsDefinition &&
        tabsDefinition[context.editMode]?.tabs?.map(tab => tab.create(onChange, selectedItem, canvasRef))
      }
    </Tabs>
  );
};

ContextTabs.propTypes = {
  activeKey: PropTypes.string,
  onChangeTab: PropTypes.func,
  onChange: PropTypes.func,
  canvasRef: PropTypes.object,
  selectedItem: PropTypes.object,
  tabsDefinition: PropTypes.object,
};

export default ImageMapConfigurations;
