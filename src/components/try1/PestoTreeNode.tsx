//import React from 'react';
import { Component, Fragment, JSX } from 'preact';

import { 
    Camera as LuCamera, 
    File as LuFile, 
    FolderOpen as LuFolderOpen, 
    FolderClosed as LuFolderClosed,
    ChevronDown as LuChevronDown,
    ChevronRight as LuChevronRight,
} from 'lucide-preact';

// import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import last from 'lodash/last';
import PropTypes from 'prop-types';

const getPaddingLeft = (level: number, type: string) => {
  let paddingLeft = level * 20;
  if (type === 'file') paddingLeft += 20;
  return paddingLeft;
}

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${props => getPaddingLeft(props.level, props.type)}px;

  &:hover {
    background: lightgray;
  }
`;

const NodeIcon = styled.div`
  font-size: 12px;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;

const getNodeLabel = (node: { path: string; }) => last(node.path.split('/'));

const PestoTreeNode = (props: JSX.IntrinsicAttributes & Partial<Pick<any, never>> & Pick<any, string | number | symbol>) => {
  const { node, getChildNodes, level, onToggle, onNodeSelect } = props;

  return (
    <Fragment>
      <StyledTreeNode level={level} type={node.type}>
        <NodeIcon onClick={() => onToggle(node)}>
          { node.type === 'folder' && (node.isOpen ? <LuChevronDown /> : <LuChevronRight />) }
        </NodeIcon>
        
        <NodeIcon marginRight={10}>
          { node.type === 'file' && <LuFile /> }
          { node.type === 'folder' && node.isOpen === true && <LuFolderOpen /> }
          { node.type === 'folder' && !node.isOpen && <LuFolderClosed /> }
        </NodeIcon>
        

        <span role="button" onClick={() => onNodeSelect(node)}>
          { getNodeLabel(node) }
        </span>
      </StyledTreeNode>

      { node.isOpen && getChildNodes(node).map((childNode: any) => (
        <PestoTreeNode 
          {...props}
          node={childNode}          
          level={level + 1}
        />
      ))}
    </ Fragment>
  );
}

PestoTreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  getChildNodes: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onNodeSelect: PropTypes.func.isRequired,
};

PestoTreeNode.defaultProps = {
  level: 0,
};

export default PestoTreeNode;