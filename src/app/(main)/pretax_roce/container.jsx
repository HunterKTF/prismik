'use client'

import { useCallback, useState } from 'react'

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useReactFlow,
} from 'react-flow-renderer'

// Sample nodes for your org tree
const initialNodes = [
  {
    id: '1',
    position: { x: 250, y: 0 },
    data: { label: 'CEO' },
    type: 'default',
  },
  {
    id: '2',
    position: { x: 100, y: 100 },
    data: { label: 'CTO' },
  },
  {
    id: '3',
    position: { x: 400, y: 100 },
    data: { label: 'CFO' },
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
]

export default function PretaxRoceContainer() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

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

  return (
    <div className="w-full h-full p-4">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  )
}