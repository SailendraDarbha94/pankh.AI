const Card = ({heading, content}:any) => {

    return (
        <div className="bg-slate-200 w-96 min-w-min my-4 mx-auto min-h-96 rounded-xl shadow-lg p-2">
            <h2 className="text-center font-semibold text-xl font-mono border-b-2 border-black py-2">{heading}</h2>
            <img src="/landing.png" alt="AI" className="rounded-bl-lg rounded-br-lg w-full" />
            <br />
            <p className="text-light text-lg">{content}</p>
        </div>
    )
}

export default Card