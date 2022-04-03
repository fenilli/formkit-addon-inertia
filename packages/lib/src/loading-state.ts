import { createMessage, FormKitContext } from "@formkit/core";

export const onLoadingStart = (node: FormKitContext) => {
  const loadingMessage = createMessage({
    key: 'loading',
    visible: false,
    value: true
  });

  node.store.set(loadingMessage);
  node.props.disabled = true;
};

export const onLoadingFinish = (node: FormKitContext) => {
  node.store.remove('loading');
  node.props.disabled = false;
};
