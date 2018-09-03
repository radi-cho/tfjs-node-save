var tfc = require("@tensorflow/tfjs-core");
var nodeFileSystemRouter = require("@tensorflow/tfjs-node/dist/io/file_system")
  .nodeFileSystemRouter;

tfc.io.registerSaveRouter(nodeFileSystemRouter);
tfc.io.registerLoadRouter(nodeFileSystemRouter);
