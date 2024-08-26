function App() {
    const Profile = {
        fName: "Supakorn",
        lName: "Pattayanant"
    }

    function age() {
        let time = new Date
        let y = time.getFullYear()
        let m = time.getMonth() + 1
        let d = time.getDate()
        let result = `${y - 1995}`
        console.log(result)
        return result
    }

    return (
        <div>
            <h1 class='st1'>{Profile.fName}</h1>
            <h1 class='st1'>{Profile.lName}</h1>
            <p class='st2'>Age:{age()}</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)