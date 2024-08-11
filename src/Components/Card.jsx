
function Card({children, bg= 'bg-gray-100' }) {
  return (
    <div className={`${bg} rounded-xl p-4`}>
        {children}
    </div>
  )
}

export default Card