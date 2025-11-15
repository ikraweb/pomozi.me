import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const dataPath = path.join(process.cwd(), "data", "actions.js")

function loadActions() {
  try {
    const fileContent = fs.readFileSync(dataPath, "utf-8")
    
    // Ekstraktuj sve tri konstante
    const activeMatch = fileContent.match(/export const activeActions = (\[[\s\S]*?\])\n\n/)
    const completedMatch = fileContent.match(/export const completedActions = (\[[\s\S]*?\])\n\n/)
    const partnersMatch = fileContent.match(/export const partners = (\[[\s\S]*?\])/)
    
    let activeActions = []
    let completedActions = []
    let partners = []
    
    if (activeMatch) {
      activeActions = new Function('return ' + activeMatch[1])()
    }
    if (completedMatch) {
      completedActions = new Function('return ' + completedMatch[1])()
    }
    if (partnersMatch) {
      partners = new Function('return ' + partnersMatch[1])()
    }
    
    return { activeActions, completedActions, partners }
  } catch (error) {
    console.error("Load error:", error.message)
    return { activeActions: [], completedActions: [], partners: [] }
  }
}

function saveActions(activeActions, completedActions, partners) {
  const content = `export const activeActions = ${JSON.stringify(activeActions, null, 2)}

export const completedActions = ${JSON.stringify(completedActions, null, 2)}

export const partners = ${JSON.stringify(partners, null, 2)}
`
  fs.writeFileSync(dataPath, content, "utf-8")
}

export async function POST(request) {
  try {
    const newAction = await request.json()
    const { activeActions, completedActions, partners } = loadActions()
    
    const allActions = [...activeActions, ...completedActions]
    const maxId = allActions.length > 0 ? Math.max(...allActions.map(a => a.id)) : 0
    newAction.id = maxId + 1
    
    if (newAction.completed) {
      completedActions.push(newAction)
    } else {
      activeActions.push(newAction)
    }
    
    saveActions(activeActions, completedActions, partners)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("POST error:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const updatedAction = await request.json()
    const { activeActions, completedActions, partners } = loadActions()
    
    if (updatedAction.completed) {
      const index = completedActions.findIndex(a => a.id === updatedAction.id)
      if (index !== -1) {
        completedActions[index] = updatedAction
      }
    } else {
      const index = activeActions.findIndex(a => a.id === updatedAction.id)
      if (index !== -1) {
        activeActions[index] = updatedAction
      }
    }
    
    saveActions(activeActions, completedActions, partners)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("PUT error:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const { id, completed } = await request.json()
    const { activeActions, completedActions, partners } = loadActions()
    
    if (completed) {
      const filtered = completedActions.filter(a => a.id !== id)
      saveActions(activeActions, filtered, partners)
    } else {
      const filtered = activeActions.filter(a => a.id !== id)
      saveActions(filtered, completedActions, partners)
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("DELETE error:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
