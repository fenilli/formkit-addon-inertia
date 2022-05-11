import { FormKitContext } from "@formkit/core";

export const onStart = (node: FormKitContext, payload: any, callback?: Function) => {
  node.props.disabled = true;
  console.log(payload, callback);
};

export const onFinish = (node: FormKitContext, payload: any, callback?: Function) => {
  node.props.disabled = false;
  console.log(payload, callback);
};
