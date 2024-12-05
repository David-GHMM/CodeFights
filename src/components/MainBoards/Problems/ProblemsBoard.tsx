import React from 'react';

type ProblemsBoardProps = {};

const ProblemsBoard:React.FC<ProblemsBoardProps> = () => {
    
    return (
        <div className="div-content">
            <h1>Problems</h1>
            <div className="options">
                <div className="languages">
                <h2>Choose language:</h2>
                <div className="language-icons">
                    <div className="language"><img src="python.png" alt="Python" />Python</div>
                    <div className="language"><img src="cpp.png" alt="C++" />C++</div>
                    <div className="language"><img src="csharp.png" alt="C#" />C#</div>
                    <div className="language"><img src="java.png" alt="Java" />Java</div>
                    <div className="language"><img src="javascript.png" alt="JavaScript" />JavaScript</div>
                    <div className="language"><img src="typescript.png" alt="TypeScript" />TypeScript</div>
                    <div className="language"><img src="php.png" alt="PHP" />PHP</div>
                </div>
                </div>
                <div className="difficulty">
                <h2>Choose difficulty:</h2>
                <select>
                    <option value="" disabled selected>Choose difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                </div>
                <button className="compete-btn">COMPETE</button>
            </div>
        </div>
    );
};

export default ProblemsBoard;