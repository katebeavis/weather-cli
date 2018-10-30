// @ts-ignore
const minimist = require('minimist');
require('dotenv').config();

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0] || 'help';

  if (args.help || args.h) {
    cmd = 'help'
  }

  if (args.version || args.v) {
    cmd = 'version'
  }

  switch (cmd) {
    case 'today':
      require('./cmds/today')(args);
      break;
    case 'forecast':
      require('./cmds/forecast')(args);
      break;
    case 'help':
      require('./cmds/help')(args);
      break;
    case 'version':
      require('./cmds/version')(args);
      break;
    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
};
