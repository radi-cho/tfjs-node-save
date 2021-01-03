const tfc = require("@tensorflow/tfjs-core");
const fs = require("./io/file_system");

tfc.io.registerSaveRouter(fs.nodeFileSystemRouter);
tfc.io.registerLoadRouter(fs.nodeFileSystemRouter);
