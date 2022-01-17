export const LikedCharacters = ({ favCharacters }) => {
  return (
    favCharacters 
      ? favCharacters.map(c => c.name)
      : <p>You didnt like any character</p>
  )
}
