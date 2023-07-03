import { atom } from "recoil";

export const DefaultPosts = atom({
  key: "Post",
  default: [
    {
      id: 1,
      name: "John Abraham",
      handlerName: "@john",
      organization: "Fitness Icon",
      profilePic:
        "https://th.bing.com/th/id/OIP.oOqkJD0_I8K8VIqng7UR_wHaFj?pid=ImgDet&rs=1",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
      tweets: [
        {
          tweetText: "keep going",
          tweetPic: "https://timesofindia.indiatimes.com/thumb/msid-65354755,imgsize-119106,width-800,height-600,resizemode-4/65354755.jpg",
          commentText: "keep going",
          tweetCount: 100,
          retweetCount: 100,
          likesCount: 100,
          viewsCount: "102k",
          TweetReplies: [
            {
              name: "john abraham",
              handlerName: "john",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              name: "Ancient One",
              handlerName: "@Ancient1",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Hritik Roshan",
      handlerName: "@HRX23",
      profilePic:
        "https://th.bing.com/th/id/OIP.unfjgNTcXj-NFKuZemyQTgHaL2?pid=ImgDet&rs=1",
      organization: "",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
      tweets: [
        {
          tweetText: "I have everything under control.",
          tweetPic:
            "https://images6.alphacoders.com/936/936524.jpg",
          commentText: "I have everything under control.",
          tweetCount: 200,
          retweetCount: 200,
          likesCount: 200,
          viewsCount: "10k",
          hastags: ["#wildLife", "#photoGraphy"],
          TweetReplies: [
            {
              name: "Victor Shade",
              handlerName: "@TheVision",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              name: "Pietro Maximoff",
              handlerName: "@MaximoffPietro",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "kiara advani",
      handlerName: "@kiara43",
      profilePic:
        "https://1.bp.blogspot.com/-yFokkKe1Bm0/XyahKuUF5FI/AAAAAAAACfc/ifK_gNL-zycdCczF7YnMyJtfAVG_DVziACLcBGAsYHQ/s1600/a862615ab535f273a7c317f5b6ca734b.jpg",
      organization: "",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
      tweets: [
        {
          tweetText: "kiara advani",
          tweetPic: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/02/07/2571337-untitled-design-2023-02-07t224926.366.jpg",
          commentText: "saddi hogayi #realwalapic with sid",

          tweetCount: 700,
          retweetCount: 700,
          likesCount: 900,
          viewsCount: "100k",
          refLink: "https://www.globalwildlife.org/blog/",
          TweetReplies: [
            {
              name: "Peter One",
              handlerName: "@Peter1",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              name: "Peter Two",
              handlerName: "@Peter2",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Hritik Rosan",
      handlerName: "@hrx23",
      profilePic:
        "https://th.bing.com/th/id/OIP.unfjgNTcXj-NFKuZemyQTgHaL2?pid=ImgDet&rs=1",
      organization: "greek god",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
      tweets: [
        {
          tweetText: "Trust me, I didn't do anything.",
          tweetPic:
            "https://wallpaperaccess.com/full/1329297.jpg",
          commentText: "Trust me, I didn't do anything.",

          tweetCount: 400,
          retweetCount: 327,
          likesCount: 90,
          viewsCount: "7k",
          hastags: ["#sports", "#Winners"],
          TweetReplies: [
            {
              name: "Sylvie Laufeydottir",
              handlerName: "@LadyLoki",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              name: "Alligator Loki",
              handlerName: "@GatorLoki",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name:"Sidharth malhotra",
      handlerName: "@sid45",
      profilePic:
        "https://th.bing.com/th/id/OIP.29bnAuYTf9TBCueaaoKN0QHaFD?pid=ImgDet&rs=1",
      organization: "",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
      tweets: [
        {
          tweetText: "You should know, I'm a better shot when I'm pissed off.",
          tweetPic:
            "https://wallsdesk.com/wp-content/uploads/2016/12/Sidharth-Malhotra-Wallpapers-HD.jpg",
          commentText:
            "You should know, I'm a better shot when I'm pissed off.",

          tweetCount: 650,
          retweetCount: 699,
          likesCount: 900,
          viewsCount: "17k",
          hastags: ["#HockeyLover", "#Hockey", "#Team India"],
          TweetReplies: [
            {
              name: "Yelena Belova",
              handlerName: "@ЕленаБелова",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              name: "Clint Barton",
              handlerName: "@Hawkeye",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        },
      ],
    },
  ],
});
