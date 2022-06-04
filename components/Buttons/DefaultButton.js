const DefaultButton = ({OnClickHandle,Name}) => {
    return(
        <>
            <button type="button" onClick={OnClickHandle}
                    className="text-white h-10 ml-5  mt-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {Name}
            </button>
        </>
    )
  }
  export default DefaultButton;