## Component Hierarchy

+ AuthForm

+ App
  - Sidebar
    * SidebarCollectionIndex
      * SidebarCollectionIndexItem
  - MiddlePage
    * TodayIndex
      * TodayIndexHeader
      * TodayIndexItem
    * CollectionIndex
      * CollectionIndexItem
      * CollectionFeedIndex
        * CollectionFeedIndexItem
    * FeedIndex
      * FeedIndexHeader
      * FeedIndexItem
  - RightPop
    * FeedDetail
      * FeedHeader
      * FeedTodayIndex
        * FeedTodayIndexItem
    * ArticleDetail
  - AddFeedSidebar
    * AddFeedCollectionIndex
      * AddFeedCollectionIndexItem

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "App" |
| "/today" | "TodayIndex" |
| "/feeds" | "FeedIndex" |
| "/feeds/:feedId" | "FeedIndexItem" |
| "/collections/:collectionId" | "CollectionIndex" |
| "/articles/:articleId" | "ArticleDetail" |
