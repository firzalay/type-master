export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["banner.jpg","bg.jpg","favicon-typemaster.png","favicon.png","logo.png","logos.mp4"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.608c7592.js","app":"_app/immutable/entry/app.03d29248.js","imports":["_app/immutable/entry/start.608c7592.js","_app/immutable/chunks/scheduler.3139b196.js","_app/immutable/chunks/singletons.06befeee.js","_app/immutable/chunks/index.cc4da14a.js","_app/immutable/entry/app.03d29248.js","_app/immutable/chunks/scheduler.3139b196.js","_app/immutable/chunks/index.e28029e5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/words",
				pattern: /^\/api\/words\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/words/_server.js'))
			},
			{
				id: "/leaderboards",
				pattern: /^\/leaderboards\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
