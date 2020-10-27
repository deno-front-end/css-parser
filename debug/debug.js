function debug(label) {
  return _debug.bind(null, label);
}

function _debug(label) {
  if (!window.DEBUG) return;
  var args = [].slice.call(arguments, 1);
  args.unshift("[" + label + "]");
  Deno.core.print(args.join(" ") + "\n");
}

export default debug;
