import footnation from "../assets/footnation.png"
import devconnect from "../assets/devconnect.png"
import nikepage from "../assets/nikepage.png"
import facelogin from "../assets/facelogin.png"

const projects = [
    {
        image: devconnect,
        name: "Devconnect",
        description: "DevConnect is a real-time web chat application designed to help developers connect, collaborate, and share ideas seamlessly. It allows users to log in and instantly view other online users to start conversations. Built with a full-stack setup: ReactJS for the frontend, Node.js (with Express.js) for the backend, MongoDB as the database and Socket.io for real-time communication",
        gitLink: "https://github.com/Gideon1107/DevConnect-Chat-App",
        liveLink: "https://devconnect-io.vercel.app",
        isLive: true
    },

    {
        image: footnation,
        name: "Footnation E-Commerce",
        description: "Footnation is an E-commerce platform that features - User Authentication, Advanced Product Filtering, Seamless Payments powered by Stripe integration and Admin Panel where administrators can Add new products, View all products, Manage user orders and update order statuses.Built with a full-stack setup: ReactJS for the frontend, Node.js (with Express.js) for the backend, and MongoDB as the database.",
        gitLink: "https://github.com/Gideon1107/FootNation_ECommerce_Webapp",
        liveLink: "https://footnation.vercel.app",
        isLive: true
    },

    {
        image: nikepage,
        name: "Nike Landing Page",
        description: "Nike Landing Page is a visually striking and responsive landing page designed to showcase Nike products with a modern, sleek UI ensuring a seamless experience for users across all devices. Although the project is purely frontend, it captures the look and feel of a professional product page. Built with a frontend setup: ReactJS and Tailwind CSS",
        gitLink: "https://github.com/Gideon1107/Nike-LandingPage",
        liveLink: "https://nike-page-amber.vercel.app",
        isLive: true
    },

    {
        image: facelogin,
        name: "Face Attendance System",
        description: "Face Attendance System is a facial recognition-based solution designed for automated attendance tracking. The system uses Python along with libraries such as OpenCV and Face_recognition to identify individuals and mark their attendance. It captures images, processes them to recognize faces, and stores attendance data. Built: Python for the backend, utilizing OpenCV for image processing and Face_recognition for facial detection.",
        gitLink: "https://github.com/Gideon1107/Face_Recognition_login_system",
        liveLink: "",
        isLive: false
    }
]


export default projects;