import React from "react";

const CheckOutForm: React.FC = () => {
    return (
        <div className="w-full mx-auto px-4 py-44 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white text-black ">
            {/* Left Section: Shipping Address */}
            <div className="border border-gray-700 rounded-lg p-6 space-y-6">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <h2 className="text-lg font-semibold">Add New Address</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block mb-1 text-sm">First Name</label>
                        <input id="firstName" className="border border-gray-700 bg-white text-white p-2 rounded w-full" type="text" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-1 text-sm">Last Name</label>
                        <input id="lastName" className="border border-gray-700 bg-white text-white p-2 rounded w-full" type="text" />
                    </div>
                </div>

                <div>
                    <label htmlFor="streetAddress" className="block mb-1 text-sm">Street Address</label>
                    <input id="streetAddress" className="border border-gray-700 bg-white text-white p-2 rounded w-full" type="text" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="apt" className="block mb-1 text-sm">Apt Number</label>
                        <input id="apt" className="border border-gray-700 bg-white text-white p-2 rounded w-full" type="text" />
                    </div>
                    <div>
                        <label htmlFor="state" className="block mb-1 text-sm">State</label>
                        <input id="state" className="border border-gray-700 bg-white text-white p-2 rounded w-full" type="text" />
                    </div>
                    <div>
                        <label htmlFor="zip" className="block mb-1 text-sm">Zip</label>
                        <input id="zip" className="border border-gray-700 bg-white text-white p-2 rounded w-full" type="text" />
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row gap-4 mt-4">
                    <button className="w-full md:w-1/3 border border-gray-600 text-black px-6 py-2 rounded hover:bg-white hover:text-black transition">Cancel</button>
                    <button className="w-full md:w-2/3 bg-black text-white px-6 py-2 rounded hover:bg-gray-600 transition">Save This Address</button>
                </div>
            </div>

            {/* Right Section: Order Summary */}
            <div className="bg-gray-200 rounded-lg p-6 flex flex-col  space-y-6 w-full">
                <p className="text-sm text-gray-400">
                    By placing your order, you agree to our company <span className="underline">Privacy policy</span> and <span className="underline">Conditions of use</span>.
                </p>

                <div className="border-t border-gray-700 pt-4 space-y-2 text-sm">
                    <h3 className="font-semibold text-lg">Order Summary</h3>
                    <div className="flex justify-between">
                        <span>Items - Silhouette No. 1 – Vermilion</span>
                        <span>7,999</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping and handling:</span>
                        <span>200</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Before tax:</span>
                        <span>6,599</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax Collected:</span>
                        <span>1,400</span>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-4 flex justify-between items-center font-semibold text-lg">
                    <span>Order Total:</span>
                    <span>8,199</span>
                </div>

                <button className="w-full md:w-2/3 mx-auto bg-black  text-white py-3 rounded hover:bg-gray-600 transition">Place Order</button>
            </div>
        </div>
    );
};

export default CheckOutForm;
