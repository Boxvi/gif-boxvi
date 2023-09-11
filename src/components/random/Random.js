import {useEffect, useState} from "react";

export const Random = () => {

    const [gifRandom, setGifRandom] = useState({id: '', title: '', imagen: ''})

    useEffect(() => {

        async function getGifRandom() {
            const response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=QfhCFkpQlJQIenZUMlKRw6NLyLMT2tNe&tag=&rating=pg");
            const data = await response.json();
            setGifRandom({
                id: data.data.id,
                title: data.data.title,
                imagen: data.data.images.original.url
            });
        }

        getGifRandom();

    }, []);

    //

    return (
        <>
            <h1 style={{
                textAlign: "center"
            }} className={"font-bold  text-3xl dark:text-white my-4 ms-4"}>Random</h1>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>


                <a href="#" className=" relative  " style={{
                    width: `${gifRandom.imagen.width * 4}px`,
                    height: `${gifRandom.imagen.height * 4}px`,
                    textAlign: "center"
                }}>
                    <img
                        alt="Developer"
                        src={gifRandom.imagen}
                        className="absolute inset-0 object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                            GIF
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl" style={{
                            width: `${gifRandom.imagen.width}px`,
                            height: `${gifRandom.imagen.height}px`,

                        }}>{gifRandom.title}</p>

                    </div>
                </a>


            </div>


        </>
    )
};

export default Random;
