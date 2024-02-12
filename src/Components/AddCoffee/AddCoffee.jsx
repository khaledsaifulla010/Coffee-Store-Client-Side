

const AddCoffee = () => {
    return (
        <div>
            <h2>add coffee</h2>
            <form>

                <div className="flex items-center justify-center ml-[350px] mt-[200px] bg-green-500 w-[700px] p-4 h-[400px] rounded-xl">

                    <div>
                        <input type="text" placeholder="Enter coffee name" className="input input-bordered w-full max-w-xs border-red-400 border-2 " />
                        <input type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-4" />
                        <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full max-w-xs border-red-400 border-2 mt-4" />
                        <input type="text" placeholder="Enter photo URL" className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-8" />
                    </div>
                    <div>
                        <input type="text" placeholder="Enter coffee chef" className="input input-bordered w-full max-w-xs border-red-400 border-2 " />
                        <input type="text" placeholder="Enter coffee taste" className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-4 " />
                        <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-4 " />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;