import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, i as streamText, o as require_react, r as convertToModelMessages } from "../_libs/@ai-sdk/react+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as google } from "../_libs/ai-sdk__google.mjs";
import { t as Resend } from "../_libs/resend+standardwebhooks.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D-kLZPZ8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-CRbfEPBO.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Shiva Maurya | Software Developer Portfolio" },
			{
				name: "description",
				content: "Portfolio of Shiva Maurya, a Computer Science student and aspiring Software Developer."
			},
			{
				name: "author",
				content: "Shiva Maurya"
			},
			{
				property: "og:site_name",
				content: "Shiva Maurya Portfolio"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-X3kiOON3.mjs");
var title = "Shiva Maurya | Software Developer Portfolio";
var description = "Portfolio of Shiva Maurya, a Computer Science student and aspiring Software Developer specializing in Java, JavaScript, React.js, Node.js, Express.js, MongoDB, and Data Structures & Algorithms.";
var Route$2 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Shiva Maurya",
				jobTitle: "Software Developer",
				alumniOf: "Raj Kumar Goel Institute of Technology",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Ghaziabad",
					addressCountry: "IN"
				},
				sameAs: ["https://github.com/shivamaurya01", "https://leetcode.com/u/shivva_maurya01/"]
			})
		}]
	})
});
/**
* Single source of truth for all portfolio content.
* Update links, resume path and project URLs here.
*/
var profile = {
	name: "Shiva Maurya",
	role: "Full-Stack Developer",
	intro: "Computer Science student passionate about full-stack development, building practical web applications and continuously improving my problem-solving skills.",
	email: "er.shiva2327@mail.com",
	location: "Ghaziabad, India",
	github: "https://github.com/shivamaurya01",
	linkedin: "https://www.linkedin.com/in/shivva-maurya/",
	leetcode: "https://leetcode.com/u/shivva_maurya01/",
	codechef: "https://www.codechef.com/users/shiva_maurya",
	resume: "/resume.pdf",
	photo: "/photo.jpeg"
};
var about = {
	paragraphs: ["I am a 4th-year B.Tech Computer Science and Engineering student at Raj Kumar Goel Institute of Technology, Ghaziabad, passionate about software  and full-stack development. I enjoy building practical and user-focused applications using Java, JavaScript, React.js, Node.js, Express.js, and MongoDB.", "I have built projects like TalkSync and Wanderlust while continuously improving my DSA and development skills. I am currently preparing for software development opportunities and looking to grow as a developer."],
	facts: [
		{
			label: "Name",
			value: "Shiva Maurya"
		},
		{
			label: "Degree",
			value: "B.Tech in Computer Science & Engineering"
		},
		{
			label: "College",
			value: "Raj Kumar Goel Institute of Technology"
		},
		{
			label: "Batch",
			value: "2023–2027"
		},
		{
			label: "Location",
			value: "Ghaziabad, India"
		},
		{
			label: "Role",
			value: "Full-Stack Developer"
		}
	]
};
var skillGroups = [
	{
		title: "Programming Languages",
		icon: "Code2",
		items: [
			"Java",
			"JavaScript",
			"Python (Basic)"
		]
	},
	{
		title: "Frontend",
		icon: "MonitorSmartphone",
		items: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"React.js",
			"Bootstrap",
			"Tailwind CSS"
		]
	},
	{
		title: "Backend",
		icon: "Server",
		items: [
			"Node.js",
			"Express.js",
			"REST APIs"
		]
	},
	{
		title: "Database",
		icon: "Database",
		items: [
			"MongoDB",
			"Mongoose",
			"SQL"
		]
	},
	{
		title: "Tools",
		icon: "Wrench",
		items: [
			"Git",
			"GitHub",
			"VS Code"
		]
	},
	{
		title: "Core Computer Science",
		icon: "Cpu",
		items: [
			"Data Structures & Algorithms",
			"Object-Oriented Programming",
			"DBMS",
			"Operating Systems",
			"Computer Networks"
		]
	}
];
var projects = [
	{
		name: "TalkSync",
		description: "A real-time chat application built using the MERN stack.",
		features: [
			"User authentication",
			"Real-time messaging",
			"Online/offline user status",
			"User search",
			"Profile management",
			"Image upload",
			"Responsive chat interface",
			"Socket-based communication"
		],
		tech: [
			"React.js",
			"Tailwind CSS",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Mongoose",
			"Socket.IO",
			"Cloudinary"
		],
		github: "https://github.com/shivamaurya01/REALTIMECHATAPP",
		demo: "https://talksync-pf5r.onrender.com/",
		accent: "chat"
	},
	{
		name: "Wanderlust",
		description: "A full-stack web application for exploring and managing travel listings.",
		features: [
			"Listing management",
			"User authentication",
			"Image uploads",
			"Location/map integration",
			"CRUD operations",
			"Responsive UI"
		],
		tech: [
			"Node.js",
			"Express.js",
			"MongoDB",
			"Mongoose",
			"EJS",
			"JavaScript",
			"Leaflet/OpenStreetMap",
			"Cloudinary"
		],
		github: "https://github.com/shivamaurya01/YourBnb",
		demo: "https://yourbnb-vkxh.onrender.com/listings",
		accent: "map"
	},
	{
		name: "Spotify Clone",
		description: "A frontend Spotify-inspired music interface.",
		tech: [
			"HTML5",
			"CSS3",
			"Bootstrap",
			"JavaScript"
		],
		github: "https://github.com/shivamaurya01/Spotify-Clone",
		accent: "music"
	}
];
var education = [
	{
		institute: "Raj Kumar Goel Institute of Technology",
		degree: "B.Tech – Computer Science and Engineering",
		period: "2023 – 2027",
		location: "Ghaziabad, India",
		status: "Final Year "
	},
	{
		institute: "Rani Revati Devi S.V.N.I.C",
		degree: "12th Grade",
		period: "2022",
		location: "Prayagraj, Uttar Pradesh",
		status: "Completed "
	},
	{
		institute: "Rani Revati Devi S.V.N.I.C",
		degree: "10th Grade",
		period: "2020",
		location: "Prayagraj, Uttar Pradesh",
		status: "Completed "
	}
];
var achievements = [
	{
		org: "CodeChef",
		title: "Completed the 500 Difficulty Rating Milestone",
		link: "https://www.codechef.com/certificates/public/3f1e688"
	},
	{
		org: "NPTEL",
		title: "Programming in Java",
		link: "https://cdn.phototourl.com/free/2026-08-09-1f2fa3c1-bf81-45de-bfa9-e98384031d20.png"
	},
	{
		org: "HackerRank",
		title: "CSS Certification",
		link: "https://www.hackerrank.com/certificates/4962c6922a3c"
	},
	{
		org: "Coursera",
		title: "Python for AI Development",
		link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~KLEOLEN3YE1L/CERTIFICATE_LANDING_PAGE~KLEOLEN3YE1L.jpeg"
	}
];
var navLinks = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Skills",
		href: "#skills"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Education",
		href: "#education"
	},
	{
		label: "Achievements",
		href: "#achievements"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
/** Portfolio facts the assistant is allowed to talk about. */
function buildSystemPrompt() {
	const skills = skillGroups.map((g) => `${g.title}: ${g.items.join(", ")}`).join("\n");
	const projectLines = projects.map((p) => `- ${p.name}: ${p.description} Tech: ${p.tech.join(", ")}.${p.features ? ` Features: ${p.features.join(", ")}.` : ""}`).join("\n");
	const educationLines = education.map((e) => `- ${e.degree}, ${e.institute} (${e.period}), ${e.location}, ${e.status}`).join("\n");
	const achievementLines = achievements.map((a) => `- ${a.org}: ${a.title}`).join("\n");
	return `You are the AI assistant on ${profile.name}'s portfolio website.

Answer recruiter and visitor questions about Shiva in a concise, professional and friendly tone.

Keep answers short, usually 1-3 sentences unless the user asks for more detail.

IMPORTANT RULES:
- Only use the information provided below.
- Never invent skills, projects, companies, dates, statistics or achievements.
- If information is not provided, say that you do not have that information and suggest contacting Shiva.
- Do not discuss information unrelated to Shiva's portfolio.
- Do not claim Shiva has experience that is not listed below.

ABOUT
${about.paragraphs.join("\n")}

QUICK FACTS
${about.facts.map((f) => `${f.label}: ${f.value}`).join("\n")}

SKILLS
${skills}

PROJECTS
${projectLines}

EDUCATION
${educationLines}

ACHIEVEMENTS & CERTIFICATIONS
${achievementLines}

LINKS
GitHub: ${profile.github}
LeetCode: ${profile.leetcode}
Email: ${profile.email}
Resume: available in the Resume section of the portfolio.`;
}
var Route$1 = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const { messages } = await request.json();
		if (!Array.isArray(messages)) return new Response("Messages are required", { status: 400 });
		return streamText({
			model: google("gemini-3.6-flash"),
			system: buildSystemPrompt(),
			messages: await convertToModelMessages(messages)
		}).toUIMessageStreamResponse();
	} catch (error) {
		console.error("Gemini API Error:", error);
		return new Response("The AI assistant is currently unavailable.", { status: 500 });
	}
} } } });
var resend = new Resend(process.env.RESEND_API_KEY);
var Route = createFileRoute("/api/contact")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const { name, email, subject, message } = await request.json();
		if (!name || !email || !subject || !message) return Response.json({
			success: false,
			message: "All fields are required."
		}, { status: 400 });
		const result = await resend.emails.send({
			from: "Portfolio <onboarding@resend.dev>",
			to: process.env.CONTACT_EMAIL,
			replyTo: email,
			subject,
			html: `
              <h2>New Portfolio Contact Message</h2>

              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>

              <hr />

              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `
		});
		if (result.error) {
			console.error("Resend error:", result.error);
			return Response.json({
				success: false,
				message: "Failed to send email."
			}, { status: 500 });
		}
		return Response.json({
			success: true,
			message: "Message sent successfully!"
		});
	} catch (error) {
		console.error("Contact API error:", error);
		return Response.json({
			success: false,
			message: "Something went wrong."
		}, { status: 500 });
	}
} } } });
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	ApiChatRoute: Route$1.update({
		id: "/api/chat",
		path: "/api/chat",
		getParentRoute: () => Route$3
	}),
	ApiContactRoute: Route.update({
		id: "/api/contact",
		path: "/api/contact",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { navLinks as a, skillGroups as c, education as i, about as n, profile as o, achievements as r, projects as s, router_exports as t };
