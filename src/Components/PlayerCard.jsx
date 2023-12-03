import { Link } from "react-router-dom";
import { deletePlayer } from "../API/index";

export default function PlayerCard({ player }) {
    const { name, imageUrl, id } = player;


    //change delete
    async function handleDelete(e) {
        e.preventDefault();
        const confirm = window.confirm(
            `No delete?`
        );
        if (confirm) {
            await deletePlayer(id);
            window.location.reload();
        }
    }

    return (
        <div className="Player-card">
            <h3>{name}</h3>
            <img src={imageUrl} alt="Player Name" />
            <div className="buttons">
                <Link
                    to={{
                        pathname: `details/${id}`,
                    }}
                    state={{ player: {id}}}
                    >
                        <button>Details</button>
                    </Link>

                    <form onSubmit = {handleDelete}>
                        <button>Delete</button>
                    </form>
            </div>
        </div>
    );
}