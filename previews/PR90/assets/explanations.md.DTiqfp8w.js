import{_ as e,c as t,o as a,a7 as o}from"./chunks/framework.DLfER94n.js";const f=JSON.parse('{"title":"Explanation of design decisions","description":"","frontmatter":{},"headers":[],"relativePath":"explanations.md","filePath":"explanations.md","lastUpdated":null}'),s={name:"explanations.md"},i=o('<h1 id="Explanation-of-design-decisions" tabindex="-1">Explanation of design decisions <a class="header-anchor" href="#Explanation-of-design-decisions" aria-label="Permalink to &quot;Explanation of design decisions {#Explanation-of-design-decisions}&quot;">​</a></h1><p>This page of the documentation is not targeted at teaching folks how to use this package. Instead, it is designed to offer insight into how the the internals work, why I made certain design decisions. That said, it certainly won&#39;t hurt your user experience to read this!</p><div class="warning custom-block"><p class="custom-block-title">This is not part of the API</p><p>The things listed on this page are true (or should be fixed) but are not guarantees. They may change in future 1.x releases.</p></div><h2 id="Why-the-name-&quot;Chairmarks.jl&quot;?" tabindex="-1">Why the name &quot;Chairmarks.jl&quot;? <a class="header-anchor" href="#Why-the-name-&quot;Chairmarks.jl&quot;?" aria-label="Permalink to &quot;Why the name &quot;Chairmarks.jl&quot;? {#Why-the-name-&quot;Chairmarks.jl&quot;?}&quot;">​</a></h2><p>The obvious and formulaic choice, <a href="https://github.com/johnmyleswhite/Benchmarks.jl" target="_blank" rel="noreferrer">Benchmarks.jl</a>, was taken. This package is very similar to Benchmarks.jl and BenchmarkTools.jl, but has a significantly different implementation and a distinct API. When differentiating multiple similar things, I prefer distinctive names over synonyms or different parts of speech. The difference between the names should, if possible, reflect the difference in the concepts. If that&#39;s not possible, it should be clear that the difference between the names does not reflect the difference between concepts. This rules out most names like &quot;Benchmarker.jl&quot;, &quot;Benchmarking.jl&quot;, &quot;BenchmarkSystem.jl&quot;, etc. I could have chosen &quot;EfficientBenchmarks.jl&quot;, but that is pretty pretentious and also would become misleading if &quot;BenchmarkTools.jl&quot; becomes more efficient in the future.</p><p>Ultimately, I decided to follow Julia&#39;s <a href="https://docs.julialang.org/en/v1.12-dev/tutorials/creating-packages/#Package-naming-guidelines" target="_blank" rel="noreferrer">package naming conventions</a> and heed the advice that</p><blockquote><p>A less systematic name may suit a package that implements one of several possible approaches to its domain.</p></blockquote><h2 id="How-is-this-faster-than-BenchmarkTools?" tabindex="-1">How is this faster than BenchmarkTools? <a class="header-anchor" href="#How-is-this-faster-than-BenchmarkTools?" aria-label="Permalink to &quot;How is this faster than BenchmarkTools? {#How-is-this-faster-than-BenchmarkTools?}&quot;">​</a></h2><p>A few reasons</p><ul><li><p>Chairmarks doesn&#39;t run garbage collection at the start of every benchmark by default</p></li><li><p>Chairmarks has faster and more efficient auto-tuning</p></li><li><p>Chairmarks runs its arguments as functions in the scope that the benchmark was invoked from, rather than <code>eval</code>ing them at global scope. This makes it possible to get significant performance speedups for fast benchmarks by putting the benchmarking itself into a function. It also avoids leaking memory on repeated invocations of a benchmark, which is unavoidable with BenchmarkTools.jl&#39;s design. (<a href="https://discourse.julialang.org/t/memory-leak-with-benchmarktools/31282" target="_blank" rel="noreferrer">discourse</a>, <a href="https://github.com/JuliaCI/BenchmarkTools.jl/issues/339" target="_blank" rel="noreferrer">github</a>)</p></li><li><p>Because Charimarks does not use toplevel eval, it can run arbitrarily quickly, as limited by a user&#39;s noise tolerance. Consequently, the auto-tuning algorithm is tuned for low runtime budgets in addition to high budgets so its precision doesn&#39;t degrade too much at low runtime budgets.</p></li><li><p>Chairmarks tries very hard not to discard data. For example, if your function takes longer to evaluate then the runtime budget, Chairmarks will simply report the warmup runtime (with a disclaimer that there was no warmup). This makes Chairmarks a viable complete substitute for the trivial <code>@time</code> macro and friends. <code>@b sleep(10)</code> takes 10.05 seconds (just like <code>@time sleep(10)</code>), whereas <code>@benchmark sleep(10)</code> takes 30.6 seconds despite only reporting one sample.</p></li></ul><h2 id="Is-this-as-stable/reliable-as-BenchmarkTools?" tabindex="-1">Is this as stable/reliable as BenchmarkTools? <a class="header-anchor" href="#Is-this-as-stable/reliable-as-BenchmarkTools?" aria-label="Permalink to &quot;Is this as stable/reliable as BenchmarkTools? {#Is-this-as-stable/reliable-as-BenchmarkTools?}&quot;">​</a></h2><p>When comparing <code>@b</code> to <code>@btime</code> with <code>seconds=.5</code> or more, yes: result stability should be comparable. Any deficiency in precision or reliability compared to BenchmarkTools is a problem and should be reported. When <code>seconds</code> is less than about <code>0.5</code>, BenchmarkTools stops respecting the requested runtime budget and so it could very well perform much more precisely than Chairmarks (it&#39;s hard to compete with a 500ms benchmark when you only have 1ms). In practice, however, Chairmarks stays pretty reliable even for fairly low runtimes.</p><h2 id="How-does-tuning-work?" tabindex="-1">How does tuning work? <a class="header-anchor" href="#How-does-tuning-work?" aria-label="Permalink to &quot;How does tuning work? {#How-does-tuning-work?}&quot;">​</a></h2><p>First of all, what is &quot;tuning&quot; for? It&#39;s for tuning the number of evaluations per sample. We want the total runtime of a sample to be 30μs, which makes the noise of instrumentation itself (clock precision, the time to takes to record performance counters, etc.) negligible. If the user specifies <code>evals</code> manually, then there is nothing to tune, so we do a single warmup and then jump straight to the benchmark. In the benchmark, we run samples until the time budget or sample budget is exhausted.</p><p>If <code>evals</code> is not provided and <code>seconds</code> is (by default we have <code>seconds=0.1</code>), then we target spending 5% of the time budget on calibration. We have a multi-phase approach where we start by running the function just once, use that to decide the order of the benchmark and how much additional calibration is needed. See <a href="https://github.com/LilithHafner/Chairmarks.jl/blob/main/src/benchmarking.jl" target="_blank" rel="noreferrer">https://github.com/LilithHafner/Chairmarks.jl/blob/main/src/benchmarking.jl</a> for details.</p><h2 id="Why-Chairmarks-uses-soft-semantic-versioning" tabindex="-1">Why Chairmarks uses soft semantic versioning <a class="header-anchor" href="#Why-Chairmarks-uses-soft-semantic-versioning" aria-label="Permalink to &quot;Why Chairmarks uses soft semantic versioning {#Why-Chairmarks-uses-soft-semantic-versioning}&quot;">​</a></h2><p>We prioritize human experience (both user and developer) over formal guarantees. Where formal guarantees improve the experience of folks using this package, we will try to make and adhere to them. Under both soft and traditional semantic versioning, the version number is primarily used to communicate to users whether a release is breaking. If Chairmarks had an infinite number of users, all of whom respected the formal API by only depending on formally documented behavior, then soft semantic versioning would be equivalent to traditional semantic versioning. However, as the user base differs from that theoretical ideal, so too does the most effective way of communicating which releases are breaking. For example, if version 1.1.0 documents that &quot;the default runtime is 0.1 seconds&quot; and a new version allows users to control this with a global variable, then that change does break the guarantee that the default runtime is 0.1 seconds. However, it still makes sense to release as 1.2.0 rather than 2.0.0 because it is less disruptive to users to have that technical breakage than to have to review the changelog for breakage and decide whether to update their compatibility statements or not.</p>',17),n=[i];function r(h,l,c,d,m,u){return a(),t("div",null,n)}const b=e(s,[["render",r]]);export{f as __pageData,b as default};
