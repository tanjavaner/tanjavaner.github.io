export default function Layout({ children }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800">
            <div className="flex bg-gray-300 rounded-lg shadow-lg w-1/2 h-1/2">

                <div className="flex flex-col items-center mt-10 text-white w-2/5">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-black border-2">
                        <img src="https://placehold.co/400x400" alt="Profil Fotoğrafı" className="w-full h-full" />
                    </div>
                    <div className="mt-5 text-2xl font-semibold">
                        Harun YÜKSEL
                    </div>
                </div>

                <div className="relative ml-auto bg-gray-800 rounded-lg h-full w-3/5 text-white">
                    {children}
                </div>

            </div>
        </div>
    );
}  