var app = angular.module('browserAppApp');

app.constant('html', {
	dropZone: {
		previewTemplate: '<div id="dz-preview-template" class="dz-preview dz-file-preview"><div class="dz-details">       <div class="dz-filename"><span data-dz-name></span></div><div class="dz-size" data-dz-size></div><img data-dz-thumbnail /></div><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div></div>'
	}
});