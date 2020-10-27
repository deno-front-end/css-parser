function debug(label) {
  return _debug.bind(null, label);
}

function _debug(label) {
  var args = [].slice.call(arguments, 1);
  args.unshift('[' + label + ']');
  process.stderr.write(args.join(' ') + '\n');
}

export default debug;
