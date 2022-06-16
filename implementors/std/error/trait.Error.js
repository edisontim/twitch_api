(function() {var implementors = {};
implementors["twitch_api"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/helix/subscriptions/get_broadcaster_subscriptions/enum.BroadcasterSubscriptionPointsError.html\" title=\"enum twitch_api::helix::subscriptions::get_broadcaster_subscriptions::BroadcasterSubscriptionPointsError\">BroadcasterSubscriptionPointsError</a>","synthetic":false,"types":["twitch_api::helix::endpoints::subscriptions::get_broadcaster_subscriptions::BroadcasterSubscriptionPointsError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/helix/enum.ClientRequestError.html\" title=\"enum twitch_api::helix::ClientRequestError\">ClientRequestError</a>&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["twitch_api::helix::request::errors::ClientRequestError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/helix/enum.CreateRequestError.html\" title=\"enum twitch_api::helix::CreateRequestError\">CreateRequestError</a>","synthetic":false,"types":["twitch_api::helix::request::errors::CreateRequestError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/helix/enum.InvalidUri.html\" title=\"enum twitch_api::helix::InvalidUri\">InvalidUri</a>","synthetic":false,"types":["twitch_api::helix::request::errors::InvalidUri"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/helix/enum.HelixRequestGetError.html\" title=\"enum twitch_api::helix::HelixRequestGetError\">HelixRequestGetError</a>","synthetic":false,"types":["twitch_api::helix::request::errors::HelixRequestGetError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/helix/enum.HelixRequestPutError.html\" title=\"enum twitch_api::helix::HelixRequestPutError\">HelixRequestPutError</a>","synthetic":false,"types":["twitch_api::helix::request::errors::HelixRequestPutError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/helix/enum.HelixRequestPostError.html\" title=\"enum twitch_api::helix::HelixRequestPostError\">HelixRequestPostError</a>","synthetic":false,"types":["twitch_api::helix::request::errors::HelixRequestPostError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/helix/enum.HelixRequestPatchError.html\" title=\"enum twitch_api::helix::HelixRequestPatchError\">HelixRequestPatchError</a>","synthetic":false,"types":["twitch_api::helix::request::errors::HelixRequestPatchError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/helix/enum.HelixRequestDeleteError.html\" title=\"enum twitch_api::helix::HelixRequestDeleteError\">HelixRequestDeleteError</a>","synthetic":false,"types":["twitch_api::helix::request::errors::HelixRequestDeleteError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/helix/request/errors/enum.SerializeError.html\" title=\"enum twitch_api::helix::request::errors::SerializeError\">Error</a>","synthetic":false,"types":["twitch_api::helix::ser::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/helix/enum.BodyError.html\" title=\"enum twitch_api::helix::BodyError\">BodyError</a>","synthetic":false,"types":["twitch_api::helix::BodyError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/tmi/enum.RequestError.html\" title=\"enum twitch_api::tmi::RequestError\">RequestError</a>&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;RE&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["twitch_api::tmi::RequestError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/eventsub/enum.PayloadParseError.html\" title=\"enum twitch_api::eventsub::PayloadParseError\">PayloadParseError</a>","synthetic":false,"types":["twitch_api::eventsub::PayloadParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/client/enum.UreqError.html\" title=\"enum twitch_api::client::UreqError\">UreqError</a>","synthetic":false,"types":["twitch_api::client::ureq_impl::UreqError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/client/enum.SurfError.html\" title=\"enum twitch_api::client::SurfError\">SurfError</a>","synthetic":false,"types":["twitch_api::client::surf_impl::SurfError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/client/enum.ReqwestClientDefaultError.html\" title=\"enum twitch_api::client::ReqwestClientDefaultError\">ReqwestClientDefaultError</a>","synthetic":false,"types":["twitch_api::client::reqwest_impl::ReqwestClientDefaultError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"twitch_api/client/struct.DummyHttpClient.html\" title=\"struct twitch_api::client::DummyHttpClient\">DummyHttpClient</a>","synthetic":false,"types":["twitch_api::client::DummyHttpClient"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/client/enum.CompatError.html\" title=\"enum twitch_api::client::CompatError\">CompatError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["twitch_api::client::CompatError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_api/enum.DeserError.html\" title=\"enum twitch_api::DeserError\">DeserError</a>","synthetic":false,"types":["twitch_api::DeserError"]}];
implementors["twitch_oauth2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_oauth2/client/enum.SurfError.html\" title=\"enum twitch_oauth2::client::SurfError\">SurfError</a>","synthetic":false,"types":["twitch_oauth2::client::SurfError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"twitch_oauth2/id/struct.TwitchTokenErrorResponse.html\" title=\"struct twitch_oauth2::id::TwitchTokenErrorResponse\">TwitchTokenErrorResponse</a>","synthetic":false,"types":["twitch_oauth2::id::TwitchTokenErrorResponse"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.AppAccessTokenError.html\" title=\"enum twitch_oauth2::tokens::errors::AppAccessTokenError\">AppAccessTokenError</a>&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["twitch_oauth2::tokens::errors::AppAccessTokenError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.ValidationError.html\" title=\"enum twitch_oauth2::tokens::errors::ValidationError\">ValidationError</a>&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["twitch_oauth2::tokens::errors::ValidationError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.RevokeTokenError.html\" title=\"enum twitch_oauth2::tokens::errors::RevokeTokenError\">RevokeTokenError</a>&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["twitch_oauth2::tokens::errors::RevokeTokenError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.RefreshTokenError.html\" title=\"enum twitch_oauth2::tokens::errors::RefreshTokenError\">RefreshTokenError</a>&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["twitch_oauth2::tokens::errors::RefreshTokenError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.UserTokenExchangeError.html\" title=\"enum twitch_oauth2::tokens::errors::UserTokenExchangeError\">UserTokenExchangeError</a>&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.ValidationError.html\" title=\"enum twitch_oauth2::tokens::errors::ValidationError\">ValidationError</a>&lt;RE&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["twitch_oauth2::tokens::errors::UserTokenExchangeError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.ImplicitUserTokenExchangeError.html\" title=\"enum twitch_oauth2::tokens::errors::ImplicitUserTokenExchangeError\">ImplicitUserTokenExchangeError</a>&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.ValidationError.html\" title=\"enum twitch_oauth2::tokens::errors::ValidationError\">ValidationError</a>&lt;RE&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["twitch_oauth2::tokens::errors::ImplicitUserTokenExchangeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_oauth2/enum.RequestParseError.html\" title=\"enum twitch_oauth2::RequestParseError\">RequestParseError</a>","synthetic":false,"types":["twitch_oauth2::RequestParseError"]}];
implementors["twitch_types"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_types/stream/enum.CommercialLengthParseError.html\" title=\"enum twitch_types::stream::CommercialLengthParseError\">CommercialLengthParseError</a>","synthetic":false,"types":["twitch_types::stream::CommercialLengthParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"twitch_types/time/enum.TimestampParseError.html\" title=\"enum twitch_types::time::TimestampParseError\">TimestampParseError</a>","synthetic":false,"types":["twitch_types::time::TimestampParseError"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()