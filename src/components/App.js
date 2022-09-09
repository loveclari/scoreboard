import React from "react";

import Header from "./Header";
import Player from "./Player";

const App = () => {
    const [players, setPlayers] = React.useState([
        {
            name: "Alex",
            id: 1,
        },
        {
            name: "Clari",
            id: 2,
        },
        {
            name: "Alison",
            id: 3,
        },
        {
            name: "James",
            id: 4,
        },
    ]);

    const handleRemovePlayer = (id) => {
        setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== id));
    };

    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={players.length} />

            {/* Players list */}
            {players.map((player) => (
                <Player
                    name={player.name}
                    id={player.id}
                    key={player.id.toString()}
                    removePlayer={handleRemovePlayer}
                />
            ))}
        </div>
    );
};

export default App;
