"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toBuffer(ab) {
    var view = new Uint8Array(ab);
    return Buffer.from(view);
}
exports.toBuffer = toBuffer;
function toArrayBuffer(buf) {
    if (Array.isArray(buf)) {
        var totalLength = 0;
        for (var _i = 0, buf_1 = buf; _i < buf_1.length; _i++) {
            var buffer = buf_1[_i];
            totalLength += buffer.length;
        }
        var ab = new ArrayBuffer(totalLength);
        var view = new Uint8Array(ab);
        var pos = 0;
        for (var _a = 0, buf_2 = buf; _a < buf_2.length; _a++) {
            var buffer = buf_2[_a];
            pos += buffer.copy(view, pos);
        }
        return ab;
    }
    else {
        return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    }
}
exports.toArrayBuffer = toArrayBuffer;
function getModelArtifactsInfoForJSON(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
        throw new Error('Expected JSON model topology, received ArrayBuffer.');
    }
    return {
        dateSaved: new Date(),
        modelTopologyType: 'JSON',
        modelTopologyBytes: modelArtifacts.modelTopology == null ?
            0 :
            Buffer.byteLength(JSON.stringify(modelArtifacts.modelTopology), 'utf8'),
        weightSpecsBytes: modelArtifacts.weightSpecs == null ?
            0 :
            Buffer.byteLength(JSON.stringify(modelArtifacts.weightSpecs), 'utf8'),
        weightDataBytes: modelArtifacts.weightData == null ?
            0 :
            modelArtifacts.weightData.byteLength,
    };
}
exports.getModelArtifactsInfoForJSON = getModelArtifactsInfoForJSON;
