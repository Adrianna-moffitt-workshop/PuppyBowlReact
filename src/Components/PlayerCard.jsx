import { Link } from "react-router-dom";
import { deletePlayer } from "../Api/Index";

export default function PlayerCard({ player }) {
  const { name, imageUrl, id } = player;

  async function handleDelete(e) {
    e.preventDefault();
    const confirm = window.confirm(
      `Are you sure you want to remove ${name} from the playing field?`
    );
    if (confirm) {
      await deletePlayer(id);
      window.location.reload();
    }
  }

  return (
    <div className="player-card">
      <h3>{name}</h3>
      <img src={imageUrl} alt="Player Name" />
      <div className="buttons">
        <Link
          to={{
            pathname: `/details/${id}`,
          }}
          state={{ player: { id } }}
        >
          <button>Details</button>
        </Link>

        <form onSubmit={handleDelete}>
          <button>Delete</button>
        </form>
      </div>
    </div>
  );
}