## Zeplinception Radio Mix

To run the project, simply,

### `npm install`
### `npm start`


## My spiritual journey

Overall I had so much fun doing the project. The designs were clear and they looked really good, they've got me hyped for the project. I had one week and I had to do a lot of work. 

I chose to work with React because it's more or less the industry standard. While I like Vue.js, React was more simple and it's easier to get on board. I did a couple of small projects in Ember and Backbone before, and remembering especially Ember, I chose not to dive deep into another framework yet. 

React also has more 3rd party components that are also more reliable compared to Vue. 

On days 1-3, I did a couple small projects with React, did a notepad application and whatnot. 
On day 4, I started the project. Getting the SCSS to reliably work was a bit hard. I spent 12 pomodoros just for the Header component. 

On days 5-6, I did most of the project, I spent 55 pomodoros = 27.5 hours with breaks on days 5-6. 

On day 7, I was pretty much done, but I worked on some UI bugs and the React routing, 16 pomodoros = 8 hours. 

## Things that went well

Designing the UI except for the header was a breeze. 
React 3rd party world is great! SplitPane was a good component for my design. 
Rendering objects without using Promises that much
Sorting members correctly
Right pane in general was fun to implement

## Things that took some time

Designing the Header (I really spent so much time on that Header I wanna cry hence the emphasis)
Tag filter system. I couldn't get it working, maybe I needed another day, I'll get it working after submission. 
Getting SCSS to work with React without 'ejecting'. I seriously don't understand how SCSS is not working out of the box with webpack. I was this close to switching to Gulp.
React-router v.4.2.0 has breaking changes so most of the online stuff is obsolete, but it's working properly.
Split pane resizer. I literally hacked this by designing an SVG resizer on Sketch, that's same with Zeplin designs (I looked everywhere but that resizer on Zeplin couldn't be exported as SVG) and used that as a background for the resizer because that React component was not supporting custom resizers (I will do a PR to that repo for humanity's sake). But it's working.


## Assumptions

While I could have asked, I forgot to ask. The Tag filters on the grid are position:sticky because the notes said it should be sticky, however I feel like it should have been position:fixed, nevertheless I went ahead with sticky. 





