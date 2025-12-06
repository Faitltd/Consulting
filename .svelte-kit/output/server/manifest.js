export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","favicon.svg","images/Fait Consulting.jpg","images/Gemini_Generated_Image_8yik388yik388yik.png","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CnvZ-gyy.js",app:"_app/immutable/entry/app.Bi8kpdnp.js",imports:["_app/immutable/entry/start.CnvZ-gyy.js","_app/immutable/chunks/DBaZDNuv.js","_app/immutable/chunks/D1oGZTsy.js","_app/immutable/chunks/D4Go4Mid.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/entry/app.Bi8kpdnp.js","_app/immutable/chunks/D1oGZTsy.js","_app/immutable/chunks/D4Go4Mid.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DBaZDNuv.js","_app/immutable/chunks/doXf9iM1.js","_app/immutable/chunks/cDuczHBa.js","_app/immutable/chunks/CzPoRetE.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/404","/about","/case-studies","/contact","/legal/privacy-policy","/legal/terms","/resources","/services","/services/process-automation","/services/waste-analysis","/services/business-optimization","/case-studies/construction-remodeler-efficiency","/case-studies/field-services-visibility","/case-studies/professional-services-playbook","/resources/build-ops-playbook","/resources/automation-scorecard","/resources/handoff-checklist"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
