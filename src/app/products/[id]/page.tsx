import React from 'react';

const BlogPost = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const blogData = {
    1: {
      title: "Understanding React's useState Hook",
      content: "Detailed content about React's useState hook...",
      author: "John Doe",
      date: "February 5, 2025",
      image: "/pages/reacthook.webp",
      heading:"Mastering React Hooks",
      point1hiding:"What Are React Hooks?",
      point1:"Brief history of React hooks.Benefits of using hooks over class components Why hooks improve readability and manageability of React code.",
      point2hiding :"The Core React Hooks You Need to Know",
      point2:"useState: Managing local component state.useEffect: Performing side effects in components.useContext: Accessing context values without needing prop drilling.useReducer: Managing more complex state logic."


    },
    2: {
      title: "Mastering Tailwind CSS",
      content: "Comprehensive guide to Tailwind CSS...",
      author: "Jane Smith",
      date: "February 3, 2025",
      image : "/pages/tailwindcss.avif",
      heading:"Mastering in Tailwind CSS",
      point1hiding:"What Are Tailwind Css?",
      point1:"Brief history of React hooks.Benefits of using hooks over class components Why hooks improve readability and manageability of React code.",
      point2hiding :"The Main Points Of Tailwind Css You Must Know ",
      point2:"useState: Managing local component state.useEffect: Performing side effects in components.useContext: Accessing context values without needing prop drilling.useReducer: Managing more complex state logic."


    },
    3: {
      title: "Getting Started with Next.js",
      content: "Everything about building with Next.js...",
      author: "Ali Khan",
      date: "January 30, 2025",
      image: "/pages/nextjs-logo.webp",
      heading:"Main Knowledigable Points of Nextjs ",
      point1hiding:"What is Nextjs?",
      point1:"Brief history of React hooks.Benefits of using hooks over class components Why hooks improve readability and manageability of React code.",
      point2hiding :"The Core React Hooks You Need to Know",
      point2:"useState: Managing local component state.useEffect: Performing side effects in components.useContext: Accessing context values without needing prop drilling.useReducer: Managing more complex state logic."

    },
   4: {
      title: "Exploring TypeScript for React",
      content: "A beginner-friendly guide to integrating TypeScript with React for better type safety and development experience.",
      author: "Emily Davis",
      date: "January 28, 2025",
      image: "/images/tsreact.png",
      heading: "Main Knowledgeable Points of TypeScript and React",
      point1hiding: "What is TypeScript?",
      point1: "TypeScript is a superset of JavaScript that provides static typing and other powerful features to enhance JavaScript development.",
      point2hiding: "How TypeScript Helps in React",
      point2: "By using TypeScript, React developers can catch errors early, improve IDE support, and document components more effectively."
    },
    5: {
      title: "Building APIs with Node.js",
      content: "Learn how to design and develop robust RESTful APIs using Node.js and Express.",
      author: "Michael Brown",
      date: "January 25, 2025",
      image: "/images/apireact.png",
      heading: "Main Knowledgeable Points of Node.js APIs",
      point1hiding: "What is Node.js?",
      point1: "Node.js is a runtime environment that allows you to execute JavaScript code outside the browser, commonly used for server-side applications.",
      point2hiding: "How to Build APIs with Node.js?",
      point2: "Using Express, a minimal and flexible Node.js web application framework, developers can easily set up APIs for handling HTTP requests and responses."
    },
    6:{
      title: "Introduction to GraphQL",
      content: "Master the basics of GraphQL and how it can simplify querying data in your web applications.",
      author: "Sarah Wilson",
      date: "January 22, 2025",
      image: "/images/graphQL.jpg",
      heading: "Main Knowledgeable Points of GraphQL",
      point1hiding: "What is GraphQL?",
      point1: "GraphQL is a query language for APIs and a runtime for executing those queries. It provides a more efficient and flexible alternative to REST.",
      point2hiding: "Why Choose GraphQL?",
      point2: "GraphQL enables clients to request exactly the data they need, making it faster and more efficient compared to REST API calls."
    },
    7: {
    
      title: "Mastering HTML5 for Modern Web Development",
      content: "Dive into the latest features of HTML5 and how to use them to create modern, semantic, and accessible web pages.",
      author: "Lucas Gray",
      date: "February 1, 2025",
      image: "/images/modernhtml.webp",
      heading: "Main Knowledgeable Points of HTML5",
      point1hiding: "What is HTML5?",
      point1: "HTML5 is the latest version of the HTML standard. It introduces new features like semantic elements, video, audio, and geolocation support.",
      point2hiding: "HTML5 New Features",
      point2: "HTML5 provides features like local storage, new form controls, offline capabilities, and APIs for geolocation and multimedia."
    },
   8: {
   
      title: "Advanced CSS Techniques for Stunning Websites",
      content: "Learn advanced CSS strategies like Flexbox, Grid, and animations to create responsive and visually engaging websites.",
      author: "Olivia Turner",
      date: "January 18, 2025",
      image: "/images/Csstechnique.png",
      heading: "Main Knowledgeable Points of Advanced CSS",
      point1hiding: "What is Flexbox?",
      point1: "Flexbox is a layout model in CSS that allows you to design responsive and flexible layouts with ease. It gives you more control over alignment, spacing, and ordering of elements.",
      point2hiding: "What is CSS Grid?",
      point2: "CSS Grid is a 2-dimensional layout system in CSS that allows for creating complex layouts with rows and columns. It provides greater control compared to Flexbox in certain scenarios."
    },
   9: {
    
      title: "Deep Dive into JavaScript and TypeScript",
      content: "Understand the differences between JavaScript and TypeScript, and learn how TypeScript improves the development process with strong typing.",
      author: "Ethan Clark",
      date: "January 15, 2025",
      image: "/images/tsandjs.png",
      heading: "Main Knowledgeable Points of JS and TypeScript",
      point1hiding: "What is JavaScript?",
      point1: "JavaScript is a dynamic programming language used primarily for web development. It is essential for creating interactive and dynamic user interfaces.",
      point2hiding: "What is TypeScript?",
      point2: "TypeScript is a superset of JavaScript that adds static typing and advanced features. TypeScript improves the development experience by catching errors at compile time, making large codebases easier to manage."
    }
  };

  const blog = blogData[id as unknown as keyof typeof blogData]; // Or use one of the solutions above

  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src={blog.image}
    />
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        {blog.heading}
      </h1>
      <h2 className='mb-4 font-medium'>
        {blog.point1hiding}
      </h2>
      <p className="mb-8 leading-relaxed">
        {blog.point1}
      </p>
      <h2 className='mb-4 font-medium'>
        {blog.point2hiding}
      </h2>
      <p>
        {blog.point2}
      </p>
    </div>
  </div>
</section>
  );
};

export default BlogPost;
