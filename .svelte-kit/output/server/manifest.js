export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/Fait Consulting.jpg","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BioMcU3K.js",app:"_app/immutable/entry/app.CtF3irD8.js",imports:["_app/immutable/entry/start.BioMcU3K.js","_app/immutable/chunks/rMjMAKqa.js","_app/immutable/chunks/Cowalb9n.js","_app/immutable/chunks/DSpJZVee.js","_app/immutable/chunks/DTAtkvOO.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/entry/app.CtF3irD8.js","_app/immutable/chunks/DSpJZVee.js","_app/immutable/chunks/DTAtkvOO.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/Cowalb9n.js","_app/immutable/chunks/r7XeNPf_.js","_app/immutable/chunks/DVSq8eJA.js","_app/immutable/chunks/hPbPQDID.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/case-studies","/contact","/legal/privacy-policy","/legal/terms","/resources","/services","/services/business-optimization","/services/process-automation","/services/waste-analysis","/case-studies/construction-remodeler-efficiency","/case-studies/field-services-visibility","/case-studies/professional-services-playbook","/resources/build-ops-playbook","/resources/automation-scorecard","/resources/handoff-checklist"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
