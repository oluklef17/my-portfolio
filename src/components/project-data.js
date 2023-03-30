const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context("./PROJECT-DEMOS", false, /\.(png|jpe?g|svg)$/)
);

const imgPath = images.map((img) => {
  let imgMod = img.replace("/static/media/", "");
  let parts = imgMod.split(".");
  return parts[0] + "." + parts[2];
});

function getPath(short_path) {
  let pathPos = imgPath.indexOf(short_path);

  return images[pathPos];
}

console.log(getPath("api-code.png"));

export const projects = [
  {
    title: "SIGNAL PROVIDER API",
    description: `This is a Flask-based API that enables users to access trading signals from signal provider's channel  and get them automatically executed on their trading account terminals. It includes authentication and 
                  various other API endpoints that can be accessed from user trading account terminals (MT4/MT5). It includes
                  an expert advisor that copies trades directly into MT4 and MT5. It also includes an expert advisor for the client that automatically
                  sends trade updates from MT4/5 terminal to Telegram and a license manager application to manage user subscriptions. The project is designed to be highly scalable, secure, and reliable. The API endpoint is hosted on a cloud server and is capable of handling a large number of requests per second. 
                  The project has been well received by the client and his users and has helped him expand his reach and provide better trading signals to users. `,
    technicals: `Python Flask, HTML, CSS, JavaScript, SQLite, MQL4, MQL5`,
    image: getPath("api-code.png"),
    link: "https://github.com/oluklef17/Signal-Provider-API",
  },
  {
    title: "MT4 TRADING JOURNAL",
    description: `Simple trading journal app in MT4. It uses the official Telegram API, to send trade updates with trade notes and
                  chart screenshots to user's desired account id, be it personal, channel or group. This helps traders keep track of their trades
                  right from the terminal and on-the-go.`,
    technicals: `MQL4, Telegram API`,
    image: getPath("journal-img.png"),
    link: "https://github.com/oluklef17/mt4-telegram-trading-journal",
  },
  {
    title: "TELEGRAM STORE BOT",
    description: `This bot is designed to provide users with a seamless shopping experience right within the Telegram app. It can browse an entire inventory, place orders.
    Bot is easy to use and highly intuitive. Simply starting a conversation with the bot will guide users through the entire shopping process`,
    technicals: `Python, pyTelegramBotAPI`,
    image: getPath("bot-img.png"),
    link: "https://github.com/oluklef17/telegram-store-bot",
  },
  {
    title: "PROP FIRM MANAGER",
    description: `EA that manages all kinds of account risk. It can avoid trades during high impact news events, overnight and over-the-weekend
                  It manages account drawdown, both daily and overall. It is highly suitable for traders attempting to pass a prop firm evaluation
                  who find it hard to stick to the rules. It is capable of toggling autotrading and prevent trading across all EAs on the terminal`,
    technicals: `MQL4, MQL5`,
    image: getPath("mt4-account-manager.png"),
    link: "https://github.com/oluklef17/mt4-prop-firm-manager",
  },
  {
    title: "TELEGRAM COPIER",
    description: `Telegram to MT4/5 copier built in Python and MQL4/5. It automatically places trades from any user-defined signal channel
                  on any user-defined trading terminal. It removes the need for manually copying trades from signal channels and improves
                  trader execution. The project uses the Telegram API to fetch signals from Telegram and PyQt5 to display the configurable
                  user interface.`,
    technicals: `Python, MQL4, MQL5`,
    image: getPath("tg-img.png"),
    link: "https://github.com/oluklef17/telegram-mt4-signal-copier",
  },
];
