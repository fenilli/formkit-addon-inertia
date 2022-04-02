import { createMessage, FormKitOptions } from '@formkit/core';

const loadingMessage = createMessage({
  key: 'loading',
  visible: false,
  value: true
});

export default (node: FormKitOptions) => {
  if (node.props.type === 'form') {
    const oldSubmit = node.props.onSubmit;

    const onStart = () => {
      node.store.set(loadingMessage);
      node.props.disabled = true;
    };

    const onFinish = () => {
      node.store.remove('loading');
      node.props.disabled = false;
    };

    node.props.onSubmit = (fields, node, inertiaOptions = { onStart, onFinish }) => {
      oldSubmit(fields, node, inertiaOptions);
    };
  }
}
