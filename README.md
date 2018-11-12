# tfjs-node-save

**The official way for saving models in Node environment is [`tfjs-node`](https://github.com/tensorflow/tfjs-node).**  
It also enhances the performance, registrers backend and allows us to use GPUs.

> But `tfjs-node` [is not supported](https://github.com/tensorflow/tfjs-node#installing) on all operating systems, node versions, ect.

Here comes `tfjs-node-save`! It allows you to use the native filesystem feature of `tfjs-node`, but excludes EVERYTHING ELSE, so it's supported in ANY Node environment.

> IF YOU USE `tfjs-node` THE FUNCTIONALITY OF THIS MODULE IS ALREADY AVAILABLE AND YOU DON'T NEED IT AT ALL

**[`util.promisify`](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original) is used to enhance performance, so in order `tfjs-node-save` to work correctly you should use NodeJS v.8.0.0 or higher, or transpile the code for lower versions.**

## Usage

Import this module after the official tensorflow.js package:

```javascript
var tf = rquire("@tensorflow/tfjs");
require("tfjs-node-save");

/// YOUR CODE HERE

model.save("file://PATH");
```

Now you'll be able to use the filesystem saving as described in the [official documentation](https://js.tensorflow.org/tutorials/model-save-load.html):

> The `file://` URL scheme can be used for model saving and loading. For model saving, the scheme is followed by the path to the directory in which the model artifacts are to be saved, for example:

```javascript
await model.save("file:///tmp/my-model-1");

// or

model.save("file://C:/tmp/").then(function() {
  console.log("Successfully saved the artifacts.");
});
```

## Real world use case

Interesting use case might be saving model to the temporary filesystem of _GCP Cloud Functions_ / _AWS Labda_ and exporting it to a storage service.

As soon as you try to use `tfjs-node` you might end up with similar error:

```
Error: libtensorflow.so: cannot open shared object file
```

But importing `tfjs-node-save` instead should work without any drawbacks.

## Contributing

As soon as you open the source of this tiny module you'll realize that it's only 5 lines of javascript.  
But if you wanna to contribute to the concept of saving models in the Node fs and wanna help the TF community, you can:

- Contribute to the [`tfjs-node` repo](https://github.com/tensorflow/tfjs-node) so support for more environments can be rolled out.
- Contribute to the [`tfjs` repo](https://github.com/tensorflow/tfjs).

More related stuff

- https://stackoverflow.com/questions/52131457/nodejs-compile-shared-cpp-libraries-in-gcp-cloud-functions
- https://github.com/tensorflow/tfjs/issues/666
- http://jamesthom.as/blog/2018/08/13/serverless-machine-learning-with-tensorflow-dot-js/
