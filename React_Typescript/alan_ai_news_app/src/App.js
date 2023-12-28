import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './Components/NewsCards/NewsCards';

const alanKey = "855f04bae6c4897e018554855cf6aa552e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {

    const [newArticles, setNewsArticles] = useState([]);


    useEffect(() => {
        alanBtn({
            //use the key prop
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === "newHeadlines") {
                    setNewsArticles(articles);
                }
            }
        });
    }, []);

    return (
        <div>
            <h1>Alan AI News Application</h1>
            <NewsCards articles={newArticles} />
        </div>
    )
}

export default App;