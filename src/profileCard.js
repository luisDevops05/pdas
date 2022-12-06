
function ProfileCard({title,handle,image, content}){

    // params in ProfileCard Function equal the the same thing as the two lines above

    // const title = props.title
    // const handle = props.handle

    // const {title,handle} = props
        // console.log(title)
        // console.log(handle)

    return(
    <div className="card">
        <div className="Card-image">
            <figure className="image is-1by1">
                <img alt='pda logo' src={image}></img>
            </figure>
        </div>

        <div className="card-content">
            <div className="media-contnet">

            <p className="title is-4">Title is {title}</p>
            <p className="subtitle is-6">Handle is {handle}</p> 
            </div>
            <div className="cotnet">{content}</div>
        </div>

        
    </div>
    ) 
}

export default ProfileCard