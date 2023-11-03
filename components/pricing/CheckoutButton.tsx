'use client';

const CheckoutButton = () => {
  const createCheckoutSession = async () => {
    // push document to firestore db
    // ... stripe extension on firebase will create a new checkout session
    // redirect user to checkout page
  };
  return (
    <div className='flex flex-col space-y-2'>
      {/* if subcribed show me the user is subcribed  */}
      <button
        onClick={() => createCheckoutSession()}
        className='mt-8 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer disabled:opacity-80'
      >
        Sign Up
      </button>
    </div>
  );
};
export default CheckoutButton;
