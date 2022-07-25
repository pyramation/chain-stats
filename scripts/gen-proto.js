const { join } = require('path');
const telescope = require('@osmonauts/telescope').default;

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../telescope/proto');

telescope({
  protoDirs,
  outPath,
  options: {
    includeAminos: true,
    includeLCDClients: true,
    includeRpcClients: true,
    camelRpcMethods: true,
    includePackageVar: false,
    useDate: 'date',
    useDuration: 'duration',
    useExact: false
  }
});
