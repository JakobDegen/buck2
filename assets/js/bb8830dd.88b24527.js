"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9133],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>l});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=d(n),p=a,m=l["".concat(i,".").concat(p)]||l[p]||f[p]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"cquery",title:"cquery"},i=void 0,s={unversionedId:"users/commands/cquery",id:"users/commands/cquery",title:"cquery",description:"These are the flags/commands under buck2 cquery and their --help output:",source:"@site/../docs/users/commands/cquery.generated.md",sourceDirName:"users/commands",slug:"/users/commands/cquery",permalink:"/docs/users/commands/cquery",draft:!1,tags:[],version:"current",frontMatter:{id:"cquery",title:"cquery"},sidebar:"manualSidebar",previous:{title:"clean",permalink:"/docs/users/commands/clean"},next:{title:"ctargets",permalink:"/docs/users/commands/ctargets"}},u={},c=[{value:"buck cquery",id:"buck-cquery",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"These are the flags/commands under ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 cquery")," and their ",(0,a.mdx)("inlineCode",{parentName:"p"},"--help")," output:"),(0,a.mdx)("h2",{id:"buck-cquery"},"buck cquery"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"buck2-release-cquery \nPerform queries on the configured target graph\n\nThe configured target graph includes information about the configuration\n(platforms) and transitions involved in building targets. In the\nconfigured graph, `selects` are fully resolved. The same target may\nappear in multiple different configurations (when printed, the\nconfiguration is after the target in parentheses).\n\nA user can specify a `--target-universe` flag to control how literals\nare resolved. When provided, any literals will resolve to all\nmatching targets within the universe (which includes the targets\npassed as the universe and all transitive deps of them).  When not\nprovided, we implicitly set the universe to be rooted at every\ntarget literal in the `cquery`.\n\nRun `buck2 docs cquery` or\nhttps://buck2.build/docs/users/query/cquery/\nfor more documentation about the functions available in cquery\nexpressions.\n\nExamples:\n\nPrint all the attributes of a target\n\n`buck2 cquery //java/com/example/app:amazing --output-all-attributes`\n\nList the deps of a target (special characters in a target will\nrequire quotes):\n\n`buck2 cquery 'deps(\"//java/com/example/app:amazing+more\")'`\n\nUSAGE:\n    buck2-release cquery [OPTIONS] <QUERY> [--] [QUERY_ARGS]...\n\nARGS:\n    <QUERY>\n            the query to evaluate\n\n    <QUERY_ARGS>...\n            list of literals for a multi-query (one containing `%s` or `%Ss`)\n\nOPTIONS:\n    -a, --output-attribute <ATTRIBUTE>\n            Regular expressions to match attributes. Regular expressions are used in \"search\" mode,\n            so for example empty string matches all attributes including special attributes.\n            \n            When using in automation, please specify the regular expression to match the attribute\n            precisely, for example `--output-attribute '^headers$'` to make it easier to track which\n            special attributes are used.\n\n    -A, --output-all-attributes\n            Output all attributes, equivalent of --output-attribute ''.\n            \n            Avoid using this flag in automation because it may be expensive to produce certain\n            attributes, and because it makes harder to track which special attributes are used.\n\n    -B, --output-basic-attributes\n            Output basic attributes, namely those the user can supply, plus rule type and package\n            name\n\n    -c, --config <SECTION.OPTION=VALUE>\n            List of config options\n\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n        --config-file <PATH>\n            List of config file paths\n\n        --console <super|simple|...>\n            Which console to use for this command\n            \n            [env: BUCK_CONSOLE=]\n            [default: auto]\n            [possible values: simple, simplenotty, simpletty, super, auto, none]\n\n        --correct-owner\n            Enable correct `owner()` function behavior.\n            \n            See this post https://fburl.com/1mf2d2xj for details.\n\n        --deprecated-owner\n            Enable deprecated `owner()` function behavior.\n            \n            See this post https://fburl.com/1mf2d2xj for details.\n\n        --disable-starlark-types\n            Disable runtime type checking in Starlark interpreter.\n            \n            This option is not stable, and can be used only locally to diagnose evaluation\n            performance problems.\n\n        --dot\n            Output in Graphviz Dot format\n\n        --dot-compact\n            Output in a more compact format than Graphviz Dot\n\n        --event-log <PATH>\n            Write events to this log file\n\n        --exit-when-different-state\n            Used for exiting a concurrent command when a different state is detected\n\n        --fake-arch <ARCH>\n            [possible values: default, aarch64, x8664]\n\n        --fake-host <HOST>\n            [possible values: default, linux, macos, windows]\n\n        --fake-xcode-version <VERSION-BUILD>\n            Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n    -h, --help\n            Print help information\n\n        --json\n            Output in JSON format\n\n    -m, --modifier <VALUE>\n            A configuration modifier to configure all targets on the command line. This may be a\n            constraint value target.\n\n        --no-interactive-console\n            Disable console interactions\n            \n            [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n        --output-attributes <ATTRIBUTE>...\n            Deprecated: Use `--output-attribute` instead.\n            \n            List of space-separated attributes to output, --output-attributes attr1 attr2.\n\n        --output-format <dot|dot_compact|json|starlark>\n            Output format (default: list).\n            \n                       dot -  dot graph format.\n            \n                       dot_compact - compact alternative to dot format.\n            \n                       json - JSON format.\n            \n                       starlark - targets are printed like starlark code that would produce them.\n            \n            \n            [possible values: dot, json, dot_compact, starlark]\n\n        --reuse-current-config\n            Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n            otherwise the flag is ignored.\n            \n            If there is a previous command and `--reuse-current-config` is set, then the old config\n            is used, ignoring any overrides.\n            \n            If there is no previous command but the flag was set, then the flag is ignored, the\n            command behaves as if the flag was not set at all.\n\n        --show-providers\n            Show the providers of the query result instead of the attributes and labels\n\n        --skip-targets-with-duplicate-names\n            If there are targets with duplicate names in `BUCK` file, skip all the duplicates but\n            the first one. This is a hack for TD. Do not use this option\n\n        --stack\n            Record or show target call stacks.\n            \n            Starlark call stacks will be included in duplicate targets error.\n            \n            If a command outputs targets (like `targets` command), starlark call stacks will be\n            printed after the targets.\n\n        --target-platforms <PLATFORM>\n            Configuration target (one) to use to configure targets\n\n    -u, --target-universe <TARGET_UNIVERSE>\n            Comma separated list of targets at which to root the queryable universe.\n                            This is useful since targets can exist in multiple configurations. While\n                            this argument isn't required, it's recommended for most non-trivial\n            queries.\n                            In the absence of this argument, buck2 will use the target literals\n                            in your cquery expression as the argument to this.\n\n        --ui <UI>\n            Configure additional superconsole ui components.\n            \n            Accepts a comma-separated list of superconsole components to add. Possible values are:\n            \n            dice - shows information about evaluated dice nodes debugevents - shows information\n            about the flow of events from buckd\n            \n            These components can be turned on/off interactively. Press 'h' for help when\n            superconsole is active.\n            \n            [possible values: dice, debugevents, io, re]\n\n        --unstable-write-invocation-record <PATH>\n            Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n            regarding the stability of the format\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            \"-v=1,stderr\"\n            \n            [default: 1]\n\n        --write-build-id <PATH>\n            Write command invocation id into this file\n\n")))}d.isMDXComponent=!0}}]);