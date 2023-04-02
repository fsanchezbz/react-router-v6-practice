export const ARTICLES = {
  "objects": {
    title: "Objects",
    body: `Javascript objects are like arrays, but values are accessed by named properties, not just numbers. An object’s property can also be set to a function. Because they are associated with an object, these functions are called methods.\n\nLet’s consider the role of an object before you learn how to create and use one. Objects, like arrays, numbers, strings, and booleans are used to model the world around us. The difference is that objects can model both the data and the functions that manipulate the data.\n\nObjects are especially useful for storing information (and functions that use that information) in the same place.\n\nYou can think of objects as a collection of property-value pairs. Values, however, don’t have to be numbers like 0, 1, or 2, they can be any other data type and even variables.`,
    author: "Ben",
    slug: "objects"
  },
  "browser-compatibility": {
    title: "Browser Compatibility",
    body: `Web developers will often have a preferred Internet browser. Naturally, that same browser is the one used to preview websites and web applications in development. There are, however, a multitude of browsers (and many versions of those browsers), resulting in a variety of experiences for users. This creates a problem for developers: how can we ensure that a website is compatible across as many browsers as possible? In this article, you’ll learn about the varying, default CSS rules that different browsers apply to HTML, how to reset default browser CSS, and how to increase browser compatibility for websites.\n\nWhen building a website, you’ve probably noticed that heading elements like ${"`h1`"} are always a default size (and font) or that hyperlinks always appear blue and underlined, all before you add your own styles. Why is that so? And how does that happen?\n\nAll browsers have a default set of CSS rules that they apply to HTML. The default CSS rules live in a stylesheet specific to the browser. The stylesheet is known as a _user agent style sheet_.\n\nIf you were to view the same website across many different web browsers, you might notice that the website looks different in each browser. This is because each browser has its own user agent stylesheet. This variance in user agent style sheets is what makes it difficult to create a website that is consistent across all browsers.
    `,
    author: "Nick",
    slug: "browser-compatibility"
  },
  "accessibility-and-html": {
    title: "Accessibility and HTML",
    body: `When designing and creating web pages, it’s important that the web pages are accessible to all audiences. In particular, due to the visual and dynamic nature of the webpages that you’ll be making, it’s important to make sure that your website will also make sense to visually-impaired or blind users. Many visually-impaired or blind users access web pages with the help of screen readers. Screen readers parse through the HTML of your web page and read the contents out loud, responding to commands to navigate around the page, and take actions such as clicking on a link, typing in an input field, or submitting a form. In this resource, we’ll give an overview of a few ways that you can improve the accessibility of your web page and help screen readers better interpret it!\n\nOne way to make the elements of your page more comprehensible to screen readers is to provide alt text for images. Alt, or alternative, text is provided as an attribute to the ${"`<img>`"} tag to describe the image to the screen reader. Be sure to provide succinct alt text descriptions for each image on your web page! \n\nARIA, also known as WAI-ARIA, stands for Accessible Rich Internet Applications. ARIA defines a variety of markup extensions, usually HTML5 attributes, that can be added to elements to give screen readers more information about the element and help visually-impaired users better grasp what’s happening on the webpage. For instance, one useful ARIA attribute is the ${"`role`"} attribute. When added to an element, this will provide the screen reader with extra context about what that element’s function is in context of a page. There are many other functions for ARIA attributes, such as telling the user the state of forms and checkboxes, and even calling their attention to an element on the page that was just changed by JavaScript. We won’t cover everything related to ARIA in this article, but feel free to check out the spec [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).`,
    author: "Ben",
    slug: "accessibility-and-html"
  },
  "authentication-and-oauth": {
    title: "Authentication and OAuth",
    body: `While it is common to think of authentication as the interaction between a human user and an application, sometimes the user is another application. Many apps expose interfaces to their information in the form of an API (application program interface). For example, the Spotify API provides endpoints for almost all of its functionality. This allows applications to fetch data from the Spotify music catalog and manage user’s playlists and saved music. Since these external requests could overwhelm a service and also access user information, they need to be secured using authentication.\n\nThe most basic pattern for API access from another application is using an API key. Public APIs usually provide a developer portal where you can register your application and generate a corresponding API key. This key is then unique to your application. When your application makes a request, this key is sent along with it. The API can then verify that your application is allowed access and provide the correct response based on the permission level of your application. The API can track what type and frequency of requests each application is making. This data can be used to throttle requests from a specific application to a pre-defined level of service. This prevents applications from spamming an endpoint or abusing user data, since the API can easily block that application’s API key and prevent further malicious use of the API by that application.`,
    author: "Lily",
    slug: "authentication-and-oauth"
  },
  "black-box-programming": {
    title: "Black Box Programming",
    body: `As you begin to work with classes and objects, you may come across the term black box programming. Often times, programmers write methods as if they were black boxes — the programmer knows what is going on inside the box, but all of those implementation details are hidden from the user. The user should be aware of the input of the black box, and they should be able to predict an output given the input, but the details of how that input gets transformed into the output can be hidden from the users.\n\nMost technology we use these days is a black box to some degree. Consider a television remote — we can give the remote some input, like pressing the “Volume Up” button, and we can expect some output, like the volume increasing. But beyond that, all of the inner workings of the process is hidden from us. We, as the television remote user, don’t really know how the remote communicates with the TV or how the TV interfaces with its speakers. All we know is the format of the input and the expected output. Then we let the black box do the rest.`,
    author: "Lily",
    slug: "black-box-programming"
  },
  "characteristics-of-a-good-test": {
    title: "Characteristics of a Good Test",
    body: `A test suite is a collection of tests that you can run against a piece of software. The goal is for these tests to catch any errors in your software before you make it available to the end user.\n\nA good test suite is one that doesn’t take long to run, and if all the tests are passing, provides you with confidence that your software is working as expected. If a good test suite catches a bug, it will return feedback that can help you identify the source of the issue, and help you resolve it.\n\nA bad test suite may take a long time to run and/or, if passing, won’t provide you with confidence that your software is working as expected. If a bad test suite catches a bug, it may not return helpful feedback or be a false negative, which will make it challenging to identify the source of the issue.`,
    author: "Ben",
    slug: "characteristics-of-a-good-test"
  },
  "accessible-colors": {
    title: "Accessible Colors",
    body: `People differ in their ability to perceive color. Some people are less able to distinguish between two contrasting colors. Other people have generally poor eyesight and rely on the contrast between colors to navigate.\n\nYou cannot forget to consider accessibility when choosing your colors. One in twelve men are affected by color blindness as well as one in two hundred women. Design humanely for your whole audience; use colors to communicate to your users, not confuse them. You can learn more about color blindness [here](http://www.colourblindawareness.org/colour-blindness/).\n\nBecause of the variety of visual impairments, there’s no one cure-all tool to ensure your site’s colors will work for all users. You can use tools such as [Color Laboratory](http://colorlab.wickline.org/colorblind/colorlab/) to emulate color-blindness as you’re making decisions about your color palette.`,
    author: "Nick",
    slug: "accessible-colors"
  }
}

export const AUTHORS = {
  "Ben": {
    articles: [
      "accessibility-and-html",
      "objects",
      "characteristics-of-a-good-test"
    ]
  },
  "Nick": {
    articles: [
      "browser-compatibility",
      "accessible-colors"
    ]
  },
  "Lily": {
    articles: [
      "authentication-and-oauth",
      "black-box-programming"
    ]
  },
}

export const CATEGORIES = {
  concepts: [
    "black-box-programming",
    "authentication-and-oauth",
    "characteristics-of-a-good-test"
  ],
  javascript: [
    "objects"
  ],
  html: [
    "accessibility-and-html",
    "browser-compatibility"
  ]
}
