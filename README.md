# tfjs-node-save

**The official way to save models in a Node environment is [`tfjs-node`](https://github.com/tensorflow/tfjs-node).** <br/>
It also enhances the performance, registrers backend and allows us to use GPUs.

**But `tfjs-node` [is not supported](https://github.com/tensorflow/tfjs-node#installing) on all operating systems, node versions, etc.** <br/>
Here comes `tfjs-node-save` - It allows you to use the native filesystem features of `tfjs-node`, but excludes everything else, so it is supported in any Node environment.

In order `tfjs-node-save` to work efficiently you should use Node v.8 or higher.**

## Usage

```js
const tf = rquire("@tensorflow/tfjs");
require("tfjs-node-save");
```
```js
model.save("file://PATH");
```

Refer to the [official documentation](https://js.tensorflow.org/tutorials/model-save-load.html) on how to use the filesystem saving features.

> The `file://` URL scheme can be used for model saving and loading. For model saving, the scheme is followed by the path to the directory in which the model artifacts are to be saved, for example:

```js
model.save("file://C:/tmp/").then(function() {
  console.log("Successfully saved the artifacts.");
});
```


## Related content
- https://github.com/tensorflow/tfjs/issues/666
- https://stackoverflow.com/questions/52131457/nodejs-compile-shared-cpp-libraries-in-gcp-cloud-functions
- http://jamesthom.as/blog/2018/08/13/serverless-machine-learning-with-tensorflow-dot-js/
