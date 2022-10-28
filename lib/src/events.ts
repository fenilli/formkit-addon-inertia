import { Inertia, RequestPayload, VisitOptions } from '@inertiajs/inertia'
import { createMessage, FormKitNode } from '@formkit/core'
import { FormKitInertifyDisableCallBacks } from './types'

const loadingMessage = createMessage({
  key: 'loading',
  visible: false,
  value: true,
})

const eventCallBacks = [
  'onCancelToken',
  'onCancel',
  'onBefore',
  'onStart',
  'onProgress',
  'onSuccess',
  'onError',
  'onFinish',
]

const handler = {
  onStart: (node: FormKitNode) => {
    node.store.set(loadingMessage)
    node.props.disabled = true
  },
  onProgress: (node: FormKitNode, payload: any) => {
    if (node.context)
      node.context.attrs = {
        'data-progress': payload,
      }
  },
  onFinish: (node: FormKitNode) => {
    node.store.remove('loading')
    node.props.disabled = false

    if (node.context && node.context.attrs['data-progress'])
      delete node.context.attrs['data-progress']
  },
  onError: (node: FormKitNode, payload: any) => {
    node.setErrors([], payload)
  },
}

const injectNode = (
  node: FormKitNode,
  options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>
): VisitOptions => {
  const newOptions = { ...options }

  eventCallBacks.forEach((cbName) => {
    if (handler[cbName] && !options?.disable?.[cbName])
      newOptions[cbName] = (payload: any) => {
        handler[cbName](node, payload)

        options?.[cbName]?.(payload, node)
      }
    else if (options?.[cbName]) {
      newOptions[cbName] = (payload: any) => options[cbName](payload, node)
    }
  })

  return newOptions
}

export default (node: FormKitNode) => ({
  visit: (url: string, options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>) =>
    Inertia.visit(url, injectNode(node, options)),
  get: (
    url: string,
    data?: RequestPayload,
    options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>
  ) => Inertia.get(url, data, injectNode(node, options)),
  post: (
    url: string,
    data?: RequestPayload,
    options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>
  ) => Inertia.post(url, data, injectNode(node, options)),
  put: (
    url: string,
    data?: RequestPayload,
    options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>
  ) => Inertia.put(url, data, injectNode(node, options)),
  patch: (
    url: string,
    data?: RequestPayload,
    options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>
  ) => Inertia.patch(url, data, injectNode(node, options)),
  delete: (url: string, options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>) =>
    Inertia.delete(url, injectNode(node, options)),
  reload: (options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>) =>
    Inertia.reload(injectNode(node, options)),
})
