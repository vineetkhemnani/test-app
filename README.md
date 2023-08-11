# Styling components
1. using style.css/index.css 
2. using inline styles - writing an object inside javascript paranthesis
```
<style = {
  {backgroundColor: "red"}
}></style>
```
- **Avoid writing inline style as the browser has to perform heavier tasks to perform inline styles**
3. SCSS/SASS
4. Material UI - contains pre-built components, BaseUI, AntDesign, ChakraUI
**Pros**
- Makes the development process faster and easier
- These libraries provide with consistent UI, reusable components
- Takes care of responsiveness
- We can use multiple frameworks but it is not a good practice to do so
**Cons**
- Lose control over how our UI looks
- Bundle size increases
5. Styled components - Writing CSS inside javascript. Passing props
**Cons**
- Writing styled components has a learning curve
6. Tailwind CSS framework

## Tailwind CSS
- CSS on the go
- reusability
- less bundle size (minimal CSS)
- Flexible UI (Customizable)
- As soon as we include tailwind CSS, the default behaviour of tags changed
- Tailwind CSS says that write CSS from the starting as its way
- Tailwind CSS overwrites everything
- Every style we write will be a new className
```
npm install -D tailwindcss postcss
npx tailwindcss init
```
- creates a tailwind.config.js file which contains certain configs
   - content:[] - it will contain what files we need to use tailwind in (what files will be using the tailwind classes)
   ```content: ['./src/**/*.{html,js,ts,jsx,tsx}'],```

- **PostCSS**- We need to tell parcel that we are using tailwind in our project.\
We need to configure PostCSS also
- We use a '.postcssrc' file for this
```
{
  "plugins": {
    "tailwindcss": {}
  }
}
```
- The above tells our bundler to compile the tailwind
- Remove all CSS from index.css and replace with 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
@tailwind base; - include all the base classes
@tailwind components - include all the components classes
@tailwind utilities - includes all the utilities classes

**Pros**
- Easy to debug
- Less code
- Less bundle size
- Faster coding
- Highly customizable

**Cons**
- High learning curve - every new developer needs to be taught what is happening
- Too much classes- compromising code readability
# test-app
