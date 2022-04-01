import { createMessage } from '@formkit/core';

export default (node: any) => {
  if (node.props.type === 'form') {
    document.addEventListener('inertia:start', () => {
      const loadingMessage = createMessage({
        key: 'loading',
        visible: false,
        value: true
      });

      node.store.set(loadingMessage);
      node.props.disabled = true;
    });

    document.addEventListener('inertia:finish', () => {
      node.store.remove('loading');
      node.props.disabled = false;
    });
  }
}
