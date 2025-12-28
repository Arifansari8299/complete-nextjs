'use client'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState('')
    const [shorturl, setShorturl] = useState('')
    const [generated, setGenerated] = useState(false)

    return (
        <div className="mx-auto bg-purple-100 max-w-xl my-16 p-8 rounded-lg flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-center">
                Generate your short URLs
            </h1>

            <div className="flex flex-col">
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter your URL"
                    className="w-full bg-white m-2 px-4 py-2 focus:outline-purple-600 rounded-md"
                />

                <input
                    type="text"
                    value={shorturl}
                    onChange={(e) => setShorturl(e.target.value)}
                    placeholder="Enter your preferred short URL text"
                    className="w-full bg-white m-2 focus:outline-purple-600 px-4 py-2 rounded-md"
                />

                <button
                    className="w-full m-2 bg-purple-600 px-4 py-2 hover:bg-purple-900 transition duration-300 text-white rounded-md font-bold cursor-pointer"
                >
                    Generate
                </button>
            </div>
        </div>
    )
}

export default Shorten
