# (README) Hello, Alchemy!

## Preamble
First off, thanks for giving me the opportunity to take this assessment! I had a lot of fun with it and pushed myself to learn and experiment with new things.
I know you guys are busy so I will try to keep this brief.
The theme of my game management platform is [Animal Crossing](https://en.wikipedia.org/wiki/Animal_Crossing). For the uninitiated, Animal Crossing is a video game
series usually about moving into a town filled with bipedal animal creatures, and paying off a mortgage to [a raccoon who burdens you with an endless series of predatory loans.](https://github.com/davidblader/players-react-skeleton/blob/master/src/img/TomNook.png)
It was great to get to build an app based on one of my all time favorite games and I'll probably continue developing it until
it's up to par with my original vision for it.
My goal for this editted README is to provide some feedback on the provided assessment, self-critique, and future plans.
So without further ado...

## Assessment feedback
The assessment struck a really nice balance between giving some provided direction while allowing for a lot of personal expression.
That being said, I don't have much feedback to give other than:
  - It would be cool to allow the developer to define their own player fields, or things other than handedness. For example, for my Animal Crossing implementation, it would have been fun to include species and/or personality-type attributes. For my use case, handedness doesn't really make sense since most of the villagers have paws or wings (sorry, stupid joke...)
  - It would have been nice if the e2e tests were a bit more presentation agnostic / unopinionated. For example, the specs expected an accompanying input label (First name, Last name, Email, etc.) but I opted to use the placeholder attribute instead (slightly cleaner presentation wise IMO). I wasn't comfortable altering the provided tests so I just hid the labels in `display:none` span's. Sorry for being sneaky 😞
  - It would've been nice to have had some brief React code examples, just as a quick visual reference when it comes to the style guides.
  - This was my first time working with Parcel. Overall, I think it's great! I really liked working with a bundler that required basically no extra configuration on my part. I did run into some trouble with it however (more on that later) and did think at times maybe a webpack based skeleton could have been a useful alternative, though the benefits of Parcel's lightweight nature would probably be missed immediately.
  
## Room for improvement 🤦 Self-critique
Oh boy... where to start...
Let's go by category

### Tests
I am pretty embarrassed to admit that I have not really written unit tests for front-end based code before. This was my first time using Jest & Enzyme, and regretably I neglected to really dig into these tools and harness their full potential. As such, the majority of my unit tests are just simple shallow renders that are then compared to snapshots. I definitely have a lot more learning to do in this department, and if you guys have any helpful guides or tutorials you'd recommend that would be awesome and very much appreciated.

### CSS
I would rate my CSS with a generous "not bad" at best, and "primitive" if I'm being honest. One immediate improvement that comes to mind would be to just make my classes more granular. At the moment, I generally limited my components / elements to one class each, which ultimately lead to a lot of duplicated attributes for things like center positioning, fonts, colors, etc. when they could have been put into their own classes instead. I'm planning to learn more about BEM and SCSS and apply these moving forward.

### React/JSX
There's gonna be quite a bit here so bear with me.

#### Authentication
Here's the first big red flag I'd like to address. My initial verification method just checks for the existence of a JWT item in localStorage before redirecting to protected pages. Very bad and not good. I'm considering it a "rough draft" for now and will tackle it as soon as I finish writing this README.

#### Directory structure
All my JSX exists in a flat component directory. Currently I think it's just on the border of being unwieldy, though to be perfectly honest I am not sure what the best practice here is. I suppose the components could be roughly divided between `containers/` and `pages/`. If I moved forward with a BEM approach, I would probably split / refactor the existing components into `blocks/`, `elements/`, and `modifiers/` or something along those lines.

#### State management libraries / APIs (or lack thereof)
Another somewhat embarrassing admission: I've never used a state management library! (But, man, can I sure think of some times where one could have come in handy...) I deliberately decided to avoid using Redux or Context because I figured the benefit I'd gain from using them was negligible compared to the overhead time it would take to become familiar / comfortable enough to integrate them into my project. Thankfully, there's not a lot of places in my code where state is passed down deep enough for it to become cumbersome, but, naturally, as the project grows I can see myself reconsidering this stance. Afterall, I am very eager to learn these given the obvious advantages they would provide.

#### Components
Let's make this a bullet list
  - AnimalCrossingContainer: Problem I think is mostly rooted in CSS implementation. Should be separated into two components like : `<CenteredElement />` and `<WoodPanel />` or something along those lines.
  - AnimalCrossingHeader: This should just take a the rendered text value as a prop, not rely on on `props.children` - less clunky & less error prone
  - Button: all my `Button`s are wrapped in a div with `class="btn-container"`. This might as well be incorporated into the Button component itself.
  - Image: Funny thing about this component: there's no actual `<img>` element inside of it! This is because Parcel seemed to refuse to to render anything I passed along as `src` no matter how hard I tried to `import` or `require` them. I'm sure I'm just missing something obvious, but I spent a, uh, ... non-trivial amount of time on this before giving up and using a hacky CSS workaround instead. (This is the one thing I mentioned before that made me miss webpack a little bit lol...)
  - Loading: Loading message should be separated from `<AnimalCrossingContainer />`
  - Login: Error handling here feels insufficient. I should add a `.catch()` callback to my fetch request. Also lacking email and password validators. Aforementioned JWT authentication weakness is on display when redirecting to `/roster` by simply relying on existence of JWT item in localStorage (very bad and not good).
  - NewPlayer: Again, insufficient error handling. `<select>` element for handedness looks a little awkward. Personally would have went with radio buttons for handedness but e2e specs seemed to query for select specifically.
  - NewVillager: Unused component as part of a stretch goal. Got a little bit carried away trying to learn & query MediaWiki API in order to get list & images of real Animal Crossing villagers that could then be added to the user's roster. Didn't get very far with that...
  - PrivateRoute: Aaand again the authentication issue is on display. Need to fix this ASAP.
  - Registration: As mentioned with the other form containing components, insufficient error handling.
  - Roster: Insufficient error handling, again. Elements in `<WelcomeMessage />` and `<NoPlayers />` using class `animal-crossing-font` should probably be put into a new styled component (`<AnimalCrossingText />` maybe?).
  

#### Routing
This was my first time using `react-router` and ??? I can't believe it's taken me so long to use it ??? It is my new favorite thing ever. I am in love and can't believe this is not in React's core. It feels absolutely essential to have. That being said, I'm not sure what I wrote is in-line with whatever the "best practices" are. Really looking forward to getting some feedback on my routing so I can make it even better.

## To Infinity & Beyond :rocket: Plans for the future
So, what's next? Aside from implementing everything I mentioned in my self-critique, lots! I made a semi-incomplete [TODO list](https://github.com/davidblader/players-react-skeleton/issues/1) of things I'd like to add or improve. These include adding transition animations, creating a generic Form component to lower code repetition, maxing out my Chrome DevTools Lighthouse audit score, and linking with the Animal Crossing Fandom wiki via MediaWiki API in order to create the :fire:**_Ultimate Animal Crossing Fantasy Village_**:fire:.

## Conclusion
If you've read this far, **_YOU'RE THE BEST_**. Thank you a million times over. Sorry if I got a bit rambly. I put a lot of love and hardwork into this, but yet it still feels incomplete & (very) far from perfect (even the best laid schemes of mice and men, etc.).
I learned a lot and can't wait to learn more.
I hope you enjoy it, and I look forward to hearing back about how I can make it better.

All the best, and have a fantastic day,

David
