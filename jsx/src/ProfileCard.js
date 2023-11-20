function ProfileCard({ title, handle, image}) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-3by3">
                    <img src={image} alt="pda logo"></img>
                </figure>
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p subtitle="title is-6">{handle}</p>
                </div>
            </div>
        </div>

    );
}

export default ProfileCard;