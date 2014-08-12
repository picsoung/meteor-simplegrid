Package.describe({
	summary: "Latest version of SimpleGrid"
});

Package.on_use(function (api){
	api.add_files([
    'simplegrid/simplegrid.css'
  ], 'client');
});