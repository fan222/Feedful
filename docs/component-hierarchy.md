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
    * CategoryIndex
      * CategoryIndexHeader
      * CategoryIndexItem
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
| "/categories" | "CategoryIndex" |
| "/categories/:id" | "CategoryIndexItem" |
| "/collections/:collectionId" | "CollectionIndex" |
| "/feeddetail/:id" | "FeedDetail" |
| "/articles/:articleId" | "ArticleDetail" |
