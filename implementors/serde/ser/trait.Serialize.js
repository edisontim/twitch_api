(function() {var implementors = {};
implementors["twitch_api2"] = [{"text":"impl Serialize for SubscriptionTier","synthetic":false,"types":[]},{"text":"impl Serialize for BroadcasterType","synthetic":false,"types":[]},{"text":"impl Serialize for UserType","synthetic":false,"types":[]},{"text":"impl Serialize for VideoPeriod","synthetic":false,"types":[]},{"text":"impl Serialize for VideoType","synthetic":false,"types":[]},{"text":"impl Serialize for VideoPrivacy","synthetic":false,"types":[]},{"text":"impl Serialize for CommercialLength","synthetic":false,"types":[]},{"text":"impl Serialize for User","synthetic":false,"types":[]},{"text":"impl Serialize for Image","synthetic":false,"types":[]},{"text":"impl Serialize for GlobalCooldown","synthetic":false,"types":[]},{"text":"impl Serialize for Max","synthetic":false,"types":[]},{"text":"impl Serialize for GetBitsLeaderboardRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetCheermotesRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetChannelInformationRequest","synthetic":false,"types":[]},{"text":"impl Serialize for ModifyChannelInformationRequest","synthetic":false,"types":[]},{"text":"impl Serialize for ModifyChannelInformationBody","synthetic":false,"types":[]},{"text":"impl Serialize for StartCommercialRequest","synthetic":false,"types":[]},{"text":"impl Serialize for StartCommercialBody","synthetic":false,"types":[]},{"text":"impl Serialize for GetClipsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for Clip","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;EventSubscription&gt; Serialize for CreateEventSubSubscriptionRequest&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;EventSubscription&gt; Serialize for CreateEventSubSubscriptionBody&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;EventSubscription&gt; Serialize for CreateEventSubSubscription&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for DeleteEventSubSubscriptionRequest","synthetic":false,"types":[]},{"text":"impl Serialize for DeleteEventSubSubscription","synthetic":false,"types":[]},{"text":"impl Serialize for GetEventSubSubscriptionsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetGamesRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetTopGamesRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetHypeTrainEventsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for ContributionType","synthetic":false,"types":[]},{"text":"impl Serialize for Contribution","synthetic":false,"types":[]},{"text":"impl Serialize for CheckAutoModStatusRequest","synthetic":false,"types":[]},{"text":"impl Serialize for CheckAutoModStatusBody","synthetic":false,"types":[]},{"text":"impl Serialize for GetBannedEventsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetBannedUsersRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetModeratorEventsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetModeratorsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetCustomRewardRedemptionRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateRedemptionStatusRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateRedemptionStatusBody","synthetic":false,"types":[]},{"text":"impl Serialize for CustomRewardRedemptionStatus","synthetic":false,"types":[]},{"text":"impl Serialize for SearchCategoriesRequest","synthetic":false,"types":[]},{"text":"impl Serialize for SearchChannelsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetStreamTagsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetStreamsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for Stream","synthetic":false,"types":[]},{"text":"impl Serialize for StreamType","synthetic":false,"types":[]},{"text":"impl Serialize for GetBroadcasterSubscriptionsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for BroadcasterSubscription","synthetic":false,"types":[]},{"text":"impl Serialize for GetBroadcasterSubscriptionsEventsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetAllStreamTagsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for AutoGenerated","synthetic":false,"types":[]},{"text":"impl Serialize for CreateUserFollowsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for CreateUserFollowsBody","synthetic":false,"types":[]},{"text":"impl Serialize for DeleteUserFollowsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetUsersRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetUsersFollowsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UsersFollow","synthetic":false,"types":[]},{"text":"impl Serialize for GetVideosRequest","synthetic":false,"types":[]},{"text":"impl Serialize for Sort","synthetic":false,"types":[]},{"text":"impl Serialize for VideoPeriod","synthetic":false,"types":[]},{"text":"impl Serialize for VideoTypeFilter","synthetic":false,"types":[]},{"text":"impl Serialize for GetWebhookSubscriptionsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for WebhookSubscription","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Topic&gt; Serialize for WebhookHubRequest&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Topic&gt; Serialize for WebhookHubBody&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Topic,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for WebhookSubscriptionMode","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainEventTopic","synthetic":false,"types":[]},{"text":"impl Serialize for ModeratorChangedTopic","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelBanChangeEventsTopic","synthetic":false,"types":[]},{"text":"impl Serialize for StreamChangedTopic","synthetic":false,"types":[]},{"text":"impl Serialize for SubscriptionEventsTopic","synthetic":false,"types":[]},{"text":"impl Serialize for UserChangedTopic","synthetic":false,"types":[]},{"text":"impl Serialize for UserFollowsTopic","synthetic":false,"types":[]},{"text":"impl Serialize for GetChatters","synthetic":false,"types":[]},{"text":"impl Serialize for Chatters","synthetic":false,"types":[]},{"text":"impl Serialize for GetHosts","synthetic":false,"types":[]},{"text":"impl Serialize for Host","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelBitsEventsV2","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelBitsEventsV2Reply","synthetic":false,"types":[]},{"text":"impl Serialize for BitsEventData","synthetic":false,"types":[]},{"text":"impl Serialize for BadgeEntitlement","synthetic":false,"types":[]},{"text":"impl Serialize for BitsContext","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelBitsBadgeUnlocks","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelBitsBadgeUnlocksReply","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelCheerEventsPublicV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelCheerEventsPublicV1Reply","synthetic":false,"types":[]},{"text":"impl Serialize for TriggerType","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsChannelV1","synthetic":false,"types":[]},{"text":"impl Serialize for Redemption","synthetic":false,"types":[]},{"text":"impl Serialize for RedemptionStatus","synthetic":false,"types":[]},{"text":"impl Serialize for Reward","synthetic":false,"types":[]},{"text":"impl Serialize for Progress","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsChannelV1Reply","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelSubGiftsV1","synthetic":false,"types":[]},{"text":"impl Serialize for MysteryGiftPurchase","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelSubGiftsV1Reply","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelSubscribeEventsV1","synthetic":false,"types":[]},{"text":"impl Serialize for Sub","synthetic":false,"types":[]},{"text":"impl Serialize for ReSub","synthetic":false,"types":[]},{"text":"impl Serialize for SubGift","synthetic":false,"types":[]},{"text":"impl Serialize for ResubGift","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelSubscribeEventsV1Reply","synthetic":false,"types":[]},{"text":"impl Serialize for Emote","synthetic":false,"types":[]},{"text":"impl Serialize for SubMessage","synthetic":false,"types":[]},{"text":"impl Serialize for CommunityPointsChannelV1","synthetic":false,"types":[]},{"text":"impl Serialize for Following","synthetic":false,"types":[]},{"text":"impl Serialize for FollowingReply","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainEventsV1","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainEventsV1Rewards","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainRewards","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainStart","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainEnd","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainConductorUpdate","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainProgression","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainLevelUp","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainEventsV1Reply","synthetic":false,"types":[]},{"text":"impl Serialize for Config","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainDifficulty","synthetic":false,"types":[]},{"text":"impl Serialize for Kickoff","synthetic":false,"types":[]},{"text":"impl Serialize for ParticipationConversionRates","synthetic":false,"types":[]},{"text":"impl Serialize for NotificationThresholds","synthetic":false,"types":[]},{"text":"impl Serialize for ConductorRewards","synthetic":false,"types":[]},{"text":"impl Serialize for BitsRewards","synthetic":false,"types":[]},{"text":"impl Serialize for SubsRewards","synthetic":false,"types":[]},{"text":"impl Serialize for Participations","synthetic":false,"types":[]},{"text":"impl Serialize for Conductors","synthetic":false,"types":[]},{"text":"impl Serialize for HypeTrainProgress","synthetic":false,"types":[]},{"text":"impl Serialize for Level","synthetic":false,"types":[]},{"text":"impl Serialize for Reward","synthetic":false,"types":[]},{"text":"impl Serialize for SourceType","synthetic":false,"types":[]},{"text":"impl Serialize for ActionType","synthetic":false,"types":[]},{"text":"impl Serialize for EndingReason","synthetic":false,"types":[]},{"text":"impl Serialize for ChatModeratorActions","synthetic":false,"types":[]},{"text":"impl Serialize for ModerationAction","synthetic":false,"types":[]},{"text":"impl Serialize for ModeratorAdded","synthetic":false,"types":[]},{"text":"impl Serialize for ChatModeratorActionsReply","synthetic":false,"types":[]},{"text":"impl Serialize for UnbanRequest","synthetic":false,"types":[]},{"text":"impl Serialize for ModerationActionCommand","synthetic":false,"types":[]},{"text":"impl Serialize for ModerationType","synthetic":false,"types":[]},{"text":"impl Serialize for Raid","synthetic":false,"types":[]},{"text":"impl Serialize for RaidGoV2","synthetic":false,"types":[]},{"text":"impl Serialize for RaidUpdateV2","synthetic":false,"types":[]},{"text":"impl Serialize for RaidCancelV2","synthetic":false,"types":[]},{"text":"impl Serialize for RaidReply","synthetic":false,"types":[]},{"text":"impl Serialize for VideoPlayback","synthetic":false,"types":[]},{"text":"impl Serialize for VideoPlaybackById","synthetic":false,"types":[]},{"text":"impl Serialize for VideoPlaybackReply","synthetic":false,"types":[]},{"text":"impl Serialize for Vod","synthetic":false,"types":[]},{"text":"impl Serialize for WatchpartyType","synthetic":false,"types":[]},{"text":"impl Serialize for BroadcastType","synthetic":false,"types":[]},{"text":"impl Serialize for TopicSubscribe","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelBanV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelBanV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsCustomRewardAddV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsCustomRewardAddV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsCustomRewardRemoveV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsCustomRewardRemoveV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsCustomRewardUpdateV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsCustomRewardUpdateV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsCustomRewardRedemptionAddV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsCustomRewardRedemptionAddV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsCustomRewardRedemptionUpdateV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelPointsCustomRewardRedemptionUpdateV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for Reward","synthetic":false,"types":[]},{"text":"impl Serialize for RedemptionStatus","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelCheerV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelCheerV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelFollowV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelFollowV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelHypeTrainBeginV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelHypeTrainBeginV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelHypeTrainEndV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelHypeTrainEndV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelHypeTrainProgressV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelHypeTrainProgressV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ContributionType","synthetic":false,"types":[]},{"text":"impl Serialize for Contribution","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelSubscribeV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelSubscribeV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelUnbanV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelUnbanV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelUpdateV1","synthetic":false,"types":[]},{"text":"impl Serialize for ChannelUpdateV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for StreamOfflineV1","synthetic":false,"types":[]},{"text":"impl Serialize for StreamOfflineV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for StreamOnlineV1","synthetic":false,"types":[]},{"text":"impl Serialize for StreamOnlineV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for UserAuthorizationRevokeV1","synthetic":false,"types":[]},{"text":"impl Serialize for UserAuthorizationRevokeV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for UserUpdateV1","synthetic":false,"types":[]},{"text":"impl Serialize for UserUpdateV1Payload","synthetic":false,"types":[]},{"text":"impl Serialize for VerificationRequest","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;EventSubscription&gt; Serialize for NotificationPayload&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: EventSubscription,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: EventSubscription,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;EventSubscription&gt; Serialize for EventSubscriptionInformation&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: EventSubscription,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for Transport","synthetic":false,"types":[]},{"text":"impl Serialize for TransportResponse","synthetic":false,"types":[]},{"text":"impl Serialize for TransportMethod","synthetic":false,"types":[]},{"text":"impl Serialize for EventType","synthetic":false,"types":[]},{"text":"impl Serialize for Status","synthetic":false,"types":[]},{"text":"impl Serialize for EventSubSubscription","synthetic":false,"types":[]}];
implementors["twitch_oauth2"] = [{"text":"impl&lt;EF, TT&gt; Serialize for TwitchTokenResponse&lt;EF, TT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TT: TokenType,<br>&nbsp;&nbsp;&nbsp;&nbsp;EF: ExtraTokenFields,<br>&nbsp;&nbsp;&nbsp;&nbsp;TT: TokenType,<br>&nbsp;&nbsp;&nbsp;&nbsp;EF: ExtraTokenFields,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for TwitchTokenErrorResponse","synthetic":false,"types":[]},{"text":"impl Serialize for Scope","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()