import React from 'react';

const WelcomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
            <header className="mb-8 text-center">
                <h1 className="text-5xl font-bold text-white">Welcome to Our English Class!</h1>
                <p className="mt-4 text-xl text-white">
                    Hello, everyone! I'm <span className="font-bold text-yellow-300">Numan Ahmod</span>, your Assistant English Teacher.
                </p>
            </header>
            <main className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
                <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Test on Tag Question</h2>
                <p className="text-lg text-gray-800 mb-6">
                    Today, we will be taking a test on **tag questions**! 
                    You'll have the opportunity to answer the questions I present.
                </p>
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Test Format:</h3>
                <ol className="list-decimal list-inside text-gray-800 mb-4">
                    <li>I'll ask you a question with a tag.</li>
                    <li>You will answer the question.</li>
                    <li>After you answer, I'll reveal the correct answer.</li>
                    <li>You will then explain your reasoning for your answer.</li>
                </ol>
                <p className="text-lg text-gray-800">
                    This exercise will help reinforce your understanding of tag questions and improve your conversational skills.
                </p>
            </main>
            <footer className="mt-8">
                <p className="text-white text-lg">I encourage everyone to participate actively and share your thoughts!</p>
            </footer>
        </div>
    );
};

export default WelcomePage;
