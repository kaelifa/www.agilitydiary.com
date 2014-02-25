var app = angular.module('browserAppApp');

app.controller('MainController', [
	'$scope', '$rootScope', 'Mapdata', 'ShowService', 'ProfileService', 'SearchService', '$location', '$timeout', '$route', '$routeParams',
	function ($scope, $rootScope, Mapdata, ShowService, ProfileService, SearchService, $location, $timeout, $route, $routeParams) {
		"use strict";




		/**
		 * Module level variables
		 */

		$scope.profile = {};
		$rootScope.homeSectionClass = 'active';
		$rootScope.showsSectionClass = '';
		$rootScope.mapSectionClass = '';

		/**
		 * Post something
		 */
		$scope.post = {};
		$scope.post.message = '';
		$scope.post.click = postSomething;
		$scope.setThemeMainColour = setThemeMainColour;





		function setThemeMainColour(colour) {
			ProfileService.setThemeMainColour({
				colour: colour
			}).success(fetchProfile)
			.error(function() {

			});
		}




		/**
		 * Get the users profile
		 */

		function fetchProfile() {
			ProfileService.invalidateCache();

			ProfileService.get(function (data) {
				$scope.profile = data;
			}, function (error) {

			});
		}




		/**
		 * Post Something Click Handler
		 */
		function postSomething() {

		}




		/**
		 * Main function
		 */

		function main() {
			var action = '';

			console.log('This is a feature');

			if (angular.isDefined($route.current)) {
				if ((typeof $route.current.$$route.action !== 'undefined') && ($route.current.$$route.action !== null)) {
					action = $route.current.$$route.action;
				}

				console.log(action);
				console.log($location.href);
				console.log($routeParams.id);
				console.log('Shows Controller');

				switch (action) {
				case '':
					fetchProfile();
				}
			}

			try {
				var profileDropzone = new Dropzone('div#uploadProfileImage', { url: '/agility-diary/user/uploadFile' });

				profileDropzone.on('complete', function file() {
					profileDropzone.removeFile(file);
					profileDropzone.removeAllFiles();
					fetchProfile();
				});
			} catch (e) {

			}

			try {
				var profileDropzone = new Dropzone('div#uploadProfileBackgroundImage', { url: '/agility-diary/user/uploadBackgroundFile' });

				profileDropzone.on('complete', function file() {
					profileDropzone.removeFile(file);
					profileDropzone.removeAllFiles();
					fetchProfile();
				});
			} catch (e) {

			}
		}



		/**
		 * Start here
		 */

		main();
	}
]);
