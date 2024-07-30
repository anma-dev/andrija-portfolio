const skills = [
    {
        name: 'LLM',
        icon: 'https://cdn-icons-png.freepik.com/256/10161/10161813.png?ga=GA1.1.2076789743.1718763143&semt=ais_hybrid',
    },
    {
        name: 'ChatGpt',
        icon: '/skills/chatgpt2.png',
    },
    {
        name: 'Claude',
        icon: '/skills/claude.png',
    },
    {
        name: 'RAG',
        icon: 'https://cdn-icons-png.freepik.com/256/1387/1387303.png?ga=GA1.1.2076789743.1718763143&semt=ais_hybrid',
    },
    {
        name: 'Pinecone',
        icon: 'data:image/jpeg;base64,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',
    },
    {
        name: 'Langchain',
        icon: '/skills/langchain.svg',
    },
    {
        name: 'Chatbot',
        icon: 'https://cdn-icons-png.freepik.com/256/5226/5226034.png?ga=GA1.1.2076789743.1718763143&semt=ais_hybrid',
    },
    {
        name: 'Gen AI',
        icon: 'https://cdn-icons-png.freepik.com/256/9980/9980295.png?ga=GA1.1.2076789743.1718763143&semt=ais_hybrid',
    },
    {
        name: 'Python',
        icon: '/skills/python.svg',
    },
    {
        name: 'Node.js',
        icon: 'https://cdn-icons-png.freepik.com/256/9789/9789173.png?ga=GA1.1.2076789743.1718763143&semt=ais_hybrid',
    },
    {
        name: 'TypeScript',
        icon: 'https://cdn-icons-png.freepik.com/256/5968/5968381.png?ga=GA1.1.2076789743.1718763143&semt=ais_hybrid',
    },
    {
        name: 'MongoDB',
        icon: '/skills/mongodb.svg',
    },
    {
        name: 'RESTAPI',
        icon: 'https://cdn-icons-png.freepik.com/256/12372/12372048.png?ga=GA1.1.2076789743.1718763143&semt=ais_hybrid',
    },
    {
        name: 'React',
        icon: 'https://cdn-icons-png.freepik.com/256/12595/12595570.png?ga=GA1.1.1931419593.1720314875&semt=ais_hybrid',
    },
    {
        name: 'Next.js',
        icon: '/skills/nextjs.webp',
    },
    {
        name: 'Vue.js',
        icon: 'https://cdn-icons-png.freepik.com/256/1183/1183673.png?ga=GA1.1.2076789743.1718763143&semt=ais_hybrid',
    },
    {
        name: 'Tailwind',
        icon: '/skills/tailwind.svg',
    },
    {
        name: 'SASS',
        icon: 'https://cdn-icons-png.freepik.com/256/10562/10562250.png?ga=GA1.1.2076789743.1718763143&semt=ais_hybrid',
    },
]

export default skills
