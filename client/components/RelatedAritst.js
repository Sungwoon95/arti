import Link from "next/link"

const RelatedArtist = ({ ...props }) => {
  const { name, country_kor, type, name_kor } = props
  const trimName = name.replace(' ', "")
  // console.log(props)
  return (
    <section className={'related_artist_wrap'}>
      <Link href={`/artist/${trimName}`}>
        <>
          <div className={'related_artist_img'}>
            <img src={`http://localhost:8000/${trimName}/thumbnail.jpg`} />
          </div>
          <section className={'related_artist_info'}>
            <h3>{name_kor}</h3>
            <section className={'flex'}>
              <span>{country_kor}</span>
              <span>·</span>
              <span>{type}</span>
            </section>
          </section>
        </>
      </Link>

    </section>
  )
}

export default RelatedArtist