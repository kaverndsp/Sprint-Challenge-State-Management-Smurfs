1. What problem does the context API help solve?

    Instead of passing data down through multiple layers of compnents which is considered "prop drilling" you can make that data global and use it directly in the components that need it. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are the interceptors that are provoked when something is fired from the UI. It can handle the data that comes in and perform actions based on that data. Passing the data, restricting the data, or completely blocking the data. Reducders are the logic for those actions. It can take in what was given to it from the action and update the state or other logic, then return that new data to be rerendered to the UI. The store contains the entire state of your application. It can be changed through actions & reducers. It works so well because the state inside of store is hard to mismanage. It needs a direct action and reducer logic to change it making it rather difficult to have unwanted processes mysteriously effecting the state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global state. Any component can hook into it and use it. Whereas Component state is restricted to that component only. Only that component can update its state and share the data from that state down to its children via props. From what I understand, application state is best used when more than 5 slices of state are needed and that state needs to be shared with other components. Component state is best used when that state does not need to be share or accessed by other components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware. The "thunk" refers to a function that can run asynchronously, perfect for making API calls.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I'm a little conflicted on Redux. While I do agree Redux is a great solution for application state management, it's benefits are only seen once a very long and tedious set up of redux's boilerplate is implimented into the application. Once it's implemented it becomes very simple to manage, but the time it takes to create new functionality inside of redux is cumbersome.

Context API also some boilerplate (much less than Redux) but is limited in what it sets out to fix.

Cons aside, I would choose redux over Context API and I prefer it. I see it as a necessary evil, but at least it's flow is logical and powerful.
