'use client'

import { useCallback, useState } from 'react'

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from 'react-flow-renderer'

import CustomNode from '@/components/pretaxRoce/custom-node'

const nodeTypes = {
  customNode: CustomNode,
}

// Sample nodes for your org tree
const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    position: { x: 0, y: 0 },
    data: {
      collapsed: true,
      title: 'Pretax ROCE',
      description: 'Pretax ROCE',
      value: 2.25,
      icon: 'percent',
      badgeColor: 'bg-slate-300',
      extra: { kpi: 'ROCE' },
      unit: false,
      children: ['2', '3'], // 👈 Add this line
    },
  },
  {
    id: '2',
    type: 'customNode',
    position: { x: 350, y: -150 },
    data: {
      collapsed: true,
      title: 'CTO',
      description: 'Technology',
      value: 88,
      icon: 'money',
      badgeColor: 'bg-slate-300',
      extra: { kpi: 'R&D Spending' },
      unit: false,
    },
  },
  {
    id: '3',
    type: 'customNode',
    position: { x: 350, y: 150 },
    data: {
      collapsed: true,
      title: 'CFO',
      description: 'Finance',
      value: 92,
      icon: 'money',
      badgeColor: 'bg-slate-300',
      extra: { kpi: 'Debt Ratio' },
      unit: true
    },
  },
]

const initialEdges = [
  { id: 'e1-2', source: '2', target: '1', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
]

export default function PretaxRoceContainer() {
  const [edges, setEdges] = useState(initialEdges)
  const [nodes, setNodes] = useState(() =>
    initialNodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        onToggle: () => toggleCollapse(node.id),
      },
    }))
  )

  const getHiddenChildrenById = (id) => {
    const parent = initialNodes.find((node) => node.id === id)
    if (!parent?.data?.children) return []
    return initialNodes.filter((node) => parent.data.children.includes(node.id))
  }

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  )
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  )
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  )

  const toggleCollapse = (id) => {
    setNodes((prev) =>
      prev.map((node) => {
        const isToggledNode = node.id === id
        const collapsed = isToggledNode ? !node.data.collapsed : node.data.collapsed
        return {
          ...node,
          data: {
            ...node.data,
            collapsed,
            onToggle: () => toggleCollapse(node.id), // 👈 make sure this stays updated
          },
        }
      })
    )

    setNodes((prev) => {
      const node = prev.find((n) => n.id === id)
      if (!node?.data?.children) return prev

      if (!node.data.collapsed) {
        // Collapse: remove children from tree
        return prev.filter((n) => !node.data.children.includes(n.id))
      } else {
        // Expand: add back child nodes (you’d need to track them)
        const childrenToAdd = getHiddenChildrenById(id) // custom helper
        return [...prev, ...childrenToAdd]
      }
    })
  }

  return (
    <div className="w-full h-full p-4">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={toggleCollapse}
        fitView
        nodesDraggable={true}
        nodesConnectable={false}
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  )
}