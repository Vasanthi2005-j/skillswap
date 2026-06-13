function ProfileCard({
  name,
  coins,
  rating
}) {
  return (
    <div className="profile-card">

      <div
        style={{
          fontSize:"60px"
        }}
      >
        👨‍🎓
      </div>

      <h2>{name}</h2>

      <p>🪙 Coins: {coins}</p>

      <p>⭐ Rating: {rating}</p>

    </div>
  );
}

export default ProfileCard;