import React from 'react'

const BookCall = () => {
    return (
        <div className='w-full flex h-[500px]' style={{ backgroundColor: 'black' }} >
            <div className='w-1/2 float'>
                <div className="flex flex-col items-center justify-center w-full h-auto p-4 space-y-4  text-white">
                    {/* Heading */}
                    <div className="w-full ">
                        <h2 className="text-2xl font-bold">What are you waiting for?</h2>
                    </div>

                    {/* Paragraphs */}
                    <div className="w-full max-w-screen-md  space-y-4">
                        <p>
                            At Capitals Club, we're on the lookout for serious
                            investors with ambitious financial goals, creating lasting
                            wealth and prosperity.
                        </p>
                        <p>
                            Join us and gain access to expert guidance, innovative
                            strategies, and a supportive community dedicated to your
                            financial success.
                        </p>
                        <p>
                            With Capitals Club, you'll not only stay ahead of the
                            curve but also pave the way for a brighter financial
                            future.
                        </p>
                    </div>
                </div>

            </div>
            <div className='w-1/2'>
                ok
            </div>
        </div>
    )
}

export default BookCall
