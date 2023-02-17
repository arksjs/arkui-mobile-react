import { useEffect, useRef } from 'react'
import { frameTo, type FrameTask, type FrameOption } from '../helpers'

export function useFrameTask() {
  const task = useRef<FrameTask | null>(null)

  function frameStop() {
    task.current && task.current.stop()
    task.current = null
  }

  function frameStart(options: FrameOption) {
    frameStop()

    task.current = frameTo(options)
  }

  function getRunFrameTaskId() {
    return task.current?.id ?? null
  }
  useEffect(() => frameStop, [])

  return { frameStart, frameStop, frameTask: task, getRunFrameTaskId }
}
