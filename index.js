const svgFiles = require.context('./assets', false, /\.svg$/);
svgFiles.keys().forEach(svgFiles);
