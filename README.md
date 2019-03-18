# (README) Hello, Alchemy!

## Preamble
First off, thanks for giving me the opportunity to take this assessment! I had a lot of fun with it and pushed myself to learn and experiment with new things.
I know you guys are busy so I will try to keep this brief.
The theme of my game management platform is [Animal Crossing](https://en.wikipedia.org/wiki/Animal_Crossing). For the uninitiated, Animal Crossing is a video game
series usually about moving into a town filled with bipedal animal creatures, and paying off a mortgage to [a raccoon who burdens you with an endless series of predatory loans.](https://github.com/davidblader/players-react-skeleton/blob/master/src/img/TomNook.png)
It was great to get to build an app based on one of my all time favorite games and I'll probably continue developing it until
it's up to par with my original vision for it.
My goal for this editted README is to provide some feedback on the provided assessment, self-critique, and details of things left unimplemented.
So without further ado...

## Assessment feedback
The assessment struck a really nice balance between giving some provided direction while allowing for a lot of personal expression.
That being said, I don't have much feedback to give other than:
  - It would be cool to allow the developer to define their own player fields, or things other than handedness. For example, for my Animal Crossing implementation, it would have been fun to include species and/or personality-type attributes. For my use case, handedness doesn't really make sense since most of the villagers have paws or wings (sorry, stupid joke...) 
  - It would've been nice to have had some brief React code examples, just as a quick visual reference when it comes to the style guides.
  - This was my first time working with Parcel. Overall, I think it's great! I really liked working with a bundler that required basically no extra configuration on my part. I did run into some trouble with it however (more on that later) and did think at times maybe a webpack based skeleton could have been a useful alternative, though the benefits of Parcel's lightweight nature would probably be missed immediately.
  
## Self-critique
Oh boy... where to start...
Let's go by category

### Tests
I am pretty embarrassed to admit that I have not really written unit tests for front-end based code before. This was my first time using Jest & Enzyme, and regretably I neglected to really dig into these tools and harness their full potential. As such, the majority of my unit tests are just simple shallow renders that are then compared to snapshots. I definitely have a lot more learning to do in this department, and if you guys have any helpful guides or tutorials you'd recommend that would be awesome and very much appreciated.

### CSS
I would rate my CSS with a generous "not bad" at best, and "primitive" if I'm being honest. One immediate improvement that comes to mind would be to just make my classes more granular. At the moment, I generally limited my components / elements to one class each, which ultimately lead to a lot of duplicated attributes for things like center positioning, fonts, colors, etc. when they could have been put into their own classes instead. I'm planning to learn more about BEM and SCSS and apply these moving forward.

### React/JSX
This part is going to be extensive, but I need to go to sleep now. brb
