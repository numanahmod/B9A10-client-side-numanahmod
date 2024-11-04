import { useState } from 'react';
import WelcomePage from './WelcomePage';

const Tag = () => {
    const data = [
        { question: "Tamim is a cricketer,..............?", answer: "isn’t he?" }, // Changed this line
        { question: "Jakir works in a company,..............?", answer: "doesn’t he?" },
        { question: "He put his phone on the table,..............?", answer: "didn’t he?" },
        { question: "Let’s help the poor,..............?", answer: "shall we?" },
        { question: "Anything can happen,..............?", answer: "can’t it?" },
        { question: "Everybody likes flowers,..............?", answer: "don’t they?" },
        { question: "All_of_us know it,..............?", answer: "don’t we?" }, // Changed this line
        { question: "The rich aren't always happy,..............?", answer: "are they?" },
        { question: "This is a book,..............?", answer: "isn’t it?" },
        { question: "We forget the golden past hardly,..............?", answer: "do we?" },
        { question: "She can speak three languages,..............?", answer: "can’t she?" },
        { question: "You are coming to the party,..............?", answer: "aren’t you?" },
        { question: "They will finish their homework,..............?", answer: "won’t they?" },
        { question: "He enjoys playing soccer,..............?", answer: "doesn’t he?" },
        { question: "We should leave early,..............?", answer: "shouldn’t we?" },
        { question: "You didn’t see the movie,..............?", answer: "did you?" },
        { question: "She loves ice cream,..............?", answer: "doesn’t she?" },
        { question: "He has been to Paris,..............?", answer: "hasn’t he?" },
        { question: "The_weather is nice today,..............?", answer: "isn’t it?" },
        { question: "They can come to the meeting,..............?", answer: "can’t they?" },
        { question: "I am ready to go,..............?", answer: "aren’t I?" },
        { question: "You have seen this before,..............?", answer: "haven’t you?" },
        { question: "He will be here soon,..............?", answer: "won’t he?" },
        { question: "This bag belongs to you,..............?", answer: "doesn’t it?" },
        { question: "She studies hard for her exams,..............?", answer: "doesn’t she?" },
        { question: "They aren’t afraid of the dark,..............?", answer: "are they?" },
        { question: "You finished the project on time,..............?", answer: "didn’t you?" },
        { question: "The_cat is sleeping on the couch,..............?", answer: "isn’t it?" },
        { question: "We should practice more,..............?", answer: "shouldn’t we?" },
        { question: "He was at the concert last night,..............?", answer: "wasn’t he?" }
    ];

    const [revealedAnswers, setRevealedAnswers] = useState(Array(data.length).fill(false));

    const toggleAnswer = (index) => {
        const updatedAnswers = [...revealedAnswers];
        updatedAnswers[index] = !updatedAnswers[index]; // Toggle the answer visibility
        setRevealedAnswers(updatedAnswers);
    };

    // Function to render the answer with different colors for the auxiliary verb and pronoun
    const renderAnswer = (answer) => {
        const parts = answer.split(' '); // Split the answer into parts
        const auxVerb = parts[0]; // Auxiliary verb (first part)
        const pronoun = parts[parts.length - 1]; // Pronoun (last part)

        return (
            <>
                <span className="text-red-600">{auxVerb}</span> {/* Color for the auxiliary verb */}
                <span className="text-blue-600"> {parts.slice(1, -1).join(' ')} {pronoun}</span> {/* Color for the rest and the pronoun */}
            </>
        );
    };

    // Function to render the question with colored subject and auxiliary verb
    const renderQuestion = (question, index, isRevealed) => {
        // Match the subject and auxiliary verb using a regex pattern
        const match = question.match(/^(.*?)(?:\s+)(\w+)/);
        const subject = match ? match[1].trim() : ""; // Subject
        const auxVerbOrMainVerb = match ? match[2] : ""; // Auxiliary or main verb

        const subjectStyle = isRevealed ? "text-blue-600" : "text-gray-800"; // Color for the subject
        const auxVerbStyle = isRevealed ? "text-red-600" : "text-gray-800"; // Color for the auxiliary verb

        return (
            <span>
                <span className={subjectStyle}>{subject}</span> {/* Colored subject */}
                <span className={`ml-1 ${auxVerbStyle}`}>{auxVerbOrMainVerb}</span> {/* Colored auxiliary verb */}
                {question.replace(subject + " " + auxVerbOrMainVerb, "").trim()} {/* Remaining question part */}
            </span>
        );
    };

    return (
        <div className="flex flex-col bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen">
            <WelcomePage></WelcomePage>
            <header className="p-6">
                <h1 className="text-4xl font-bold text-white text-center mb-4">Tag Question Test</h1>
                <p className="text-xl text-white text-center mb-4">Click on Answer to reveal the tag question answers. Try to guess the answers first!</p>
            </header>
            <main className="flex-grow flex justify-center items-center pb-16">
                <table className="border border-gray-300 w-full max-w-4xl bg-white rounded shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-green-400 to-teal-400">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left text-white text-2xl">#</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-white text-2xl">Question</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-white text-2xl">Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border-b border-gray-300 hover:bg-gray-100 transition">
                                <td className="border border-gray-300 px-4 py-2 text-gray-800 text-xl text-center">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-800 text-xl whitespace-nowrap overflow-hidden" style={{ minWidth: '300px' }}>
                                    {renderQuestion(item.question, index, revealedAnswers[index])}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 flex justify-between items-center">
                                    {revealedAnswers[index] ? (
                                        <div className="flex justify-between items-center w-full">
                                            <span className="text-xl">{renderAnswer(item.answer)}</span>
                                            <button
                                                onClick={() => toggleAnswer(index)}
                                                className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-400 transition"
                                            >
                                                Hide
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => toggleAnswer(index)}
                                            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-400 transition"
                                        >
                                            Answer
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default Tag;
