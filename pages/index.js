export default function Home () {
    return (
        <div className="flex flex-col justify-center min-h-screen">

        <section className="bg-white dark:bg-gray-800">
        <div className="max-w-3xl px-6 py-16 mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Inscreva-se na nossa incrível Newsletter!</h1>
            <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Junte-se a 4.736 leitores satisfeitos.</p>

            <form action="/api/subscribe" method="POST" className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">

                <input id="email" name="email" type="text" className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Entre com seu e-mail"/>
                
                <button className="px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md sm:mx-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    Inscreva-se
                </button>
                </form>
        </div>
    </section>
        </div>
    )
}