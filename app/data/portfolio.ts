export interface PortfolioItemProps {
    title: string;
    description: string;
    stack: string[];
    link: string;
}

export const portfolioData: PortfolioItemProps[] = [
    {
        title: 'Image Compressor',
        description: 'Simple image compressor.',
        stack: [
            'Javascript',
            'Browser-image-compressor',
            'Tailwindcss',
            'React',
        ],
        link: 'https://github.com/SemmiDev/compresssin',
    },
    {
        title: 'Mem DB',
        description: 'Simple key value datastore.',
        stack: ['Golang', 'Http', 'Concurrency'],
        link: 'https://github.com/SemmiDev/memdb',
    },
    {
        title: 'Fiber Shortener',
        description:
            'A web-based application that is useful for shortening website urls.',
        stack: [
            'Golang',
            'Redis',
            'Fiber',
            'Postgre',
            'TailwindCSS',
            'JavaScript',
        ],
        link: 'https://github.com/SemmiDev/fiber-shortener',
    },
    {
        title: 'React Todo',
        description: 'simple todolist app with react.',
        stack: ['react', 'Typescript', 'TailwindCSS', 'DaisyUI'],
        link: 'https://github.com/SemmiDev/react-todo',
    },
    {
        title: 'Todo App',
        description: 'A very simple application for managing to-do lists.',
        stack: ['Golang', 'HTML', 'Mem Store', 'CSS', 'Javascript'],
        link: 'https://github.com/SemmiDev/todo-app-go',
    },
    {
        title: 'Postfix Calculator',
        description: 'Postix calculator build using go.',
        stack: ['Golang'],
        link: 'https://github.com/SemmiDev/postfix-calculator',
    },
    {
        title: 'Fiber Go Blog API',
        description: 'A simple blog api build using fiber go.',
        stack: ['Golang', 'Fiber', 'gorm', 'JWT', 'MySQL'],
        link: 'https://github.com/SemmiDev/go-design-patterns',
    },

    {
        title: 'Go Design Pattern',
        description: 'https://github.com/SemmiDev/go-design-patterns.',
        stack: ['Golang', 'Fiber', 'gorm', 'JWT', 'MySQL'],
        link: 'https://github.com/SemmiDev/go-design-patterns',
    },
    {
        title: 'Go Queue',
        description: 'queuing implementation in Go with generic.',
        stack: ['Golang'],
        link: 'https://github.com/SemmiDev/fiber-shortener',
    },

    {
        title: 'Todo App gRPC',
        description:
            'demonstrate a fully fledged fullstack application built with golang/grpc including CRUD operations, authentication, routing, pagination, and more.',
        stack: ['Golang', 'gRPC', 'Postgre', 'Docker'],
        link: 'https://github.com/SemmiDev/todo-app-grpc',
    },

    {
        title: 'Knapsack',
        description: 'Knapsack using Go..',
        stack: ['Golang', 'Knapsack'],
        link: 'https://github.com/SemmiDev/knapsack',
    },
    {
        title: 'Time Management',
        description:
            "Eisenhower's Urgent/Important Principle Using Time Effectively, Not Just Efficiently.",
        stack: ['Golang', 'Fiber', 'Rest API'],
        link: 'https://github.com/SemmiDev/Nugaz',
    },

    {
        title: 'Closest pair of points',
        description: 'DnC vs Brute Force using java.',
        stack: ['Final Exam', 'Java'],
        link: 'https://github.com/SemmiDev/Closest-Pair-Points',
    },

    {
        title: 'CRUD PHP Native',
        description: 'CRUD PHP PSIBW course final project for college.',
        stack: ['PHP', 'CRUD'],
        link: 'https://github.com/SemmiDev/app',
    },

    {
        title: 'Gunting Batu kertas',
        description: 'Tugas Kuliah.',
        stack: ['LocalStorage', 'Javascript'],
        link: 'https://github.com/SemmiDev/gunting-batu-kertas',
    },

    {
        title: 'Profile Website',
        description:
            'The final project of the front end development module at the Ruangguru Camp.',
        stack: ['TailwindCSS', 'HTML', 'CSS', 'Javascript'],
        link: 'https://github.com/SemmiDev/sammi_aldhi_yanto-final_project',
    },

    {
        title: 'Tic Tac Toe',
        description: 'Simple tictactoe game.',
        stack: ['Golang'],
        link: 'https://github.com/SemmiDev/tic-tac-toe',
    },

    {
        title: 'Go Stack Parentehesi',
        description: 'Parenthesis validation exp.',
        stack: ['Golang'],
        link: 'https://github.com/SemmiDev/go-stack-parenthesis',
    },

    {
        title: 'Lainnya di Github',
        description: '',
        stack: [
            'Golang',
            'Python',
            'Javascript',
            'PHP',
            'Java',
            'CSS',
            'HTML',
            'Jupyter Notebook',
        ],
        link: 'https://github.com/SemmiDev/',
    },
];
