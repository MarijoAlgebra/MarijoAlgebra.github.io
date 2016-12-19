			Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,
				slideNumber: 'c/t',
				
				width: "95%",
				height: "100%",
				margin: 0,
				minScale: 1,
				maxScale: 1,

				transition: 'slide', // none/fade/slide/convex/concave/zoom

				dependencies: [
					{ src: '_reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: '_reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: '_reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: '_reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
					{ src: '_reveal/plugin/highlight/highlightjs-line-numbers.min.js', async: true, callback: function() { hljs.initLineNumbersOnLoad(); } },
					{ src: '_reveal/plugin/zoom-js/zoom.js', async: true },
					{ src: '_reveal/plugin/notes/notes.js', async: true }
				]
			});