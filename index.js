(function (bili) {
	"use strict";
	var converts = [{ // Video
		//<img src="https://github.com/feilongfl/pic-bed/raw/master/201711/%E6%BB%91%E7%A8%BD.3mf" alt="" class="img-responsive img-markdown" />
		from: /<img src="(((?:https?:\/\/)?(?:.*)\/)(.*\.(?:(?:glb)|(?:gltf))))" alt="" class="img-responsive img-markdown" \/>/g,
		//from: /<a href="(?:https?:\/\/)?(?:www\.)?bilibili\.(?:tv|com)\/video\/av(\d+).*?">.+<\/a>/g,
		to: '<div class="3darea">' +
		'<p>glb 3d 模型文件 </p>' +
		'<a href="$1">glb模型下载</a>' +
			'<div class="gltfobj" id="$1"' +
			'</div>' +
			'</div>'
	}];

	bili.parse = function (data, callback) {
		try {
			for (var i = 0; i < converts.length; i++)
				data.postData.content = data.postData.content.replace(converts[i].from, converts[i].to);
			callback(null, data);
		} catch (ex) {
			callback(ex, data);
		}

	};

	bili.addScripts = function (scripts, callback) {
		//console.log("o.o...");
		scripts.push('/assets/src/babylon-gltf.js');
		// scripts.push('/assets/src/3MFLoader.js');
		callback(null, scripts);
	}
})(module.exports);
