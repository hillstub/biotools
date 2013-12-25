angular.module('mean.system').controller('IndexController', ['$scope', '$http','Global', function ($scope, $http, Global) {
	$scope.global = Global;
	$scope.xvals = "0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 31.5, 32, 32.5, 33, 33.5, 34, 34.5, 35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45, 45.5, 46, 46.5, 47, 47.5, 48, 48.5, 49, 49.5, 50, 50.5, 51, 51.5, 52, 52.5, 53, 53.5, 54, 54.5, 55, 55.5, 56, 56.5, 57, 57.5, 58, 58.5, 59, 59.5, 60, 60.5, 61, 61.5, 62, 62.5, 63, 63.5, 64, 64.5, 65, 65.5, 66, 66.5";
	$scope.yvals = "0.103, 0.104, 0.109, 0.117, 0.126, 0.142, 0.162, 0.19, 0.223, 0.256, 0.298, 0.349, 0.405, 0.47, 0.546, 0.628, 0.723, 0.819, 0.924, 1.03, 1.128, 1.166, 1.177, 1.191, 1.195, 1.203, 1.209, 1.213, 1.222, 1.234, 1.25, 1.269, 1.298, 1.312, 1.339, 1.365, 1.393, 1.418, 1.447, 1.476, 1.506, 1.533, 1.562, 1.592, 1.615, 1.639, 1.663, 1.687, 1.707, 1.728, 1.75, 1.764, 1.782, 1.801, 1.809, 1.805, 1.801, 1.803, 1.8, 1.798, 1.796, 1.793, 1.793, 1.79, 1.789, 1.786, 1.786, 1.784, 1.784, 1.781, 1.782, 1.78, 1.777, 1.777, 1.774, 1.774, 1.772, 1.771, 1.769, 1.767, 1.765, 1.762, 1.762, 1.762, 1.757, 1.755, 1.752, 1.749, 1.746, 1.744, 1.738, 1.736, 1.732, 1.729, 1.727, 1.723, 1.719, 1.715, 1.714, 1.71, 1.707, 1.703, 1.699, 1.696, 1.694, 1.689, 1.686, 1.683, 1.68, 1.676, 1.673, 1.67, 1.667, 1.661, 1.659, 1.655, 1.652, 1.648, 1.644, 1.638, 1.636, 1.633, 1.631, 1.628, 1.622, 1.618, 1.613, 1.609, 1.605, 1.6, 1.594, 1.589, 1.583";
	$scope.xvals = "0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5,30";
	$scope.yvals = "0.103,0.104,0.109,0.117,0.126,0.142,0.162,0.19,0.223,0.256,0.298,0.349,0.405,0.47,0.546,0.628,0.723,0.819,0.924,1.03,1.128,1.166,1.177,1.191,1.195,1.203,1.209,1.213,1.222,1.234,1.25,1.269,1.298,1.312,1.339,1.365,1.393,1.418,1.447,1.476,1.506,1.533,1.562,1.592,1.615,1.639,1.663,1.687,1.707,1.728,1.75,1.764,1.782,1.801,1.809,1.805,1.801,1.803,1.8,1.798";


	  $scope.data = [{x: 0, value: 12}, {x: 1, value: 4}, {x: 2, value: 7}, {x: 3, value: 0}];
	  
	  // Line
	  $scope.options = {
	  	series: [{y: 'value', color: 'steelblue'},{y: 'linear_value', color: 'red'}]
	  	,axes: {
	//	    x: {key: 'foo'},
		    y: {type: 'linear', maxY: 0.5},
		 }
	  };
	  
	  // Area
	  //$scope.options = {series: [{y: 'value', type: 'area', color: 'steelblue'}]};
	  
	  // Column
	  //$scope.options = {series: [{y: 'value', type: 'column', color: 'steelblue'}]};
	  
	  // Interpolation
	//  $scope.options = {lineMode: 'cardinal', series: [{y: 'value', color: 'steelblue'}]};
	 

	$scope.calculate = function() {
		var experiment = new Object({
			xvals: $scope.xvals.split(/,/).map(parseFloat),
			yvals: $scope.yvals.split(/,/).map(parseFloat)
		});
		data = [];
		angular.forEach(experiment.xvals, function(value, i){
			data.push({x: experiment.xvals[i], linear_value:0, value: Math.log(experiment.yvals[i])});
		});
	//	$scope.data = data;
		//$scope.data = data;
		$http({
			url: '/get_rate.json',
			method: "POST",
			data: JSON.stringify({values:experiment}),
			headers: {'Content-Type': 'application/json'}
		}).success(function (linear_regression_data, status, headers, config) {
			angular.forEach(data, function(row, i){
				row.linear_value = row.x * linear_regression_data.slope + linear_regression_data.intercept;
			});
			$scope.growth_rate = linear_regression_data.slope;
			$scope.options.axes.y.maxY = Math.max.apply(null, experiment.yvals.map(Math.log));
			$scope.data = data;
			//$scope.$apply();
		//	$scope.data = data;
			//console.log(data);
            //$scope.users = data.users; // assign  $scope.persons here as promise is resolved here 
        }).error(function (data, status, headers, config) {
        	//$scope.status = status + ' ' + headers;
        });
      //  article.$save(function(response) {
      //      $location.path("articles/" + response._id);
      //  });
	//console.log(experiment);

	};
}]);