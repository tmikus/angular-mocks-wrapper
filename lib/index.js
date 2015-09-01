(function ()
{
	if (!this.__angular_mocks_wrapper_loaded__)
	{
		this.__angular_mocks_wrapper_loaded__ = true;
		require("angular-wrapper");
		require("angular-mocks");
	}

	module.exports =
	{
		inject: angular.mock.inject,
		module: angular.mock.module
	};
})();