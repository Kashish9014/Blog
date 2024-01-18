export const PostListings = [


  {
    id:1,
    userId: 1,
    dateId: "2024-01-17",
    title: "Improving Front-End"  ,
    title1: " Performance",
    body: "To enhance front-end performance, focus on minimizing HTTP requests by consolidating and compressing files, optimizing images through compression and responsive strategies, and implementing lazy loading for non-essential content. Reduce and optimize JavaScript, utilize bundling tools for CSS and JavaScript, and leverage Content Delivery Networks (CDNs) for efficient asset distribution. Employ caching mechanisms, streamline the critical rendering path, and implement code splitting to load only necessary resources dynamically. Employ responsive design practices, prefetch and preload critical assets, optimize font usage, and consider server-side rendering or static site generation. Regularly monitor performance using tools like Lighthouse to identify and address specific optimization opportunities.",
    name: "John Doe"
  },
  {
    id:2,
    userId: 2,
    dateId: "2024-01-11",
    title: "Responsible",
    title1: " Social Share Links"  ,
    body: "Responsible social share links are an essential aspect of user engagement and content promotion on websites. To ensure a positive user experience, it's crucial to implement lightweight and unobtrusive social sharing options. Use simple and recognizable icons for popular social media platforms, and incorporate them into your design without overshadowing the main content. Employ accessible and responsive design practices to ensure the links work seamlessly across various devices and screen sizes. Additionally, prioritize user privacy by considering options that do not compromise sensitive information. By striking a balance between functionality and user-friendliness, responsible social share links contribute to a more interactive and shareable online presence.",
    name: "Jane Smith"
    
  },
  {
    id:3,
    userId: 2,
    dateId: "2024-01-8",
    title: "Faster Font Loading with"  ,
    title1: " Font Event",
    body: "Achieving faster font loading is crucial for enhancing web page performance and user experience. By leveraging the Font Events API, specifically through the font-display property, developers can exercise greater control over how fonts are rendered during the loading process. The font-display property offers options such as 'swap,' allowing the browser to immediately use a fallback font and swap it with the custom font once available, and 'optional,' where the browser may choose not to download the font if deemed non-essential. This customization helps strike a balance between speed and visual consistency. Additionally, utilizing the Font Loading API allows for programmatic checks on font loading status, enabling developers to implement specific behaviors or interactions based on font availability. Together, these strategies contribute to a more responsive and efficient font loading experience, ultimately improving the overall performance of web pages.",
    name: "Jane Smith"
  },

  {
    id:4,
    userId: 2,
    dateId: "2024-01-1",
    title: "JavaScript Best "  ,
    title1:" Practices",
    body: "JavaScript best practices are essential for writing maintainable, efficient, and error-free code. Begin by declaring variables with const or let based on their mutability to enhance code readability and prevent unintended reassignments. Use meaningful variable and function names to convey intent and improve code understanding. Embrace arrow functions for concise syntax, especially for short, one-line operations. Employ modularization and follow the Single Responsibility Principle to create smaller, focused functions and classes, promoting code reusability. Leverage template literals for cleaner string interpolation and avoid the concatenation of multiple strings. Practice defensive programming by validating inputs, handling errors gracefully, and using try-catch blocks judiciously. Utilize the latest ECMAScript features but ensure compatibility with your target environments using transpilers like Babel. Regularly lint your code with tools like ESLint to enforce coding standards and catch potential issues early in the development process. Lastly, prioritize asynchronous operations using Promises or async/await to prevent callback hell and enhance code readability. Adopting these best practices contributes to the creation of robust, scalable, and maintainable JavaScript codebases.",
    name: "Jane Smith"
  },

  
];

export const getPostDetails = (post_id) => {
  return PostListings.find((obj_id) => obj_id===post_id);
};
