import {Transformer} from '@parcel/plugin';

export default new Transformer({
  async transform({asset}) {
    let source = await asset.getCode();
   
    let code = `(function() {return \`${source}\`})()`;
    asset.type = 'js';
    asset.setCode(code);

    // Return the asset
    return [asset];
  }
});