(function() {var type_impls = {
"twitch_api":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Body-for-Request%3CB%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/http-body/1.0.0/src/http_body/lib.rs.html#136\">source</a><a href=\"#impl-Body-for-Request%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; <a class=\"trait\" href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> for <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Data\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Data\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html#associatedtype.Data\" class=\"associatedtype\">Data</a> = &lt;B as <a class=\"trait\" href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a></h4></section></summary><div class='docblock'>Values yielded by the <code>Body</code>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = &lt;B as <a class=\"trait\" href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a></h4></section></summary><div class='docblock'>The error type this <code>Body</code> might generate.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_frame\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http-body/1.0.0/src/http_body/lib.rs.html#140-143\">source</a><a href=\"#method.poll_frame\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html#tymethod.poll_frame\" class=\"fn\">poll_frame</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http-body/1.0.0/http_body/frame/struct.Frame.html\" title=\"struct http_body::frame::Frame\">Frame</a>&lt;&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt; as <a class=\"trait\" href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>&gt;, &lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt; as <a class=\"trait\" href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Attempt to pull out the next data buffer of this stream.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_end_stream\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http-body/1.0.0/src/http_body/lib.rs.html#152\">source</a><a href=\"#method.is_end_stream\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html#method.is_end_stream\" class=\"fn\">is_end_stream</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns <code>true</code> when the end of stream has been reached. <a href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html#method.is_end_stream\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http-body/1.0.0/src/http_body/lib.rs.html#156\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/http-body/1.0.0/http_body/size_hint/struct.SizeHint.html\" title=\"struct http_body::size_hint::SizeHint\">SizeHint</a></h4></section></summary><div class='docblock'>Returns the bounds on the remaining length of the stream. <a href=\"https://docs.rs/http-body/1.0.0/http_body/trait.Body.html#method.size_hint\">Read more</a></div></details></div></details>","Body","twitch_api::client::Request"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Request%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#157\">source</a><a href=\"#impl-Clone-for-Request%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#157\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","twitch_api::client::Request"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Request%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#696\">source</a><a href=\"#impl-Debug-for-Request%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#697\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","twitch_api::client::Request"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Request%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#690\">source</a><a href=\"#impl-Default-for-Request%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#691\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","twitch_api::client::Request"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Request%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#418\">source</a><a href=\"#impl-Request%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#434\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.new\" class=\"fn\">new</a>(body: T) -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new blank <code>Request</code> with the body</p>\n<p>The component parts of this request will be set to their default, e.g.\nthe GET method, no headers, etc.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request = Request::new(<span class=\"string\">\"hello world\"</span>);\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.method(), Method::GET);\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.body(), <span class=\"string\">\"hello world\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_parts\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#454\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.from_parts\" class=\"fn\">from_parts</a>(parts: <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Parts.html\" title=\"struct http::request::Parts\">Parts</a>, body: T) -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>Request</code> with the given components parts and body.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request = Request::new(<span class=\"string\">\"hello world\"</span>);\n<span class=\"kw\">let </span>(<span class=\"kw-2\">mut </span>parts, body) = request.into_parts();\nparts.method = Method::POST;\n\n<span class=\"kw\">let </span>request = Request::from_parts(parts, body);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.method\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#468\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.method\" class=\"fn\">method</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/method/struct.Method.html\" title=\"struct http::method::Method\">Method</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated HTTP method.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.method(), Method::GET);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.method_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#483\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.method_mut\" class=\"fn\">method_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/method/struct.Method.html\" title=\"struct http::method::Method\">Method</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated HTTP method.</p>\n<h5 id=\"examples-3\"><a class=\"doc-anchor\" href=\"#examples-3\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"kw-2\">*</span>request.method_mut() = Method::PUT;\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.method(), Method::PUT);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.uri\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#497\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.uri\" class=\"fn\">uri</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/uri/struct.Uri.html\" title=\"struct http::uri::Uri\">Uri</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated URI.</p>\n<h5 id=\"examples-4\"><a class=\"doc-anchor\" href=\"#examples-4\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.uri(), <span class=\"kw-2\">*</span><span class=\"string\">\"/\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.uri_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#512\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.uri_mut\" class=\"fn\">uri_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/uri/struct.Uri.html\" title=\"struct http::uri::Uri\">Uri</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated URI.</p>\n<h5 id=\"examples-5\"><a class=\"doc-anchor\" href=\"#examples-5\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"kw-2\">*</span>request.uri_mut() = <span class=\"string\">\"/hello\"</span>.parse().unwrap();\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.uri(), <span class=\"kw-2\">*</span><span class=\"string\">\"/hello\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.version\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#526\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.version\" class=\"fn\">version</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/version/struct.Version.html\" title=\"struct http::version::Version\">Version</a></h4></section></summary><div class=\"docblock\"><p>Returns the associated version.</p>\n<h5 id=\"examples-6\"><a class=\"doc-anchor\" href=\"#examples-6\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"macro\">assert_eq!</span>(request.version(), Version::HTTP_11);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.version_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#541\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.version_mut\" class=\"fn\">version_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/version/struct.Version.html\" title=\"struct http::version::Version\">Version</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated version.</p>\n<h5 id=\"examples-7\"><a class=\"doc-anchor\" href=\"#examples-7\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"kw-2\">*</span>request.version_mut() = Version::HTTP_2;\n<span class=\"macro\">assert_eq!</span>(request.version(), Version::HTTP_2);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.headers\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#555\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.headers\" class=\"fn\">headers</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/header/map/struct.HeaderMap.html\" title=\"struct http::header::map::HeaderMap\">HeaderMap</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated header field map.</p>\n<h5 id=\"examples-8\"><a class=\"doc-anchor\" href=\"#examples-8\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"macro\">assert!</span>(request.headers().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.headers_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#571\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.headers_mut\" class=\"fn\">headers_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/header/map/struct.HeaderMap.html\" title=\"struct http::header::map::HeaderMap\">HeaderMap</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated header field map.</p>\n<h5 id=\"examples-9\"><a class=\"doc-anchor\" href=\"#examples-9\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;()&gt; = Request::default();\nrequest.headers_mut().insert(HOST, HeaderValue::from_static(<span class=\"string\">\"world\"</span>));\n<span class=\"macro\">assert!</span>(!request.headers().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extensions\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#585\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.extensions\" class=\"fn\">extensions</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/extensions/struct.Extensions.html\" title=\"struct http::extensions::Extensions\">Extensions</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated extensions.</p>\n<h5 id=\"examples-10\"><a class=\"doc-anchor\" href=\"#examples-10\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"macro\">assert!</span>(request.extensions().get::&lt;i32&gt;().is_none());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extensions_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#601\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.extensions_mut\" class=\"fn\">extensions_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/extensions/struct.Extensions.html\" title=\"struct http::extensions::Extensions\">Extensions</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated extensions.</p>\n<h5 id=\"examples-11\"><a class=\"doc-anchor\" href=\"#examples-11\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;()&gt; = Request::default();\nrequest.extensions_mut().insert(<span class=\"string\">\"hello\"</span>);\n<span class=\"macro\">assert_eq!</span>(request.extensions().get(), <span class=\"prelude-val\">Some</span>(<span class=\"kw-2\">&amp;</span><span class=\"string\">\"hello\"</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.body\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#615\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.body\" class=\"fn\">body</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated HTTP body.</p>\n<h5 id=\"examples-12\"><a class=\"doc-anchor\" href=\"#examples-12\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;String&gt; = Request::default();\n<span class=\"macro\">assert!</span>(request.body().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.body_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#630\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.body_mut\" class=\"fn\">body_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated HTTP body.</p>\n<h5 id=\"examples-13\"><a class=\"doc-anchor\" href=\"#examples-13\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;String&gt; = Request::default();\nrequest.body_mut().push_str(<span class=\"string\">\"hello world\"</span>);\n<span class=\"macro\">assert!</span>(!request.body().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_body\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#645\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.into_body\" class=\"fn\">into_body</a>(self) -&gt; T</h4></section></summary><div class=\"docblock\"><p>Consumes the request, returning just the body.</p>\n<h5 id=\"examples-14\"><a class=\"doc-anchor\" href=\"#examples-14\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request = Request::new(<span class=\"number\">10</span>);\n<span class=\"kw\">let </span>body = request.into_body();\n<span class=\"macro\">assert_eq!</span>(body, <span class=\"number\">10</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_parts\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#660\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.into_parts\" class=\"fn\">into_parts</a>(self) -&gt; (<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Parts.html\" title=\"struct http::request::Parts\">Parts</a>, T)</h4></section></summary><div class=\"docblock\"><p>Consumes the request returning the head and body parts.</p>\n<h5 id=\"examples-15\"><a class=\"doc-anchor\" href=\"#examples-15\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request = Request::new(());\n<span class=\"kw\">let </span>(parts, body) = request.into_parts();\n<span class=\"macro\">assert_eq!</span>(parts.method, Method::GET);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.11/src/http/request.rs.html#679-681\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html#tymethod.map\" class=\"fn\">map</a>&lt;F, U&gt;(self, f: F) -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;U&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T) -&gt; U,</div></h4></section></summary><div class=\"docblock\"><p>Consumes the request returning a new request with body mapped to the\nreturn type of the passed in function.</p>\n<h5 id=\"examples-16\"><a class=\"doc-anchor\" href=\"#examples-16\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request = Request::builder().body(<span class=\"string\">\"some string\"</span>).unwrap();\n<span class=\"kw\">let </span>mapped_request: Request&lt;<span class=\"kw-2\">&amp;</span>[u8]&gt; = request.map(|b| {\n  <span class=\"macro\">assert_eq!</span>(b, <span class=\"string\">\"some string\"</span>);\n  b.as_bytes()\n});\n<span class=\"macro\">assert_eq!</span>(mapped_request.body(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"some string\"</span>.as_bytes());</code></pre></div>\n</div></details></div></details>",0,"twitch_api::client::Request"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()