function SecondView() {


  return (
    <>
      <div>
        Second View

        <button
        onClick={() => {
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
