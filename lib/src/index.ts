import { FormKitNode } from '@formkit/core'
import events from './events'

export default (node: FormKitNode) => {
  if (node.props.type !== 'form') return false

  if (node.context) node.context.inertia = events(node)
}
