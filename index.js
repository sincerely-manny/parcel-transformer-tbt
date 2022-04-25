const { Transformer } = require('@parcel/plugin');

const transformer = new Transformer({
  async transform({asset}) {
    let source = await asset.getCode();
   
    let code = `export default \`${source.replace('`', '\`')}\`;`;
    asset.type = 'js';
    asset.setCode(code);

    return [asset];
  }
});

module.exports = transformer;