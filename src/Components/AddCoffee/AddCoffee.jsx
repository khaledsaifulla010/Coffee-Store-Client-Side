

const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const supplier = form.supplier.value
        const category = form.category.value
        const photo = form.photo.value
        const chef = form.chef.value
        const quantity = form.quantity.value
        const details = form.details.value;

        const newCoffee = {name,supplier,category,photo,chef,quantity,details};
        console.log(newCoffee)
    }
    return (
        <div>
            <h2 className="text-5xl font-bold text-center mt-24 mb-4">Add A Coffee</h2>
            <form onSubmit={handleAddCoffee}>

                <div className="ml-[380px]  bg-green-500 w-[700px] p-4 h-[450px] rounded-xl mb-20 ">

                    <div className="flex items-center justify-center mt-[50px]">
                        <div >
                            <input type="text" placeholder="Enter coffee name" className="input input-bordered w-full max-w-xs border-red-400 border-2 " name="name" />
                            <input type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-4" name="supplier" />
                            <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full max-w-xs border-red-400 border-2 mt-4" name="category" />
                            <input type="text" placeholder="Enter photo URL" className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-8" name="photo" />
                        </div>
                        <div>
                            <input type="text" placeholder="Enter coffee chef" className="input input-bordered w-full max-w-xs border-red-400 border-2 " name="chef" />
                            <input type="text" placeholder="Enter coffee quantity" className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-4 " name="quantity" />
                            <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full max-w-xs border-red-400 border-2  mt-4  mb-20" name="details" />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-wide mt-8 text-center ml-[220px]" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;