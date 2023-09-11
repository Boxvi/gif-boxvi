import {useEffect, useState} from "react";

export const Inicio = () => {

    const [gifTrending, setGifTrending] = useState([])
    const [gitEmojis, setGifEmojis] = useState([])
    const [gitEmojis2, setGifEmojis2] = useState([])

    //https://api.giphy.com/v2/emoji?api_key=QfhCFkpQlJQIenZUMlKRw6NLyLMT2tNe&limit=25&offset=0

    useEffect(() => {

        async function getGifs() {
            const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=QfhCFkpQlJQIenZUMlKRw6NLyLMT2tNe&limit=70&offset=0&rating=g&bundle=messaging_non_clips");
            const data = await response.json();
            setGifTrending(data.data);
        }

        async function getEmojis() {
            const response = await fetch("https://api.giphy.com/v2/emoji?api_key=QfhCFkpQlJQIenZUMlKRw6NLyLMT2tNe&limit=300&offset=0");
            const data = await response.json();
            setGifEmojis(data.data);
        }

        async function getEmojis2() {
            const response = await fetch("https://api.giphy.com/v2/emoji?api_key=QfhCFkpQlJQIenZUMlKRw6NLyLMT2tNe&limit=300&offset=100");
            const data = await response.json();
            setGifEmojis2(data.data);
        }



        getGifs();
        getEmojis();
        getEmojis2();

    }, []);

    return (
        <>
            <h1 className={"font-bold  text-3xl dark:text-white my-4 ms-4"}>Trending</h1>

            <div className="overflow-x-scroll  ms-8">
                <div className="flex space-x-4 lg:space-x-8 my-2 ">
                    {gifTrending && gifTrending.map((gif, index) => (
                        <div className="rounded-lg  flex-shrink-0 ms-8 my-8 " key={index}>
                            <img width={'100px'}
                                 src={gif.images.original.url}
                                 alt={gif.title}
                            />
                        </div>
                    ))}
                </div>
            </div>


            <h1 className={"font-bold  text-3xl dark:text-white my-4 ms-4"}>Emojis</h1>

            <div className="overflow-x-scroll  ms-8">
                <div className="flex space-x-4 lg:space-x-8 my-2 ">
                    {gitEmojis && gitEmojis.map((gif, index) => (
                        <div className="rounded-lg  flex-shrink-0 ms-8 my-8 " key={index}>
                            <img width={'150px'}
                                 src={gif.images.original.url}
                                 alt={gif.title}
                            />
                        </div>
                    ))}
                </div>
            </div>



        </>
    )

};
/*
            <h1 className={"font-bold  text-3xl dark:text-white my-4 ms-4"}>Clips</h1>
            <h1 className={"font-bold  text-3xl dark:text-white my-4 ms-4"}>Stories</h1>
 */
