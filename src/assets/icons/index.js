const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svgIcons', false, /\.svg$/)
requireAll(req)
