import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, n as DefaultChatTransport, o as require_react, t as useChat } from "../_libs/@ai-sdk/react+[...].mjs";
import { a as navLinks, c as skillGroups, i as education, n as about, o as profile, r as achievements, s as projects } from "./router-D-kLZPZ8.mjs";
import { A as Code, C as FolderGit2, D as Database, E as Download, F as Atom, I as ArrowRight, M as Braces, N as Bot, O as Cpu, P as Award, S as Gamepad2, T as ExternalLink, _ as Linkedin, a as Server, b as Github, c as Network, d as MessagesSquare, f as Menu, g as LoaderCircle, h as Mail, i as Terminal, j as CodeXml, k as Coffee, l as Music, m as MapPin, n as Wrench, o as Send, p as Map, r as User, s as Palette, t as X, u as MonitorSmartphone, v as GraduationCap, w as FileText, x as GitBranch, y as Globe } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-X3kiOON3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass-bar py-2" : "py-4"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Main",
			className: "mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 place-items-center rounded-xl bg-primary font-mono text-sm font-bold text-primary-foreground",
						children: "SM"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-semibold sm:text-base",
						children: profile.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-6 lg:flex",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-muted-foreground transition-colors hover:text-primary",
						children: link.label
					}) }, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: profile.resume,
						download: true,
						className: "hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							size: 16,
							"aria-hidden": "true"
						}), " Resume"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-label": "Toggle navigation menu",
						className: "grid size-10 place-items-center rounded-xl border border-border text-foreground lg:hidden",
						children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							size: 18,
							className: "hidden"
						}) : null, open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })]
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-bar mt-2 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8",
				children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "block border-b border-border/60 py-3 text-sm text-muted-foreground transition-colors hover:text-primary",
					children: link.label
				}) }, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: profile.resume,
					download: true,
					onClick: () => setOpen(false),
					className: "mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						size: 16,
						"aria-hidden": "true"
					}), " Download Resume"]
				}) })]
			})
		}) : null]
	});
}
var links = [
	{
		label: "GitHub",
		href: profile.github,
		Icon: Github
	},
	{
		label: "LinkedIn",
		href: profile.linkedin,
		Icon: Linkedin
	},
	{
		label: "LeetCode",
		href: profile.leetcode,
		Icon: Code
	},
	{
		label: "Email",
		href: `mailto:${profile.email}`,
		Icon: Mail
	}
];
function SocialLinks({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: `flex items-center gap-3 ${className}`,
		children: links.map(({ label, href, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			target: href.startsWith("mailto:") ? void 0 : "_blank",
			rel: "noreferrer",
			"aria-label": label,
			title: label,
			className: "grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 18,
				"aria-hidden": "true"
			})
		}) }, label))
	});
}
/** Fades and slides children into view once they enter the viewport. */
function Reveal({ children, delay = 0, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) {
				setShown(true);
				observer.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `reveal ${shown ? "reveal-in" : ""} ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "hero-bg relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid-lines absolute inset-0 opacity-70",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-24 right-[-10%] size-[26rem] rounded-full bg-primary/10 blur-3xl",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "— Introduction"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl",
							children: ["Hi, I'm", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block",
								children: [profile.name, "."]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-1 w-16 rounded-full bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-mono text-sm text-primary sm:text-base",
							children: profile.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: profile.intro
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#projects",
									className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, {
										size: 16,
										"aria-hidden": "true"
									}), " View My Projects"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: profile.resume,
									download: true,
									className: "inline-flex items-center gap-2 rounded-full border border-primary/60 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										size: 16,
										"aria-hidden": "true"
									}), " Download Resume"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
										size: 16,
										"aria-hidden": "true"
									}), " Contact Me"]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, { className: "mt-10" })
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 160,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto w-full max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -inset-3 rounded-[2rem] bg-primary/10 blur-2xl",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card relative overflow-hidden rounded-[1.75rem] p-1.5",
							children: [profile.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile.photo,
								alt: `Portrait of ${profile.name}`,
								className: "aspect-4/5 w-full rounded-[1.4rem] object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid aspect-4/5 w-full place-items-center rounded-[1.4rem] bg-surface-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-5xl font-semibold text-primary",
										children: "SM"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 px-6 font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground",
										children: "Profile photo placeholder"
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 px-4 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-muted-foreground",
									children: "B.Tech CSE · 2023–2027"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Open to SDE roles & internships"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#about",
									"aria-label": "Read more about Shiva",
									className: "grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										size: 16,
										"aria-hidden": "true"
									})
								})]
							})]
						})]
					})
				})]
			})
		]
	});
}
function Section({ id, eyebrow, title, description, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `px-5 py-20 sm:px-8 md:py-28 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: ["— ", eyebrow]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl",
					children: title
				}),
				description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: description
				}) : null
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 md:mt-14",
				children
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "About",
		title: "A developer focused on building and problem solving.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "space-y-5",
				children: about.paragraphs.map((text) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: text
				}, text.slice(0, 24)))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "surface-card rounded-2xl p-6",
					children: about.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1 border-b border-border/70 py-3 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[0.7rem] uppercase tracking-widest text-primary",
							children: fact.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-sm text-foreground sm:text-right",
							children: fact.value
						})]
					}, fact.label))
				})
			})]
		})
	});
}
var icons = {
	Code2: CodeXml,
	MonitorSmartphone,
	Server,
	Database,
	Wrench,
	Cpu
};
var skillIcons = {
	Java: Coffee,
	JavaScript: Braces,
	Python: Terminal,
	HTML: Globe,
	HTML5: Globe,
	CSS: Palette,
	CSS3: Palette,
	React: Atom,
	"React.js": Atom,
	"Node.js": Server,
	"Express.js": Server,
	MongoDB: Database,
	Mongoose: Database,
	SQL: Database,
	Git: GitBranch,
	GitHub: Github,
	"Data Structures & Algorithms": Cpu,
	DSA: Cpu,
	"Operating Systems": Cpu,
	"Computer Networks": Network
};
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "Skills",
		title: "Technical skills & tools I work with.",
		description: "Technologies I use to build full-stack applications, plus the core computer science foundations behind them.",
		className: "bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: skillGroups.map((group, i) => {
				const Icon = icons[group.icon];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "surface-card h-full rounded-2xl p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 place-items-center rounded-xl bg-primary/12 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 18,
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold",
								children: group.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-wrap gap-2",
							children: group.items.map((item) => {
								const SkillIcon = skillIcons[item] || CodeXml;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillIcon, {
										size: 13,
										className: "text-primary",
										"aria-hidden": "true"
									}), item]
								}, item);
							})
						})]
					})
				}, group.title);
			})
		})
	});
}
var accentIcons = {
	chat: MessagesSquare,
	map: Map,
	music: Music,
	game: Gamepad2
};
var filters = [
	"All",
	"React.js",
	"Node.js",
	"MongoDB",
	"JavaScript"
];
function Projects() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const visible = (0, import_react.useMemo)(() => filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter)), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "projects",
		eyebrow: "Projects",
		title: "Applications I have designed and built.",
		description: "A selection of full-stack and frontend projects. Repository and demo links are easy to update.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			role: "group",
			"aria-label": "Filter projects by technology",
			children: filters.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setFilter(tech),
				"aria-pressed": filter === tech,
				className: `rounded-full border px-4 py-2 font-mono text-xs transition-colors ${filter === tech ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"}`,
				children: tech
			}, tech))
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-6 md:grid-cols-2",
			children: visible.map((project, i) => {
				const Icon = accentIcons[project.accent] ?? MessagesSquare;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "surface-card flex h-full flex-col overflow-hidden rounded-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-bg relative grid h-40 place-items-center border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid-lines absolute inset-0",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 40,
								className: "relative text-primary",
								"aria-hidden": "true"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold",
									children: project.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: project.description
								}),
								project.features ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 grid gap-1.5 sm:grid-cols-2",
									children: project.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1 shrink-0 rounded-full bg-primary" }), feature]
									}, feature))
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 flex flex-wrap gap-2",
									children: project.tech.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-md bg-surface-2 px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground",
										children: tech
									}, tech))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-3 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: project.github,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
											size: 14,
											"aria-hidden": "true"
										}), " GitHub"]
									}), project.demo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: project.demo,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
											size: 14,
											"aria-hidden": "true"
										}), " Live Demo"]
									}) : null]
								})
							]
						})]
					})
				}, project.name);
			})
		})]
	});
}
function TimelineItem({ title, subtitle, period, meta, description, Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "relative pl-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute left-0 top-0 grid size-9 place-items-center rounded-xl border border-border bg-surface text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 16,
				"aria-hidden": "true"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card rounded-2xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-primary",
					children: period
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-base font-semibold",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: subtitle
				}),
				meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: meta
				}) : null,
				description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: description
				}) : null
			]
		})]
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "education",
		eyebrow: "Education",
		title: "Academic background.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative space-y-6 before:absolute before:left-4 before:top-3 before:h-full before:w-px before:bg-border",
			children: education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineItem, {
				title: item.institute,
				subtitle: item.degree,
				period: item.period,
				meta: `${item.location} · ${item.status}`,
				Icon: GraduationCap
			}) }, item.institute))
		})
	});
}
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "achievements",
		eyebrow: "Achievements",
		title: "Certifications & milestones.",
		className: "bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: achievements.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 70,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "surface-card h-full rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center rounded-xl bg-primary/12 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
								size: 18,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-mono text-[0.7rem] uppercase tracking-widest text-primary",
							children: item.org
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-base font-semibold leading-snug",
							children: item.title
						}),
						item.link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.link,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80",
							children: ["View Certificate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								size: 14,
								"aria-hidden": "true"
							})]
						})
					]
				})
			}, item.title))
		})
	});
}
function ResumeSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "resume",
		className: "bg-surface/40 px-5 py-20 sm:px-8 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card relative overflow-hidden rounded-3xl p-8 text-center md:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -top-20 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow relative",
						children: "— Resume"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "relative mt-3 text-3xl font-semibold sm:text-4xl",
						children: "My Resume"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: "Interested in my background and experience? Download my resume to learn more about my skills, projects, education, and experience."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.resume,
							download: true,
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								size: 16,
								"aria-hidden": "true"
							}), " Download Resume"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.resume,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								size: 16,
								"aria-hidden": "true"
							}), " View Resume"]
						})]
					})
				]
			}) })
		})
	});
}
var suggestions = [
	"What are Shiva's technical skills?",
	"Tell me about Shiva's projects.",
	"What is TalkSync?",
	"What is Shiva's educational background?",
	"How can I contact Shiva?"
];
var greeting = "Hi! I’m Shiva’s portfolio assistant. Ask me about his skills, projects, education, or how to get in touch.";
/** Joins the streamed text parts of a message. */
function messageText(message) {
	return message.parts.map((part) => part.type === "text" ? part.text : "").join("").trim();
}
function AskMeAnything() {
	const [input, setInput] = (0, import_react.useState)("");
	const [errorText, setErrorText] = (0, import_react.useState)(null);
	const scrollRef = (0, import_react.useRef)(null);
	const { messages, sendMessage, status } = useChat({
		transport: new DefaultChatTransport({ api: "/api/chat" }),
		onError: (error) => setErrorText(error.message.includes("429") ? "Too many requests right now — please try again in a moment." : "The assistant is unavailable right now. Please use the contact form below.")
	});
	const isBusy = status === "submitted" || status === "streaming";
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, status]);
	const ask = (question) => {
		const text = question.trim();
		if (!text || isBusy) return;
		setErrorText(null);
		setInput("");
		sendMessage({ text });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "ask",
		eyebrow: "Ask Me Anything",
		title: "Have a question about my profile?",
		description: "Explore Shiva's skills, projects, education, and background through his AI-powered portfolio assistant.",
		className: "bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card mx-auto max-w-3xl overflow-hidden rounded-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border bg-surface-2 px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, {
						size: 16,
						className: "text-primary",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-muted-foreground",
						children: "portfolio assistant"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: scrollRef,
					className: "max-h-80 space-y-4 overflow-y-auto p-5",
					role: "log",
					"aria-live": "polite",
					"aria-label": "Conversation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatBubble, {
							from: "assistant",
							text: greeting
						}),
						messages.map((message) => {
							const text = messageText(message);
							if (!text) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatBubble, {
								from: message.role === "user" ? "user" : "assistant",
								text
							}, message.id);
						}),
						status === "submitted" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatBubble, {
							from: "assistant",
							text: "",
							pending: true
						}) : null,
						errorText ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground",
							children: errorText
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-2",
						children: suggestions.map((suggestion) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => ask(suggestion),
							disabled: isBusy,
							className: "rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary disabled:opacity-50",
							children: suggestion
						}) }, suggestion))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-4 flex gap-2",
						onSubmit: (event) => {
							event.preventDefault();
							ask(input);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "ask-input",
								className: "sr-only",
								children: "Your question"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "ask-input",
								value: input,
								onChange: (event) => setInput(event.target.value),
								placeholder: "Ask a question…",
								autoComplete: "off",
								className: "min-w-0 flex-1 rounded-full border border-input bg-surface-2 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: isBusy || !input.trim(),
								"aria-label": "Send question",
								className: "grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0",
								children: isBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									size: 16,
									className: "animate-spin",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
									size: 16,
									"aria-hidden": "true"
								})
							})
						]
					})]
				})
			]
		}) })
	});
}
function ChatBubble({ from, text, pending = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex gap-3 ${from === "user" ? "flex-row-reverse" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-8 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary",
			children: from === "assistant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, {
				size: 15,
				"aria-hidden": "true"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
				size: 15,
				"aria-hidden": "true"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${from === "user" ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground"}`,
			children: pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex gap-1",
				"aria-label": "Thinking",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 animate-bounce rounded-full bg-primary [animation-delay:0ms]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 animate-bounce rounded-full bg-primary [animation-delay:150ms]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 animate-bounce rounded-full bg-primary [animation-delay:300ms]" })
				]
			}) : text
		})]
	});
}
var details = [
	{
		label: "Email",
		value: profile.email,
		href: `mailto:${profile.email}`,
		Icon: Mail
	},
	{
		label: "GitHub",
		value: "github.com/shivamaurya01",
		href: profile.github,
		Icon: Github
	},
	{
		label: "LinkedIn",
		value: "Connect on LinkedIn",
		href: profile.linkedin,
		Icon: Linkedin
	},
	{
		label: "Location",
		value: profile.location,
		Icon: MapPin
	}
];
var fields = [
	{
		name: "name",
		label: "Name",
		type: "text",
		placeholder: "Your name"
	},
	{
		name: "email",
		label: "Email",
		type: "email",
		placeholder: "you@example.com"
	},
	{
		name: "subject",
		label: "Subject",
		type: "text",
		placeholder: "What is this about?"
	}
];
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const handleSubmit = async (event) => {
		event.preventDefault();
		setSending(true);
		setSent(false);
		setError("");
		const form = event.currentTarget;
		const data = new FormData(form);
		const contactData = {
			name: String(data.get("name") || ""),
			email: String(data.get("email") || ""),
			subject: String(data.get("subject") || ""),
			message: String(data.get("message") || "")
		};
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(contactData)
			});
			if (!response.headers.get("content-type")?.includes("application/json")) throw new Error("The contact server returned an invalid response.");
			const result = await response.json();
			if (!response.ok) throw new Error(result.message || "Unable to send your message.");
			setSent(true);
			form.reset();
		} catch (error) {
			console.error("Contact form error:", error);
			setError(error instanceof Error ? error.message : "Unable to send your message. Please try again.");
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Contact",
		title: "Let's Work Together",
		description: "I am open to software development opportunities, internships, collaborations, and interesting projects.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "surface-card rounded-2xl p-6 md:p-8",
				onSubmit: handleSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: field.name === "subject" ? "sm:col-span-2" : "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: field.name,
								className: "font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground",
								children: field.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: field.name,
								name: field.name,
								type: field.type,
								required: true,
								disabled: sending,
								placeholder: field.placeholder,
								className: "mt-2 w-full rounded-xl border border-input bg-surface-2 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary disabled:opacity-60"
							})]
						}, field.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "message",
								className: "font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								name: "message",
								rows: 5,
								required: true,
								disabled: sending,
								placeholder: "Tell me about the role or project…",
								className: "mt-2 w-full resize-y rounded-xl border border-input bg-surface-2 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary disabled:opacity-60"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: sending,
						className: "mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60",
						children: sending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							size: 16,
							className: "animate-spin"
						}), "Sending..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
							size: 16,
							"aria-hidden": "true"
						}), "Send Message"] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"aria-live": "polite",
						className: "mt-3 text-xs text-muted-foreground",
						children: sent ? "Message sent successfully! I'll get back to you soon." : error ? error : ""
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-4",
					children: details.map(({ label, value, href, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "surface-card rounded-2xl p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 18,
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground",
									children: label
								}), href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									target: href.startsWith("mailto:") ? void 0 : "_blank",
									rel: "noreferrer",
									className: "block truncate text-sm text-foreground transition-colors hover:text-primary",
									children: value
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-foreground",
									children: value
								})]
							})]
						})
					}, label))
				})
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border px-5 py-12 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg font-semibold",
				children: profile.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-xs text-muted-foreground",
				children: profile.role
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto mt-8 max-w-6xl text-center text-xs text-muted-foreground md:text-left",
			children: [
				"© 2026 ",
				profile.name,
				". All rights reserved."
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AskMeAnything, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
