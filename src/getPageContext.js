/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/green';
import lightblue from '@material-ui/core/colors/cyan';

const titleFonts = ['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading']
const typography = Object.assign(...titleFonts.map(font => ({
  [font]: {  fontFamily: ['"Nunito"', 'Roboto', 'sans-serif'].join(',')}
})));

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: lightblue,
    secondary: amber,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: typography
});

const content = [
  {
    title: "Safety at Uber",
    body: "Working to make Uber the safest ridesharing platform for riders & drivers",
    products: [
      {
        slug: "rider-emergency-assistance",
        title: "Emergency Assistance",
        body: "Uber launched the original Emergency Assistance in response to safety concerns in India and over time it " 
          + "began suffering from a costly UI problem: an unacceptably high rate of accidental dials "
          + "that threatened our urgent response team’s ability to filter out genuine incidents and meet their response time "
          + "SLAs. Working with our product designer and another Android engineer, we solved this problem by replacing the ‘Get Help’ "
          + "button with a custom slide-to-call flow that resulted in lower false-positive rates without affecting the success "
          + "rate for genuine incidents. Special attention was given to creating affordances for the swipe gesture (accomplished using "
          + "a subtle pulsing animation) while giving the interaction a sense of urgency (the slider fades from gray to bright red as you swipe towards the call threshold).",
        imageUrl: "/static/slider-sos-animated.gif",
        thumbnailImageUrl: "/static/911-thumb.png",
        color: amber[200]
      },
      {
        slug: "trusted-contacts",
        title: "Trusted Contacts",
        body: "As part of Uber’s Safety-focused 2018 strategy (https://www.uber.com/newsroom/getting-serious-safety/), we wanted "
        + "to reimagine the Share My Trip feature through the lense of Trust & Safety. We determined that the existing flow had "
        + "too much friction and lacked discoverability to be used habitually by our users. The Trusted Contacts feature solves "
        + "for this by giving riders a prominent, one-tap shortcut for sharing a trip with their loved ones or most important "
        + "contacts. Balancing safety with privacy was a key priority for us so shares always require the user’s explicit "
        + "opt-in while your trusted contact selection and the types of trips you are prompted to share are always user configurable.",
        imageUrl: "/static/trusted-contacts-mockup.png",
        color: lightblue[300]
      },
      {
        slug: "dhl",
        title: "Driving Hour Limits",
        body: "Driving research shows that too many consecutive hours behind the wheel increases the risk of accidents. In 2017, "
        + "we launched a global driving time policy that limits the number of hours our partners can drive per 24-hour window. We "
        + "communicate this policy through multiple touchpoints in Carbon - providing a persistent driving time tracker to partners "
        + "and warning them when they are approaching a forced break time. Since some cities have passed their own specific driving "
        + "limit laws for TNCs, it was critical to build a UI framework that was dynamic and flexible enough to accommodate many possible "
        + "regional variations.",
        imageUrl: "/static/dhl-mockup.png",
        color: amber[600]
      }
    ]
  },
  {
    title: "Uber Partnerships & Loyalty",
    body: "Built rich-integrations for third-party partners as well as tools to enhance rider loyalty.",
    products: [
      {
        slug: "autoplay-music",
        title: "Autoplay Music",
        body: "To help drive usage of Uber’s native Spotify/Pandora integration for riders, we developed an ‘autoplay’ feature that allowed riders to select a favorite music station that would automatically start playing whenever they entered a music-enabled Uber.",
        imageUrl: "/static/autoplay-mockup.png",
        color: lightblue[100]
      },
      {
        slug: "rrw",
        title: "Ride Request Widget",
        body: "AWorked with the business development team to encapsulate the core Uber ride request flow as a lightweight HTML5-based widget for integration into third-party mobile apps like Alipay. Because we were targeting partnerships in low-connectivity markets like India and China, we experimented with various styles of no-map ride request flows and ultimately chose to position the car on an animated progress bar to represent the driver’s progress towards the rider during pickup.",
        imageUrl: "/static/rrw-mockup.png",
        color: amber[300]
      },
      {
        slug: "contextual-notification",
        title: "Contextual Notifications",
        body: "Prototyped and productionized the first version of a Contextual Notification framework for the Uber rider app - a channel "
        + "for high-priority, temporal messages that inform riders of trip events without blocking any core UX. This project was originally "
        + "commissioned to inform riders when they are eligible for free upgrades or loyalty rewards but designed to accommodate diverse use cases.",
        imageUrl: "/static/contextual-notification-mockup.png",
        color: lightblue[600]
      }
    ]
  }
]

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
    // Content
    content
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}