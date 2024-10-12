function SecondView() {

  const printMsg = () => console.log("i'm arrow function")

  return (
    <>
      <div>
        Second View

        <button
        onClick={() => {
            printMsg();
            window.location.pathname = '/';
          }}
        >
          Return to First view
        </button>  
      </div>
    </>
  )
}

export default SecondView
