import{_ as i,c as a,a5 as t,o as n}from"./chunks/framework.CE-xSlod.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"why.md","filePath":"why.md","lastUpdated":null}'),h={name:"why.md"};function l(e,s,k,p,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h2 id="precise" tabindex="-1">Precise <a class="header-anchor" href="#precise" aria-label="Permalink to &quot;Precise&quot;">​</a></h2><p>Capable of detecting 1% difference in runtime in ideal conditions</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f (generic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> with </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> method)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.074</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.075</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.076</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.086</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.087</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.087</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs</span></span></code></pre></div><h2 id="efficient" tabindex="-1">Efficient <a class="header-anchor" href="#efficient" aria-label="Permalink to &quot;Efficient&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:right;"></th><th style="text-align:right;">Chairmarks</th><th style="text-align:right;">BenchmarkTools</th><th style="text-align:right;">Ratio</th></tr></thead><tbody><tr><td style="text-align:right;">TTFX</td><td style="text-align:right;">3.4s</td><td style="text-align:right;">13.4s</td><td style="text-align:right;">4x</td></tr><tr><td style="text-align:right;">TTFX excluding precompilation</td><td style="text-align:right;">43ms</td><td style="text-align:right;">1118ms</td><td style="text-align:right;">26x</td></tr><tr><td style="text-align:right;">Load time</td><td style="text-align:right;">4.2ms</td><td style="text-align:right;">131ms</td><td style="text-align:right;">31x</td></tr><tr><td style="text-align:right;">minimum runtime</td><td style="text-align:right;">34μs</td><td style="text-align:right;">459ms</td><td style="text-align:right;">13,500x</td></tr><tr><td style="text-align:right;">default runtime</td><td style="text-align:right;">0.1s</td><td style="text-align:right;">5s</td><td style="text-align:right;">50x</td></tr><tr><td style="text-align:right;">proportion of time spent benchmarking</td><td style="text-align:right;">90%-99%</td><td style="text-align:right;">13%-65%</td><td style="text-align:right;">1.5-7x</td></tr></tbody></table><p>See <a href="https://github.com/LilithHafner/Chairmarks.jl/blob/main/contrib/ttfx_rm_rf_julia.sh" target="_blank" rel="noreferrer">https://github.com/LilithHafner/Chairmarks.jl/blob/main/contrib/ttfx_rm_rf_julia.sh</a> for methodology on the first four entries and <a href="https://github.com/LilithHafner/Chairmarks.jl/blob/main/contrib/efficiency.jl" target="_blank" rel="noreferrer">https://github.com/LilithHafner/Chairmarks.jl/blob/main/contrib/efficiency.jl</a> for the last.</p><h2 id="concise" tabindex="-1">Concise <a class="header-anchor" href="#concise" aria-label="Permalink to &quot;Concise&quot;">​</a></h2><p>Chairmarks uses a concise pipeline syntax to define benchmarks. When providing a single argument, that argument is automatically wrapped in a function for higher performance and executed</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> allocs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.625</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KiB)</span></span></code></pre></div><p>When providing two arguments, the first is setup code and only the runtime of the second is measured</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) sort</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.018</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> allocs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.750</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KiB)</span></span></code></pre></div><p>You may use <code>_</code> in the later arguments to refer to the output of previous arguments</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_, by</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> exp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.521</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> allocs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.750</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KiB)</span></span></code></pre></div><p>A third argument can run a &quot;teardown&quot; function to integrate testing into the benchmark and ensure that the benchmarked code is behaving correctly</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_, by</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> exp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">issorted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ERROR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Stacktrace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_, by</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> exp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">issorted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_, rev</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.358</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> allocs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.750</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KiB)</span></span></code></pre></div><p>See <a href="/previews/PR115/reference#Chairmarks.@b"><code>@b</code></a> for more info</p><h2 id="truthful" tabindex="-1">Truthful <a class="header-anchor" href="#truthful" aria-label="Permalink to &quot;Truthful&quot;">​</a></h2><p>Chairmarks automatically computes a checksum based on the results of the provided computations, and returns that checksum to the user along with benchmark results. This makes it impossible for the compiler to elide any part of the computation that has an impact on its return value.</p><p>While the checksums are fast, one negative side effect of this is that they add a bit of overhead to the measured runtime, and that overhead can vary depending on the function being benchmarked. These checksums are performed by computing a map over the returned values and a reduction over those mapped values. You can disable this by passing the <code>checksum=false</code> keyword argument, possibly in combination with a custom teardown function that verifies computation results. Be aware that as the compiler improves, it may become better at eliding benchmarks whose results are not saved.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.713</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ns</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.135</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ns</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> checksum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ns</span></span></code></pre></div><p>You may experiment with custom reductions using the internal <code>_map</code> and <code>_reduction</code> keyword arguments. The default maps and reductions (<code>Chairmarks.default_map</code> and <code>Chairmarks.default_reduction</code>) are internal and subject to change and/or removal in the future.</p><h2 id="Innate-qualities" tabindex="-1">Innate qualities <a class="header-anchor" href="#Innate-qualities" aria-label="Permalink to &quot;Innate qualities {#Innate-qualities}&quot;">​</a></h2><p>Chairmarks is inherently narrower than BenchmarkTools by construction. It also has more reliable back support. Back support is a defining feature of chairs while benches are known to sometimes lack back support.</p>`,23)]))}const y=i(h,[["render",l]]);export{g as __pageData,y as default};
