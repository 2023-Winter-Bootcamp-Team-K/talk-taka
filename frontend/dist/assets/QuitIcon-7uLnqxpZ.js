const A="data:image/png;base64,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";export{A as Q};
