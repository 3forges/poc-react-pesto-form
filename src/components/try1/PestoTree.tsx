import { Component } from 'preact';
import values from 'lodash/values';
import PropTypes from 'prop-types';

import PestoTreeNode  from './PestoTreeNode';

export enum PestoTreeDataNodeType {
    "LEAF" = "LEAF", // FILE
    "BRANCH" = "BRANCH", // FOLDER
}
export enum PestoTreeFsDataNodeType {
    "FILE" = "FILE",
    "FOLDER" = "FOLDER",
}
export interface PestoTreeData {
    '/root': {
      path: string,
      type: PestoTreeFsDataNodeType,
      isRoot: boolean,
      children: string[],
    },
    '/root/david': {
        path: string,
        type: PestoTreeFsDataNodeType,
        isRoot: boolean,
        children: string[],
      },
    '/root/david/readme.md': {
        path: string,
        type: PestoTreeFsDataNodeType,
        content: string,
      },
    '/root/jslancer': {
        path: string,
        type: PestoTreeFsDataNodeType,
        children: string[],
      },
    '/root/jslancer/projects': {
        path: string,
        type: PestoTreeFsDataNodeType,
        children: string[],
      },
    '/root/jslancer/projects/treeview': {
        path: string,
        type: PestoTreeFsDataNodeType,
        children: string[],
      },
    '/root/jslancer/vblogs': {
        path: string,
        type: PestoTreeFsDataNodeType,
        children: string[],
      },
};

export interface PestoTreeNodeData {
    isOpen: boolean;
    path: string,
    type: PestoTreeFsDataNodeType,
    isRoot?: boolean,
    children?: string[],
    content?: string;
}
export interface BetterPestoTreeData {
    tree: []
}
const getPestoTreeNodeData = (fromPath: string, someData: PestoTreeNodeData[]): PestoTreeNodeData => {
    let toReturn: PestoTreeNodeData = {
        isOpen: false,
        path: ``,
        type: PestoTreeFsDataNodeType.FOLDER,
    }
    for (let index = 0; index < someData.length; index++) {
        const element = someData[index];
        if (element.path == fromPath) {
            toReturn = element;
            break;
        }
    }
    return toReturn;
}
const betterData: PestoTreeNodeData[] = [
    {
      isOpen: false,
      path: '/root',
      type: PestoTreeFsDataNodeType.FOLDER,
      isRoot: true,
      children: ['/root/david', '/root/jslancer'],
    },
    {
      isOpen: false,
      isRoot: false,
      path: '/root/david',
      type: PestoTreeFsDataNodeType.FOLDER,
      children: ['/root/david/readme.md'],
    },
    {
      isOpen: false,
      path: '/root/david/readme.md',
      type: PestoTreeFsDataNodeType.FILE,
      content: 'Thanks for reading me me. But there is nothing here.'
    },
    {
      isOpen: false,
      path: '/root/jslancer',
      type: PestoTreeFsDataNodeType.FOLDER,
      children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
    },
    {
      isOpen: false,
      path: '/root/jslancer/projects',
      type: PestoTreeFsDataNodeType.FOLDER,
      children: ['/root/jslancer/projects/treeview'],
    },
    {
      isOpen: false,
      path: '/root/jslancer/projects/treeview',
      type: PestoTreeFsDataNodeType.FOLDER,
      children: [],
    },
    {
      isOpen: false,
      path: '/root/jslancer/vblogs',
      type: PestoTreeFsDataNodeType.FOLDER,
      children: [],
    },
]
const data: PestoTreeData = {
  '/root': {
    path: '/root',
    type: PestoTreeFsDataNodeType.FOLDER,
    isRoot: true,
    children: ['/root/david', '/root/jslancer'],
  },
  '/root/david': {
    isRoot: false,
    path: '/root/david',
    type: PestoTreeFsDataNodeType.FOLDER,
    children: ['/root/david/readme.md'],
  },
  '/root/david/readme.md': {
    path: '/root/david/readme.md',
    type: PestoTreeFsDataNodeType.FILE,
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/jslancer': {
    path: '/root/jslancer',
    type: PestoTreeFsDataNodeType.FOLDER,
    children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
  },
  '/root/jslancer/projects': {
    path: '/root/jslancer/projects',
    type: PestoTreeFsDataNodeType.FOLDER,
    children: ['/root/jslancer/projects/treeview'],
  },
  '/root/jslancer/projects/treeview': {
    path: '/root/jslancer/projects/treeview',
    type: PestoTreeFsDataNodeType.FOLDER,
    children: [],
  },
  '/root/jslancer/vblogs': {
    path: '/root/jslancer/vblogs',
    type: PestoTreeFsDataNodeType.FOLDER,
    children: [],
  },
};
export interface PestoTreeProps {
    onSelect: any;
}
export default class PestoTree extends Component {

  state = {
    nodes: betterData,
  };
  constructor(props: PestoTreeProps) {
    super(props);
    console.log(` PestoTreeProps : `, this.props);
  }
  getRootNodes = () => {
    const { nodes } = this.state;
    return values(nodes).filter(node => node.isRoot === true);
  }

  getChildNodes = (node: { path: string; children: { path: string }[] }) => {
    const { nodes } = this.state;
    if (!node.children) return [];
    return node.children.map(path => path);
  }  

  onToggle = (node: PestoTreeNodeData) => {
    const { nodes } = this.state;
    getPestoTreeNodeData(node.path, nodes).isOpen = !node.isOpen;
    this.setState({ nodes });
  }

  onNodeSelect = (node: PestoTreeNodeData) => {
    const { onSelect } = this.props;
    onSelect(node);
  }

  render() {
    const rootNodes = this.getRootNodes();
    return (
      <div>
        { rootNodes.map(node => (
          <PestoTreeNode 
            node={node}
            getChildNodes={this.getChildNodes}
            onToggle={this.onToggle}
            onNodeSelect={this.onNodeSelect}
          />
        ))}
      </div>
    )
  }
}

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired,
};