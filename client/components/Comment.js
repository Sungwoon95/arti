import { calcDate } from "../utils/calcDate"

// const target = ['aespa', 'ed sheeran', 'yoasobi', 'vaundy', 'new jeans']
// const randomTaget = () => target[Math.floor(Math.random() * 5)]
// const CommentArr = Array(40).fill(0).map((i, idx) => ({
//   text: `${idx + 1}번 째 댓글입니다.`,
//   target: randomTaget(),
//   createdAt: 1690055057000 + (1000 * idx * 60 * 24),
//   user: `@유저${Math.floor(Math.random() * 9)}`,
//   like: `${Math.floor(Math.random() * 25)}`
// }))

const Comment = (props) => {
  const { text, user, createdAt, like } = props
  // console.log(JSON.stringify(CommentArr))
  return (
    <section className={'comment_wrap'}>
      <div className={'flex_base'}>
        <h3>
          {user}
        </h3>
        <time>
          {calcDate(createdAt, ".").type}
        </time>
      </div>
      <p>
        {text}
      </p>
      <div className={'flex'}>
        <span className={'comment_icon'}>
          <img src={'http://localhost:8000/icon/heart.png'} />
        </span>
        <span className={'comment_like'}>
          +{like}
        </span>
      </div>
    </section>
  )
}

export default Comment